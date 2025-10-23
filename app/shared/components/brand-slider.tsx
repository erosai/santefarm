"use client";

import { useEffect, useRef } from "react";

const brands = [
  { name: "Vercel", logo: "/BC.png" },
  { name: "Next.js", logo: "/BL.png" },
  { name: "Stripe", logo: "/vichy.png" },
  { name: "GitHub", logo: "/gil.png" },
  { name: "Supabase", logo: "/md.png" },
];

export function BrandSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;

      // Reset scroll position when we've scrolled through one set of brands
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-blue-50/30 rounded-xl border border-blue-50 py-8">
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate the brands array to create seamless infinite scroll */}
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-8"
          >
            <img
              src={brand.logo || "/placeholder.svg"}
              alt={`${brand.name} logo`}
              className="h-24 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
