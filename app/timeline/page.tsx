"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Santefarm was established with a vision to revolutionize pharmaceutical logistics in the region.",
    backgroundImage: "/timeline2.jpg",
  },
  {
    year: "2012",
    title: "First Warehouse Opened",
    description:
      "Opened our first GDP-certified warehouse facility, setting new standards for pharmaceutical storage.",
    backgroundImage: "/timeline3.jpg",
  },
  {
    year: "2015",
    title: "ISO 9001 Certification",
    description:
      "Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.",
    backgroundImage: "/timeline4.jpg",
  },
  {
    year: "2017",
    title: "Regional Expansion",
    description:
      "Expanded operations to serve multiple countries across the region with dedicated logistics networks.",
    backgroundImage: "/timeline1.jpg",
  },
  {
    year: "2019",
    title: "Cold Chain Excellence",
    description:
      "Launched specialized cold chain logistics services for temperature-sensitive pharmaceuticals.",
    backgroundImage: "/timeline2.jpg",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Implemented advanced tracking systems and digital platforms for real-time shipment monitoring.",
    backgroundImage: "/timeline4.jpg",
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description:
      "Launched green logistics program, reducing carbon footprint by 40% through eco-friendly practices.",
    backgroundImage: "/timeline5.jpg",
  },
  {
    year: "2025",
    title: "AI-Powered Operations",
    description:
      "Integrated AI and machine learning for predictive logistics and optimized supply chain management.",
    backgroundImage: "/timeline1.jpg",
  },
];

export default function TimelinePage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineHeight, setLineHeight] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    "/timeline-founding.jpg"
  );
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newBackground =
      timelineEvents[activeCardIndex]?.backgroundImage ||
      "/timeline-founding.jpg";
    if (newBackground !== backgroundImage) {
      setBackgroundImage(newBackground);
    }
  }, [activeCardIndex, backgroundImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      const timelineHeight = timelineRef.current.offsetHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - timelineTop - 200) / (timelineHeight - 400)
        )
      );
      setLineHeight(progress * 100);

      const newVisibleItems = new Set<number>();
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementCenter = elementTop + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          // Mark as visible if in viewport
          if (rect.top < window.innerHeight - 100) {
            newVisibleItems.add(index);
          }

          // Track closest to center
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setVisibleItems(newVisibleItems);
      setActiveCardIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[500ms] ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-blue-900/60 to-blue-900/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-amber-900/5" />
      </div>

      <div className="relative z-10">
        <div className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From humble beginnings to industry leadership, discover the
              milestones that shaped Santefarm into the trusted pharmaceutical
              logistics partner we are today.
            </p>
          </div>
        </div>

        <div
          ref={timelineRef}
          className="relative max-w-5xl mx-auto px-4 pb-32"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 hidden md:block">
            <div
              className="absolute top-0 left-0 w-full bg-white transition-all duration-300 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => {
              const isVisible = visibleItems.has(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:shadow-blue-500/20 hover:bg-white transition-all duration-300">
                        <div className="text-foreground font-bold text-2xl mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 hidden md:block">
                      <div
                        className={`w-4 h-4 rounded-full border-4 border-white transition-all duration-500 ${
                          isVisible
                            ? "bg-white scale-100"
                            : "bg-gray-400 scale-75"
                        }`}
                        style={{
                          boxShadow: isVisible
                            ? "0 0 0 4px rgba(96, 165, 250, 0.3)"
                            : "none",
                        }}
                      />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-16">
            <div
              className={`w-6 h-6 rounded-full bg-white transition-all duration-700 ${
                lineHeight > 95 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                boxShadow: "0 0 0 8px rgba(96, 165, 250, 0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
