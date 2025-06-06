
import { Users, Calendar, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            {t('home.services')}
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            {t('home.servicesSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="professional-card rounded-2xl p-8 text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {t('home.generalMedicine')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('home.generalMedicineDesc')}
            </p>
          </div>

          <div className="professional-card rounded-2xl p-8 text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              {t('home.specialistConsultation')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('home.specialistConsultationDesc')}
            </p>
          </div>

          <div className="professional-card rounded-2xl p-8 text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Package className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              {t('home.diagnosticServices')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('home.diagnosticServicesDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
