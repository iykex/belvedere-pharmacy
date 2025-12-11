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
import adamPeaceImage from "@/public/testimonials/adam-peace.png";
import alfrnaThompasImage from "@/public/testimonials/alfrina-thomas.png";
import annMarieMarcroftImage from "@/public/testimonials/ann-marie-marcroft.png";
import colinBradburyImage from "@/public/testimonials/colin-bradbury.png";
import elizabethVousdenImage from "@/public/testimonials/elizabeth-vousden.png";
import jenniferStevensImage from "@/public/testimonials/jennifer-stevens.png";
import kennethShoreImage from "@/public/testimonials/kenneth-shore.png";
import kimberleyEllisImage from "@/public/testimonials/kimberley-ellis.png";
import lesleySellmanImage from "@/public/testimonials/lesley-sellman.png";
import oebrnImage from "@/public/testimonials/oeben.png";
import sawenAliImage from "@/public/testimonials/sawen-ali.png";
import sebastianPodbornyImage from "@/public/testimonials/sebastian_podborny.png";
import {
  IconAward,
  IconBolt,
  IconHeart,
  IconPill,
  IconShield,
  IconShieldCheck,
  IconTrendingUp,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Adam Pearce",
    role: "Local Guide",
    image: adamPeaceImage,
    content:
      "Often busy but well organised, well stocked and normally pretty quick if they need to order in. Very helpful if you call regarding prescriptions.",
  },
  {
    id: 2,
    name: "Elizabeth Vousden",
    role: "Local Guide",
    image: elizabethVousdenImage,
    content:
      "Always polite, happy and they remember me by name every time. Glad they are always there for me when needed.",
  },
  {
    id: 3,
    name: "Sawen Ali",
    role: "Customer",
    image: sawenAliImage,
    content:
      "They are miles better than any experience I had away from home. Especially fantastic when I've needed emergency prescriptions and they've gone out of their way to sort things out. Always kind and professional.",
  },
  {
    id: 4,
    name: "Lesley Sellman",
    role: "Local Guide",
    image: lesleySellmanImage,
    content:
      "Absolutely brilliant staff. I regularly pick up my medication from them. Always helpful and pleasant. I also have my flu and COVID vaccinations with them.",
  },
  {
    id: 5,
    name: "Jennifer Stevens",
    role: "Customer",
    image: jenniferStevensImage,
    content:
      "I got my vaccine booster done here and the whole team were amazing. They were working incredibly hard under pressure with closing time approaching. What a lovely team!",
  },
  {
    id: 6,
    name: "Sebastian Podborny",
    role: "Customer",
    image: sebastianPodbornyImage,
    content:
      "First time I feel like someone really cares about the customer. They did more than I expected. Many thanks to Aisha and her team.",
  },
  {
    id: 7,
    name: "Colin Bradbury",
    role: "Local Guide",
    image: colinBradburyImage,
    content:
      "Went in for a COVID booster jab. I was politely directed and attended to quickly. Nice people — polite and professional.",
  },
  {
    id: 8,
    name: "Ann Marie Marcroft",
    role: "Customer",
    image: annMarieMarcroftImage,
    content: "The staff are very friendly, reliable and welcoming.",
  },
  {
    id: 9,
    name: "Alfrina Thomas",
    role: "Customer",
    image: alfrnaThompasImage,
    content:
      "Top box service from a local pharmacy. Efficient, helpful and pleasant staff.",
  },
  {
    id: 10,
    name: "Kenneth Shore",
    role: "Local Guide",
    image: kennethShoreImage,
    content: "Great local pharmacy with very helpful and knowledgeable staff.",
  },
  {
    id: 11,
    name: "OEBEN",
    role: "Customer",
    image: oebrnImage,
    content: "Awesome environment and fast response.",
  },
  {
    id: 12,
    name: "Kimberley Ellis",
    role: "Local Guide",
    image: kimberleyEllisImage,
    content: "Service was quick and friendly.",
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
  // {
  //   title: "Minor Ailment Service",
  //   description:
  //     "Treatment and advice for common minor health conditions without seeing a GP.",
  //   category: "health",
  //   features: [
  //     "No appointment needed",
  //     "NHS service",
  //     "Range of conditions covered",
  //     "Prescription if needed",
  //   ],
  //   image: minorAilmentImage,
  //   link: "/services/minor-ailments",
  //   icon: IconPill,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
  // {
  //   title: "Prescription Dispensing",
  //   description:
  //     "Fast and accurate dispensing of NHS and private prescriptions with expert advice on medication use.",
  //   category: "pharmacy",
  //   features: [
  //     "NHS & private prescriptions",
  //     "Electronic prescription service",
  //     "Repeat prescription service",
  //     "Medication counseling",
  //   ],
  //   image: prescriptionDispensingImage,
  //   link: "/services/prescriptions",
  //   icon: IconPill,
  //   color: "from-primary/20 to-primary/5",
  //   borderColor: "border-primary/30",
  // },
  // {
  //   title: "Medication Review",
  //   description:
  //     "Comprehensive review of your medications to ensure they're working effectively for you.",
  //   category: "pharmacy",
  //   features: [
  //     "One-to-one consultation",
  //     "Side effect management",
  //     "Medication optimization",
  //     "Written summary provided",
  //   ],
  //   image: medicationReviewImage,
  //   link: "/services/medication-review",
  //   icon: IconHeart,
  //   color: "from-chart-2/20 to-chart-2/5",
  //   borderColor: "border-chart-2/30",
  // },
  // {
  //   title: "Weight Management",
  //   description:
  //     "Personalized advice and support to help you achieve and maintain a healthy weight.",
  //   category: "specialized",
  //   features: [
  //     "Nutritional advice",
  //     "Body composition analysis",
  //     "Goal setting",
  //     "Ongoing support",
  //   ],
  //   image: weightManagementImage,
  //   link: "/services/weight-management",
  //   icon: IconTrendingUp,
  //   color: "from-chart-2/20 to-chart-2/5",
  //   borderColor: "border-chart-2/30",
  // },
  // {
  //   title: "Travel Health Clinic",
  //   description:
  //     "Comprehensive travel health advice and vaccinations for your international trips.",
  //   category: "specialized",
  //   features: [
  //     "Destination-specific advice",
  //     "Travel vaccinations",
  //     "Malaria prevention",
  //     "Travel first aid kits",
  //   ],
  //   image: travelClinicImage,
  //   link: "/services/travel-health",
  //   icon: IconShield,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
  // {
  //   title: "Cholesterol Testing",
  //   description:
  //     "Quick and accurate testing of your cholesterol levels with expert interpretation.",
  //   category: "preventive",
  //   features: [
  //     "Finger-prick test",
  //     "Full lipid profile",
  //     "Immediate results",
  //     "Lifestyle advice",
  //   ],
  //   image: cholesterolTestsImage,
  //   link: "/services/cholesterol-testing",
  //   icon: IconHeart,
  //   color: "from-primary/20 to-primary/5",
  //   borderColor: "border-primary/30",
  // },
  // {
  //   title: "Diabetes Screening",
  //   description:
  //     "Early detection of diabetes risk factors through our comprehensive screening service.",
  //   category: "preventive",
  //   features: [
  //     "Blood glucose testing",
  //     "Risk assessment",
  //     "Lifestyle advice",
  //     "Referral if needed",
  //   ],
  //   image: diabetesScreeningImage,
  //   link: "/services/diabetes-screening",
  //   icon: IconHeart,
  //   color: "from-chart-3/20 to-chart-3/5",
  //   borderColor: "border-chart-3/30",
  // },
];

export const TEAM_MEMBERS = [
  {
    name: "Michael Tweneboah-Koduah",
    role: "Superintendent",
    bio: "Mr. Michael has over 15 years of experience in pharmacy care and specializes in medication management for chronic conditions.",
    image: "/team/sarah-johnson.jpg",
    experience: "15 years",
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
    color: "from-[#FFF9E6] to-[#FFF3CC]",
    iconColor: "text-[#F9A825]",
  },
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
