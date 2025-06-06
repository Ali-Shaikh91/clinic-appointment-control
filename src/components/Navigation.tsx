
import { useState } from "react";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default Navigation;
