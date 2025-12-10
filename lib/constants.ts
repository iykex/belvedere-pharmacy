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
import appStore from "@/public/ui/app-store.png";
import playStore from "@/public/ui/play-store.png";
import testimonialAvatar from "@/public/ui/testimonial-avatar.png";

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

export const TESTIMONIALS_DEMO = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: testimonialAvatar,
    content:
      "Working with this team transformed our business. Their attention to detail and innovative approach exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: testimonialAvatar,
    content:
      "Exceptional service and results. They delivered on time and went above and beyond to ensure our success.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of Marketing, GrowthLab",
    image: testimonialAvatar,
    content:
      "The level of professionalism and expertise is unmatched. Our ROI increased by 300% within the first quarter.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, StartupHub",
    image: testimonialAvatar,
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

export const WORKING_HOURS = [
  { days: "Monday - Friday", hours: "09:00 - 18:30" },
  { days: "Saturday", hours: "09:00 - 14:00" },
  { days: "Sunday", hours: "Closed" },
  { days: "Emergency Service", hours: "24/7 On Call" },
];

export const FAQS_CONTACTS_PAGE = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 9am to 6:30pm, and Saturday from 9am to 2pm. We are closed on Sundays and Bank Holidays.",
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

// Privacy Policy Constants
export const PRIVACY_POLICY_PERSONAL_INFO = [
  "Identity data: name, age/date of birth, gender, job title, professional qualifications",
  "Contact data: postal address, billing and delivery addresses, telephone numbers, email address",
  "Special category data (sensitive personal data): information about your physical or mental health, health conditions, and other clinical metrics",
  "Transaction data: purchases and/or orders which are made by you and your payment card or bank transfer details",
  "Technical data: your online browsing activities, IP address, browser type, version and language, device identifiers",
  "Profile data: account login details, username, password(s), interests, preferences, feedback and survey responses",
  "Marketing and communications data: your marketing preferences, communication preferences and correspondence with us",
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

export const PRIVACY_POLICY_SECTIONS = [
  {
    number: 1,
    title: "Introduction",
    type: "paragraphs",
    content: [
      "MECKAY LIMITED values your privacy and is strongly committed to protecting your personal information.",
      "The purpose of this Privacy Notice is to explain how MECKAY LIMITED handles personal information about you and to outline the rights that you have under applicable data protection legislation. We respect your privacy and want to be transparent about how your personal information will be processed, stored and used when you visit our website, use our online services, our App or our Platform or otherwise engage with us as a customer, a patient, a supplier, a retailer or have any other commercial contract with us.",
      "Please read the following carefully to understand our practices regarding your personal information and how we will treat it.",
      "It is important that the personal information that we hold about you is accurate and current. Please keep us informed if your personal information changes during our relationship with you.",
      "All personal information that we collect or are provided with will only be held and stored in accordance with this Privacy Notice and the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and any other legislation relating to the protection of personal information (data protection laws).",
    ],
  },
  {
    number: 2,
    title: "Information About Who We Are",
    type: "paragraphs",
    content: [
      "We are MECKAY LIMITED ('we', 'us' or 'our').",
      "We are registered with the Information Commissioner's Office (ICO) under reference: 06454698.",
      "MECKAY LIMITED will be the controller of your personal data unless otherwise stated.",
      "Postal address: Oakhurst, St. Pauls Wood Hill, Orpington, England, BR5 2SR",
      "Email address: Belvederepharmacy@yahoo.com",
    ],
  },
  {
    number: 3,
    title: "What Information Do We Collect About You?",
    type: "bulletPoints",
    beforeText:
      "Personal information or personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer the following types of personal information about you:",
    bulletPoints: [
      "Identity data: name, age/date of birth, gender, job title, professional qualifications, work experience",
      "Contact data: postal address including billing and delivery addresses, your location, telephone numbers and email address",
      "Special category data (sensitive personal data): information about your physical or mental health, health conditions, and other clinical metrics including environmental, socio-economic, and behavioural information pertinent to health and wellness",
      "Transaction data: purchases and/or orders made by you and your payment card or bank transfer details",
      "Technical data: your online browsing activities on our website, App and Platform, profile and device information including IP address, browser type, version and language, identifiers associated with cookies",
      "Profile data: account login details including username and password(s), your interests, preferences, feedback and survey responses",
      "Marketing and communications data: your marketing preferences, communication preferences and correspondence with us",
      "Publicly available personal information: any which you have shared via public platforms such as social media",
    ],
    afterText:
      "All your personal information will be processed in accordance with this Privacy Notice, and in compliance with all applicable confidentiality guidelines. In some circumstances, we may anonymise your personal information so that it can no longer be associated with you, for research or statistical purposes.",
  },
  {
    number: 4,
    title: "If You Fail to Provide Personal Information",
    type: "paragraphs",
    content: [
      "Where we need to collect personal information by law, legitimate interest or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with the requested services).",
      "In this case, we may have to cancel a service you have with us, but we will notify you if this is the case at the time.",
    ],
  },
  {
    number: 5,
    title: "Third Party Links",
    type: "paragraphs",
    content: [
      "Our website, App and/or our Platform may include links to third party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.",
      "We do not control these third-party websites and are not responsible for their privacy statements or policies. When you leave our website, App or our Platform, we encourage you to read the privacy policy or privacy notice of every website you visit.",
    ],
  },
  {
    number: 6,
    title: "Information You Provide to Us",
    type: "bulletPoints",
    beforeText:
      "Most of the personal information we process is provided to us directly by you for the purpose of providing you with our services. When you provide us with your personal information, it is for the following reasons:",
    bulletPoints: [
      "Account and contact details: When you create an account, you provide us with your login credentials, full name, email address, phone number, date of birth, gender, marketing preferences and profile picture",
      "Special category personal information: Information you provide whilst using the App and/or Platform may be considered sensitive, such as information relating to your health when booking consultations or ordering prescriptions",
      "Video consultations: Where you book a video consultation, we will not retain or record the video content, but we will be able to add notes to your account which will be retained",
      "Billing or bank details: When you make a payment, you provide payment information including debit or credit card number, card holder name, card expiry, CVV and billing address",
      "Customer service: When you contact our customer services team via the App, Platform, email or Chatbot, we collect the information you give us during the interaction",
    ],
  },
  {
    number: 7,
    title: "Information We Receive From Others",
    type: "bulletPoints",
    beforeText:
      "In addition to the information you provide us directly, we may receive information about you from third parties. We will only use this information where we have a lawful basis:",
    bulletPoints: [
      "Doctors' Surgeries / Hospitals: Surgery and/or hospital staff may provide information about you for the purposes of facilitating services",
      "Other Partners: We may receive information from third-party partners, for instance in relation to advertising where advertisements are published on partner websites",
    ],
    afterText:
      "Any data which is obtained from third parties will be kept in accordance with this Privacy Notice, and with any additional restrictions imposed by the third party that shared your personal information with us.",
  },
  {
    number: 8,
    title: "Online Account, App and Platform",
    type: "paragraphs",
    content: [
      "Our website, App and Platform have been designed to improve the online accessibility of appointments, video consultations, manage prescriptions and other advice/services available to you from the comfort of your own home.",
      "When you sign up to use our online services, App or Platform, we require some of your personal information, including your name and contact details. You are able to access your account and update your personal information within the App or Platform.",
      "Where you have logged on via your NHS login, you can access and update your medical and/or NHS records by contacting us directly.",
      "We may collect additional information when you provide feedback, respond to surveys and/or promotions, provide financial information, or communicate with us.",
      "We also collect information from and about the device(s) used to access the App or Platform, and information about your activity such as how you use and interact with our services.",
      "Please note that our App and Platform is an NHS integrated app. When you access using your NHS login details, the identity verification services are managed by NHS England.",
    ],
  },
  {
    number: 9,
    title: "Payment Information",
    type: "paragraphs",
    content: [
      "We may process your personal information to process payments made for the provision of services. This may include information for identification and verification, such as your name, credit, debit or other card number, card expiration date, and CVV code.",
      "Any payment transactions carried out by us or our chosen third party provider will be kept secure and encrypted where possible. Our payment partners are currently Ryft Pay and Stripe (being phased out).",
    ],
  },
  {
    number: 10,
    title: "Why Do We Process Your Information and What Is Our Legal Basis?",
    type: "bulletPoints",
    beforeText:
      "We will only use your personal information if we have a proper reason to process it and the law allows us to do so. Most commonly, we will use your personal information in the following circumstances:",
    bulletPoints: [
      "Where you have consented before the processing",
      "Where we need to perform a contract we are about to enter or have entered with you",
      "Where it is necessary for our legitimate interests (or those of a third party) and your interests do not override those interests",
      "Where it is necessary to protect your vital interests where you are physically or legally incapable of giving consent",
      "For reasons of substantial public interest or the management of health or social care systems and services",
      "Where we need to comply with a legal or regulatory obligation",
    ],
    afterText:
      "Whenever you have given us your consent to use your personal information, you have the right to change your mind at any time and withdraw that consent. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent.",
  },
  {
    number: 11,
    title: "Automated Decision Making",
    type: "paragraphs",
    content: [
      "You will be notified if we make a solely automated decision which produces a legal effect or significantly affects you.",
      "Unless otherwise agreed with you, we will not use any of your personal information for automated decision making or profiling. Please note you also have a right to object to profiling and solely automated decision making.",
    ],
  },
  {
    number: 12,
    title: "Who Do We Share Your Information With and Why?",
    type: "bulletPoints",
    beforeText:
      "We sometimes share your personal information with trusted third parties. The reasons we may share your information are:",
    bulletPoints: [
      "To provide you with our services",
      "If we are under a legal or regulatory duty to do so",
      "If it is necessary to enforce our terms of use or other contractual rights",
      "To lawfully assist the police or security services with the prevention and detection of crime or terrorist activity",
      "Where such disclosure is necessary to protect the safety or security of any persons",
      "Otherwise as permitted under applicable law",
    ],
    afterText:
      "We only provide third parties with the information they need to perform their specific services. We work closely with all third parties to ensure your personal data is secure and protected at all times. We do not allow our third-party service providers to use your personal data for their own purposes.",
  },
  {
    number: 13,
    title: "Marketing",
    type: "paragraphs",
    content: [
      "We strive to provide you with choices regarding certain personal information uses, particularly around marketing and advertising.",
      "If you have given your consent to receive marketing emails, you can withdraw this at any time, or if we are relying on our legitimate interests to send you marketing, you can object.",
      "If you have received a direct marketing email from us and no longer wish to receive these, the easiest way to let us know is to click on the unsubscribe link at the bottom of our marketing emails.",
    ],
  },
  {
    number: 14,
    title: "Where Is Your Personal Information Processed?",
    type: "paragraphs",
    content: [
      "Sometimes, we will need to share your personal information with third parties and suppliers outside the UK, such as Europe and the USA.",
      "In the event we need to transfer your personal information outside the UK, we will ensure we have in place adequate safeguards to do so. Our safeguards ensure that your personal information receives the same protection as if it were being processed inside the UK.",
      "Any transfer of your personal information will follow applicable laws and we will follow the guiding principles of this Privacy Notice.",
    ],
  },
  {
    number: 15,
    title: "What Are My Privacy Rights?",
    type: "bulletPointsWithTitles",
    beforeText:
      "You are able to exercise your rights over the personal information which we process, including:",
    bulletPoints: [
      {
        title: "Right to be informed",
        desc: "We aim to be transparent within our Privacy Notice and provide you with information about how we use your personal information",
      },
      {
        title: "Right of access",
        desc: "You have the right to request a copy of any information that we hold about you through a subject access request",
      },
      {
        title: "Right to rectification",
        desc: "You have the right to request the correction of your personal data when it is incorrect, out of date or incomplete",
      },
      {
        title: "Right to erasure",
        desc: "You can request the erasure of your personal data when it is no longer necessary, you withdraw consent, or you object to its processing",
      },
      {
        title: "Right to restrict processing",
        desc: "You can request that we restrict the processing of your personal data in certain circumstances",
      },
      {
        title: "Right to data portability",
        desc: "Under some circumstances, you can request a copy of the personal data you provided to us in a machine-readable format",
      },
      {
        title: "Right to object",
        desc: "In some circumstances, you can stop the processing of your personal data for reasons connected to your individual situation",
      },
      {
        title: "Right not to be subject to automated decision making",
        desc: "You have the right to not be subject to solely automatic decisions that have a legal or similarly significant effect on you",
      },
    ],
    afterText:
      "You will not have to pay a fee to exercise any of these rights. However, we may charge a reasonable fee if your request is clearly unfounded or excessive. We try to respond to all legitimate requests within one month.",
  },
  {
    number: 16,
    title: "How Do We Protect Your Personal Information?",
    type: "paragraphs",
    content: [
      "We have implemented, and will maintain current, reasonable physical, technical, and organisational security measures to protect your personal information from loss, misuse, and unauthorised access, disclosure, alteration, or destruction.",
      "We use encryption to add an extra layer of protection to your data while it is stored on the App or Platform and for personal information which is transmitted.",
      "Where we have given you (or where you have chosen) a password which enables you to access certain parts of our service, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.",
      "Unfortunately, the transmission of information via the internet is not completely secure. Although we have security measures in place to protect your personal information, we cannot guarantee the security of your data transmitted to our sites; any transmission is at your own risk.",
    ],
  },
  {
    number: 17,
    title: "How Long Do We Retain Your Personal Information?",
    type: "paragraphs",
    content: [
      "Your personal information will be stored in accordance with applicable laws and kept for as long as needed to carry out the purposes described in this policy or as otherwise required by applicable law or NHS mandate.",
    ],
  },
  {
    number: 18,
    title: "Can This Privacy Notice Change?",
    type: "paragraphs",
    content: [
      "This Privacy Notice may be amended from time to time. We will post any changes we may make on this page and, where appropriate, notify you via email.",
    ],
  },
  {
    number: 19,
    title: "How Can We Help You Further?",
    type: "contact",
    beforeText:
      "If you have any questions or comments, please contact us. For further information on data protection, please visit the Information Commissioner's Office (ICO) website. The ICO regulates data protection. If you feel that your information has not been handled correctly, you have the right to lodge a complaint with the ICO. You can contact them by calling 0303 123 1113.",
    contactInfo: {
      name: "MECKAY LIMITED (Belvedere Pharmacy)",
      address1: "Oakhurst, St Pauls Wood Hill",
      address2: "Orpington, England, BR5 2SR",
      phone: "+44 (0) 1234 567890",
      email: "Belvederepharmacy@yahoo.com",
    },
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

// Consolidated Cookie Policy Data
export const COOKIE_POLICY_DATA = [
  {
    number: 1,
    type: "text",
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files that are sent to or accessed from your web browser or your device's memory. A cookie typically contains the name of the domain (internet location) from which the cookie originated, the lifetime of the cookie (i.e., when it expires) and a randomly generated unique number or other identifier.",
      "There are many functions of cookies. Cookies enable you to move around our website and use its features. Without these cookies, you may experience problems using our website. Cookies can also provide us with information about how you use our website.",
      "Cookies can be used to show you adverts that are relevant to you, based on your browsing habits, and used to personalise your user experience. For example, to personalise your experience, cookies can help us to remember your account details or username and preferences, analyse how well our website is performing or even allow us to recommend content we believe will be most relevant to you.",
      "Certain cookies can collect personal information, other cookies used do not collect information that identifies you and will instead collect more general information such as how users arrive at and use our website or a user's general location.",
    ],
  },
  {
    number: 2,
    type: "cookie-types",
    title: "Types of Cookies We Use",
    cookieTypes: [
      {
        title: "Essential Cookies",
        description:
          "These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.",
        color: "primary" as const,
        note: "These cookies cannot be disabled as the website would not function without them.",
        data: COOKIE_POLICY_ESSENTIAL,
      },
      {
        title: "Performance and Analytics Cookies",
        description:
          "These cookies help us understand how visitors interact with our website. They collect anonymous data about page visits, user behavior, and site performance.",
        color: "chart-2" as const,
        note: "You can disable these cookies without affecting website functionality.",
        data: COOKIE_POLICY_ANALYTICS,
      },
      {
        title: "Marketing and Targeting Cookies",
        description:
          "These cookies track your online activity to deliver personalized advertising content and measure marketing campaign effectiveness.",
        color: "chart-3" as const,
        note: "You can disable these cookies through your browser settings or opt-out services.",
        data: COOKIE_POLICY_MARKETING,
      },
    ],
  },
  {
    number: 3,
    type: "duration",
    title: "How Long Cookies Last",
    intro: "Cookies can be either session-based or persistent:",
    data: COOKIE_POLICY_DURATION,
  },
  {
    number: 4,
    type: "third-party",
    title: "Third-Party Cookies",
    intro:
      "In addition to our own cookies, third-party services may set cookies on your device:",
    data: COOKIE_POLICY_THIRD_PARTY,
  },
  {
    number: 5,
    type: "preferences",
    title: "Managing Your Cookie Preferences",
    intro:
      "You have control over cookies on our website. When you first visit, you'll see a cookie consent banner where you can:",
    data: COOKIE_POLICY_PREFERENCES,
    footer:
      'You can change your cookie preferences at any time by clicking the "Cookie Preferences" link in the footer of our website.',
  },
  {
    number: 6,
    type: "browser-controls",
    title: "Browser Cookie Controls",
    intro: "Most browsers allow you to control cookies through their settings:",
    data: COOKIE_POLICY_BROWSER_CONTROLS,
    note: "Please note: Disabling essential cookies may affect website functionality and your ability to use certain features.",
  },
  {
    number: 7,
    type: "dnt",
    title: "Do Not Track (DNT)",
    content:
      'Some browsers include a "Do Not Track" feature that sends a signal to websites requesting they don\'t track your activity. Currently, there is no industry standard for recognizing DNT signals. We respect your privacy choices but continue to collect analytics data to improve our website unless you disable cookies in your browser settings.',
  },
  {
    number: 8,
    type: "optout",
    title: "Opting Out of Third-Party Tracking",
    intro: "You can opt out of specific third-party services:",
    data: COOKIE_POLICY_OPTOUT,
  },
  {
    number: 9,
    type: "table",
    title: "Detailed Cookie List",
    intro: "Below is a comprehensive list of cookies we use:",
    tableData: COOKIE_POLICY_DETAILED_LIST,
  },
  {
    number: 10,
    type: "security",
    title: "Cookie Security",
    intro: "We take cookie security seriously:",
    data: COOKIE_POLICY_SECURITY,
  },
  {
    number: 11,
    type: "contact",
    title: "Questions About Our Cookie Policy",
    intro:
      "If you have questions about our cookie practices or how to manage your preferences, please contact us:",
    contactInfo: {
      name: "Belvedere Pharmacy (MECKAY LIMITED)",
      address: ["Oakhurst, St Pauls Wood Hill", "Orpington, Kent BR5 2SR"],
      phone: "+44 (0) 1234 567890",
      email: "info@belvederepharmacy.com",
    },
  },
  {
    number: 12,
    type: "updates",
    title: "Changes to This Cookie Policy",
    content:
      'We may update this Cookie Policy periodically to reflect changes in technology, regulations, or our practices. The "Last updated" date at the top of this page indicates when it was last revised. We encourage you to review this policy regularly to stay informed about how we use cookies.',
  },
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

export const TERMS_AND_CONDITIONS = [
  {
    number: 1,
    title: "Introduction",
    type: "paragraphs",
    content: [
      "These terms and conditions (the 'Terms') govern your use of our online platform, belvederepharmacy.net (the 'Site') and our smartphone app for iOS and Android devices (the 'App') (the Site and the App being collectively referred to as 'our Platform'), as well as the Services and Products that are made available to you via the Platform.",
      "We are MECKAY LIMITED, a company registered in England and Wales with company number 06454698 and our registered office at Oakhurst, St. Pauls Wood Hill, Orpington, England, BR5 2SR. We operate a pharmacy which is registered with the General Pharmaceutical Council (GPhC) and our GPhC registration number is 2057431.",
      "Our superintendent pharmacist is Michael Tweneboa-Koduah and their GPhC registration number is 2057431.",
      "Please read these Terms carefully and make sure that you understand them. If you wish to access the Products or Services or engage with us via our Platform, you will be asked to agree to these Terms. If you do not accept these Terms, you will not be allowed to access the Products or Services or engage with us via our Platform.",
    ],
  },
  {
    number: 2,
    title: "Our Services",
    type: "bulletPoints",
    bulletPoints: TERMS_SERVICES_LIST,
    afterText:
      "Service availability may vary. Please contact us for current offerings or visit our services page.",
  },
  {
    number: 3,
    title: "Eligibility",
    type: "bulletPoints",
    bulletPoints: TERMS_ELIGIBILITY,
  },
  {
    number: 4,
    title: "Prescriptions and Medication",
    type: "subsections",
    subsections: [
      {
        title: "4.1 Prescription Validity",
        description:
          "Prescriptions are valid for 6 months from the date issued by your healthcare provider. We will not dispense medication on expired or illegible prescriptions.",
      },
      {
        title: "4.2 Accuracy of Information",
        description:
          "You agree to provide accurate information regarding your medical history, current medications, and allergies. Failure to disclose relevant medical information may result in harm.",
      },
      {
        title: "4.3 Right to Refuse",
        description:
          "We reserve the right to refuse to dispense medication if we believe it may be harmful, contraindicated, or if the prescription appears forged or invalid.",
      },
      {
        title: "4.4 Storage and Handling",
        description:
          "It is your responsibility to store medication as directed. We are not liable for medication that has been improperly stored or mishandled.",
      },
    ],
  },
  {
    number: 5,
    title: "Payments and Charges",
    type: "subsections",
    subsections: [
      {
        title: "5.1 NHS Services",
        description:
          "NHS prescription charges apply as set by the Department of Health. Exemptions may apply based on age, medical conditions, or benefits received.",
      },
      {
        title: "5.2 Private Services",
        description:
          "Prices for private services will be provided before treatment. Payment must be made at the time of service unless alternative arrangements have been agreed.",
      },
      {
        title: "5.3 Refunds and Returns",
        description:
          "Medication can only be returned if unused and in original packaging. Returns must be made within 30 days of purchase. Refunds will not be issued for medication that has been opened, used, or stored improperly.",
      },
    ],
  },
  {
    number: 6,
    title: "Confidentiality and Data Protection",
    type: "paragraphs",
    content: [
      "Your health information is confidential and protected under UK data protection laws (GDPR and Data Protection Act 2018). We will only disclose your information with your consent, except where required by law.",
      "For full details on how we collect, use, and protect your data, please refer to our Privacy Policy.",
    ],
  },
  {
    number: 7,
    title: "Limitations of Liability",
    type: "bulletPoints",
    beforeText:
      "To the extent permitted by law, Belvedere Pharmacy shall not be liable for:",
    bulletPoints: TERMS_LIABILITY,
  },
  {
    number: 8,
    title: "Professional Standards and Complaints",
    type: "paragraphs",
    content: [
      "We are committed to providing high-quality care. Our team is regulated by the GPhC and follows their standards and guidance.",
      "If you wish to make a complaint, please contact us at info@belvederepharmacy.com or visit our pharmacy. We will investigate and respond to complaints within 10 working days.",
      "You also have the right to complain to the GPhC if you believe we have breached professional standards.",
    ],
  },
  {
    number: 9,
    title: "Website Use",
    type: "subsections",
    subsections: [
      {
        title: "9.1 Acceptable Use",
        description:
          "You agree not to use our website or services for illegal purposes, harassment, or to transmit harmful or malicious code.",
      },
      {
        title: "9.2 Intellectual Property",
        description:
          "All content on our website, including text, images, and logos, is the property of Belvedere Pharmacy and protected by copyright. You may not reproduce or distribute without permission.",
      },
    ],
  },
  {
    number: 10,
    title: "Changes to These Terms",
    type: "paragraphs",
    content: [
      'We may update these Terms from time to time. Changes will be posted on this page, and the "Last updated" date will be revised. Your continued use of our services constitutes acceptance of the revised Terms.',
    ],
  },
  {
    number: 11,
    title: "Governing Law and Jurisdiction",
    type: "paragraphs",
    content: [
      "These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the English courts.",
    ],
  },
  {
    number: 12,
    title: "Contact Information",
    type: "contact",
    beforeText:
      "If you have questions about these Terms and Conditions, please contact us:",
    contactInfo: {
      name: "Belvedere Pharmacy (MECKAY LIMITED)",
      address1: "Oakhurst, St Pauls Wood Hill",
      address2: "Orpington, Kent BR5 2SR",
      phone: "+44 (0) 1234 567890",
      email: "info@belvederepharmacy.com",
    },
  },
];

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
