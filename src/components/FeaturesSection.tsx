
import { Award, Settings, Shield, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { 
      title: t('home.experiencedDoctors'), 
      desc: t('home.experiencedDoctorsDesc'),
      icon: Award,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      title: t('home.modernEquipment'), 
      desc: t('home.modernEquipmentDesc'),
      icon: Settings,
      gradient: "from-emerald-500 to-emerald-600"
    },
    { 
      title: t('home.24x7Service'), 
      desc: t('home.24x7ServiceDesc'),
      icon: Shield,
      gradient: "from-purple-500 to-purple-600"
    },
    { 
      title: t('home.affordableRates'), 
      desc: t('home.affordableRatesDesc'),
      icon: Star,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
            {t('home.whyChooseUs')}
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            {t('home.whyChooseUsDesc')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group">
                <div className="professional-card rounded-2xl p-6 text-center h-full">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
