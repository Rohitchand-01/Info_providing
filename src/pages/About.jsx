import React from 'react'

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">About Us</h1>
            </section>

            {/* About Content Section */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Our Mission</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    To inspire and empower travelers by providing reliable, comprehensive, and personalized destination information, making every journey unforgettable.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Our Vision</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    We envision a world where travel is effortless, exciting, and accessible to everyone. Our platform aims to become the go-to resource for travelers seeking curated destination insights and planning tools.
                </p>
            </section>

            {/* Journey Section */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Our Journey</h2>
                <div className="mt-8 max-w-4xl mx-auto text-left">
                    <p className="text-lg text-gray-600">
                        Our journey began with a simple idea: to create a platform that simplifies travel planning and inspires exploration. Starting as a small project, we have grown into a comprehensive resource for travelers worldwide.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Today, our platform offers detailed destination guides, personalized recommendations, and interactive tools that cater to all types of travelers. We are proud to have helped thousands of users plan their dream trips, and we are just getting started.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-500 text-center text-white">
                <h2 className="text-3xl sm:text-2xl font-semibold">Join Our Community</h2>
                <p className="mt-4 text-lg sm:text-base">
                    Be a part of our growing community of travelers. Let us help you explore the world with ease and confidence.
                </p>
                <button
                    className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => navigate('/contact')}
                >
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default About;

