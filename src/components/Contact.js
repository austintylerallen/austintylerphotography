const Contact = () => {
    return (
      <section id="contact" className="px-8 py-16 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  