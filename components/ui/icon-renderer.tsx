import {
  Clock as IconClock,
  Phone as IconPhone,
  MapPin as IconMapPin,
  Pill as IconPill,
  Calendar as IconCalendar,
  FileText as IconFileText,
  ExternalLink as IconExternalLink,
} from "lucide-react";

type TablerIconName =
  | "IconClock"
  | "IconPhone"
  | "IconMapPin"
  | "IconPill"
  | "IconCalendar"
  | "IconFileText"
  | "IconExternalLink";

const ICON_MAP: Record<TablerIconName, React.ComponentType<{ className?: string; size?: number }>> = {
  IconClock,
  IconPhone,
  IconMapPin,
  IconPill,
  IconCalendar,
  IconFileText,
  IconExternalLink,
};

interface RenderTablerIconProps {
  name: TablerIconName;
  size?: number;
  className?: string;
}

export function renderTablerIcon({ name, size = 16, className }: RenderTablerIconProps) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}

export type { TablerIconName };
