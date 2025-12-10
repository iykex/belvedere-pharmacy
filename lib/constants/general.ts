import {
  IconBell,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconBug,
  IconCalendar,
  IconChartPieFilled,
  IconClockHour5,
  IconDroplet,
  IconEar,
  IconGift,
  IconHeart,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPhoneOutgoing,
  IconPill,
  IconStethoscope,
  IconUserSquareRounded,
  IconVaccine,
  IconWind,
  IconShieldCheck,
  IconAward,
  IconClock,
  IconTruck,
  IconUsers,
  IconChecks,
  IconStar,
  IconMedicalCross,
  IconCertificate,
  IconThumbUp,
  IconBuildingCommunity,
  IconClock12,
  IconUserCircle,
  IconBolt,
  IconShield,
  IconUser,
  IconLocation,
} from "@tabler/icons-react";
import { ContactFormFieldsMap } from "../types/general";
import appStore from "@/public/ui/app-store.png";
import playStore from "@/public/ui/play-store.png";

export const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pharmacy First", href: "/pharmacy-first" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export const ABOUT_US_INFO_BANNER = [
  { title: "Find Us", description: "Orpington, BR5 2SR", icon: IconMapPin },
  {
    title: "Opening Hours",
    description: "Mon-Fri: 9am-6:30pm",
    icon: IconClockHour5,
  },
  {
    title: "Call Us",
    description: "+44 (0) 1234 567890",
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
    order: "order-3 md:order-4",
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

export const FOOTER_LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Pharmacy First", href: "/pharmacy-first" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Stop Smoking Services",
        href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5341",
      },
      {
        label: "Blood Pressure Checks",
        href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5343",
      },
      {
        label: "Flu Vaccinations",
        href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5340",
      },
      {
        label: "Emergency Contraception",
        href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5339",
      },
      {
        label: "Covid-19 Vaccination",
        href: "https://shop.belvederepharmacy.net/appointments/book/service/COVID-19%20Vaccine?pharmacy=378&originalServiceId=5342&type=redirection",
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/your-page",
    icon: IconBrandFacebook,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/your-handle",
    icon: IconBrandX,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/your-page",
    icon: IconBrandInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/your-company",
    icon: IconBrandLinkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/your-phone-number",
    icon: IconBrandWhatsapp,
  },
  {
    label: "Phone",
    href: "tel:+233[your-phone-number]",
    icon: IconPhone,
  },
  {
    label: "Email",
    href: "mailto:[your-email]@example.com",
    icon: IconMail,
  },
];

export const LEGAL_LINKS = [
  {
    label: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];

export const CONTACT_ITEMS = [
  "OAKHURST, ST PAULS WOOD HILL",
  "Orpington, Kent",
  "BR5 2SR",
  "+44 (0) 1234 567890",
  "info@belvederepharmacy.co.uk",
];

export const NEWSLETTER_FEATURES = [
  {
    icon: IconHeart,
    title: "Health Tips & Advice",
    description: "Expert wellness tips delivered to your inbox weekly",
  },
  {
    icon: IconGift,
    title: "Exclusive Offers",
    description: "Special discounts and promotions for subscribers only",
  },
  {
    icon: IconBell,
    title: "New Services",
    description: "Be the first to know about our latest healthcare services",
  },
];

export const DOWNLOAD_APP_FEATURES = [
  {
    icon: IconBell,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Medication Reminders",
    description: "Never miss a dose with personalized medication reminders",
  },
  {
    icon: IconCalendar,
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    title: "Easy Appointment Booking",
    description: "Book and manage your appointments with just a few taps",
  },
  {
    icon: IconChartPieFilled,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    title: "Health Tracking",
    description: "Monitor your health metrics and see your progress over time",
  },
];

export const OUR_PROCESS_STEPS = [
  {
    number: "1",
    title: "Prescriptions",
    description:
      "Order your prescriptions online or in-person with our easy-to-use system.",
    icon: IconPill,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "2",
    title: "Health Advice",
    description:
      "Get expert health advice from our qualified pharmacists and healthcare team.",
    icon: IconStethoscope,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    number: "3",
    title: "Vaccinations",
    description:
      "Schedule your vaccinations with our professional healthcare providers.",
    icon: IconVaccine,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    number: "4",
    title: "Consultations",
    description:
      "Book a consultation with our healthcare professionals for personalized care.",
    icon: IconUserSquareRounded,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const NHS_PHARMACY_FIRST_SERVICES = [
  {
    title: "Ear Pains",
    description: "Quick relief and treatment for ear infections and discomfort",
    icon: IconEar,
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5349",
  },
  {
    title: "Infected Insect Bites",
    description: "Expert care for insect bites showing signs of infection",
    icon: IconBug,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5347",
  },
  {
    title: "Sinus Infection",
    description: "Relief for sinusitis symptoms and sinus pressure",
    icon: IconWind,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5348",
  },
  {
    title: "Urinary Tract Infection",
    description: "Women's UTI treatment without GP appointment needed",
    icon: IconDroplet,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    badge: "Women",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5344",
  },
];

export const TRUST_BADGES_MARQUEE = [
  {
    title: "NHS Accredited",
    subtitle: "Registered Pharmacy",
    icon: IconShieldCheck,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Same Day Service",
    subtitle: "Fast & Reliable",
    icon: IconClock,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Free Delivery",
    subtitle: "Local Area",
    icon: IconTruck,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Expert Pharmacists",
    subtitle: "20+ Years Experience",
    icon: IconUsers,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "500+ Weekly",
    subtitle: "Prescriptions Filled",
    icon: IconChecks,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Community Care",
    subtitle: "Trusted Locally",
    icon: IconBuildingCommunity,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "GPhC Registered",
    subtitle: "Professional Standards",
    icon: IconCertificate,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "98% Satisfaction",
    subtitle: "Customer Rated",
    icon: IconStar,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Emergency Services",
    subtitle: "Always Here for You",
    icon: IconMedicalCross,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Private Consultations",
    subtitle: "Confidential Care",
    icon: IconHeart,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "1000+ Reviews",
    subtitle: "Highly Recommended",
    icon: IconThumbUp,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
];

export const PFP_BENEFITS = [
  {
    title: "Convenience",
    description:
      "Skip the GP appointment and get treated for common ailments at your local pharmacy.",
    icon: IconClock12,
  },
  {
    title: "Accessibility",
    description:
      "Enjoy extended hours and easier access compared to traditional GP surgeries.",
    icon: IconUserCircle,
  },
  {
    title: "Expertise",
    description:
      "Our qualified pharmacists provide professional advice and treatment for numerous conditions.",
    icon: IconShieldCheck,
  },
  {
    title: "Reduced NHS Pressure",
    description:
      "By using Pharmacy First, GP workloads decrease, enhancing patient care access.",
    icon: IconBolt,
  },
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "pharmacy", label: "Pharmacy Services" },
  { id: "health", label: "Health Services" },
  { id: "specialized", label: "Specialized Care" },
  { id: "preventive", label: "Preventive Care" },
];

export const WHY_CHOOSE_US_SERVICES = [
  {
    title: "24/7 Support",
    description: "Extended hours and emergency support whenever you need us",
    icon: IconClock,
    color: "primary",
    borderColor: "border-chart-2/30",
  },
  {
    title: "Expert Team",
    description:
      "Qualified healthcare professionals with years of specialized experience",
    icon: IconUsers,
    color: "chart-3",
    borderColor: "border-primary/30",
  },
  {
    icon: IconShield,
    title: "NHS Approved",
    description:
      "Fully accredited and registered with all relevant healthcare bodies.",
    color: "chart-2",
    borderColor: "border-primary/30",
  },
  {
    title: "Personalized",
    description:
      "Tailored services designed for your unique health needs and goals",
    icon: IconUser,
    color: "primary",
    borderColor: "border-chart-3/30",
  },
];

export const CTA_SECTION_FEATURES_LIST = [
  "Same-day prescription fulfillment",
  "Free medication delivery in Belvedere",
  "Private consultation rooms",
  "No-appointment health checks",
  "Emergency on-call service",
  "Expert medication reviews",
];

export const WORKING_HOURS = [
  { days: "Monday - Friday", hours: "09:00 - 18:30" },
  { days: "Saturday", hours: "09:00 - 14:00" },
  { days: "Sunday", hours: "Closed" },
  { days: "Emergency Service", hours: "24/7 On Call" },
];

export const CONTACT_ITEMS_CONTACTS_PAGE = [
  {
    id: "phone",
    icon: IconPhone,
    title: "Phone",
    content: "+44 (0) 1234 567890",
    detail: "Mon-Fri: 9am-6:30pm, Sat: 9am-2pm",
    bgFrom: "from-blue-100",
    bgTo: "to-blue-50",
    bgHoverFrom: "group-hover:from-blue-50",
    bgHoverTo: "group-hover:to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "email",
    icon: IconMail,
    title: "Email",
    content: "info@belvederepharmacy.com",
    detail: "We aim to respond within 1-2 hours",
    bgFrom: "from-purple-100",
    bgTo: "to-purple-50",
    bgHoverFrom: "group-hover:from-purple-50",
    bgHoverTo: "group-hover:to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "address",
    icon: IconMapPin,
    title: "Address",
    content: "OAKHURST, ST PAULS WOOD HILL",
    detail: "ORPINGTON, KENT BR5 2SR",
    bgFrom: "from-emerald-100",
    bgTo: "to-emerald-50",
    bgHoverFrom: "group-hover:from-emerald-50",
    bgHoverTo: "group-hover:to-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export const OPENING_HOURS_CONTACTS_PAGE = [
  {
    day: "Mon - Fri",
    hours: "09:00 - 18:30",
    color: "text-gray-900 dark:text-white/60",
  },
  {
    day: "Saturday",
    hours: "09:00 - 14:00",
    color: "text-gray-900 dark:text-white/60",
  },
  { day: "Sunday", hours: "Closed", color: "text-red-600", isClosed: true },
];

export const EMERGENCY_SERVICES_CONTACTS_PAGE = [
  {
    number: "999",
    label: "Emergency",
    description: "Life-threatening emergencies only",
    detail: "Chest pain, severe bleeding, loss of consciousness",
    bgFrom: "from-red-50",
    bgTo: "to-red-100/50",
    border: "border-red-200",
    badgeBg: "from-red-500",
    badgeTo: "to-red-600",
    numberColor: "text-red-600",
    labelColor: "text-red-700",
  },
  {
    number: "111",
    label: "Non-Emergency",
    description: "24/7 medical advice",
    detail: "When your GP is closed or for urgent medical advice",
    bgFrom: "from-blue-50",
    bgTo: "to-blue-100/50",
    border: "border-blue-200",
    badgeBg: "from-blue-500",
    badgeTo: "to-blue-600",
    numberColor: "text-blue-600",
    labelColor: "text-blue-700",
  },
];

export const CONTACT_FORM_FIELD_ITEMS: ContactFormFieldsMap[] = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Harriet Tevez",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "harriet@gmail.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "+44 7123 456700",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Prescription",
  },
];

export const CTA_SECTION_CONTACT_INFO = [
  {
    icon: IconPhone,
    label: "Call Us",
    value: "+44 (0) 1234 567890",
    href: "tel:+441234567890",
    isLink: true,
    bgColor: "bg-primary/5",
    hoverBgColor: "hover:bg-primary/10",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    textColor: "text-primary",
    valueClass: "font-bold",
  },
  {
    icon: IconMail,
    label: "Email Us",
    value: "info@belvederepharmacy.com",
    href: "#",
    isLink: true,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
  },
  {
    icon: IconLocation,
    label: "Visit Us",
    value: "Orpington, Kent",
    href: "#",
    isLink: false,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
  },
  {
    icon: IconClock,
    label: "Opening Hours",
    value: "Mon-Fri: 9am - 6:30pm",
    href: "#",
    isLink: false,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
  },
];

export const CONTACT_LOCATION_INFO = [
  {
    icon: IconLocation,
    title: "Location",
    details: ["Oakhurst, St Pauls Wood Hill", "Orpington, Kent BR5 2SR"],
  },
  {
    icon: IconPhone,
    title: "Phone",
    details: ["+44 (0) 1234 567890"],
  },
  {
    icon: IconMail,
    title: "Email",
    details: ["info@belvederepharmacy.com"],
  },
];

// Not Found Page Constants
export const NOT_FOUND_NAV_ITEMS = [
  {
    href: "/",
    iconName: "Home",
    title: "Home",
    description: "Back to the homepage",
  },
  {
    href: "/services",
    iconName: "Search",
    title: "Services",
    description: "View our pharmacy services",
  },
  {
    href: "/pharmacy-first",
    iconName: "MapPin",
    title: "Pharmacy First",
    description: "NHS Pharmacy First services",
  },
  {
    href: "/contact-us",
    iconName: "Phone",
    title: "Contact Us",
    description: "Get in touch with us",
  },
];

export const NOT_FOUND_CONTACT_INFO = {
  phone: {
    label: "Call us",
    value: "+44 (0) 1234 567890",
    href: "tel:+441234567890",
    iconName: "Phone",
  },
  email: {
    label: "Email us",
    value: "info@belvederepharmacy.com",
    href: "mailto:info@belvederepharmacy.com",
    iconName: "Mail",
  },
  address: {
    label: "Visit us",
    value: "Oakhurst, St Pauls Wood Hill, Orpington, Kent BR5 2SR",
    href: undefined,
    iconName: "MapPin",
  },
};

// Error Page Constants
export const ERROR_TROUBLESHOOTING_STEPS = [
  "Refresh the page and try again",
  "Check your internet connection",
  "Clear your browser cache and cookies",
  "Try again in a few moments",
  "Contact us if the issue persists",
];

export const ERROR_SUPPORT_INFO = {
  phone: "+44 (0) 1234 567890",
  phoneHref: "tel:+441234567890",
  email: "info@belvederepharmacy.com",
  emailHref: "mailto:info@belvederepharmacy.com",
  hours: "Mon-Fri: 9am-6:30pm, Sat: 9am-2pm",
};

// Landing Page Banner Constants
export const LANDING_PAGE_ACTION_BUTTONS = [
  {
    text: "Book an Appointment",
    href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection",
    variant: "primary",
    icon: true,
  },
  {
    text: "Order Prescriptions",
    href: "https://app.belvederepharmacy.net/#/auth/signin",
    variant: "secondary",
    icon: false,
  },
];

export const APP_STORES = [
  {
    name: "App Store",
    label: "Download on the",
    platform: "App Store",
    href: "https://apps.apple.com/us/app/belvedere-pharmacy/id6670758281",
    image: appStore,
  },
  {
    name: "Google Play",
    label: "Get it on",
    platform: "Google Play",
    href: "https://play.google.com/store/apps/details?id=net.belvederepharmacy.app",
    image: playStore,
  },
];

export const ABOUT_HERO_STATS = [
  { icon: IconUsers, value: "5000+", label: "Happy Patients" },
  { icon: IconClock, value: "5+", label: "Years Serving" },
  { icon: IconAward, value: "NHS", label: "Accredited" },
];

export const ABOUT_HERO_BADGES = [
  {
    icon: IconShield,
    text: "Trusted since 2020",
    bgColor: "bg-primary/15",
    textColor: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: IconHeart,
    text: "Community First",
    bgColor: "bg-[#00BFFF]/15",
    textColor: "text-[#00BFFF]",
    borderColor: "border-[#00BFFF]/30",
  },
];

export const ABOUT_ACTION_BUTTONS = [
  {
    text: "Get in Touch",
    href: "/contact-us",
    variant: "primary",
  },
  {
    text: "Our Services",
    href: "/services",
    variant: "default",
  },
];

export const ABOUT_CONTACT_INFO = [
  {
    icon: IconMapPin,
    label: "Orpington, Kent",
  },
  {
    icon: IconPhone,
    label: "+44 (0) 1234 567890",
  },
];
