import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Start state
      animate={{ opacity: 1, x: 0 }} // End state
      exit={{ opacity: 0, x: 50 }} // Exit state
      transition={{ duration: 0.6 }} // Animation duration
      className="p-8 flex flex-col md:flex-row items-center justify-center min-h-screen md:ml-64"
    >
      {/* Photo Section */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
        <motion.img
          src="/images/austintyler.jpg"
          alt="Austin Tyler"
          className="rounded-lg shadow-lg w-64 h-auto object-cover"
          initial={{ scale: 0.8, opacity: 0 }} // Start state
          animate={{ scale: 1, opacity: 1 }} // End state
          transition={{ duration: 0.6, delay: 0.3 }} // Delay for a staggered effect
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: 50 }} // Start state
        animate={{ opacity: 1, x: 0 }} // End state
        transition={{ duration: 0.6, delay: 0.5 }} // Slight delay for staggered effect
      >
        <h1 className="text-4xl font-bold mb-8">About Austin Tyler</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I specialize in real estate photography, capturing stunning interiors and exteriors
          that help properties stand out. With a keen eye for detail and professional editing
          techniques, I deliver images that elevate your listings and leave a lasting impression.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          From daytime photography to twilight exteriors and aerial views, my work focuses on
          showcasing your properties in their best light, ensuring you attract potential buyers
          and clients effortlessly.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
