import {
  IconClockHour5,
  IconMapPin,
  IconPhoneOutgoing,
} from "@tabler/icons-react";

export const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pharmacy First", href: "/pharmacy-first" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export const ABOUT_US_INFO_BANNER = [
  { title: "Find Us", description: "Belvedere, Kent", icon: IconMapPin },
  {
    title: "Opening Hours",
    description: "Mon-Fri: 9am-6pm",
    icon: IconClockHour5,
  },
  {
    title: "Call Us",
    description: "+44 (0) 123 456 7890",
    icon: IconPhoneOutgoing,
  },
];
