export const USER_ID_KEY = "uid";
export const SESSION_ID_KEY = "sid";
export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 min
export const GEO_LOCATION_PROVIDER = "https://ipapi.co/json/";

export const TRACKING_EVENTS = {
  pageView: "page_view",

  // CTA Buttons - Main Navigation
  bookAppointmentButton: "book_appointment_button_click",
  orderPrescriptionButton: "order_prescription_button_click",

  // App Download Buttons
  androidAppDownloadButton: "android_app_download_button_click",
  iosAppDownloadButton: "ios_app_download_button_click",

  // Service Cards - Explore Service Buttons
  fluVaccinationExplore: "flu_vaccination_explore_click",
  covidVaccinationExplore: "covid_vaccination_explore_click",
  bloodPressureCheckExplore: "blood_pressure_check_explore_click",
  stopSmokingExplore: "stop_smoking_explore_click",
  emergencyContraceptionExplore: "emergency_contraception_explore_click",

  // Pharmacy First - Conditions Buttons
  earPainBookAppointment: "ear_pain_book_appointment_click",
  infectedInsectBitesBookAppointment:
    "infected_insect_bites_book_appointment_click",
  bacterialSkinInfectionBookAppointment:
    "bacterial_skin_infection_book_appointment_click",
  shinglesBookAppointment: "shingles_book_appointment_click",
  sinusInfectionBookAppointment: "sinus_infection_book_appointment_click",
  soreThroatBookAppointment: "sore_throat_book_appointment_click",
  utiWomenBookAppointment: "uti_women_book_appointment_click",

  // Pharmacy First Service Cards
  earPainExplore: "ear_pain_condition_explore_click",
  insectBiteExplore: "insect_bite_condition_explore_click",
  skinInfectionExplore: "skin_infection_condition_explore_click",
  shinglesExplore: "shingles_condition_explore_click",
  sinusExplore: "sinus_condition_explore_click",
  soreThroatExplore: "sore_throat_condition_explore_click",
  utiExplore: "uti_condition_explore_click",

  // Contact Form
  contactFormSubmit: "contact_form_submit",

  // CTA Section Buttons
  ctaBookAppointmentButton: "cta_book_appointment_button_click",
  ctaContactUsButton: "cta_contact_us_button_click",
  ctaSendMessageButton: "cta_send_message_button_click",

  // CTA Section Contact Links
  ctaPhoneClick: "cta_phone_click",
  ctaEmailClick: "cta_email_click",

  // Newsletter
  newsletterSubscribe: "newsletter_subscribe_click",

  // FAQ Chatbot
  chatToggleButton: "chat_toggle_button_click",
  chatSendButton: "chat_send_button_click",

  // Testimonials
  testimonialDotNavigation: "testimonial_dot_navigation_click",
  leaveReviewButton: "leave_review_button_click",

  // Cookie Consent
  cookieAcceptAll: "cookie_accept_all_click",
  cookieEssentialOnly: "cookie_essential_only_click",
  cookieCustomize: "cookie_customize_click",

  // Footer Links
  footerQuickLink: "footer_quick_link_click",
  footerServiceLink: "footer_service_link_click",
  footerLegalLink: "footer_legal_link_click",
  socialMediaLink: "social_media_link_click",
  whatsappLink: "whatsapp_link_click",
  phoneLink: "phone_link_click",
  emailLink: "email_link_click",

  // Contact Page
  contactPhoneCall: "contact_phone_call_click",
  contactEmailClick: "contact_email_click",
  contactAddressClick: "contact_address_click",
  contactMapInteraction: "contact_map_interaction",

  // Theme Mode Toggle
  themeModeToggle: "theme_mode_toggle_click",
  darkModeEnable: "dark_mode_enable",
  lightModeEnable: "light_mode_enable",

  // Footer Contact Info
  footerPhoneClick: "footer_phone_click",
  footerEmailClick: "footer_email_click",
  footerAddressClick: "footer_address_click",
};
