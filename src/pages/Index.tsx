
import { useState } from "react";
import { Calendar, Users, Package, Phone, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AppointmentBooking from "@/components/AppointmentBooking";
import InventoryManagement from "@/components/InventoryManagement";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "appointments":
        return <AppointmentBooking />;
      case "inventory":
        return <InventoryManagement />;
      case "contact":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">संपर्क करें</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    पता
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <p>123 हेल्थकेयर स्ट्रीट</p>
                  <p>मेडिकल डिस्ट्रिक्ट</p>
                  <p>शहर, राज्य 12345</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Phone className="h-6 w-6 text-blue-600" />
                    संपर्क जानकारी
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <p>फोन: (555) 123-4567</p>
                  <p>आपातकाल: (555) 911-0000</p>
                  <p>ईमेल: info@rajmedical.com</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="h-6 w-6 text-blue-600" />
                    समय
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold">सोमवार - शुक्रवार:</p>
                      <p>सुबह 8:00 - शाम 6:00</p>
                    </div>
                    <div>
                      <p className="font-semibold">शनिवार:</p>
                      <p>सुबह 9:00 - शाम 4:00</p>
                    </div>
                    <div>
                      <p className="font-semibold">रविवार:</p>
                      <p>केवल आपातकाल</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <section className="py-24 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent mb-6">
                  राज मेडिकल
                </h1>
                <p className="text-2xl text-gray-600 mb-4">
                  आपके स्वास्थ्य की देखभाल हमारी प्राथमिकता
                </p>
                <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto">
                  गुणवत्तापूर्ण स्वास्थ्य सेवाएं, करुणा और उत्कृष्टता के साथ। 
                  हम आपके परिवार के स्वास्थ्य के लिए यहाँ हैं।
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    onClick={() => setActiveTab("appointments")}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    अपॉइंटमेंट बुक करें
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("contact")}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    संपर्क करें
                  </Button>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">हमारी सेवाएं</h2>
                <p className="text-xl text-center text-gray-600 mb-16">आपके स्वास्थ्य के लिए व्यापक देखभाल</p>
                <div className="grid md:grid-cols-3 gap-10">
                  <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="h-10 w-10 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl text-blue-800">सामान्य चिकित्सा</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600">
                        सभी उम्र के लिए व्यापक प्राथमिक देखभाल सेवाएं
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="h-10 w-10 text-green-600" />
                      </div>
                      <CardTitle className="text-2xl text-blue-800">विशेषज्ञ परामर्श</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600">
                        हमारे विशेषज्ञ डॉक्टरों की टीम से विशेषज्ञ देखभाल
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Package className="h-10 w-10 text-purple-600" />
                      </div>
                      <CardTitle className="text-2xl text-blue-800">निदान सेवाएं</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600">
                        अत्याधुनिक निदान और प्रयोगशाला सेवाएं
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-blue-800">राज मेडिकल क्यों चुनें?</h2>
                <p className="text-xl text-gray-600 mb-16">हम आपके स्वास्थ्य को सर्वोच्च प्राथमिकता देते हैं</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "अनुभवी डॉक्टर", desc: "योग्य और अनुभवी चिकित्सक" },
                    { title: "आधुनिक उपकरण", desc: "नवीनतम चिकित्सा तकनीक" },
                    { title: "24/7 सेवा", desc: "आपातकालीन सेवाएं उपलब्ध" },
                    { title: "किफायती दरें", desc: "सभी के लिए सुलभ स्वास्थ्य सेवा" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="text-white font-bold h-6 w-6" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">राज मेडिकल</span>
                <p className="text-sm text-gray-500">आपके स्वास्थ्य की देखभाल</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { key: "home", label: "होम" },
                { key: "appointments", label: "अपॉइंटमेंट" },
                { key: "inventory", label: "इन्वेंटरी" },
                { key: "contact", label: "संपर्क" }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                    activeTab === item.key
                      ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                className="border-2 border-blue-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="home">होम</option>
                <option value="appointments">अपॉइंटमेंट</option>
                <option value="inventory">इन्वेंटरी</option>
                <option value="contact">संपर्क</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {renderContent()}
    </div>
  );
};

export default Index;
