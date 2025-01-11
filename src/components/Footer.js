import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`bg-white shadow-lg transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* On md+ screens, pad left by 64 so text isn't hidden behind nav */}
      <div className="p-8 md:pl-64">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold ml-2">Wanna Reach Out?</h2>
            <a
              href="mailto:heyaustintyler@gmail.com"
              className="block text-gray-600 hover:underline ml-2"
            >
              heyaustintyler@gmail.com
            </a>
        
          </div>

          {/* Right Side - Address */}
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold">Austin Tyler</p>
            <p className="text-sm">Las Cruces, NM</p>
            <p className="text-sm">575-270-3779</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
