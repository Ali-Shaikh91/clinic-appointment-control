
import { useState } from "react";
import { Calendar, Users, Package, Phone, MapPin, Clock } from "lucide-react";
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
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Healthcare Street</p>
                  <p>Medical District</p>
                  <p>City, State 12345</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Phone: (555) 123-4567</p>
                  <p>Emergency: (555) 911-0000</p>
                  <p>Email: info@medicalclinic.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-20 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-blue-800 mb-6">
                  Welcome to MediCare Clinic
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Providing quality healthcare services with compassion and excellence. 
                  Your health is our priority.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => setActiveTab("appointments")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("contact")}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <CardTitle>General Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Comprehensive primary care services for all ages
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <CardTitle>Specialist Consultations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Expert care from our team of specialized doctors
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <CardTitle>Diagnostic Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        State-of-the-art diagnostic and laboratory services
                      </CardDescription>
                    </CardContent>
                  </Card>
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
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="text-xl font-bold text-blue-800">MediCare Clinic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { key: "home", label: "Home" },
                { key: "appointments", label: "Appointments" },
                { key: "inventory", label: "Inventory" },
                { key: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`font-medium transition-colors ${
                    activeTab === item.key
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
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
                className="border border-gray-300 rounded px-3 py-1"
              >
                <option value="home">Home</option>
                <option value="appointments">Appointments</option>
                <option value="inventory">Inventory</option>
                <option value="contact">Contact</option>
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
