import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    // Make sure we have a single root element. For example:
    <div className="space-y-8 p-4 md:p-8 md:ml-64">
      {/* Daytime Photography */}
      <motion.a
        href="/daytime"
        className="block"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: "url('/images/daytime.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Daytime Photography
            </h2>
          </div>
        </div>
      </motion.a>

      {/* Twilight Photography */}
      <motion.a
        href="/twilight"
        className="block"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: "url('/images/twilight.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Twilight Photography
            </h2>
          </div>
        </div>
      </motion.a>

      {/* Aerial Photography */}
      <motion.a
        href="/aerial"
        className="block"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: "url('/images/aerial.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Aerial Photography
            </h2>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default Hero;
