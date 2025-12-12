import { renderTablerIcon } from "@/components/ui/icon-renderer";

interface ActionIconProps {
  icon?: "calendar" | "phone" | "location" | "external" | "prescription";
}

export function ActionIcon({ icon }: ActionIconProps) {
  let iconName:
    | "IconCalendar"
    | "IconPhone"
    | "IconMapPin"
    | "IconFileText"
    | "IconExternalLink";

  switch (icon) {
    case "calendar":
      iconName = "IconCalendar";
      break;
    case "phone":
      iconName = "IconPhone";
      break;
    case "location":
      iconName = "IconMapPin";
      break;
    case "prescription":
      iconName = "IconFileText";
      break;
    default:
      iconName = "IconExternalLink";
  }

  return renderTablerIcon({ name: iconName, size: 14 });
}
