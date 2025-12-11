import { useState, useEffect } from "react";
import {
  getVisitorName,
  setVisitorName,
  getChatHistory,
  saveChatHistory,
  isIdleForTooLong,
  findBestResponse,
} from "@/lib/utils/chatbot";
import { Message, ActionButton } from "@/lib/types/general";

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorName, setVisitorNameState] = useState<string | null>(null);
  const [isAskingName, setIsAskingName] = useState(false);
  const [showContinuePrompt, setShowContinuePrompt] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  // Initialize on mount
  useEffect(() => {
    const cachedName = getVisitorName();
    const chatHistory = getChatHistory();
    const isIdle = isIdleForTooLong();

    if (cachedName) {
      setVisitorNameState(cachedName);

      if (chatHistory && chatHistory.length > 1 && isIdle) {
        setShowContinuePrompt(true);
        setMessages([
          {
            id: "continue-prompt",
            role: "bot",
            content: `Welcome back, ${cachedName}! 👋 You have a previous conversation. Would you like to continue where you left off or start fresh?`,
            timestamp: new Date(),
          },
        ]);
      } else if (chatHistory && chatHistory.length > 1 && !isIdle) {
        setMessages(chatHistory);
      } else {
        setMessages([
          {
            id: "welcome",
            role: "bot",
            content: `Welcome back, ${cachedName}! 👋 I'm Bella, your Belvedere Pharmacy assistant. How can I help you today?`,
            timestamp: new Date(),
            actions: [
              {
                label: "Book Appointment",
                href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection",
                icon: "calendar",
              },
              {
                label: "Order Prescription",
                href: "https://app.belvederepharmacy.net/#/auth/signin",
                icon: "prescription",
              },
            ],
          },
        ]);
      }
    } else {
      setIsAskingName(true);
      setMessages([
        {
          id: "ask-name",
          role: "bot",
          content:
            "Hello! 👋 I'm Bella, your Belvedere Pharmacy assistant. Before we start, may I know your name?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Save chat history when messages change
  useEffect(() => {
    if (messages.length > 0 && !showContinuePrompt) {
      saveChatHistory(messages);
    }
  }, [messages, showContinuePrompt]);

  const handleSend = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setShowQuickActions(false);

    // Simulate typing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 700)
    );

    let response: { answer: string; actions?: ActionButton[] };

    if (isAskingName) {
      const name = text.trim();
      setVisitorName(name);
      setVisitorNameState(name);
      setIsAskingName(false);
      response = {
        answer: `Nice to meet you, ${name}! 😊 I'm here to help you with any questions about Belvedere Pharmacy. You can ask me about our services, opening hours, prescriptions, vaccinations, and more. What would you like to know?`,
        actions: [
          { label: "View Services", href: "/services", icon: "external" },
          {
            label: "Book Appointment",
            href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection",
            icon: "calendar",
          },
        ],
      };
    } else {
      response = findBestResponse(text);
    }

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      content: response.answer,
      timestamp: new Date(),
      actions: response.actions,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleQuickAction = (query: string) => {
    setShowQuickActions(false);
    handleSend(query);
  };

  const handleContinueChat = (messages: Message[]) => {
    setMessages(messages);
    setShowContinuePrompt(false);
  };

  const handleStartNew = () => {
    setShowContinuePrompt(false);
    setMessages([
      {
        id: "fresh-start",
        role: "bot",
        content: `Great, let's start fresh! 😊 How can I help you today, ${visitorName}?`,
        timestamp: new Date(),
        actions: [
          {
            label: "Book Appointment",
            href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection",
            icon: "calendar",
          },
          {
            label: "Order Prescription",
            href: "https://app.belvederepharmacy.net/#/auth/signin",
            icon: "prescription",
          },
        ],
      },
    ]);
  };

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleQuickActions = () => setShowQuickActions(!showQuickActions);

  return {
    isOpen,
    visitorName,
    isAskingName,
    showContinuePrompt,
    messages,
    input,
    isTyping,
    showQuickActions,
    setInput,
    handleSend,
    handleQuickAction,
    handleContinueChat,
    handleStartNew,
    toggleChat,
    toggleQuickActions,
    setIsOpen,
  };
}
