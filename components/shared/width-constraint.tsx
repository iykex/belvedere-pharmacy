import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function WidthConstraint({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-(--container) mx-auto px-(--spacing-horizontal) w-full overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
