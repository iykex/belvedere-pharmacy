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

export const KEY_BENEFITS_TEXTS = [
  {
    title: "All your Medicine needs in one place",
    bullets: [
      "Search and find all kind of drugs",
      "We have drugs for soecial case treatments",
      "Get notified when your drug is available",
    ],
    order: "order-1",
  },
  {
    title: "Get your drugs at your doorstep",
    bullets: [
      "Get straigh delivery to your doorstep",
      "We deliver within 24hrs of request",
      "We guarantee speedily response",
    ],
    order: "order-4",
  },
  {
    title: "Set up your profile and get refill easily",
    bullets: [
      "When you are a member your refill is easier",
      "With one click your medicine is on it’s way",
      "Select a health care specialist",
    ],
    order: "order-5",
  },
];

export const KEY_BENEFITS_IMGS = [
  { url: "/key-benefits/all-medicine.svg", order: "order-2 scale-110" },
  { url: "/key-benefits/delivery.svg", order: "order-3" },
  { url: "/key-benefits/profile.svg", order: "order-6 scale-110" },
];
