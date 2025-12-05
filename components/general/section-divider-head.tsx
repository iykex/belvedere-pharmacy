import { ReactNode } from "react";

export default function SectionHeader({
  heading,
}: {
  heading: string | ReactNode;
}) {
  return (
    <div className="flex justify-center items-center max-w-xl mx-auto gap-4 px-4 mb-6">
      <div className="h-px bg-gray-200 grow" />
      <span className="text-sm font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
        {heading}
      </span>
      <div className="h-px bg-gray-200 grow" />
    </div>
  );
}
