
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'hi' | 'en' | 'hinglish';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.appointments': 'अपॉइंटमेंट',
    'nav.inventory': 'इन्वेंटरी',
    'nav.contact': 'संपर्क',
    'nav.settings': 'सेटिंग्स',
    
    // Home page
    'home.title': 'राज मेडिकल',
    'home.subtitle': 'आपके स्वास्थ्य की देखभाल हमारी प्राथमिकता',
    'home.description': 'गुणवत्तापूर्ण स्वास्थ्य सेवाएं, करुणा और उत्कृष्टता के साथ। हम आपके परिवार के स्वास्थ्य के लिए यहाँ हैं।',
    'home.bookAppointment': 'अपॉइंटमेंट बुक करें',
    'home.contactUs': 'संपर्क करें',
    'home.services': 'हमारी सेवाएं',
    'home.servicesSubtitle': 'आपके स्वास्थ्य के लिए व्यापक देखभाल',
    'home.generalMedicine': 'सामान्य चिकित्सा',
    'home.generalMedicineDesc': 'सभी उम्र के लिए व्यापक प्राथमिक देखभाल सेवाएं',
    'home.specialistConsultation': 'विशेषज्ञ परामर्श',
    'home.specialistConsultationDesc': 'हमारे विशेषज्ञ डॉक्टरों की टीम से विशेषज्ञ देखभाल',
    'home.diagnosticServices': 'निदान सेवाएं',
    'home.diagnosticServicesDesc': 'अत्याधुनिक निदान और प्रयोगशाला सेवाएं',
    'home.whyChooseUs': 'राज मेडिकल क्यों चुनें?',
    'home.whyChooseUsDesc': 'हम आपके स्वास्थ्य को सर्वोच्च प्राथमिकता देते हैं',
    'home.experiencedDoctors': 'अनुभवी डॉक्टर',
    'home.experiencedDoctorsDesc': 'योग्य और अनुभवी चिकित्सक',
    'home.modernEquipment': 'आधुनिक उपकरण',
    'home.modernEquipmentDesc': 'नवीनतम चिकित्सा तकनीक',
    'home.24x7Service': '24/7 सेवा',
    'home.24x7ServiceDesc': 'आपातकालीन सेवाएं उपलब्ध',
    'home.affordableRates': 'किफायती दरें',
    'home.affordableRatesDesc': 'सभी के लिए सुलभ स्वास्थ्य सेवा',
    
    // Contact page
    'contact.title': 'संपर्क करें',
    'contact.address': 'पता',
    'contact.contactInfo': 'संपर्क जानकारी',
    'contact.hours': 'समय',
    'contact.phone': 'फोन: (555) 123-4567',
    'contact.emergency': 'आपातकाल: (555) 911-0000',
    'contact.email': 'ईमेल: info@rajmedical.com',
    'contact.mondayFriday': 'सोमवार - शुक्रवार:',
    'contact.mondayFridayTime': 'सुबह 8:00 - शाम 6:00',
    'contact.saturday': 'शनिवार:',
    'contact.saturdayTime': 'सुबह 9:00 - शाम 4:00',
    'contact.sunday': 'रविवार:',
    'contact.sundayTime': 'केवल आपातकाल',
    
    // Settings page
    'settings.title': 'सेटिंग्स',
    'settings.language': 'भाषा',
    'settings.theme': 'थीम',
    'settings.general': 'सामान्य',
    'settings.notifications': 'सूचनाएं',
    'settings.privacy': 'गोपनीयता',
    'settings.about': 'के बारे में',
    'settings.hindi': 'हिंदी',
    'settings.english': 'अंग्रेजी',
    'settings.hinglish': 'हिंग्लिश',
    'settings.light': 'लाइट',
    'settings.dark': 'डार्क',
    'settings.system': 'सिस्टम',
    'settings.saveChanges': 'परिवर्तन सहेजें',
    'settings.version': 'संस्करण',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.appointments': 'Appointments',
    'nav.inventory': 'Inventory',
    'nav.contact': 'Contact',
    'nav.settings': 'Settings',
    
    // Home page
    'home.title': 'Raj Medical',
    'home.subtitle': 'Your Health is Our Priority',
    'home.description': 'Quality healthcare services with compassion and excellence. We are here for your family\'s health.',
    'home.bookAppointment': 'Book Appointment',
    'home.contactUs': 'Contact Us',
    'home.services': 'Our Services',
    'home.servicesSubtitle': 'Comprehensive care for your health',
    'home.generalMedicine': 'General Medicine',
    'home.generalMedicineDesc': 'Comprehensive primary care services for all ages',
    'home.specialistConsultation': 'Specialist Consultation',
    'home.specialistConsultationDesc': 'Expert care from our team of specialist doctors',
    'home.diagnosticServices': 'Diagnostic Services',
    'home.diagnosticServicesDesc': 'State-of-the-art diagnostic and laboratory services',
    'home.whyChooseUs': 'Why Choose Raj Medical?',
    'home.whyChooseUsDesc': 'We prioritize your health above all',
    'home.experiencedDoctors': 'Experienced Doctors',
    'home.experiencedDoctorsDesc': 'Qualified and experienced physicians',
    'home.modernEquipment': 'Modern Equipment',
    'home.modernEquipmentDesc': 'Latest medical technology',
    'home.24x7Service': '24/7 Service',
    'home.24x7ServiceDesc': 'Emergency services available',
    'home.affordableRates': 'Affordable Rates',
    'home.affordableRatesDesc': 'Accessible healthcare for everyone',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.contactInfo': 'Contact Information',
    'contact.hours': 'Hours',
    'contact.phone': 'Phone: (555) 123-4567',
    'contact.emergency': 'Emergency: (555) 911-0000',
    'contact.email': 'Email: info@rajmedical.com',
    'contact.mondayFriday': 'Monday - Friday:',
    'contact.mondayFridayTime': '8:00 AM - 6:00 PM',
    'contact.saturday': 'Saturday:',
    'contact.saturdayTime': '9:00 AM - 4:00 PM',
    'contact.sunday': 'Sunday:',
    'contact.sundayTime': 'Emergency Only',
    
    // Settings page
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.general': 'General',
    'settings.notifications': 'Notifications',
    'settings.privacy': 'Privacy',
    'settings.about': 'About',
    'settings.hindi': 'Hindi',
    'settings.english': 'English',
    'settings.hinglish': 'Hinglish',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'settings.system': 'System',
    'settings.saveChanges': 'Save Changes',
    'settings.version': 'Version',
  },
  hinglish: {
    // Navigation
    'nav.home': 'Home',
    'nav.appointments': 'Appointments',
    'nav.inventory': 'Inventory',
    'nav.contact': 'Contact',
    'nav.settings': 'Settings',
    
    // Home page
    'home.title': 'Raj Medical',
    'home.subtitle': 'Aapki Health Hamari Priority Hai',
    'home.description': 'Quality healthcare services with compassion aur excellence ke saath. Hum aapke family ke health ke liye yahan hain.',
    'home.bookAppointment': 'Appointment Book Karein',
    'home.contactUs': 'Contact Karein',
    'home.services': 'Hamari Services',
    'home.servicesSubtitle': 'Aapki health ke liye complete care',
    'home.generalMedicine': 'General Medicine',
    'home.generalMedicineDesc': 'Sabhi age ke liye comprehensive primary care services',
    'home.specialistConsultation': 'Specialist Consultation',
    'home.specialistConsultationDesc': 'Hamare specialist doctors ki team se expert care',
    'home.diagnosticServices': 'Diagnostic Services',
    'home.diagnosticServicesDesc': 'Latest diagnostic aur laboratory services',
    'home.whyChooseUs': 'Raj Medical Kyun Choose Karein?',
    'home.whyChooseUsDesc': 'Hum aapki health ko sabse zyada priority dete hain',
    'home.experiencedDoctors': 'Experienced Doctors',
    'home.experiencedDoctorsDesc': 'Qualified aur experienced physicians',
    'home.modernEquipment': 'Modern Equipment',
    'home.modernEquipmentDesc': 'Latest medical technology',
    'home.24x7Service': '24/7 Service',
    'home.24x7ServiceDesc': 'Emergency services available',
    'home.affordableRates': 'Affordable Rates',
    'home.affordableRatesDesc': 'Sabke liye accessible healthcare',
    
    // Contact page
    'contact.title': 'Contact Karein',
    'contact.address': 'Address',
    'contact.contactInfo': 'Contact Information',
    'contact.hours': 'Timings',
    'contact.phone': 'Phone: (555) 123-4567',
    'contact.emergency': 'Emergency: (555) 911-0000',
    'contact.email': 'Email: info@rajmedical.com',
    'contact.mondayFriday': 'Monday - Friday:',
    'contact.mondayFridayTime': '8:00 AM - 6:00 PM',
    'contact.saturday': 'Saturday:',
    'contact.saturdayTime': '9:00 AM - 4:00 PM',
    'contact.sunday': 'Sunday:',
    'contact.sundayTime': 'Emergency Only',
    
    // Settings page
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.general': 'General',
    'settings.notifications': 'Notifications',
    'settings.privacy': 'Privacy',
    'settings.about': 'About',
    'settings.hindi': 'Hindi',
    'settings.english': 'English',
    'settings.hinglish': 'Hinglish',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'settings.system': 'System',
    'settings.saveChanges': 'Save Karein',
    'settings.version': 'Version',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('raj-medical-language');
    return (saved as Language) || 'hi';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    localStorage.setItem('raj-medical-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
