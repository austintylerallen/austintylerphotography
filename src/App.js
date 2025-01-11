import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import DaytimePage from "./pages/DaytimePage";
import TwilightPage from "./pages/TwilightPage";
import AerialPage from "./pages/AerialPage";
import Navbar from "./components/Navbar";

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      {/* 
        The overall container for Nav + main content.
        Navbar is fixed on the left (within <Navbar />),
        so we do NOT add a left margin here to keep
        content behind the nav.
      */}
      <div className="flex flex-col md:flex-row">
        <Navbar scrollToFooter={scrollToFooter} />

        {/* Main content (Hero/pages) plus Footer at the bottom */}
        <div className="w-full min-h-screen flex flex-col">
          {/* Routes / Pages */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/daytime" element={<DaytimePage />} />
              <Route path="/twilight" element={<TwilightPage />} />
              <Route path="/aerial" element={<AerialPage />} />
            </Routes>
          </div>

          {/* Footer (the ref is used for smooth scrolling) */}
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
