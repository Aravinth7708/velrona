import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import founderImage from "@/assets/founder.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const businessSection = document.getElementById("businesses");
    if (businessSection) {
      businessSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex flex-col pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-white">
      
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight text-foreground tracking-tight">
            Velrona isn't just a company.
            <br />
            <span className="block mt-4 lg:mt-6">It's a vision with purpose.</span>
          </h1>
        </motion.div>

        {/* Founder Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 sm:mt-20 lg:mt-24 flex justify-start sm:justify-end"
        >
          <div className="flex items-center gap-4">
            <img
              src={founderImage}
              alt="Founder"
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg object-cover grayscale"
            />
            <div>
              <p className="text-sm sm:text-base lg:text-lg text-foreground font-medium">
                A note from our Founder,
                <br />
                Deepinder Goyal
              </p>
              <a
                href="#founder-note"
                className="text-sm sm:text-base lg:text-lg text-foreground font-medium mt-1 inline-block hover:text-accent transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-6 lg:px-16 mt-12 sm:mt-16 lg:mt-20"
      >
        <button
          onClick={scrollToNext}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;