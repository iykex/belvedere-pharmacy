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
    order: "order-3 sm:order-4",
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
  {
    url: "/key-benefits/all-medicine.svg",
    order: " order-2  scale-110",
  },
  { url: "/key-benefits/delivery.svg", order: "order-4 sm:order-3 scale-90" },
  { url: "/key-benefits/profile.svg", order: " order-6  scale-110" },
];

export const TESTIMONIALS_DEMO = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "/test-image.png",
    content:
      "Working with this team transformed our business. Their attention to detail and innovative approach exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "/test-image.png",
    content:
      "Exceptional service and results. They delivered on time and went above and beyond to ensure our success.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of Marketing, GrowthLab",
    image: "/test-image.png",
    content:
      "The level of professionalism and expertise is unmatched. Our ROI increased by 300% within the first quarter.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, StartupHub",
    image: "/test-image.png",
    content:
      "A game-changer for our organization. Their strategic insights helped us scale faster than we thought possible.",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pharmacy First", href: "/pharmacy-first" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Prescription Services", href: "/prescriptions" },
      { label: "Health Checks", href: "/services" },
      { label: "Vaccinations", href: "/services" },
      { label: "Medication Review", href: "/services" },
      { label: "Travel Health", href: "/services" },
    ],
  },
];

export const SERVICES = [
  "Prescription Services",
  "Health Checks",
  "Vaccinations",
  "Medication Review",
  "Travel Health",
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
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Cookie Policy",
    href: "/cookies",
  },
];

export const CONTACT_ITEMS = [
  "123 High Street",
  "Belvedere, London",
  "DA17 6HE",
  "020 1234 5678",
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

export const APP_DOWNLOAD_BUTTONS = [
  {
    labelSmall: "Download on the",
    labelLarge: "App Store",
    href: "#",
    icon: "/app-store.png",
  },
  {
    labelSmall: "GET IT ON",
    labelLarge: "Google Play",
    href: "#",
    icon: "/play-store.png",
  },
];

export const OUR_PROCESS_STEPS = [
  {
    number: "01",
    title: "Prescriptions",
    description:
      "Order your prescriptions online or in-person with our easy-to-use system.",
    icon: IconPill,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    title: "Health Advice",
    description:
      "Get expert health advice from our qualified pharmacists and healthcare team.",
    icon: IconStethoscope,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    number: "03",
    title: "Vaccinations",
    description:
      "Schedule your vaccinations with our professional healthcare providers.",
    icon: IconVaccine,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    number: "04",
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
  },
  {
    title: "Infected Insect Bites",
    description: "Expert care for insect bites showing signs of infection",
    icon: IconBug,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Sinus Infection",
    description: "Relief for sinusitis symptoms and sinus pressure",
    icon: IconWind,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Urinary Tract Infection",
    description: "Women's UTI treatment without GP appointment needed",
    icon: IconDroplet,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    badge: "Women",
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
    title: "CQC Registered",
    subtitle: "Quality Assured",
    icon: IconAward,
    color: "text-primary",
    bgColor: "bg-primary/10",
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
