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
    image: "/conditions/ear-pain.jpg",
    description:
      "Treatment is suitable for children aged between 1 and 17 years. For those over 18, GP consultations are free at Belvedere Pharmacy. Our pharmacists are specially trained to diagnose and treat ear infections. We understand ear troubles can be frustrating, so our dedicated healthcare team is here to help.",
    serviceId: "ear-pain",
    badge: "Ages 1-17",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Infected Insect Bites",
    image: "/conditions/insect-bite.jpg",
    description:
      "For those dealing with complications from insect bites, Belvedere Pharmacy provides comprehensive care. Our skilled team is ready to assess and treat infected insect bite concerns, ensuring your swift and effective recovery with professional and compassionate care.",
    serviceId: "skin-infection",
    badge: "All Ages",
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    title: "Bacterial Skin Infection",
    image: "/conditions/skin-infections.jpg",
    description:
      "We provide assessment, treatment, and guidance for effective management of various skin infections, offering both NHS and private services. Our expert team will help diagnose your skin condition and recommend proper treatment, ensuring prompt and comfortable recovery.",
    serviceId: "skin-infection",
    badge: "Common",
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    title: "Shingles",
    image: "/conditions/shingles.jpg",
    description:
      "If you are experiencing painful rashes, blisters, or itching, our healthcare team at Belvedere Pharmacy is here to help. We offer assessment, treatment, and support for effective shingles management, with compassionate, professional care to guide you through your recovery journey.",
    serviceId: "shingles",
    badge: "Urgent",
    color: "from-destructive/20 to-destructive/5",
  },
  {
    title: "Sinus Infection",
    image: "/conditions/sinus-infection.jpg",
    description:
      "Belvedere Pharmacy offers treatment for sinusitis. If you are experiencing a stuffy nose, headache, or facial pain, we can help. Our services include assessment, treatment, and guidance for effective sinus infection management, with professional support for your journey to relief.",
    serviceId: "sinus-infection",
    badge: "Common",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Sore Throat Consultations",
    image: "/conditions/sore-throat.jpeg",
    description:
      "Discover prompt and effective care for sore throats at Belvedere Pharmacy. If a scratchy, irritated throat is slowing you down, we have the remedy to restore your comfort. Our accessible services provide quick assessment and treatment to help you feel better quickly.",
    serviceId: "sore-throat",
    badge: "Fast Relief",
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    title: "Urinary Tract Infection in Women",
    description:
      "Expert care for women experiencing UTI symptoms like discomfort and frequent urination. We provide professional advice, assessment, and effective treatment with personalized attention.",
    image: "/conditions/uti.jpg",
    badge: "Women Only",
    color: "from-chart-2/20 to-chart-2/5",
    serviceId: "uti",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/medication-review",
    icon: IconHeart,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
  },
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/flu-vaccination",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/covid-vaccination",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/blood-pressure",
    icon: IconTrendingUp,
    color: "from-chart-2/20 to-chart-2/5",
    borderColor: "border-chart-2/30",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/diabetes-screening",
    icon: IconHeart,
    color: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/30",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/stop-smoking",
    icon: IconBolt,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/cholesterol-testing",
    icon: IconHeart,
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/emergency-contraception",
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
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/minor-ailments",
    icon: IconPill,
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
