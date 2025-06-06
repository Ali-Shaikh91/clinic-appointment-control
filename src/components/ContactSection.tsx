
import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-4xl mx-auto p-6 pt-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl mb-6 shadow-xl">
            <Phone className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            हमसे जुड़ें और बेहतर स्वास्थ्य सेवा का अनुभव करें
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="professional-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('contact.address')}</h3>
            <div className="text-slate-600 space-y-2">
              <p className="font-semibold">राज मेडिकल सेंटर</p>
              <p>123 हेल्थकेयर स्ट्रीट</p>
              <p>मेडिकल डिस्ट्रिक्ट, मुंबई</p>
              <p>पिन कोड: 400001</p>
            </div>
          </div>

          <div className="professional-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('contact.contactInfo')}</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="font-semibold text-blue-700">{t('contact.phone')}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                <p className="font-semibold text-red-600">{t('contact.emergency')}</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                <p className="font-semibold text-emerald-600">{t('contact.email')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="professional-card rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Clock className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact.hours')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <p className="font-bold text-lg text-blue-700 mb-2">{t('contact.mondayFriday')}</p>
              <p className="text-lg font-semibold text-slate-700">{t('contact.mondayFridayTime')}</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
              <p className="font-bold text-lg text-emerald-700 mb-2">{t('contact.saturday')}</p>
              <p className="text-lg font-semibold text-slate-700">{t('contact.saturdayTime')}</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <p className="font-bold text-lg text-purple-700 mb-2">{t('contact.sunday')}</p>
              <p className="text-lg font-semibold text-slate-700">{t('contact.sundayTime')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
