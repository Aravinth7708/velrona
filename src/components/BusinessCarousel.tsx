import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Business {
  id: number;
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  bgColor: "yellow" | "dark";
}

const businesses: Business[] = [
  {
    id: 1,
    name: "Zomato",
    tagline: "",
    subtitle: "Food delivery reimagined",
    description: "Zomato is one of the world's largest food delivery platforms, connecting millions of users with their favourite restaurants.",
    bgColor: "dark",
  },
  {
    id: 2,
    name: "blinkit",
    tagline: "A VELRONA COMPANY",
    subtitle: "Fast commerce, smarter living",
    description: "Blinkit delivers groceries and essentials in minutes, making everyday shopping faster and more convenient.",
    bgColor: "yellow",
  },
  {
    id: 3,
    name: "district",
    tagline: "BY ZOMATO",
    subtitle: "Creativity and community",
    description: "District delivers immersive retail experiences, bringing together creativity, culture, and commerce.",
    bgColor: "dark",
  },
  {
    id: 4,
    name: "hyperpure",
    tagline: "BY ZOMATO",
    subtitle: "Fueling the food ecosystem",
    description: "Hyperpure helps restaurants source the freshest ingredients, ensuring quality from farm to table.",
    bgColor: "dark",
  },
];

const BusinessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? Math.min(currentIndex + 1, businesses.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    setCurrentIndex(newIndex);
    
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".business-card-container")?.clientWidth || 400;
      carouselRef.current.scrollTo({
        left: newIndex * (cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="businesses" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading text-3xl lg:text-4xl font-semibold text-foreground">
              Our businesses
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground text-base lg:text-lg leading-relaxed">
             As a parent organization, Velrona empowers its group companies with a common foundation of innovation, adaptability, and excellence.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo("prev")}
              disabled={currentIndex === 0}
              className="carousel-nav"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollTo("next")}
              disabled={currentIndex >= businesses.length - 1}
              className="carousel-nav"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="business-card-container flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] snap-start"
            >
              <div
                className={`business-card aspect-[4/3] flex flex-col items-center justify-center p-8 ${
                  business.bgColor === "yellow" ? "business-card-yellow" : "business-card-dark"
                }`}
              >
                <h3
                  className={`text-3xl lg:text-4xl font-bold ${
                    business.bgColor === "yellow" ? "text-velrona-dark" : "text-white"
                  }`}
                >
                  {business.name}
                </h3>
                {business.tagline && (
                  <p
                    className={`mt-2 text-xs tracking-widest ${
                      business.bgColor === "yellow" ? "text-velrona-dark/80" : "text-white/70"
                    }`}
                  >
                    {business.tagline}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <h4 className="text-lg lg:text-xl font-semibold text-foreground">
                  {business.subtitle}
                </h4>
                <p className="mt-2 text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {business.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCarousel;