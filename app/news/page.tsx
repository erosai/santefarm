import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Santefarm Expands Cold Chain Network Across Europe",
    excerpt:
      "New state-of-the-art temperature-controlled facilities ensure pharmaceutical integrity from manufacturer to patient.",
    category: "Expansion",
    date: "March 15, 2025",
    image: "/news-1.jpg",
    slug: "cold-chain-expansion",
  },
  {
    id: 2,
    title: "AI-Powered Logistics Platform Reduces Delivery Times by 40%",
    excerpt:
      "Our new intelligent routing system optimizes pharmaceutical deliveries while maintaining strict compliance standards.",
    category: "Technology",
    date: "March 8, 2025",
    image: "/news-2.jpg",
    slug: "ai-logistics-platform",
  },
  {
    id: 3,
    title: "Santefarm Achieves ISO 13485 Certification",
    excerpt:
      "Latest certification reinforces our commitment to quality management systems for medical devices and pharmaceuticals.",
    category: "Compliance",
    date: "February 28, 2025",
    image: "/news-3.jpg",
    slug: "iso-certification",
  },
  {
    id: 4,
    title: "Partnership with Leading Biotech Companies Announced",
    excerpt:
      "Strategic collaborations will enhance distribution capabilities for next-generation therapies and biologics.",
    category: "Partnership",
    date: "February 20, 2025",
    image: "/news-4.jpg",
    slug: "biotech-partnership",
  },
  {
    id: 5,
    title: "Sustainability Initiative: Carbon-Neutral Deliveries by 2026",
    excerpt:
      "Comprehensive plan includes electric fleet vehicles and renewable energy-powered warehouses.",
    category: "Sustainability",
    date: "February 12, 2025",
    image: "/news-5.jpg",
    slug: "sustainability-initiative",
  },
  {
    id: 6,
    title: "24/7 Emergency Pharmaceutical Delivery Service Launched",
    excerpt:
      "New service ensures critical medications reach patients and healthcare facilities without delay, any time of day.",
    category: "Service",
    date: "January 30, 2025",
    image: "/news-6.jpg",
    slug: "emergency-delivery",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foreground/80 to-foreground text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Latest News & Updates
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl text-pretty">
            Stay informed about our latest developments, partnerships, and
            innovations in pharmaceutical logistics.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-foreground text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-foreground transition-colors text-balance">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 flex-grow text-pretty leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-foreground font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-foreground text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 text-lg text-pretty">
            Subscribe to our newsletter for the latest news, insights, and
            updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white ring-white border-2 border-white"
            />
            <button
              type="submit"
              className="bg-white text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
