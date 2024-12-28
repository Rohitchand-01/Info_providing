import React from 'react'

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
                    Your Gateway to Incredible Destinations
                </h1>
            </section>

            {/* About the Website */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Discover, Plan, and Explore</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    Our mission is to make your travel planning seamless and exciting. Explore destinations, get insights into popular attractions, and plan your next adventure effortlessly.
                </p>
            </section>

            {/* Nature Video Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Experience the Beauty of Nature</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    Watch this beautiful video that captures the essence of nature, inspiring your next adventure.
                </p>
                <div className="mt-8 flex justify-center">
                    <iframe
                        width="80%" // Set width to 80% of the container for a balanced look
                        height="450" // Set a fixed height for optimal viewing
                        src="https://www.youtube.com/embed/oc_o5DZM3qc" // Replace with your desired YouTube video URL
                        title="Nature Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
                    ></iframe>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">What We Offer</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Detailed Destination Guides</h3>
                        <p className="mt-2 text-gray-600">
                            Access comprehensive information about top destinations, including attractions, activities, and tips.
                        </p>
                    </div>
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Personalized Recommendations</h3>
                        <p className="mt-2 text-gray-600">
                            Receive tailored suggestions based on your preferences and interests to enhance your travel experience.
                        </p>
                    </div>
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800">Interactive Planning Tools</h3>
                        <p className="mt-2 text-gray-600">
                            Use our intuitive tools to plan itineraries, book accommodations, and map out your journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">What Our Users Say</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg text-gray-600">
                            "This website helped me plan my dream vacation effortlessly. The destination guides are spot on!"
                        </p>
                        <p className="mt-4 font-semibold text-gray-800">- Sarah Williams</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg text-gray-600">
                            "A one-stop platform for all travel enthusiasts. Highly recommended!"
                        </p>
                        <p className="mt-4 font-semibold text-gray-800">- Michael Brown</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-500 text-center text-white">
                <h2 className="text-3xl sm:text-2xl font-semibold">Start Your Journey Today</h2>
                <p className="mt-4 text-lg sm:text-base">
                    Explore destinations, plan your itinerary, and make unforgettable memories. Let us be your travel companion.
                </p>
                <button
                    className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => navigate('/destinations')}
                >
                    Explore Destinations
                </button>
            </section>
        </div>
    );
};

export default Home;
