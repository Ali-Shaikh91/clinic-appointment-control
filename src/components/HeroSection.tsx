
import { Calendar, Phone, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

const HeroSection = ({ setActiveTab }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="bg-pattern absolute inset-0 opacity-40"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
            <Heart className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up">
          {t('home.title')}
        </h1>
        
        <p className="text-3xl text-slate-600 mb-4 font-medium">
          {t('home.subtitle')}
        </p>
        
        <p className="text-xl text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('home.description')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => setActiveTab("appointments")}
            className="btn-professional flex items-center text-xl px-12 py-4 rounded-xl"
          >
            <Calendar className="mr-3 h-6 w-6" />
            {t('home.bookAppointment')}
          </button>
          
          <button
            onClick={() => setActiveTab("contact")}
            className="btn-secondary flex items-center text-xl px-12 py-4 rounded-xl text-white"
          >
            <Phone className="mr-3 h-6 w-6" />
            {t('home.contactUs')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
