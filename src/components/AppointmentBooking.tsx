
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Appointment {
  id: string;
  fullName: string;
  phoneNumber: string;
  appointmentDate: string;
  doctor: string;
  createdAt: string;
}

const AppointmentBooking = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    appointmentDate: "",
    doctor: ""
  });
  const { toast } = useToast();

  const doctors = [
    "Dr. Sarah Johnson - General Medicine",
    "Dr. Michael Chen - Cardiology",
    "Dr. Emily Rodriguez - Pediatrics",
    "Dr. David Thompson - Orthopedics",
    "Dr. Lisa Parker - Dermatology"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phoneNumber || !formData.appointmentDate || !formData.doctor) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    setAppointments(prev => [...prev, newAppointment]);
    setFormData({
      fullName: "",
      phoneNumber: "",
      appointmentDate: "",
      doctor: ""
    });

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${formData.doctor} has been confirmed for ${formData.appointmentDate}`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Book an Appointment</h2>
        <p className="text-gray-600">Schedule your visit with our healthcare professionals</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Appointment Details
            </CardTitle>
            <CardDescription>
              Fill in your information to book an appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="appointmentDate" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Appointment Date & Time
                </Label>
                <Input
                  id="appointmentDate"
                  type="datetime-local"
                  value={formData.appointmentDate}
                  onChange={(e) => handleInputChange("appointmentDate", e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              <div>
                <Label>Select Doctor</Label>
                <Select value={formData.doctor} onValueChange={(value) => handleInputChange("doctor", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor} value={doctor}>
                        {doctor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
            <CardDescription>
              Your scheduled appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            {appointments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No appointments booked yet</p>
                <p className="text-sm">Book your first appointment using the form</p>
              </div>
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-blue-800">{appointment.fullName}</h4>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(appointment.appointmentDate).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">Phone: {appointment.phoneNumber}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Confirmed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentBooking;
