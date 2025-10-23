import { Package, Truck, HeadphonesIcon } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Warehousing",
      description:
        "Secure storage solutions with real-time inventory tracking and management",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Fast and reliable delivery services with end-to-end shipment visibility",
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description:
        "24/7 customer support to ensure your operations run smoothly",
    },
  ];

  return (
    <div className="px-4 relative">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 bg-gradient-to-t from-blue-50 via-blue-50 to-transparent w-full h-[33vh] rounded-lg" />

      {/* Main content card */}
      <div className="w-full h-full bg-transparent backdrop-blur-lg border border-blue-50 p-1 z-0 relative rounded-lg">
        <div className="w-full min-h-[80vh] bg-white relative z-10 rounded-lg flex flex-col items-center justify-center py-16 px-8 ">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground  text-center">
            We take care of everything from logistics to customer support
          </h2>

          {/* Services cards with staggered layout */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 w-full max-w-6xl">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="h-80 w-full md:w-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 hover:shadow-lg"
                  style={{
                    marginTop:
                      index === 0 ? "0" : index === 1 ? "2rem" : "4rem",
                  }}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
