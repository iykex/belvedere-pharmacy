import { useEffect, useRef } from "react";
import { Bot, UserCheck } from "lucide-react";
import { ChatMessage } from "./chat-message";
import type { Message } from "@/lib/types/chatbot";

export function ChatMessages({
  messages,
  isTyping,
  agentName,
  takenOverByHuman,
  agentIsTyping,
}: {
  messages: Message[];
  isTyping: boolean;
  onScrollEnd: (ref: HTMLDivElement | null) => void;
  agentName?: string | null;
  takenOverByHuman?: boolean;
  agentIsTyping?: boolean;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, agentIsTyping]);

  const showTyping = isTyping || agentIsTyping;

  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 scrollbar-thin">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {/* Animated Typing Indicator */}
      {showTyping && (
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[10px] text-muted-foreground font-semibold px-2">
            {takenOverByHuman ? `${agentName || "Pharmacist"} is typing...` : "Bella is typing..."}
          </span>
          <div className="flex gap-2 justify-start items-center">
            <div className="size-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
              {takenOverByHuman ? (
                <UserCheck className="size-4 text-emerald-600" />
              ) : (
                <Bot className="size-4 text-primary" />
              )}
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 border">
              <div className="flex gap-1.5 items-center">
                <span className="size-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="size-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="size-2 bg-primary/60 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
