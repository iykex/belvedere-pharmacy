import { KnowledgeBaseItem } from "@/lib/types/chatbot";

// Cache keys and durations
export const VISITOR_NAME_KEY = "belvedere_visitor_name";
export const VISITOR_NAME_EXPIRY_KEY = "belvedere_visitor_name_expiry";
export const CHAT_HISTORY_KEY = "belvedere_chat_history";
export const CHAT_LAST_ACTIVITY_KEY = "belvedere_chat_last_activity";
export const CACHE_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours
export const IDLE_THRESHOLD_MS = 15 * 60 * 1000; // 15 minutes

// Knowledge base for the chatbot with optional action buttons
export const KNOWLEDGE_BASE: KnowledgeBaseItem[] = [
  {
    keywords: ["opening", "hours", "open", "close", "time", "when"],
    answer:
      "We're open Monday to Friday from 9am to 6:30pm, and Saturday from 9am to 2pm. We're closed on Sundays and Bank Holidays. For emergencies, our 24/7 on-call service is available.",
    actions: [
      { label: "Call Us", href: "tel:+441234567890", icon: "phone" },
      { label: "Find Us", href: "/contact-us", icon: "location" },
    ],
  },
  {
    keywords: ["appointment", "book", "schedule", "pharmacy first"],
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to minimize waiting times. You can book online through our website or call us directly. For Pharmacy First services, appointments help ensure our pharmacist is available.",
    actions: [
      { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
      { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
    ],
  },
  {
    keywords: ["free", "cost", "price", "pay", "nhs", "charge"],
    answer:
      "NHS Pharmacy First services are free for patients eligible for free NHS prescriptions. Others may need to pay the standard NHS prescription charge. Private services have varying costs - please contact us for specific pricing.",
    actions: [
      { label: "View Services", href: "/services", icon: "external" },
      { label: "Contact Us", href: "/contact-us", icon: "phone" },
    ],
  },
  {
    keywords: ["prescription", "repeat", "order", "refill", "medicine"],
    answer:
      "You can order repeat prescriptions through our website, mobile app, by phone, or in person. We also offer a free prescription delivery service within the local area. Same-day dispensing is available for most prescriptions.",
    actions: [
      { label: "Order Prescription", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
      { label: "Download App", href: "#download-app", icon: "external" },
    ],
  },
  {
    keywords: ["medication", "review", "side effect", "advice"],
    answer:
      "Yes! We offer free medication reviews to help ensure you're getting the most from your medicines. Our pharmacists can address any concerns about side effects and help optimize your medication regimen.",
    actions: [
      { label: "Book Review", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
    ],
  },
  {
    keywords: ["vaccination", "vaccine", "flu", "covid", "jab", "immunization"],
    answer:
      "We offer various vaccinations including flu, COVID-19, and travel vaccines. Some are available on the NHS for eligible patients, while others are private services. Walk-ins are welcome, but booking ensures availability.",
    actions: [
      { label: "Book Vaccination", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
      { label: "View Services", href: "/services", icon: "external" },
    ],
  },
  {
    keywords: ["delivery", "collect", "pickup", "home"],
    answer:
      "We offer free medication delivery within our local area and surrounding regions. You can also collect your prescriptions in-store. Delivery is typically same-day for orders placed before 2pm.",
    actions: [
      { label: "Order Now", href: "https://app.belvederepharmacy.net/#/auth/signin", icon: "prescription" },
    ],
  },
  {
    keywords: ["location", "address", "where", "find", "directions"],
    answer:
      "We're located at Oakhurst, St Pauls Wood Hill, Orpington, Kent BR5 2SR. We're easily accessible by public transport and have parking available nearby.",
    actions: [
      { label: "Get Directions", href: "https://maps.google.com/?q=Oakhurst,+St+Pauls+Wood+Hill,+Orpington,+Kent+BR5+2SR", icon: "location" },
      { label: "Contact Page", href: "/contact-us", icon: "external" },
    ],
  },
  {
    keywords: ["contact", "phone", "call", "email", "reach"],
    answer:
      "You can reach us by phone at +44 (0) 1234 567890, email at info@belvederepharmacy.com, or visit us in person. For urgent medical advice when we're closed, call NHS 111.",
    actions: [
      { label: "Call Now", href: "tel:+441234567890", icon: "phone" },
      { label: "Send Email", href: "mailto:info@belvederepharmacy.com", icon: "external" },
    ],
  },
  {
    keywords: ["emergency", "urgent", "999", "111"],
    answer:
      "For life-threatening emergencies, call 999. For urgent but non-emergency medical advice, call NHS 111. Our pharmacists can help with minor ailments through the NHS Pharmacy First scheme.",
    actions: [
      { label: "Call 111", href: "tel:111", icon: "phone" },
      { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
    ],
  },
  {
    keywords: [
      "service",
      "what",
      "offer",
      "help",
      "do you",
      "provide",
      "available",
    ],
    answer:
      "We offer a wide range of services including: NHS Pharmacy First consultations, prescription dispensing, flu & COVID vaccinations, blood pressure checks, medication reviews, travel health clinic, stop smoking support, emergency contraception, and more. How can we help you today?",
    actions: [
      { label: "View All Services", href: "/services", icon: "external" },
      { label: "Book Appointment", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
    ],
  },
  {
    keywords: ["blood pressure", "bp", "check", "heart"],
    answer:
      "We offer quick and accurate blood pressure checks with immediate results. Our pharmacist will provide professional interpretation and follow-up advice. No appointment needed - just walk in during opening hours.",
    actions: [
      { label: "Find Us", href: "/contact-us", icon: "location" },
    ],
  },
  {
    keywords: ["smoking", "quit", "stop", "nicotine"],
    answer:
      "Our Stop Smoking Service provides one-to-one support, nicotine replacement therapy, regular check-ins, and a personalized quit plan. We're here to support you every step of the way on your journey to becoming smoke-free.",
    actions: [
      { label: "Book Consultation", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
    ],
  },
  {
    keywords: ["travel", "holiday", "abroad", "malaria"],
    answer:
      "Our Travel Health Clinic offers destination-specific advice, travel vaccinations, malaria prevention medication, and travel first aid kits. We recommend booking a consultation at least 6-8 weeks before your trip.",
    actions: [
      { label: "Book Travel Clinic", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
    ],
  },
  {
    keywords: ["uti", "urinary", "infection", "women"],
    answer:
      "We provide expert care for women experiencing UTI symptoms like discomfort and frequent urination. Through Pharmacy First, we can assess and treat uncomplicated UTIs without needing a GP appointment.",
    actions: [
      { label: "Learn More", href: "/pharmacy-first", icon: "external" },
      { label: "Book Now", href: "https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection", icon: "calendar" },
    ],
  },
  {
    keywords: ["sore throat", "throat", "cough", "cold"],
    answer:
      "We offer prompt care for sore throats through our Pharmacy First service. Our pharmacist can assess your symptoms and provide treatment to help you feel better quickly - no GP appointment needed.",
    actions: [
      { label: "Pharmacy First", href: "/pharmacy-first", icon: "external" },
    ],
  },
  {
    keywords: ["superintendent", "pharmacist", "gphc", "registration"],
    answer:
      "Our Superintendent Pharmacist is Michael Tweneboa-Koduah, GPhC registration number 2057431. Belvedere Pharmacy is operated by Meckay Limited (Company No. 06454698), registered in the UK.",
    actions: [
      { label: "About Us", href: "/about-us", icon: "external" },
    ],
  },
  {
    keywords: ["company", "meckay", "registered", "business"],
    answer:
      "Belvedere Pharmacy is operated by Meckay Limited, a UK registered company (Company No. 06454698). Our registered address is Oakhurst, St Pauls Wood Hill, BR5 2SR.",
    actions: [
      { label: "About Us", href: "/about-us", icon: "external" },
    ],
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    answer:
      "Hello! 👋 Welcome to Belvedere Pharmacy. I'm here to help answer your questions about our services, opening hours, prescriptions, and more. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "cheers", "appreciate"],
    answer:
      "You're welcome! 😊 Is there anything else I can help you with today? Feel free to ask about our services, appointments, or any other questions you might have.",
  },
];

// Quick actions data with Tabler icon names
export const QUICK_ACTIONS_DATA = [
  {
    label: "Opening Hours",
    query: "What are your opening hours?",
    icon: "IconClock" as const,
  },
  {
    label: "Contact Info",
    query: "How can I contact you?",
    icon: "IconPhone" as const,
  },
  {
    label: "Our Location",
    query: "Where are you located?",
    icon: "IconMapPin" as const,
  },
  {
    label: "Our Services",
    query: "What services do you offer?",
    icon: "IconPill" as const,
  },
];

