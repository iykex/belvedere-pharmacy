"use client";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChatToggleButtonProps } from "@/lib/types/general";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/analytics";

export function ChatToggleButton({ isOpen, onClick }: ChatToggleButtonProps) {
  return (
    <Button
      onClick={() => {
        onClick();
        track(TRACKING_EVENTS.chatToggleButton, "chatbot toggled");
      }}
      className={cn(
        "fixed bottom-4  lg:bottom-6 right-6 z-50 flex items-center justify-center size-9 lg:size-10 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
        "bg-linear-to-br from-primary to-primary/80 text-white",
        "hover:shadow-primary/40 hover:shadow-xl ",
        isOpen && "rotate-90"
      )}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}

      {/* Pulse animation when closed */}
      {!isOpen && (
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-10" />
      )}
    </Button>
  );
}
