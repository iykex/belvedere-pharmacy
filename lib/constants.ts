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
  IconTrendingUp,
  IconUser,
  IconLocation,
} from "@tabler/icons-react";
import { ContactFormFieldsMap } from "./types";
import earPainImage from "@/public/conditions/ear-pain.jpg";
import insectBiteImage from "@/public/conditions/insect-bite.jpg";
import skinInfectionsImage from "@/public/conditions/skin-infections.jpg";
import shinglesImage from "@/public/conditions/shingles.jpg";
import sinusInfectionImage from "@/public/conditions/sinus-infection.jpg";
import soreThroatImage from "@/public/conditions/sore-throat.jpeg";
import utiImage from "@/public/conditions/uti.jpg";
import fluVaccineImage from "@/public/services/flu-vaccine.jpeg";
import covidVaccineImage from "@/public/services/covid-vaccine.jpg";
import pressureCheckImage from "@/public/services/pressure-check.jpg";
import stopSmokingImage from "@/public/services/stop-smoking.jpg";
import emergencyContraceptionImage from "@/public/services/emergency-contraception.jpg";
import minorAilmentImage from "@/public/services/minor-ailment.jpg";
import prescriptionDispensingImage from "@/public/services/prescription-dispensing.jpg";
import medicationReviewImage from "@/public/services/medication-review.jpg";
import weightManagementImage from "@/public/services/weight-management.jpeg";
import travelClinicImage from "@/public/services/travel-clinic.jpg";
import cholesterolTestsImage from "@/public/services/cholesterol-tests.jpg";
import diabetesScreeningImage from "@/public/services/diabetes-screening.png";

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

export const KEY_BENEFITS_IMGS = [
  {
    url: "/key-benefits/all-medicine.svg",
    order: " order-2  scale-110",
  },
  { url: "/key-benefits/delivery.svg", order: "order-4 md:order-3 scale-90" },
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
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Pharmacy First", href: "/pharmacy-first" },
      { label: "Contact", href: "/contact-us" },
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
    href: "https://apps.apple.com/us/app/belvedere-pharmacy/id6670758281",
    icon: "/app-store.png",
  },
  {
    labelSmall: "GET IT ON",
    labelLarge: "Google Play",
    href: "https://play.google.com/store/apps/details?id=net.belvederepharmacy.app",
    icon: "/play-store.png",
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

export const PFP_CONDITIONS = [
  {
    title: "Ear Pains",
    image: earPainImage,
    description:
      "Treatment is suitable for children aged between 1 and 17 years. For those over 18, GP consultations are free at Belvedere Pharmacy. Our pharmacists are specially trained to diagnose and treat ear infections. We understand ear troubles can be frustrating, so our dedicated healthcare team is here to help.",
    serviceId: "ear-pain",
    badge: "Ages 1-17",
    color: "from-primary/20 to-primary/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5349",
  },
  {
    title: "Infected Insect Bites",
    image: insectBiteImage,
    description:
      "For those dealing with complications from insect bites, Belvedere Pharmacy provides comprehensive care. Our skilled team is ready to assess and treat infected insect bite concerns, ensuring your swift and effective recovery with professional and compassionate care.",
    serviceId: "skin-infection",
    badge: "All Ages",
    color: "from-chart-3/20 to-chart-3/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5347",
  },
  {
    title: "Bacterial Skin Infection",
    image: skinInfectionsImage,
    description:
      "We provide assessment, treatment, and guidance for effective management of various skin infections, offering both NHS and private services. Our expert team will help diagnose your skin condition and recommend proper treatment, ensuring prompt and comfortable recovery.",
    serviceId: "skin-infection",
    badge: "Common",
    color: "from-chart-2/20 to-chart-2/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5345",
  },
  {
    title: "Shingles",
    image: shinglesImage,
    description:
      "If you are experiencing painful rashes, blisters, or itching, our healthcare team at Belvedere Pharmacy is here to help. We offer assessment, treatment, and support for effective shingles management, with compassionate, professional care to guide you through your recovery journey.",
    serviceId: "shingles",
    badge: "Urgent",
    color: "from-destructive/20 to-destructive/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5350",
  },
  {
    title: "Sinus Infection",
    image: sinusInfectionImage,
    description:
      "Belvedere Pharmacy offers treatment for sinusitis. If you are experiencing a stuffy nose, headache, or facial pain, we can help. Our services include assessment, treatment, and guidance for effective sinus infection management, with professional support for your journey to relief.",
    serviceId: "sinus-infection",
    badge: "Common",
    color: "from-primary/20 to-primary/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5348",
  },
  {
    title: "Sore Throat Consultations",
    image: soreThroatImage,
    description:
      "Discover prompt and effective care for sore throats at Belvedere Pharmacy. If a scratchy, irritated throat is slowing you down, we have the remedy to restore your comfort. Our accessible services provide quick assessment and treatment to help you feel better quickly.",
    serviceId: "sore-throat",
    badge: "Fast Relief",
    color: "from-chart-3/20 to-chart-3/5",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5346",
  },
  {
    title: "Urinary Tract Infection in Women",
    description:
      "Expert care for women experiencing UTI symptoms like discomfort and frequent urination. We provide professional advice, assessment, and effective treatment with personalized attention.",
    image: utiImage,
    badge: "Women Only",
    color: "from-chart-2/20 to-chart-2/5",
    serviceId: "uti",
    href: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5344",
  },
];

export const PFP_CHECKLIST_ITEMS = [
  "Quick and convenient appointments",
  "Professional healthcare advice",
  "Treatment for common conditions",
  "NHS-funded service (free for eligible patients)",
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "pharmacy", label: "Pharmacy Services" },
  { id: "health", label: "Health Services" },
  { id: "specialized", label: "Specialized Care" },
  { id: "preventive", label: "Preventive Care" },
];

export const SERVICES_LIST = [
  {
    title: "Flu Vaccination",
    description:
      "Protect yourself against seasonal influenza with our convenient vaccination service.",
    category: "health",
    features: [
      "NHS & private options",
      "No appointment needed",
      "Quick and painless",
      "Professional administration",
    ],
    image: fluVaccineImage,
    link: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5340",
    icon: IconShieldCheck,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
  },
  {
    title: "COVID-19 Vaccination",
    description:
      "Stay protected against COVID-19 with our vaccination service.",
    category: "health",
    features: [
      "NHS service",
      "Booster doses available",
      "Safe environment",
      "Post-vaccination advice",
    ],
    image: covidVaccineImage,
    link: "https://shop.belvederepharmacy.net/appointments/book/service/COVID-19%20Vaccine?pharmacy=378&originalServiceId=5342&type=redirection",
    icon: IconShield,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    title: "Blood Pressure Check",
    description:
      "Regular monitoring of your blood pressure to help maintain good cardiovascular health.",
    category: "health",
    features: [
      "Quick and painless",
      "Immediate results",
      "Professional interpretation",
      "Follow-up advice",
    ],
    image: pressureCheckImage,
    link: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5343",
    icon: IconTrendingUp,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
  },
  {
    title: "Stop Smoking Service",
    description:
      "Professional support and products to help you quit smoking for good.",
    category: "specialized",
    features: [
      "One-to-one support",
      "Nicotine replacement therapy",
      "Regular check-ins",
      "Personalized quit plan",
    ],
    image: stopSmokingImage,
    link: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5341",
    icon: IconBolt,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    title: "Emergency Contraception",
    description:
      "Confidential and non-judgmental emergency contraception service.",
    category: "health",
    features: [
      "Confidential consultation",
      "Same-day service",
      "Follow-up advice",
      "Future contraception planning",
    ],
    image: emergencyContraceptionImage,
    link: "https://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378&serviceId=5339",
    icon: IconUser,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
  },
  {
    title: "Minor Ailment Service",
    description:
      "Treatment and advice for common minor health conditions without seeing a GP.",
    category: "health",
    features: [
      "No appointment needed",
      "NHS service",
      "Range of conditions covered",
      "Prescription if needed",
    ],
    image: minorAilmentImage,
    link: "/services/minor-ailments",
    icon: IconPill,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
  },
  {
    title: "Prescription Dispensing",
    description:
      "Fast and accurate dispensing of NHS and private prescriptions with expert advice on medication use.",
    category: "pharmacy",
    features: [
      "NHS & private prescriptions",
      "Electronic prescription service",
      "Repeat prescription service",
      "Medication counseling",
    ],
    image: prescriptionDispensingImage,
    link: "/services/prescriptions",
    icon: IconPill,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    title: "Medication Review",
    description:
      "Comprehensive review of your medications to ensure they're working effectively for you.",
    category: "pharmacy",
    features: [
      "One-to-one consultation",
      "Side effect management",
      "Medication optimization",
      "Written summary provided",
    ],
    image: medicationReviewImage,
    link: "/services/medication-review",
    icon: IconHeart,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
  },
  {
    title: "Weight Management",
    description:
      "Personalized advice and support to help you achieve and maintain a healthy weight.",
    category: "specialized",
    features: [
      "Nutritional advice",
      "Body composition analysis",
      "Goal setting",
      "Ongoing support",
    ],
    image: weightManagementImage,
    link: "/services/weight-management",
    icon: IconTrendingUp,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
  },
  {
    title: "Travel Health Clinic",
    description:
      "Comprehensive travel health advice and vaccinations for your international trips.",
    category: "specialized",
    features: [
      "Destination-specific advice",
      "Travel vaccinations",
      "Malaria prevention",
      "Travel first aid kits",
    ],
    image: travelClinicImage,
    link: "/services/travel-health",
    icon: IconShield,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
  },
  {
    title: "Cholesterol Testing",
    description:
      "Quick and accurate testing of your cholesterol levels with expert interpretation.",
    category: "preventive",
    features: [
      "Finger-prick test",
      "Full lipid profile",
      "Immediate results",
      "Lifestyle advice",
    ],
    image: cholesterolTestsImage,
    link: "/services/cholesterol-testing",
    icon: IconHeart,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    title: "Diabetes Screening",
    description:
      "Early detection of diabetes risk factors through our comprehensive screening service.",
    category: "preventive",
    features: [
      "Blood glucose testing",
      "Risk assessment",
      "Lifestyle advice",
      "Referral if needed",
    ],
    image: diabetesScreeningImage,
    link: "/services/diabetes-screening",
    icon: IconHeart,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
  },
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

export const TRUST_BADGES_SERVICES = [
  {
    icon: IconClock,
    title: "Available Now",
    description: "Extended hours for your convenience",
  },
  {
    icon: IconShield,
    title: "NHS Trusted",
    description: "Registered and accredited pharmacy",
  },
  {
    icon: IconHeart,
    title: "Expert Care",
    description: "Qualified professionals dedicated to you",
  },
];

export const CONTACT_CARDS_SERVICES = [
  {
    icon: IconPhone,
    label: "Call us anytime",
    title: "+44 (0) 123 456 7890",
    details: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
  },
  {
    icon: IconMapPin,
    label: "Visit us",
    title: "Belvedere, Kent",
    details: "Walk-ins welcome • Easy parking",
  },
  {
    icon: IconMail,
    label: "Email us",
    title: "info@belvederepharmacy.co.uk",
    details: "Response within 24 hours",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Pharmacist",
    bio: "Dr. Johnson has over 15 years of experience in pharmacy care and specializes in medication management for chronic conditions.",
    image: "/team/sarah-johnson.jpg",
    experience: "15 years",
  },
  {
    name: "Michael Thompson",
    role: "Pharmacy Manager",
    bio: "Michael ensures our pharmacy operations run smoothly and is dedicated to creating an exceptional experience for every patient.",
    image: "/team/michael-thompson.jpg",
    experience: "12 years",
  },
  {
    name: "Emma Wilson",
    role: "Clinical Pharmacist",
    bio: "Emma focuses on providing comprehensive medication reviews and personalized health consultations for our patients.",
    image: "/team/emma-wilson.jpg",
    experience: "8 years",
  },
  {
    name: "Dr. James Roberts",
    role: "Healthcare Consultant",
    bio: "Dr. Roberts brings his extensive medical knowledge to our team, helping to bridge the gap between pharmacy and primary care.",
    image: "/team/james-roberts.jpg",
    experience: "20 years",
  },
];

export const BELVEDERE_VALUES = [
  {
    icon: IconHeart,
    title: "Compassion",
    description:
      "We treat every patient with kindness, empathy, and respect, recognizing that each person's healthcare journey is unique.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: IconShield,
    title: "Trust",
    description:
      "We build lasting relationships based on honesty, reliability, and a commitment to always acting in our patients' best interests.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: IconUsers,
    title: "Community",
    description:
      "We're proud to be part of the Belvedere community and are dedicated to improving the health and wellbeing of our neighbors.",
    color: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: IconAward,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from the quality of our services to the expertise of our staff.",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
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

export const CTA_SECTION_BUTTONS_ABOUT_PAGE = [
  { href: "/contact-us", label: "Contact Us Today" },
  { href: "/services", label: "View Our Services" },
];

export const CTA_SECTION_CONTACT_ITEMS = [
  {
    icon: IconPhone,
    title: "Call us anytime",
    description: "+44 (0) 123 456 7890",
    card: true,
    iconSize: "size-12",
    iconBg: "bg-primary",
    iconClass: "size-6 text-white",
  },
  {
    icon: IconMail,
    title: "Email us",
    description: "info@belvederepharmacy.com",
    card: false,
    iconSize: "size-10",
    iconBg: "bg-primary/10",
    iconClass: "size-5 text-primary",
  },
  {
    icon: IconClock,
    title: "Emergency Service",
    description: "24/7 on-call pharmacist",
    card: false,
    iconSize: "size-10",
    iconBg: "bg-primary/10",
    iconClass: "size-5 text-primary",
  },
];

export const ABOUT_BANNER_BUTTONS = [
  {
    variant: "default",
    href: "http://app.belvederepharmacy.net/#/guest/appointments?pharmacyId=378",
    label: "Book an Appointment",
  },
  {
    variant: "outline",
    href: "/contact-us",
    label: "Contact Us",
  },
];

export const WORKING_HOURS = [
  { days: "Monday - Friday", hours: "09:00 - 18:00" },
  { days: "Saturday", hours: "09:00 - 14:00" },
  { days: "Sunday", hours: "Closed" },
  { days: "Emergency Service", hours: "24/7 On Call" },
];

export const FAQS_CONTACTS_PAGE = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 9am to 6pm, and Saturday from 9am to 2pm. We are closed on Sundays and Bank Holidays.",
    value: "item-1",
  },
  {
    question: "Do I need to make an appointment for Pharmacy First services?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to minimize waiting times and ensure our pharmacist is available to assist you.",
    value: "item-2",
  },
  {
    question: "Are your Pharmacy First services free?",
    answer:
      "Yes, NHS Pharmacy First services are free for patients who are eligible for free NHS prescriptions. Others may need to pay the standard NHS prescription charge.",
    value: "item-3",
  },
  {
    question: "How do I order a repeat prescription?",
    answer:
      "You can order repeat prescriptions through our website, mobile app, by phone, or in person at the pharmacy. We also offer a prescription delivery service.",
    value: "item-4",
  },
  {
    question: "Do you offer medication reviews?",
    answer:
      "Yes, we offer free medication reviews to help ensure you're getting the most from your medicines and to address any concerns or side effects you may be experiencing.",
    value: "item-5",
  },
  {
    question: "Can I get vaccinations at your pharmacy?",
    answer:
      "Yes, we offer various vaccinations including flu, COVID-19, travel vaccines, and more. Some are available on the NHS while others are private services.",
    value: "item-6",
  },
];

export const CONTACT_ITEMS_CONTACTS_PAGE = [
  {
    id: "phone",
    icon: IconPhone,
    title: "Phone",
    content: "+44 (0) 123 456 7890",
    detail: "Mon-Fri: 9am-6pm, Sat: 9am-2pm",
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
    content: "11 PICARDY STREET",
    detail: "BELVEDERE, KENT DA17 5QQ",
    bgFrom: "from-emerald-100",
    bgTo: "to-emerald-50",
    bgHoverFrom: "group-hover:from-emerald-50",
    bgHoverTo: "group-hover:to-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export const OPENING_HOURS_CONTACTS_PAGE = [
  { day: "Mon - Fri", hours: "09:00 - 18:00", color: "text-gray-900" },
  { day: "Saturday", hours: "09:00 - 14:00", color: "text-gray-900" },
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
    value: "+44 (0) 123 456 7890",
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
    bgColor: "bg-gray-50",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    textColor: "text-gray-900",
    valueClass: "font-semibold",
  },
  {
    icon: IconLocation,
    label: "Visit Us",
    value: "Belvedere, Kent",
    href: "#",
    isLink: false,
    bgColor: "bg-gray-50",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    textColor: "text-gray-900",
    valueClass: "font-semibold",
  },
  {
    icon: IconClock,
    label: "Opening Hours",
    value: "Mon-Fri: 9am - 6pm",
    href: "#",
    isLink: false,
    bgColor: "bg-gray-50",
    hoverBgColor: "",
    iconBgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    textColor: "text-gray-900",
    valueClass: "font-semibold",
  },
];

export const CONTACT_LOCATION_INFO = [
  {
    icon: IconLocation,
    title: "Location",
    details: ["11 Picardy Street", "Belvedere, Kent DA17 5QQ"],
  },
  {
    icon: IconPhone,
    title: "Phone",
    details: ["+44 (0) 123 456 7890"],
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
    value: "+44 (0) 123 456 7890",
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
    value: "11 Picardy Street, Belvedere, Kent DA17 5QQ",
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
  phone: "+44 (0) 123 456 7890",
  phoneHref: "tel:+441234567890",
  email: "info@belvederepharmacy.com",
  emailHref: "mailto:info@belvederepharmacy.com",
  hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
};

// Privacy Policy Constants
export const PRIVACY_POLICY_PERSONAL_INFO = [
  "Name, date of birth, and contact details (email, phone, address)",
  "NHS number and prescription details",
  "Medical history, allergies, and current medications",
  "Payment information (credit/debit card details)",
  "Information from healthcare providers with your consent",
];

export const PRIVACY_POLICY_AUTO_COLLECTED = [
  "IP address and browser information",
  "Device type and operating system",
  "Pages visited and time spent on each page",
  "Clickstream data and interaction patterns",
  "Cookies and similar tracking technologies",
];

export const PRIVACY_POLICY_LEGAL_BASIS = [
  {
    title: "Contractual necessity",
    desc: "To provide pharmacy services under our contract with you",
  },
  {
    title: "Consent",
    desc: "Your explicit consent for processing health data and marketing communications",
  },
  {
    title: "Legal obligation",
    desc: "To comply with pharmacy regulations, NHS requirements, and tax laws",
  },
  {
    title: "Vital interests",
    desc: "To protect your health and safety in emergency situations",
  },
  {
    title: "Legitimate interests",
    desc: "To improve our services, prevent fraud, and enforce our policies",
  },
];

export const PRIVACY_POLICY_USE_CASES = [
  "Providing pharmacy services and dispensing medication",
  "Processing prescriptions and managing your medication records",
  "Communicating with you about appointments, services, and changes",
  "Ensuring medication safety and checking for contraindications",
  "Processing payments and managing financial records",
  "Improving our services and website functionality",
  "Sending marketing communications (with your consent)",
  "Complying with legal and regulatory obligations",
  "Preventing fraud and protecting against abuse",
  "Responding to inquiries and providing customer support",
];

export const PRIVACY_POLICY_SHARING = [
  {
    title: "Healthcare providers",
    desc: "Your GP, hospital, and other healthcare professionals (with consent or as required by law)",
  },
  {
    title: "NHS systems",
    desc: "The NHS Summary Care Record and other integrated care systems",
  },
  {
    title: "Regulatory bodies",
    desc: "The GPhC, medicines regulators, and other statutory authorities",
  },
  {
    title: "Service providers",
    desc: "IT support, payment processors, and delivery companies (under data processing agreements)",
  },
  {
    title: "Emergency services",
    desc: "Police, ambulance, and fire services if required for emergency care",
  },
];

export const PRIVACY_POLICY_SECURITY = [
  "Encryption of data in transit (SSL/TLS) and at rest",
  "Secure servers with restricted access",
  "Regular security audits and penetration testing",
  "Staff training on data protection and confidentiality",
  "Access controls and authentication measures",
  "Secure disposal procedures for obsolete data",
];

export const PRIVACY_POLICY_DATA_RETENTION = [
  { category: "Pharmacy records", period: "7 years (as required by law)" },
  { category: "Prescription records", period: "2 years from last dispensing" },
  { category: "Website analytics", period: "2 years" },
  { category: "Payment information", period: "6 years (for tax purposes)" },
];

export const PRIVACY_POLICY_USER_RIGHTS = [
  {
    right: "Right of access",
    desc: "Request a copy of your personal data held by us",
  },
  {
    right: "Right to rectification",
    desc: "Ask us to correct inaccurate or incomplete information",
  },
  {
    right: "Right to erasure",
    desc: 'Request deletion of your data ("right to be forgotten")',
  },
  {
    right: "Right to restrict processing",
    desc: "Ask us to limit how we use your information",
  },
  {
    right: "Right to data portability",
    desc: "Receive your data in a portable format",
  },
  {
    right: "Right to object",
    desc: "Object to certain types of processing, including marketing",
  },
  {
    right: "Right to withdraw consent",
    desc: "Withdraw consent for processing at any time",
  },
];

export const PRIVACY_POLICY_COOKIES = [
  {
    type: "Essential cookies",
    purpose: "Required for website functionality and security",
  },
  {
    type: "Performance cookies",
    purpose: "Analyze how visitors use our website",
  },
  {
    type: "Marketing cookies",
    purpose: "Track your interests and display relevant advertisements",
  },
];

// Cookie Policy Constants
export const COOKIE_POLICY_ESSENTIAL = [
  "Session management and login authentication",
  "Security tokens and CSRF protection",
  "Language and region preferences",
  "Website navigation and page functionality",
];

export const COOKIE_POLICY_ANALYTICS = [
  "Google Analytics - tracking user behavior and engagement",
  "Hotjar - understanding user interactions and heatmaps",
  "Page load times and performance metrics",
  "Device and browser information",
];

export const COOKIE_POLICY_MARKETING = [
  "Facebook Pixel - for targeted advertising on Facebook and Instagram",
  "Google Ads - for remarketing and campaign tracking",
  "LinkedIn conversion tracking",
  "Interest-based advertising across partner websites",
];

export const COOKIE_POLICY_DURATION = [
  {
    type: "Session Cookies",
    desc: "Deleted when you close your browser. Used for temporary data like shopping carts or login sessions.",
  },
  {
    type: "Persistent Cookies",
    desc: "Remain on your device for a specified period (from days to years). Used for remembering preferences and tracking.",
  },
];

export const COOKIE_POLICY_THIRD_PARTY = [
  {
    service: "Google Analytics",
    purpose: "Website analytics and user behavior tracking",
    privacy: "Privacy Policy: www.google.com/policies/privacy/",
  },
  {
    service: "Facebook Pixel",
    purpose: "Conversion tracking and advertising",
    privacy: "Privacy Policy: www.facebook.com/policies/cookies/",
  },
  {
    service: "Hotjar",
    purpose: "User experience and heatmap analysis",
    privacy: "Privacy Policy: www.hotjar.com/legal/policies/privacy",
  },
  {
    service: "Google Ads",
    purpose: "Remarketing and conversion tracking",
    privacy: "Privacy Policy: www.google.com/policies/privacy/",
  },
];

export const COOKIE_POLICY_PREFERENCES = [
  "Accept all cookies",
  "Reject non-essential cookies",
  "Customize your preferences for specific cookie types",
  "View detailed information about each cookie",
];

export const COOKIE_POLICY_BROWSER_CONTROLS = [
  {
    browser: "Google Chrome",
    steps: "Settings → Privacy and security → Cookies and other site data",
  },
  {
    browser: "Firefox",
    steps: "Preferences → Privacy & Security → Cookies and Site Data",
  },
  {
    browser: "Safari",
    steps: "Preferences → Privacy → Cookies and website data",
  },
  {
    browser: "Microsoft Edge",
    steps: "Settings → Privacy, search, and services → Cookies",
  },
];

export const COOKIE_POLICY_OPTOUT = [
  {
    service: "Google Analytics",
    link: "tools.google.com/dlpage/gaoptout",
  },
  {
    service: "Facebook",
    link: "facebook.com/settings/?tab=ads",
  },
  {
    service: "Network Advertising Initiative (NAI)",
    link: "optout.networkadvertising.org",
  },
  {
    service: "Digital Advertising Alliance (DAA)",
    link: "optout.aboutads.info",
  },
];

export const COOKIE_POLICY_DETAILED_LIST = [
  {
    name: "PHPSESSID",
    type: "Essential",
    duration: "Session",
    purpose: "User session management",
  },
  {
    name: "wordpress_logged_in",
    type: "Essential",
    duration: "2 days",
    purpose: "Login authentication",
  },
  {
    name: "_ga",
    type: "Analytics",
    duration: "2 years",
    purpose: "Google Analytics tracking",
  },
  {
    name: "_gid",
    type: "Analytics",
    duration: "1 day",
    purpose: "Google Analytics session ID",
  },
  {
    name: "fbp",
    type: "Marketing",
    duration: "3 months",
    purpose: "Facebook Pixel conversion tracking",
  },
  {
    name: "fr",
    type: "Marketing",
    duration: "3 months",
    purpose: "Facebook advertising",
  },
  {
    name: "_hjid",
    type: "Analytics",
    duration: "1 year",
    purpose: "Hotjar user identification",
  },
  {
    name: "lang",
    type: "Essential",
    duration: "Session",
    purpose: "Language preference",
  },
];

export const COOKIE_POLICY_SECURITY = [
  "All cookies are transmitted over secure HTTPS connections",
  "Sensitive cookies (authentication) have HttpOnly and Secure flags set",
  "Regular security audits to identify and address vulnerabilities",
  "Cookies do not contain sensitive health information",
];

// Terms & Conditions Constants
export const TERMS_SERVICES_LIST = [
  "Prescription dispensing (NHS and private)",
  "Pharmacy First services",
  "Vaccinations and immunisations",
  "Health checks and screenings",
  "Medication reviews and counselling",
  "Emergency contraception",
  "Travel health advice and vaccines",
  "Weight management programmes",
];

export const TERMS_ELIGIBILITY = [
  "Be at least 18 years old (or have parental consent)",
  "Be a UK resident",
  "Provide accurate and complete information",
  "Have a valid NHS number or prescription where applicable",
];

export const TERMS_LIABILITY = [
  "Any indirect, incidental, or consequential damages",
  "Loss of profit, revenue, or data",
  "Adverse reactions to medication (unless due to our negligence)",
  "Misuse or mishandling of medication by the customer",
  "Errors in prescribing decisions made by your healthcare provider",
];
