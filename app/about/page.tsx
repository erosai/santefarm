import Image from "next/image";
import { Shield, Users, Award, TrendingUp, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-foreground" />
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Excellence in Pharmaceutical Logistics
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 text-pretty">
            Delivering healthcare solutions with precision, care, and unwavering
            commitment since 2010
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Santefarm emerged from a simple yet powerful
                  vision: to revolutionize pharmaceutical logistics through
                  innovation, reliability, and an unwavering commitment to
                  healthcare excellence.
                </p>
                <p>
                  What started as a small team of dedicated professionals has
                  grown into a leading pharmaceutical logistics provider,
                  serving healthcare institutions across the region. Our journey
                  has been marked by continuous innovation and an uncompromising
                  focus on quality.
                </p>
                <p>
                  Today, we handle millions of pharmaceutical products annually,
                  ensuring that life-saving medications reach those who need
                  them most, when they need them most.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/modern-pharmaceutical-warehouse-interior.jpg"
                alt="Our warehouse facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional pharmaceutical logistics services that
                ensure the safe, timely, and compliant delivery of healthcare
                products, supporting the health and well-being of communities
                worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative pharmaceutical logistics
                partner globally, setting new standards for excellence,
                sustainability, and technological advancement in healthcare
                supply chain management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every action
              we take
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Integrity
              </h3>
              <p className="text-muted-foreground">
                We operate with transparency, honesty, and ethical practices in
                every aspect of our business.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in quality, service, and
                operational performance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Collaboration
              </h3>
              <p className="text-muted-foreground">
                We build strong partnerships with clients, suppliers, and
                communities to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-foreground/40 to-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-100">Products Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/professional-woman-executive.png",
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                image: "/professional-executive-man.png",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Chief Compliance Officer",
                image: "/professional-woman-executive-2.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our commitment to excellence is validated by industry-leading
            certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/GDP.jpg"
                alt="GDP Certified"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/9001.jpg"
                alt="ISO 9001"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
