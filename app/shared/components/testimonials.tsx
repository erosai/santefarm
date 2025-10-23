import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "This platform has transformed how we operate. The efficiency gains have been remarkable and our team couldn't be happier.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "/professional-woman-avatar.png",
  },
  {
    quote:
      "Outstanding service and support. We've seen a 300% increase in productivity since implementing this solution.",
    author: "Michael Rodriguez",
    role: "CTO, DataSync",
    avatar: "/professional-man-avatar.png",
  },
  {
    quote:
      "The best investment we've made this year. Intuitive, powerful, and exactly what we needed to scale our operations.",
    author: "Emily Watson",
    role: "VP of Operations, CloudBase",
    avatar: "/professional-woman-avatar-2.png",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          What our customers say
        </h2>
        <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
          Don't just take our word for it — hear from the teams who use our
          platform every day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-primary"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-foreground leading-relaxed text-pretty">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
