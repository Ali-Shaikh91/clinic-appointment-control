
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
          <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
            <div className="max-w-4xl mx-auto p-6">
              <div className="text-center mb-16">
                <div className="inline-block p-4 bg-gradient-to-r from-primary to-accent rounded-full mb-6">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('contact.title')}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  हमसे जुड़ें और बेहतर स्वास्थ्य सेवा का अनुभव करें
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="glass-effect border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{t('contact.address')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-lg space-y-2">
                    <p className="font-semibold">राज मेडिकल सेंटर</p>
                    <p>123 हेल्थकेयर स्ट्रीट</p>
                    <p>मेडिकल डिस्ट्रिक्ट, मुंबई</p>
                    <p>पिन कोड: 400001</p>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{t('contact.contactInfo')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-lg space-y-3">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="font-semibold text-primary">{t('contact.phone')}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-semibold text-red-600">{t('contact.emergency')}</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="font-semibold text-accent">{t('contact.email')}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-effect border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{t('contact.hours')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <p className="font-bold text-lg text-primary mb-2">{t('contact.mondayFriday')}</p>
                      <p className="text-lg font-semibold text-gray-700">{t('contact.mondayFridayTime')}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <p className="font-bold text-lg text-primary mb-2">{t('contact.saturday')}</p>
                      <p className="text-lg font-semibold text-gray-700">{t('contact.saturdayTime')}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                      <p className="font-bold text-lg text-primary mb-2">{t('contact.sunday')}</p>
                      <p className="text-lg font-semibold text-gray-700">{t('contact.sundayTime')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen">
            <section className="relative py-32 px-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
              <div className="absolute inset-0 bg-pattern opacity-30"></div>
              
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="inline-block mb-8 animate-pulse">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                  {t('home.title')}
                </h1>
                
                <p className="text-3xl text-muted-foreground mb-4 font-medium">
                  {t('home.subtitle')}
                </p>
                
                <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  {t('home.description')}
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    onClick={() => setActiveTab("appointments")}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    {t('home.bookAppointment')}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("contact")}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    {t('home.contactUs')}
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-24 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t('home.services')}
                  </h2>
                  <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                    {t('home.servicesSubtitle')}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="group hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 glass-effect">
                    <CardHeader className="text-center pb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                        {t('home.generalMedicine')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {t('home.generalMedicineDesc')}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 glass-effect">
                    <CardHeader className="text-center pb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                        <Calendar className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                        {t('home.specialistConsultation')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {t('home.specialistConsultationDesc')}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 glass-effect">
                    <CardHeader className="text-center pb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                        <Package className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                        {t('home.diagnosticServices')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {t('home.diagnosticServicesDesc')}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-24 px-4 bg-gradient-to-br from-accent/5 via-background to-primary/5">
              <div className="max-w-6xl mx-auto text-center">
                <div className="mb-20">
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {t('home.whyChooseUs')}
                  </h2>
                  <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                    {t('home.whyChooseUsDesc')}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { 
                      title: t('home.experiencedDoctors'), 
                      desc: t('home.experiencedDoctorsDesc'),
                      icon: Award,
                      gradient: "from-blue-500 to-indigo-600"
                    },
                    { 
                      title: t('home.modernEquipment'), 
                      desc: t('home.modernEquipmentDesc'),
                      icon: Settings,
                      gradient: "from-purple-500 to-pink-600"
                    },
                    { 
                      title: t('home.24x7Service'), 
                      desc: t('home.24x7ServiceDesc'),
                      icon: Shield,
                      gradient: "from-green-500 to-emerald-600"
                    },
                    { 
                      title: t('home.affordableRates'), 
                      desc: t('home.affordableRatesDesc'),
                      icon: Star,
                      gradient: "from-orange-500 to-red-600"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="group">
                        <Card className="h-full bg-card/60 backdrop-blur border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                          <CardContent className="p-8 text-center">
                            <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl`}>
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.desc}
                            </p>
                          </CardContent>
                        </Card>
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
      <nav className="bg-card/80 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="text-white font-bold h-8 w-8" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('home.title')}
                </span>
                <p className="text-sm text-muted-foreground">{t('home.subtitle')}</p>
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
                      ? "text-white bg-gradient-to-r from-primary to-accent shadow-lg transform scale-105"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
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
                className="border-2 border-primary/20 rounded-xl px-4 py-2 focus:border-primary focus:outline-none bg-card"
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
