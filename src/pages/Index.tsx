import { useState } from "react";
import { Calendar, Users, Package, Phone, MapPin, Clock, Heart, Settings, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import AppointmentBooking from "@/components/AppointmentBooking";
import InventoryManagement from "@/components/InventoryManagement";
import SettingsComponent from "@/components/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { t } = useLanguage();

  const renderContent = () => {
    switch (activeTab) {
      case "appointments":
        return <AppointmentBooking />;
      case "inventory":
        return <InventoryManagement />;
      case "settings":
        return <SettingsComponent />;
      case "contact":
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
      default:
        return (
          <div className="min-h-screen">
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
                  {[
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
                  ].map((item, index) => {
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
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="glass-effect shadow-xl sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="text-white font-bold h-8 w-8" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  {t('home.title')}
                </span>
                <p className="text-sm text-slate-600">{t('home.subtitle')}</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-2">
              {[
                { key: "home", label: t('nav.home') },
                { key: "appointments", label: t('nav.appointments') },
                { key: "inventory", label: t('nav.inventory') },
                { key: "contact", label: t('nav.contact') },
                { key: "settings", label: t('nav.settings') }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`font-medium transition-all duration-300 px-6 py-3 rounded-xl ${
                    activeTab === item.key
                      ? "text-white bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="border-2 border-blue-200 rounded-xl px-4 py-2 focus:border-blue-500 focus:outline-none bg-white"
              >
                <option value="home">{t('nav.home')}</option>
                <option value="appointments">{t('nav.appointments')}</option>
                <option value="inventory">{t('nav.inventory')}</option>
                <option value="contact">{t('nav.contact')}</option>
                <option value="settings">{t('nav.settings')}</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {renderContent()}
    </div>
  );
};

export default Index;
