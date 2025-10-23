import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Package,
  Truck,
  Warehouse,
  HeadphonesIcon,
  Shield,
  Clock,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Warehouse,
      title: "Pharmaceutical Warehousing",
      description:
        "State-of-the-art temperature-controlled facilities designed specifically for pharmaceutical storage with 24/7 monitoring and compliance.",
      features: [
        "GDP-certified storage facilities",
        "Temperature mapping and validation",
        "Real-time inventory management",
        "Segregated storage zones",
      ],
    },
    {
      icon: Truck,
      title: "Cold Chain Distribution",
      description:
        "Specialized cold chain logistics ensuring your pharmaceutical products maintain integrity from warehouse to destination.",
      features: [
        "Temperature-controlled vehicles",
        "Real-time temperature monitoring",
        "Qualified distribution routes",
        "Emergency response protocols",
      ],
    },
    {
      icon: Package,
      title: "Order Fulfillment",
      description:
        "Efficient order processing and fulfillment services with accuracy and speed, ensuring timely delivery to healthcare providers.",
      features: [
        "Same-day order processing",
        "Automated picking systems",
        "Quality control checks",
        "Flexible delivery options",
      ],
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description:
        "Full compliance management ensuring all operations meet pharmaceutical industry standards and regulations.",
      features: [
        "GDP & ISO 9001 certified",
        "Regular compliance audits",
        "Documentation management",
        "Regulatory reporting",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description:
        "Round-the-clock monitoring of all storage and distribution operations with immediate alert systems.",
      features: [
        "Real-time tracking systems",
        "Automated alert notifications",
        "Security surveillance",
        "Environmental monitoring",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description:
        "Expert customer support team available to assist with all your pharmaceutical logistics needs.",
      features: [
        "24/7 customer service",
        "Dedicated account managers",
        "Technical support",
        "Training and consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/pharmaceutical-warehouse.jpg"
          alt="Pharmaceutical warehouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Comprehensive Pharmaceutical Logistics Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 text-balance">
            End-to-end services designed for the pharmaceutical industry
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We provide specialized logistics solutions tailored to meet the
              unique requirements of pharmaceutical distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Santefarm?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience in pharmaceutical logistics,
                we understand the critical nature of your products and the
                importance of maintaining their integrity throughout the supply
                chain.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">
                      20+
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Years of Experience
                    </h3>
                    <p className="text-gray-600">
                      Trusted by leading pharmaceutical companies
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">
                      99.9%
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Accuracy Rate
                    </h3>
                    <p className="text-gray-600">
                      Industry-leading order fulfillment accuracy
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground ">
                      24/7
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Support Available
                    </h3>
                    <p className="text-gray-600">
                      Round-the-clock monitoring and customer service
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-pharmaceutical-warehouse-interior.jpg"
                alt="Modern pharmaceutical warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-foreground/90 to-foreground">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Ready to Optimize Your Pharmaceutical Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-balance">
            Let's discuss how our services can support your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
