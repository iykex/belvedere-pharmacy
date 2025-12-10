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
    ExternalLink,
    Slash,
    Calendar,
    FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ActionButton {
    label: string;
    href: string;
    icon?: "calendar" | "phone" | "location" | "external" | "prescription";
}

interface Message {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: Date;
    actions?: ActionButton[];
}

interface QuickAction {
    label: string;
    query: string;
    icon: React.ReactNode;
}

// Cache keys and durations
const VISITOR_NAME_KEY = "belvedere_visitor_name";
const VISITOR_NAME_EXPIRY_KEY = "belvedere_visitor_name_expiry";
const CHAT_HISTORY_KEY = "belvedere_chat_history";
const CHAT_LAST_ACTIVITY_KEY = "belvedere_chat_last_activity";
const CACHE_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours
const IDLE_THRESHOLD_MS = 15 * 60 * 1000; // 15 minutes

// Knowledge base for the chatbot with optional action buttons
const KNOWLEDGE_BASE: {
    keywords: string[];
    answer: string;
    actions?: ActionButton[];
}[] = [
        {
            keywords: ["opening", "hours", "open", "close", "time", "when"],
            answer:
                "We're open Monday to Friday from 9am to 6:30pm, and Saturday from 9am to 2pm. We're closed on Sundays and Bank Holidays. For emergencies, our 24/7 on-call service is available.",
            actions: [
                { label: "Call Us", href: "tel:+441234567890", icon: "phone" },
                { label: "Find Us", href: "/contact-us", icon: "location" },
            ],
        },
        {
            keywords: ["appointment", "book", "schedule", "pharmacy first"],
            answer:
                "While walk-ins are welcome, we recommend booking an appointment to minimize waiting times. You can book online through our website or call us directly. For Pharmacy First services, appointments help ensure our pharmacist is available.",
            actions: [
                { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
                { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
            ],
        },
        {
            keywords: ["free", "cost", "price", "pay", "nhs", "charge"],
            answer:
                "NHS Pharmacy First services are free for patients eligible for free NHS prescriptions. Others may need to pay the standard NHS prescription charge. Private services have varying costs - please contact us for specific pricing.",
            actions: [
                { label: "View Services", href: "/services", icon: "external" },
                { label: "Contact Us", href: "/contact-us", icon: "phone" },
            ],
        },
        {
            keywords: ["prescription", "repeat", "order", "refill", "medicine"],
            answer:
                "You can order repeat prescriptions through our website, mobile app, by phone, or in person. We also offer a free prescription delivery service within the local area. Same-day dispensing is available for most prescriptions.",
            actions: [
                { label: "Order Prescription", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
                { label: "Download App", href: "#download-app", icon: "external" },
            ],
        },
        {
            keywords: ["medication", "review", "side effect", "advice"],
            answer:
                "Yes! We offer free medication reviews to help ensure you're getting the most from your medicines. Our pharmacists can address any concerns about side effects and help optimize your medication regimen.",
            actions: [
                { label: "Book Review", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
            ],
        },
        {
            keywords: ["vaccination", "vaccine", "flu", "covid", "jab", "immunization"],
            answer:
                "We offer various vaccinations including flu, COVID-19, and travel vaccines. Some are available on the NHS for eligible patients, while others are private services. Walk-ins are welcome, but booking ensures availability.",
            actions: [
                { label: "Book Vaccination", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
                { label: "View Services", href: "/services", icon: "external" },
            ],
        },
        {
            keywords: ["delivery", "collect", "pickup", "home"],
            answer:
                "We offer free medication delivery within our local area and surrounding regions. You can also collect your prescriptions in-store. Delivery is typically same-day for orders placed before 2pm.",
            actions: [
                { label: "Order Now", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
            ],
        },
        {
            keywords: ["location", "address", "where", "find", "directions"],
            answer:
                "We're located at Oakhurst, St Pauls Wood Hill, Orpington, Kent BR5 2SR. We're easily accessible by public transport and have parking available nearby.",
            actions: [
                { label: "Get Directions", href: "https://maps.google.com/?q=Oakhurst,+St+Pauls+Wood+Hill,+Orpington,+Kent+BR5+2SR", icon: "location" },
                { label: "Contact Page", href: "/contact-us", icon: "external" },
            ],
        },
        {
            keywords: ["contact", "phone", "call", "email", "reach"],
            answer:
                "You can reach us by phone at +44 (0) 1234 567890, email at info@belvederepharmacy.com, or visit us in person. For urgent medical advice when we're closed, call NHS 111.",
            actions: [
                { label: "Call Now", href: "tel:+441234567890", icon: "phone" },
                { label: "Send Email", href: "mailto:info@belvederepharmacy.com", icon: "external" },
            ],
        },
        {
            keywords: ["emergency", "urgent", "999", "111"],
            answer:
                "For life-threatening emergencies, call 999. For urgent but non-emergency medical advice, call NHS 111. Our pharmacists can help with minor ailments through the NHS Pharmacy First scheme.",
            actions: [
                { label: "Call 111", href: "tel:111", icon: "phone" },
                { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
            ],
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
            actions: [
                { label: "View All Services", href: "/services", icon: "external" },
                { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
            ],
        },
        {
            keywords: ["blood pressure", "bp", "check", "heart"],
            answer:
                "We offer quick and accurate blood pressure checks with immediate results. Our pharmacist will provide professional interpretation and follow-up advice. No appointment needed - just walk in during opening hours.",
            actions: [
                { label: "Find Us", href: "/contact-us", icon: "location" },
            ],
        },
        {
            keywords: ["smoking", "quit", "stop", "nicotine"],
            answer:
                "Our Stop Smoking Service provides one-to-one support, nicotine replacement therapy, regular check-ins, and a personalized quit plan. We're here to support you every step of the way on your journey to becoming smoke-free.",
            actions: [
                { label: "Book Consultation", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
            ],
        },
        {
            keywords: ["travel", "holiday", "abroad", "malaria"],
            answer:
                "Our Travel Health Clinic offers destination-specific advice, travel vaccinations, malaria prevention medication, and travel first aid kits. We recommend booking a consultation at least 6-8 weeks before your trip.",
            actions: [
                { label: "Book Travel Clinic", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
            ],
        },
        {
            keywords: ["uti", "urinary", "infection", "women"],
            answer:
                "We provide expert care for women experiencing UTI symptoms like discomfort and frequent urination. Through Pharmacy First, we can assess and treat uncomplicated UTIs without needing a GP appointment.",
            actions: [
                { label: "Learn More", href: "/pharmacy-first", icon: "external" },
                { label: "Book Now", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
            ],
        },
        {
            keywords: ["sore throat", "throat", "cough", "cold"],
            answer:
                "We offer prompt care for sore throats through our Pharmacy First service. Our pharmacist can assess your symptoms and provide treatment to help you feel better quickly - no GP appointment needed.",
            actions: [
                { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
            ],
        },
        {
            keywords: ["superintendent", "pharmacist", "gphc", "registration"],
            answer:
                "Our Superintendent Pharmacist is Michael Tweneboa-Koduah, GPhC registration number 2057431. Belvedere Pharmacy is operated by Meckay Limited (Company No. 06454698), registered in the UK.",
            actions: [
                { label: "About Us", href: "/about-us", icon: "external" },
            ],
        },
        {
            keywords: ["company", "meckay", "registered", "business"],
            answer:
                "Belvedere Pharmacy is operated by Meckay Limited, a UK registered company (Company No. 06454698). Our registered address is Oakhurst, St Pauls Wood Hill, BR5 2SR.",
            actions: [
                { label: "About Us", href: "/about-us", icon: "external" },
            ],
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

function findBestResponse(query: string): { answer: string; actions?: ActionButton[] } {
    const lowerQuery = query.toLowerCase();

    // Find the best matching response
    let bestMatch = { score: 0, answer: "", actions: undefined as ActionButton[] | undefined };

    for (const item of KNOWLEDGE_BASE) {
        const matchCount = item.keywords.filter((keyword) =>
            lowerQuery.includes(keyword.toLowerCase())
        ).length;

        if (matchCount > bestMatch.score) {
            bestMatch = { score: matchCount, answer: item.answer, actions: item.actions };
        }
    }

    if (bestMatch.score > 0) {
        return { answer: bestMatch.answer, actions: bestMatch.actions };
    }

    // Default response
    return {
        answer: "I'm not sure about that specific question, but I'd be happy to help! You can ask me about our opening hours, services, prescriptions, vaccinations, or contact information. Alternatively, please call us or visit us in store for personalized assistance.",
        actions: [
            { label: "Call Us", href: "tel:+441234567890", icon: "phone" },
            { label: "View Services", href: "/services", icon: "external" },
        ],
    };
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

// Chat history functions
function getChatHistory(): Message[] | null {
    if (typeof window === "undefined") return null;

    try {
        const history = localStorage.getItem(CHAT_HISTORY_KEY);
        if (!history) return null;

        const parsed = JSON.parse(history);
        // Convert timestamp strings back to Date objects
        return parsed.map((msg: Message & { timestamp: string }) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
        }));
    } catch {
        return null;
    }
}

function saveChatHistory(messages: Message[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
    localStorage.setItem(CHAT_LAST_ACTIVITY_KEY, Date.now().toString());
}

function getLastActivityTime(): number | null {
    if (typeof window === "undefined") return null;
    const time = localStorage.getItem(CHAT_LAST_ACTIVITY_KEY);
    return time ? parseInt(time) : null;
}

function clearChatHistory(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CHAT_HISTORY_KEY);
    localStorage.removeItem(CHAT_LAST_ACTIVITY_KEY);
}

function isIdleForTooLong(): boolean {
    const lastActivity = getLastActivityTime();
    if (!lastActivity) return false;
    return Date.now() - lastActivity > IDLE_THRESHOLD_MS;
}

// Action button icon helper
function ActionIcon({ icon }: { icon?: string }) {
    switch (icon) {
        case "calendar": return <Calendar className="size-3.5" />;
        case "phone": return <Phone className="size-3.5" />;
        case "location": return <MapPin className="size-3.5" />;
        case "prescription": return <FileText className="size-3.5" />;
        default: return <ExternalLink className="size-3.5" />;
    }
}

export default function FAQChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [visitorName, setVisitorNameState] = useState<string | null>(null);
    const [isAskingName, setIsAskingName] = useState(false);
    const [showContinuePrompt, setShowContinuePrompt] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickActions, setShowQuickActions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Initialize on mount
    useEffect(() => {
        const cachedName = getVisitorName();
        const chatHistory = getChatHistory();
        const isIdle = isIdleForTooLong();

        if (cachedName) {
            setVisitorNameState(cachedName);

            // Check if there's chat history and if user has been idle
            if (chatHistory && chatHistory.length > 1 && isIdle) {
                // Show continue prompt
                setShowContinuePrompt(true);
                setMessages([{
                    id: "continue-prompt",
                    role: "bot",
                    content: `Welcome back, ${cachedName}! 👋 You have a previous conversation. Would you like to continue where you left off or start fresh?`,
                    timestamp: new Date(),
                }]);
            } else if (chatHistory && chatHistory.length > 1 && !isIdle) {
                // Continue with existing chat
                setMessages(chatHistory);
            } else {
                // Start new conversation
                setMessages([{
                    id: "welcome",
                    role: "bot",
                    content: `Welcome back, ${cachedName}! 👋 I'm Bella, your Belvedere Pharmacy assistant. How can I help you today?`,
                    timestamp: new Date(),
                    actions: [
                        { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
                        { label: "Order Prescription", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
                    ],
                }]);
            }
        } else {
            setIsAskingName(true);
            setMessages([{
                id: "ask-name",
                role: "bot",
                content: "Hello! 👋 I'm Bella, your Belvedere Pharmacy assistant. Before we start, may I know your name?",
                timestamp: new Date(),
            }]);
        }
    }, []);

    // Save chat history when messages change
    useEffect(() => {
        if (messages.length > 0 && !showContinuePrompt) {
            saveChatHistory(messages);
        }
    }, [messages, showContinuePrompt]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Only auto-focus on desktop to avoid keyboard popping up on mobile
        if (isOpen && textareaRef.current) {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            if (!isMobile) {
                textareaRef.current.focus();
            }
        }
    }, [isOpen]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + "px";
        }
    }, [input]);

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

        // Simulate typing delay for more natural feel
        await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

        let response: { answer: string; actions?: ActionButton[] };

        if (isAskingName) {
            // User is providing their name
            const name = text.trim();
            setVisitorName(name);
            setVisitorNameState(name);
            setIsAskingName(false);
            response = {
                answer: `Nice to meet you, ${name}! 😊 I'm here to help you with any questions about Belvedere Pharmacy. You can ask me about our services, opening hours, prescriptions, vaccinations, and more. What would you like to know?`,
                actions: [
                    { label: "View Services", href: "/services", icon: "external" },
                    { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
                ],
            };
        } else {
            // Regular query
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

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleQuickAction = (query: string) => {
        setShowQuickActions(false);
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
                            <p className="text-xs text-white/70">
                                {new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                                {visitorName && <span className="ml-1">• {visitorName}</span>}
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

                            <div className="max-w-[80%] space-y-2">
                                <div
                                    className={cn(
                                        "rounded-2xl px-4 py-3 text-sm",
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

                                {/* Action Buttons */}
                                {message.role === "bot" && message.actions && message.actions.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {message.actions.map((action, idx) => (
                                            <Link
                                                key={idx}
                                                href={action.href}
                                                target={action.href.startsWith("http") ? "_blank" : undefined}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                                            >
                                                <ActionIcon icon={action.icon} />
                                                {action.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
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

                {/* Quick Actions Popup - Always available via slash button */}
                {showQuickActions && !isAskingName && !showContinuePrompt && (
                    <div className="px-4 pb-2 shrink-0 border-t border-gray-200 dark:border-[#1a4d6e] pt-3">
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

                {/* Continue/New Chat Prompt */}
                {showContinuePrompt && (
                    <div className="px-4 pb-2 shrink-0 border-t border-gray-200 dark:border-[#1a4d6e] pt-3">
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    const history = getChatHistory();
                                    if (history) setMessages(history);
                                    setShowContinuePrompt(false);
                                }}
                                className="flex-1 px-4 py-2 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
                            >
                                Continue Chat
                            </button>
                            <button
                                onClick={() => {
                                    clearChatHistory();
                                    setShowContinuePrompt(false);
                                    setMessages([{
                                        id: "fresh-start",
                                        role: "bot",
                                        content: `Great, let's start fresh! 😊 How can I help you today, ${visitorName}?`,
                                        timestamp: new Date(),
                                        actions: [
                                            { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
                                            { label: "Order Prescription", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
                                        ],
                                    }]);
                                }}
                                className="flex-1 px-4 py-2 text-sm font-medium rounded-xl bg-gray-100 dark:bg-[#002f4b] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#003b5c] transition-colors"
                            >
                                Start New
                            </button>
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 dark:border-[#1a4d6e] bg-gray-50 dark:bg-[#00162a] shrink-0">
                    <div className="flex gap-2 items-end">
                        {/* Slash button to toggle quick actions */}
                        <div className="relative group">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => setShowQuickActions(!showQuickActions)}
                                disabled={showContinuePrompt}
                                className={cn(
                                    "shrink-0 h-10 w-10 rounded-xl transition-colors border-gray-300 dark:border-[#1a4d6e]",
                                    showQuickActions
                                        ? "bg-primary/10 text-primary border-primary"
                                        : "text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5"
                                )}
                                aria-label="Quick questions"
                            >
                                <Slash className="size-4" />
                            </Button>
                            {/* Tooltip - positioned to the right to avoid cutoff */}
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                Quick questions
                                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-0 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700" />
                            </div>
                        </div>

                        {/* Flexible textarea */}
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={isAskingName ? "Enter your name..." : "Type your message..."}
                            rows={1}
                            className="flex-1 min-h-[40px] max-h-[120px] px-4 py-2.5 bg-white dark:bg-[#002f4b] border border-gray-200 dark:border-[#1a4d6e] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm text-foreground placeholder:text-gray-400 outline-none scrollbar-hide"
                        />

                        <Button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isTyping}
                            className="shrink-0 bg-primary hover:bg-primary/90 rounded-xl h-10 w-10"
                            aria-label="Send message"
                        >
                            <Send className="size-4" />
                        </Button>
                    </div>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-2">
                        Press <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-[9px]">Shift+Enter</kbd> for new line • Powered by Belvedere Pharmacy
                    </p>
                </div>
            </div>
        </>
    );
}
