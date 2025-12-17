import {
  Bell as IconBell,
  MessageCircle as IconBrandWhatsapp,
  Bug as IconBug,
  Calendar as IconCalendar,
  PieChart as IconChartPieFilled,
  Clock as IconClockHour5,
  Gift as IconGift,
  Heart as IconHeart,
  Mail as IconMail,
  MapPin as IconMapPin,
  Phone as IconPhone,
  PhoneOutgoing as IconPhoneOutgoing,
  Pill as IconPill,
  Stethoscope as IconStethoscope,
  UserSquare as IconUserSquareRounded,
  Syringe as IconVaccine,
  ShieldCheck as IconShieldCheck,
  Award as IconAward,
  Clock as IconClock,
  Truck as IconTruck,
  Users as IconUsers,
  CheckCheck as IconChecks,
  Star as IconStar,
  Cross as IconMedicalCross,
  BadgeCheck as IconCertificate,
  ThumbsUp as IconThumbUp,
  Building as IconBuildingCommunity,
  Clock12 as IconClock12,
  UserCircle as IconUserCircle,
  Zap as IconBolt,
  Shield as IconShield,
  User as IconUser,
  MapPinned as IconLocation,
} from "lucide-react";
import { ContactFormFieldsMap } from "../types/general";
import appStore from "@/public/ui/app-store.png";
import playStore from "@/public/ui/play-store.png";
import { TRACKING_EVENTS } from "./analytics";

export const EXTERNAL_LINKS = {
  services: {
    stopSmokingServices:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5341",

    bloodPressureChecks:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5343",
    fluVaccinations:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5340",

    emergencyContraception:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5339",
    covidVaccination:
      "https://shop.belvederepharmacy.net/appointments/book/service/COVID-19%20Vaccine?pharmacy=378&originalServiceId=5342&type=redirection",
    earPain:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5349",
    infectedInsectBites:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5347",
    sinusInfection:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5348",
    urinaryTractInfection:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5344",
    bacterialSkinInfection:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5345",
    shingles:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5350",
    soreThroatConsultations:
      "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5346",
  },
  socials: {
    facebook: "",
    x: "",
    instagram: "",
    linkedIn: "",
    whatsapp: "https://wa.me/+44(0)1234567890",
    phone: "tel:+44(0)1234567890",
    email: "mailto:info@belvederepharmacy.com",
  },
  actions: {
    bookAppointment:
      "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection",
    orderPrescriptions: "https://app.belvederepharmacy.net/#/auth/signin",
  },
  appStore: {
    ios: "https://apps.apple.com/us/app/belvedere-pharmacy/id6670758281",
    android:
      "https://play.google.com/store/apps/details?id=net.belvederepharmacy.app",
  },
};

export const INTERNAL_LINKS = {
  homePage: "/",
  pharmacyFirstPage: "/pharmacy-first",
  servicesPage: "/services",
  aboutPage: "/about-us",
  contactPage: "/contact-us",
  termsAndConditionsPage: "/terms-conditions",
  privacyPolicyPage: "/privacy-policy",
  cookiePolicyPage: "/cookie-policy",
};

export const BUSINESS_PROFILE = {
  name: "Belvedere Pharmacy",
  propertyName: "OAKHURST",
  streetName: "ST PAULS WOOD HILL",
  region: "Orpington, Kent",
  postCode: "BR5 2SR",
  openingHours: "Mon-Fri: 9am-6:30pm, Sat: 9am-2pm",
  phone: "+44 (0) 1234 567890",
  email: "info@belvederepharmacy.com",
};

export const MENU_LINKS = [
  { label: "Home", href: INTERNAL_LINKS.homePage },
  { label: "Pharmacy First", href: INTERNAL_LINKS.pharmacyFirstPage },
  { label: "Services", href: INTERNAL_LINKS.servicesPage },
  { label: "About", href: INTERNAL_LINKS.aboutPage },
  { label: "Contact", href: INTERNAL_LINKS.contactPage },
];

export const ABOUT_US_INFO_BANNER = [
  {
    title: "Find Us",
    description: `${BUSINESS_PROFILE.region},${BUSINESS_PROFILE.postCode}`,
    icon: IconMapPin,
  },
  {
    title: "Opening Hours",
    description: BUSINESS_PROFILE.openingHours,
    icon: IconClockHour5,
  },
  {
    title: "Call Us",
    description: BUSINESS_PROFILE.phone,
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
      { label: "Home", href: INTERNAL_LINKS.homePage, tracking: undefined },
      { label: "About", href: INTERNAL_LINKS.aboutPage, tracking: undefined },
      {
        label: "Services",
        href: INTERNAL_LINKS.servicesPage,
        tracking: undefined,
      },
      {
        label: "Pharmacy First",
        href: INTERNAL_LINKS.pharmacyFirstPage,
        tracking: undefined,
      },
      {
        label: "Contact",
        href: INTERNAL_LINKS.contactPage,
        tracking: undefined,
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Stop Smoking Services",
        href: EXTERNAL_LINKS.services.stopSmokingServices,
        tracking: TRACKING_EVENTS.stopSmokingBookAppointment,
      },
      {
        label: "Blood Pressure Checks",
        href: EXTERNAL_LINKS.services.bloodPressureChecks,
        tracking: TRACKING_EVENTS.bloodPressureCheckBookAppointment,
      },
      {
        label: "Flu Vaccinations",
        href: EXTERNAL_LINKS.services.fluVaccinations,
        tracking: TRACKING_EVENTS.fluVaccinationBookAppointment,
      },
      {
        label: "Emergency Contraception",
        href: EXTERNAL_LINKS.services.emergencyContraception,
        tracking: TRACKING_EVENTS.emergencyContraceptionBookAppointment,
      },
      {
        label: "Covid-19 Vaccination",
        href: EXTERNAL_LINKS.services.covidVaccination,
        tracking: TRACKING_EVENTS.covidVaccinationBookAppointment,
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  // {
  //   label: "Facebook",
  //   href: EXTERNAL_LINKS.socials.facebook,
  //   icon: IconBrandFacebook,
  //   tracking: TRACKING_EVENTS.facebook,
  // },
  // {
  //   label: "x",
  //   href: EXTERNAL_LINKS.socials.x,
  //   icon: IconBrandX,
  //   tracking: TRACKING_EVENTS.x,
  // },
  // {
  //   label: "Instagram",
  //   href: EXTERNAL_LINKS.socials.instagram,
  //   icon: IconBrandInstagram,
  //   tracking: TRACKING_EVENTS.instagram,
  // },
  // {
  //   label: "LinkedIn",
  //   href: EXTERNAL_LINKS.socials.linkedIn,
  //   icon: IconBrandLinkedin,
  //   tracking: TRACKING_EVENTS.linkedInLink,
  // },
  {
    label: "WhatsApp",
    href: EXTERNAL_LINKS.socials.whatsapp,
    icon: IconBrandWhatsapp,
    tracking: TRACKING_EVENTS.whatsappLink,
  },
  {
    label: "Phone",
    href: EXTERNAL_LINKS.socials.phone,
    icon: IconPhone,
    tracking: TRACKING_EVENTS.phoneContactClick,
  },
  {
    label: "Email",
    href: EXTERNAL_LINKS.socials.email,
    icon: IconMail,
    tracking: TRACKING_EVENTS.emailClick,
  },
];

export const LEGAL_LINKS = [
  {
    label: "Terms & Conditions",
    href: INTERNAL_LINKS.termsAndConditionsPage,
  },
  {
    label: "Privacy Policy",
    href: INTERNAL_LINKS.privacyPolicyPage,
  },
  {
    label: "Cookie Policy",
    href: INTERNAL_LINKS.cookiePolicyPage,
  },
];

export const CONTACT_ITEMS = [
  BUSINESS_PROFILE.propertyName,
  BUSINESS_PROFILE.streetName,
  BUSINESS_PROFILE.region,
  BUSINESS_PROFILE.postCode,
  BUSINESS_PROFILE.phone,
  BUSINESS_PROFILE.email,
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
    content: BUSINESS_PROFILE.phone,
    detail: BUSINESS_PROFILE.openingHours,
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
    content: BUSINESS_PROFILE.email,
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
    content: `${BUSINESS_PROFILE.propertyName}, ${BUSINESS_PROFILE.streetName}`,
    detail: `${BUSINESS_PROFILE.region},${BUSINESS_PROFILE.postCode}`,
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
    value: BUSINESS_PROFILE.phone,
    href: EXTERNAL_LINKS.socials.phone,
    isLink: true,
    bgColor: "bg-primary/5",
    hoverBgColor: "hover:bg-primary/10",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    textColor: "text-primary",
    valueClass: "font-bold",
    tracking: TRACKING_EVENTS.phoneContactClick,
  },
  {
    icon: IconMail,
    label: "Email Us",
    value: BUSINESS_PROFILE.email,
    href: EXTERNAL_LINKS.socials.email,
    isLink: true,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
    tracking: TRACKING_EVENTS.emailClick,
  },
  {
    icon: IconLocation,
    label: "Visit Us",
    value: BUSINESS_PROFILE.streetName,
    href: INTERNAL_LINKS.aboutPage,
    isLink: false,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
    tracking: "",
  },
  {
    icon: IconClock,
    label: "Opening Hours",
    value: BUSINESS_PROFILE.openingHours,
    href: INTERNAL_LINKS.aboutPage,
    isLink: false,
    bgColor: "bg-gray-50 dark:bg-primary/5",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100 dark:bg-primary/10",
    iconColor: "text-gray-600 dark:text-primary",
    textColor: "text-gray-900 dark:text-primary/90",
    valueClass: "font-semibold",
    tracking: "",
  },
];

export const CONTACT_LOCATION_INFO = [
  {
    icon: IconLocation,
    title: "Location",
    details: [
      `${BUSINESS_PROFILE.propertyName}, ${BUSINESS_PROFILE.streetName}`,
      `${BUSINESS_PROFILE.region}, ${BUSINESS_PROFILE.postCode}`,
    ],
  },
  {
    icon: IconPhone,
    title: "Phone",
    details: [BUSINESS_PROFILE.phone],
  },
  {
    icon: IconMail,
    title: "Email",
    details: [BUSINESS_PROFILE.email],
  },
];

// Not Found Page Constants
export const NOT_FOUND_NAV_ITEMS = [
  {
    href: INTERNAL_LINKS.homePage,
    iconName: "Home",
    title: "Home",
    description: "Back to the homepage",
  },
  {
    href: INTERNAL_LINKS.servicesPage,
    iconName: "Search",
    title: "Services",
    description: "View our pharmacy services",
  },
  {
    href: INTERNAL_LINKS.pharmacyFirstPage,
    iconName: "MapPin",
    title: "Pharmacy First",
    description: "NHS Pharmacy First services",
  },
  {
    href: INTERNAL_LINKS.contactPage,
    iconName: "Phone",
    title: "Contact Us",
    description: "Get in touch with us",
  },
];

export const NOT_FOUND_CONTACT_INFO = {
  phone: {
    label: "Call us",
    value: BUSINESS_PROFILE.phone,
    href: EXTERNAL_LINKS.socials.phone,
    iconName: "Phone",
  },
  email: {
    label: "Email us",
    value: BUSINESS_PROFILE.email,
    href: EXTERNAL_LINKS.socials.email,
    iconName: "Mail",
  },
  address: {
    label: "Visit us",
    value: `${BUSINESS_PROFILE.propertyName}, ${BUSINESS_PROFILE.streetName},${BUSINESS_PROFILE.region}, ${BUSINESS_PROFILE.postCode}`,
    href: INTERNAL_LINKS.aboutPage,
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
  phone: BUSINESS_PROFILE.phone,
  phoneHref: EXTERNAL_LINKS.socials.phone,
  email: BUSINESS_PROFILE.email,
  emailHref: EXTERNAL_LINKS.socials.email,
  hours: BUSINESS_PROFILE.openingHours,
};

// Landing Page Banner Constants
export const LANDING_PAGE_ACTION_BUTTONS = [
  {
    text: "Book an Appointment",
    href: EXTERNAL_LINKS.actions.bookAppointment,
    variant: "primary",
    icon: true,
    tracking: TRACKING_EVENTS.bookAppointmentButton,
  },
  {
    text: "Order Prescriptions",
    href: EXTERNAL_LINKS.actions.orderPrescriptions,
    variant: "secondary",
    icon: false,
    tracking: TRACKING_EVENTS.orderPrescriptionButton,
  },
];

export const APP_STORES = [
  {
    name: "App Store",
    label: "Download on the",
    platform: "App Store",
    href: EXTERNAL_LINKS.appStore.ios,
    image: appStore,
    tracking: TRACKING_EVENTS.iosAppDownloadButton,
  },
  {
    name: "Google Play",
    label: "Get it on",
    platform: "Google Play",
    href: EXTERNAL_LINKS.appStore.android,
    image: playStore,
    tracking: TRACKING_EVENTS.androidAppDownloadButton,
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

export const ABOUT_PAGE_BANNER_BUTTONS = [
  {
    text: "Get in Touch",
    href: INTERNAL_LINKS.contactPage,
    variant: "primary",
  },
  {
    text: "Our Services",
    href: INTERNAL_LINKS.servicesPage,
    variant: "default",
  },
];

export const ABOUT_CONTACT_INFO = [
  {
    icon: IconMapPin,
    label: BUSINESS_PROFILE.region,
  },
  {
    icon: IconPhone,
    label: BUSINESS_PROFILE.phone,
  },
];

export const DARK_HERO_PAGES = [
  INTERNAL_LINKS.homePage,
  INTERNAL_LINKS.aboutPage,
  INTERNAL_LINKS.contactPage,
];

export const CONTACT_INFO_MOBILE_MENU = [
  {
    icon: IconMapPin,
    label: "Location",
    value: BUSINESS_PROFILE.region,
  },
  {
    icon: IconClock,
    label: "Hours",
    value: BUSINESS_PROFILE.openingHours,
  },
];

export const ACTION_BUTTONS_MOBILE_MENU = [
  {
    label: "Book Appointment",
    href: EXTERNAL_LINKS.actions.bookAppointment,
    variant: undefined,
    tracking: TRACKING_EVENTS.bookAppointmentButton,
    className:
      "flex-1 bg-primary hover:bg-primary/90 py-2.5 rounded-xl overflow-hidden text-sm font-semibold",
  },
  {
    label: "Order Prescriptions",
    href: EXTERNAL_LINKS.actions.orderPrescriptions,
    variant: "outline",
    tracking: TRACKING_EVENTS.orderPrescriptionButton,
    className:
      "flex-1 py-2.5 rounded-xl border-white/20 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold",
  },
];

// Pastel accent colors for cards
export const CARD_COLORS_WHY_CHOOSE_US = [
  { bg: "bg-[#FFF9E6]", icon: "text-[#F9A825]", hover: "bg-[#F9A825]" },
  { bg: "bg-[#E8F5E9]", icon: "text-[#2E7D32]", hover: "bg-[#2E7D32]" },
  { bg: "bg-[#FCE4EC]", icon: "text-[#C62828]", hover: "bg-[#C62828]" },
  { bg: "bg-[#EDE7F6]", icon: "text-[#5E35B1]", hover: "bg-[#5E35B1]" },
];
