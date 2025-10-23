import Hero from "@/app/homepage/herosection";
import { BrandSlider } from "./shared/components/brand-slider";
import { Testimonials } from "./shared/components/testimonials";
import { ContactForm } from "./shared/components/contact-form";
import { ServicesSection } from "./shared/components/service-section";
export default function Home() {
  return (
    <div className="font-sans px-14 ">
      <Hero />
      {/* services layout */}
      {/* <div className="px-4 relative">
        <div className="absolute top-0 left-0 bg-gradient-to-t from-blue-50 via-blue-50 w-full h-[33vh]" />
        <div className="w-full min-h-[80vh] bg-white relative z-50 rounded-lg flex flex-col items-center justify-center">
          <h2 className="font-semibold text-5xl font-sans max-w-3/4 text-center text-gray-700">
            We take care of everything from logistics to blla blla
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="h-96 w-96 bg-blue-200 rounded-lg mt-0"></div>
            <div className="h-96 w-96 bg-blue-200 rounded-lg mt-8"></div>
            <div className="h-96 w-96 bg-blue-200 rounded-lg mt-16"></div>
          </div>
        </div>
      </div> */}
      <ServicesSection />
      {/* brands  */}
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl w-full space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Trusted by industry leaders
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of companies that rely on our platform to power
              their business
            </p>
          </div>

          <BrandSlider />
          <Testimonials />
          <ContactForm />
        </div>
      </main>

      {/* testimonials */}

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
