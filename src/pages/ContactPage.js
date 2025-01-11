import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOffset = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setVisible(bottomOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-8 transform ${
        visible ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-500 ease-in-out shadow-lg`}
    >
      <h1 className="text-2xl font-bold uppercase tracking-wide mb-4 text-center">Contact Me</h1>
      <form className="space-y-4 max-w-3xl mx-auto">
        <div>
          <label
            className="block text-sm uppercase font-bold tracking-wide mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            className="block text-sm uppercase font-bold tracking-wide mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            className="block text-sm uppercase font-bold tracking-wide mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-600 px-6 py-2 rounded text-white uppercase font-bold tracking-wide hover:bg-gray-500 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
