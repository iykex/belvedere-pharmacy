import { QUICK_ACTIONS_DATA } from "@/lib/constants/chatbot";
import { renderTablerIcon } from "@/lib/utils/icon-renderer";

interface QuickActionsPanelProps {
  onQuickAction: (query: string) => void;
}

export function QuickActionsPanel({ onQuickAction }: QuickActionsPanelProps) {
  return (
    <div className="px-4 pb-2 shrink-0 border-t border-gray-200 dark:border-[#1a4d6e] pt-3">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        Quick questions:
      </p>
      <div className="flex flex-wrap gap-2">
        {QUICK_ACTIONS_DATA.map((action) => (
          <button
            key={action.label}
            onClick={() => onQuickAction(action.query)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#002f4b] text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors"
          >
            {renderTablerIcon({ name: action.icon, size: 14 })}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
