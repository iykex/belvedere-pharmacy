export interface ActionButton {
  label: string;
  href: string;
  icon?: "calendar" | "phone" | "location" | "external" | "prescription";
}

export interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  actions?: ActionButton[];
}

export interface QuickAction {
  label: string;
  query: string;
  icon: React.ReactNode;
}

export interface KnowledgeBaseItem {
  keywords: string[];
  answer: string;
  actions?: ActionButton[];
}

export interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}