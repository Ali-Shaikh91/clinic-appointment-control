
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
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
        return <ContactSection />;
      default:
        return (
          <div className="min-h-screen">
            <HeroSection setActiveTab={setActiveTab} />
            <ServicesSection />
            <FeaturesSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;
