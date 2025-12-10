"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import {
    MessageCircle,
    X,
    Send,
    Bot,
    User,
    Sparkles,
    Clock,
    Phone,
    MapPin,
    Pill,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: Date;
}

interface QuickAction {
    label: string;
    query: string;
    icon: React.ReactNode;
}

// Cache key and duration (4 hours in milliseconds)
const VISITOR_NAME_KEY = "belvedere_visitor_name";
const VISITOR_NAME_EXPIRY_KEY = "belvedere_visitor_name_expiry";
const CACHE_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = [
    {
        keywords: ["opening", "hours", "open", "close", "time", "when"],
        answer:
            "We're open Monday to Friday from 9am to 6:30pm, and Saturday from 9am to 2pm. We're closed on Sundays and Bank Holidays. For emergencies, our 24/7 on-call service is available.",
    },
    {
        keywords: ["appointment", "book", "schedule", "pharmacy first"],
        answer:
            "While walk-ins are welcome, we recommend booking an appointment to minimize waiting times. You can book online through our website or call us directly. For Pharmacy First services, appointments help ensure our pharmacist is available.",
    },
    {
        keywords: ["free", "cost", "price", "pay", "nhs", "charge"],
        answer:
            "NHS Pharmacy First services are free for patients eligible for free NHS prescriptions. Others may need to pay the standard NHS prescription charge. Private services have varying costs - please contact us for specific pricing.",
    },
    {
        keywords: ["prescription", "repeat", "order", "refill", "medicine"],
        answer:
            "You can order repeat prescriptions through our website, mobile app, by phone, or in person. We also offer a free prescription delivery service within the local area. Same-day dispensing is available for most prescriptions.",
    },
    {
        keywords: ["medication", "review", "side effect", "advice"],
        answer:
            "Yes! We offer free medication reviews to help ensure you're getting the most from your medicines. Our pharmacists can address any concerns about side effects and help optimize your medication regimen.",
    },
    {
        keywords: ["vaccination", "vaccine", "flu", "covid", "jab", "immunization"],
        answer:
            "We offer various vaccinations including flu, COVID-19, and travel vaccines. Some are available on the NHS for eligible patients, while others are private services. Walk-ins are welcome, but booking ensures availability.",
    },
    {
        keywords: ["delivery", "collect", "pickup", "home"],
        answer:
            "We offer free medication delivery within our local area and surrounding regions. You can also collect your prescriptions in-store. Delivery is typically same-day for orders placed before 2pm.",
    },
    {
        keywords: ["location", "address", "where", "find", "directions"],
        answer:
            "We're located at Oakhurst, St Pauls Wood Hill, Orpington, Kent BR5 2SR. We're easily accessible by public transport and have parking available nearby.",
    },
    {
        keywords: ["contact", "phone", "call", "email", "reach"],
        answer:
            "You can reach us by phone at +44 (0) 1234 567890, email at info@belvederepharmacy.com, or visit us in person. For urgent medical advice when we're closed, call NHS 111.",
    },
    {
        keywords: ["emergency", "urgent", "999", "111"],
        answer:
            "For life-threatening emergencies, call 999. For urgent but non-emergency medical advice, call NHS 111. Our pharmacists can help with minor ailments through the NHS Pharmacy First scheme.",
    },
    {
        keywords: [
            "service",
            "what",
            "offer",
            "help",
            "do you",
            "provide",
            "available",
        ],
        answer:
            "We offer a wide range of services including: NHS Pharmacy First consultations, prescription dispensing, flu & COVID vaccinations, blood pressure checks, medication reviews, travel health clinic, stop smoking support, emergency contraception, and more. How can we help you today?",
    },
    {
        keywords: ["blood pressure", "bp", "check", "heart"],
        answer:
            "We offer quick and accurate blood pressure checks with immediate results. Our pharmacist will provide professional interpretation and follow-up advice. No appointment needed - just walk in during opening hours.",
    },
    {
        keywords: ["smoking", "quit", "stop", "nicotine"],
        answer:
            "Our Stop Smoking Service provides one-to-one support, nicotine replacement therapy, regular check-ins, and a personalized quit plan. We're here to support you every step of the way on your journey to becoming smoke-free.",
    },
    {
        keywords: ["travel", "holiday", "abroad", "malaria"],
        answer:
            "Our Travel Health Clinic offers destination-specific advice, travel vaccinations, malaria prevention medication, and travel first aid kits. We recommend booking a consultation at least 6-8 weeks before your trip.",
    },
    {
        keywords: ["uti", "urinary", "infection", "women"],
        answer:
            "We provide expert care for women experiencing UTI symptoms like discomfort and frequent urination. Through Pharmacy First, we can assess and treat uncomplicated UTIs without needing a GP appointment.",
    },
    {
        keywords: ["sore throat", "throat", "cough", "cold"],
        answer:
            "We offer prompt care for sore throats through our Pharmacy First service. Our pharmacist can assess your symptoms and provide treatment to help you feel better quickly - no GP appointment needed.",
    },
    {
        keywords: ["superintendent", "pharmacist", "gphc", "registration"],
        answer:
            "Our Superintendent Pharmacist is Michael Tweneboa-Koduah, GPhC registration number 2057431. Belvedere Pharmacy is operated by Meckay Limited (Company No. 06454698), registered in the UK.",
    },
    {
        keywords: ["company", "meckay", "registered", "business"],
        answer:
            "Belvedere Pharmacy is operated by Meckay Limited, a UK registered company (Company No. 06454698). Our registered address is Oakhurst, St Pauls Wood Hill, BR5 2SR.",
    },
    {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
        answer:
            "Hello! 👋 Welcome to Belvedere Pharmacy. I'm here to help answer your questions about our services, opening hours, prescriptions, and more. What would you like to know?",
    },
    {
        keywords: ["thank", "thanks", "cheers", "appreciate"],
        answer:
            "You're welcome! 😊 Is there anything else I can help you with today? Feel free to ask about our services, appointments, or any other questions you might have.",
    },
];

const QUICK_ACTIONS: QuickAction[] = [
    {
        label: "Opening Hours",
        query: "What are your opening hours?",
        icon: <Clock className="size-3.5" />,
    },
    {
        label: "Contact Info",
        query: "How can I contact you?",
        icon: <Phone className="size-3.5" />,
    },
    {
        label: "Our Location",
        query: "Where are you located?",
        icon: <MapPin className="size-3.5" />,
    },
    {
        label: "Our Services",
        query: "What services do you offer?",
        icon: <Pill className="size-3.5" />,
    },
];

function findBestResponse(query: string): string {
    const lowerQuery = query.toLowerCase();

    // Find the best matching response
    let bestMatch = { score: 0, answer: "" };

    for (const item of KNOWLEDGE_BASE) {
        const matchCount = item.keywords.filter((keyword) =>
            lowerQuery.includes(keyword.toLowerCase())
        ).length;

        if (matchCount > bestMatch.score) {
            bestMatch = { score: matchCount, answer: item.answer };
        }
    }

    if (bestMatch.score > 0) {
        return bestMatch.answer;
    }

    // Default response
    return "I'm not sure about that specific question, but I'd be happy to help! You can ask me about our opening hours, services, prescriptions, vaccinations, or contact information. Alternatively, please call us at +44 (0) 1234 567890 or visit us in store for personalized assistance.";
}

// Helper functions for cache
function getVisitorName(): string | null {
    if (typeof window === "undefined") return null;

    const expiry = localStorage.getItem(VISITOR_NAME_EXPIRY_KEY);
    if (expiry && Date.now() > parseInt(expiry)) {
        // Cache expired, clear it
        localStorage.removeItem(VISITOR_NAME_KEY);
        localStorage.removeItem(VISITOR_NAME_EXPIRY_KEY);
        return null;
    }

    return localStorage.getItem(VISITOR_NAME_KEY);
}

function setVisitorName(name: string): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(VISITOR_NAME_KEY, name);
    localStorage.setItem(VISITOR_NAME_EXPIRY_KEY, (Date.now() + CACHE_DURATION_MS).toString());
}

export default function FAQChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [visitorName, setVisitorNameState] = useState<string | null>(null);
    const [isAskingName, setIsAskingName] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initialize on mount
    useEffect(() => {
        const cachedName = getVisitorName();
        if (cachedName) {
            setVisitorNameState(cachedName);
            setMessages([
                {
                    id: "welcome",
                    role: "bot",
                    content: `Welcome back, ${cachedName}! 👋 I'm Bella, your Belvedere Pharmacy assistant. How can I help you today?`,
                    timestamp: new Date(),
                },
            ]);
        } else {
            setIsAskingName(true);
            setMessages([
                {
                    id: "ask-name",
                    role: "bot",
                    content: "Hello! 👋 I'm Bella, your Belvedere Pharmacy assistant. Before we start, may I know your name?",
                    timestamp: new Date(),
                },
            ]);
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

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

        // Simulate typing delay for more natural feel
        await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

        let response: string;

        if (isAskingName) {
            // User is providing their name
            const name = text.trim();
            setVisitorName(name);
            setVisitorNameState(name);
            setIsAskingName(false);
            response = `Nice to meet you, ${name}! 😊 I'm here to help you with any questions about Belvedere Pharmacy. You can ask me about our services, opening hours, prescriptions, vaccinations, and more. What would you like to know?`;
        } else {
            // Regular query - personalize with name if available
            const baseResponse = findBestResponse(text);
            response = visitorName
                ? baseResponse
                : baseResponse;
        }

        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "bot",
            content: response,
            timestamp: new Date(),
        };

        setIsTyping(false);
        setMessages((prev) => [...prev, botMessage]);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleQuickAction = (query: string) => {
        handleSend(query);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
                    "bg-gradient-to-br from-primary to-primary/80 text-white",
                    "hover:shadow-primary/40 hover:shadow-xl",
                    isOpen && "rotate-90"
                )}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <X className="size-6" />
                ) : (
                    <MessageCircle className="size-6" />
                )}

                {/* Pulse animation when closed */}
                {!isOpen && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-30" />
                )}
            </button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] max-h-[600px] rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right",
                    "bg-white dark:bg-[#001d33] border border-gray-200 dark:border-[#1a4d6e]",
                    "flex flex-col overflow-hidden",
                    isOpen
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 translate-y-4 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Bot className="size-6" />
                            </div>
                            <span className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full border-2 border-primary" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-lg">Bella</h3>
                                <Sparkles className="size-4 text-yellow-300" />
                            </div>
                            <p className="text-sm text-white/80">
                                {visitorName ? `Chatting with ${visitorName}` : "Pharmacy Assistant"}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Close chat"
                        >
                            <ChevronDown className="size-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[350px] scrollbar-hide">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={cn(
                                "flex gap-2",
                                message.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            {message.role === "bot" && (
                                <div className="size-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                    <Bot className="size-4 text-primary" />
                                </div>
                            )}

                            <div
                                className={cn(
                                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                                    message.role === "user"
                                        ? "bg-primary text-white rounded-br-md"
                                        : "bg-gray-100 dark:bg-[#002f4b] text-gray-800 dark:text-gray-200 rounded-bl-md"
                                )}
                            >
                                <p className="leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                </p>
                                <span
                                    className={cn(
                                        "text-[10px] mt-1 block",
                                        message.role === "user"
                                            ? "text-white/60"
                                            : "text-gray-400 dark:text-gray-500"
                                    )}
                                >
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>

                            {message.role === "user" && (
                                <div className="size-8 rounded-full bg-gray-200 dark:bg-[#004d73] flex items-center justify-center shrink-0">
                                    <User className="size-4 text-gray-600 dark:text-gray-300" />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                        <div className="flex gap-2 justify-start">
                            <div className="size-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                <Bot className="size-4 text-primary" />
                            </div>
                            <div className="bg-gray-100 dark:bg-[#002f4b] rounded-2xl rounded-bl-md px-4 py-3">
                                <div className="flex gap-1">
                                    <span className="size-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="size-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="size-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions - Only show when not asking for name and early in conversation */}
                {!isAskingName && messages.length <= 3 && (
                    <div className="px-4 pb-2 shrink-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                            Quick questions:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {QUICK_ACTIONS.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => handleQuickAction(action.query)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#002f4b] text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors"
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 dark:border-[#1a4d6e] bg-gray-50 dark:bg-[#00162a] shrink-0">
                    <div className="flex gap-2">
                        <Input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={isAskingName ? "Enter your name..." : "Type your question..."}
                            className="flex-1 bg-white dark:bg-[#002f4b] border-gray-200 dark:border-[#1a4d6e] rounded-xl focus:ring-primary"
                        />
                        <Button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isTyping}
                            className="bg-primary hover:bg-primary/90 rounded-xl px-4"
                            aria-label="Send message"
                        >
                            <Send className="size-4" />
                        </Button>
                    </div>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-2">
                        Powered by Belvedere Pharmacy • Not a medical advisor
                    </p>
                </div>
            </div>
        </>
    );
}
