import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

export default function SectionHeader({
  heading,
}: {
  heading: string | ReactNode;
}) {
  return (
    <div className="flex justify-center items-center max-w-3xl mx-auto gap-0.5 px-4 mb-5">
      <hr className="bg-primary/30 h-0.5 border-0 grow" />
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary via-primary/90 to-chart-2 text-primary-foreground px-5 py-2.5 rounded-full shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-bold relative z-10">{heading}</span>
        </div>
      </div>
      <hr className="bg-primary/30 h-0.5 border-0 grow" />
    </div>
  );
}
