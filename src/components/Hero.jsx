import React from "react";

const Hero = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1602526212974-659e62d4c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"; // Unsplash image

    return (
        <section
            className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-purple-900">
                    Explore the World of Knowledge
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Dive into a world of insightful resources, guides, and inspiration.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <a
                        href="/explore"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                    >
                        Get Started
                    </a>
                    <a
                        href="/about"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
