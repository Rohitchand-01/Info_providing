import React from "react";

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-extrabold text-purple-900 text-center mb-8">
                    About Us
                </h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                    We are a team of passionate individuals committed to delivering high-quality resources and tools.
                </p>
                <div className="text-center">
                    <p className="text-gray-600 mb-6">
                        Our mission is to empower individuals and organizations with the knowledge and tools they need to succeed.
                    </p>
                    <a
                        href="/contact"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
