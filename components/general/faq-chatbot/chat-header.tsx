import { Bot, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  visitorName: string | null;
  onClose: () => void;
}

export function ChatHeader({ visitorName, onClose }: ChatHeaderProps) {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
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
            {today}
            {visitorName && <span className="ml-1">• {visitorName}</span>}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close chat"
        >
          <ChevronDown className="size-5" />
        </button>
      </div>
    </div>
  );
}
