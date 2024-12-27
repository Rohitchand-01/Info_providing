import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormError("Please fill out all fields.");
            return;
        }

        setFormError("");
        // Here, you can handle form submission (e.g., sending the data to an API or email service)
        console.log("Form submitted:", formData);
    };

    return (
        <section className="bg-purple-50 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-purple-900 mb-8">
                    Contact Us
                </h2>

                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        {formError && (
                            <div className="bg-red-500 text-white p-3 rounded-md mb-4">
                                {formError}
                            </div>
                        )}

                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg text-purple-900 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg text-purple-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your Email"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg text-purple-900 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-900 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
