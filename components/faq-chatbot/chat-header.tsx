'use client';

import { Bot, ChevronDown, LogOut, Radio, UserCheck, UserSearch as IconUserSearch } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function ChatHeader({
  visitorName,
  agentName,
  takenOverByHuman,
  onClose,
  onEndChat,
}: {
  visitorName: string | null;
  agentName?: string | null;
  takenOverByHuman?: boolean;
  onClose: () => void;
  onEndChat?: () => void;
}) {
  const [todayDate] = useState(() => {
    const date = new Date();
    const weekday = date.toLocaleDateString("en-GB", { weekday: "short" });
    const dayMonth = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
    return `${weekday} ${dayMonth}`;
  });

  return (
    <div
      className={`p-4 text-white shrink-0 transition-all duration-300 ${
        takenOverByHuman
          ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-md"
          : "bg-gradient-to-r from-primary to-primary/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="size-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {takenOverByHuman ? (
              <UserCheck className="size-6 text-white" />
            ) : (
              <Bot className="size-6 text-white" />
            )}
          </div>
          <span
            className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-primary ${
              takenOverByHuman ? "bg-emerald-300 animate-pulse" : "bg-green-400"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-lg leading-tight truncate">
              {takenOverByHuman ? agentName || "Pharmacist" : "Bella"}
            </h3>
            {takenOverByHuman ? (
              <span className="text-[9.5px] bg-emerald-400/30 border border-emerald-200/50 text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Radio size={10} className="animate-pulse" /> LIVE
              </span>
            ) : (
              <IconUserSearch strokeWidth="3" className="size-4 text-yellow-300 shrink-0" />
            )}
          </div>
          <p className="text-xs text-white/80 truncate">
            {todayDate}
            {visitorName && <span className="ml-1">• {visitorName}</span>}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {onEndChat && (
            <button
              type="button"
              onClick={onEndChat}
              className="flex items-center gap-1 text-xs bg-white/20 hover:bg-red-600 text-white font-medium px-2.5 py-1.5 rounded-full transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
              title="End this chat session"
            >
              <LogOut className="size-3.5" />
              <span>End Chat</span>
            </button>
          )}

          <Button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Minimize chat"
          >
            <ChevronDown className="size-5" />
          </Button>
        </div>
      </div>
      <div className="mt-2.5 text-[10px] bg-black/20 text-white/90 px-2.5 py-1 rounded flex items-center gap-1 font-medium">
        {takenOverByHuman ? (
          <span>🟢 Connected live with {agentName || "Pharmacist"}. Ask any health or prescription question.</span>
        ) : (
          <span>⚠️ Bella is an AI assistant and cannot prescribe medication. Consult a pharmacist for medical advice.</span>
        )}
      </div>
    </div>
  );
}
