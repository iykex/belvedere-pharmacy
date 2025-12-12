import {
  IconClock,
  IconPhone,
  IconMapPin,
  IconPill,
  IconCalendar,
  IconFileText,
  IconExternalLink,
} from "@tabler/icons-react";

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
