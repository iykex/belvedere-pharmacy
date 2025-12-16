export const USER_ID_KEY = "uid";
export const SESSION_ID_KEY = "sid";
export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 min
export const GEO_LOCATION_PROVIDER = "https://ipapi.co/json/";
export const TRACKING_ROUTE = "/api/analytics";
export const CACHED_LOCATION_KEY = "user-location";
export const TRACKING_EVENTS = {
  pageView: "page_view",
  phoneContactClick: "phone_contact_click",
  emailClick: "email_address_click",
  bookAppointmentButton: "book_appointment_button_click",
  orderPrescriptionButton: "order_prescription_button_click",
  contactFormSubmit: "contact_form_submit",
  chatSendButton: "chat_send_button_click",
  chatToggleButton: "chat_toggle_button_click",
  cookieToggleButton: "cookie_toggle_button",
  cookieAcceptAll: "cookie_accept_all_click",
  cookieEssentialOnly: "cookie_essential_only_click",
  cookieCustomise: "cookie_customize_click",
  cookieCustomiseView: "cookie_customize_view",
  androidAppDownloadButton: "android_app_download_button_click",
  iosAppDownloadButton: "ios_app_download_button_click",
  newsletterSubscribe: "newsletter_subscribe_click",
  testimonialNavigation: "testimonial_navigation_click",
  utiWomenBookAppointment: "uti_women_book_appointment_click",
  soreThroatBookAppointment: "sore_throat_book_appointment_click",
  earPainBookAppointment: "ear_pain_book_appointment_click",
  infectedInsectBitesBookAppointment:
    "infected_insect_bites_book_appointment_click",
  bacterialSkinInfectionBookAppointment:
    "bacterial_skin_infection_book_appointment_click",
  shinglesBookAppointment: "shingles_book_appointment_click",
  sinusInfectionBookAppointment: "sinus_infection_book_appointment_click",
  fluVaccinationBookAppointment: "flu_vaccination_book_appointment_click",
  covidVaccinationBookAppointment: "covid_vaccination_book_appointment_click",
  bloodPressureCheckBookAppointment:
    "blood_pressure_check_book_appointment_click",
  stopSmokingBookAppointment: "stop_smoking_book_appointment_click",
  emergencyContraceptionBookAppointment:
    "emergency_contraception_book_appointment_click",
  darkModeEnable: "dark_mode_enable",
  lightModeEnable: "light_mode_enable",
  whatsappLink: "whatsapp_link_click",
  linkedInLink: "linkedin_link_click",
  instagram: "instagram_link_click",
  x: "x_link_click",
  facebook: "facebook_link_click",
};
