import {
  VISITOR_NAME_KEY,
  VISITOR_NAME_EXPIRY_KEY,
  CHAT_HISTORY_KEY,
  CHAT_LAST_ACTIVITY_KEY,
  CACHE_DURATION_MS,
  IDLE_THRESHOLD_MS,
  KNOWLEDGE_BASE,
} from "@/lib/constants/chatbot";
import { Message, ActionButton } from "@/lib/types/chatbot";

// Visitor name helpers
export function getVisitorName(): string | null {
  if (typeof window === "undefined") return null;

  const expiry = localStorage.getItem(VISITOR_NAME_EXPIRY_KEY);
  if (expiry && Date.now() > parseInt(expiry)) {
    localStorage.removeItem(VISITOR_NAME_KEY);
    localStorage.removeItem(VISITOR_NAME_EXPIRY_KEY);
    return null;
  }

  return localStorage.getItem(VISITOR_NAME_KEY);
}

export function setVisitorName(name: string): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(VISITOR_NAME_KEY, name);
  localStorage.setItem(VISITOR_NAME_EXPIRY_KEY, (Date.now() + CACHE_DURATION_MS).toString());
}

// Chat history helpers
export function getChatHistory(): Message[] | null {
  if (typeof window === "undefined") return null;

  try {
    const history = localStorage.getItem(CHAT_HISTORY_KEY);
    if (!history) return null;

    const parsed = JSON.parse(history);
    return parsed.map((msg: Message & { timestamp: string }) => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));
  } catch {
    return null;
  }
}

export function saveChatHistory(messages: Message[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
  localStorage.setItem(CHAT_LAST_ACTIVITY_KEY, Date.now().toString());
}

export function getLastActivityTime(): number | null {
  if (typeof window === "undefined") return null;
  const time = localStorage.getItem(CHAT_LAST_ACTIVITY_KEY);
  return time ? parseInt(time) : null;
}

export function clearChatHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CHAT_HISTORY_KEY);
  localStorage.removeItem(CHAT_LAST_ACTIVITY_KEY);
}

export function isIdleForTooLong(): boolean {
  const lastActivity = getLastActivityTime();
  if (!lastActivity) return false;
  return Date.now() - lastActivity > IDLE_THRESHOLD_MS;
}

// Knowledge base search
export function findBestResponse(query: string): { answer: string; actions?: ActionButton[] } {
  const lowerQuery = query.toLowerCase();

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

  return {
    answer:
      "I'm not sure about that specific question, but I'd be happy to help! You can ask me about our opening hours, services, prescriptions, vaccinations, or contact information. Alternatively, please call us or visit us in store for personalized assistance.",
    actions: [
      { label: "Call Us", href: "tel:+441234567890", icon: "phone" },
      { label: "View Services", href: "/services", icon: "external" },
    ],
  };
}
