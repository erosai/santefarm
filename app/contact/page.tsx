import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-foreground/90 to-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto text-balance">
            We're here to help with all your pharmaceutical logistics needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Phone
              </h3>
              <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Email
              </h3>
              <p className="text-gray-600 mb-1">info@santefarm.com</p>
              <p className="text-gray-600">support@santefarm.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Address
              </h3>
              <p className="text-gray-600">123 Pharma Boulevard</p>
              <p className="text-gray-600">Medical District, NY 10001</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your needs..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-foreground hover:bg-foreground/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Our Location
              </h2>
              <p className="text-gray-600 mb-8">
                Visit us at our state-of-the-art facility.
              </p>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  Headquarters - New York
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Pharma Boulevard
                  <br />
                  Medical District, NY 10001
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Our main distribution center with 24/7 operations and cold
                  chain storage facilities.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@santefarm.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
