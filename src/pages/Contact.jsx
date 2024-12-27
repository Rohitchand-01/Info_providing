import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          rows="4"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300">
          Send Message
        </button>
        {isSubmitted && <p className="mt-4 text-green-500">Your message has been sent successfully!</p>}
      </form>
    </div>
  );
};

export default Contact;
