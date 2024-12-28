import React, { useState } from 'react';

const Destinations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGetStarted = () => {
        setIsModalOpen(true); // Open the modal when the button is clicked
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">Destinations</h1>
            </section>

            {/* Destinations Content */}
            <section className="py-16 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Discover More Destinations</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    Expand your horizons with our curated list of must-visit destinations worldwide. Find your perfect escape.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="City Lights"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">City Lights</h3>
                            <p className="mt-2 text-gray-600">Experience the buzz of iconic cities with vibrant nightlife and cultural landmarks.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1591376/pexels-photo-1591376.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Tropical Retreat"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Tropical Retreat</h3>
                            <p className="mt-2 text-gray-600">Unwind in lush tropical paradises with exotic flora and fauna.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/15127306/pexels-photo-15127306/free-photo-of-pyramids-and-sphinx-statue-in-desert.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Historical Wonders"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Historical Wonders</h3>
                            <p className="mt-2 text-gray-600">Step back in time and explore ancient ruins and heritage sites.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/27331745/pexels-photo-27331745/free-photo-of-an-abandoned-hut-on-the-dune.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Desert Escapes"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Desert Escapes</h3>
                            <p className="mt-2 text-gray-600">Find serenity in vast deserts with mesmerizing dunes and starry skies.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/216672/pexels-photo-216672.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Lakeside Getaways"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Lakeside Getaways</h3>
                            <p className="mt-2 text-gray-600">Relax by serene lakes and enjoy water activities like kayaking and fishing.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/26087611/pexels-photo-26087611/free-photo-of-bushes-and-evergreen-trees-around-river.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Forest Retreats"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Forest Retreats</h3>
                            <p className="mt-2 text-gray-600">Reconnect with nature in lush forests, perfect for hiking and camping.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Plan Your Next Trip</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600">Start planning your journey today and create unforgettable memories.</p>
                <button
                    className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
                    onClick={handleGetStarted} // Action on button click
                >
                    Get Started
                </button>
            </section>

            {/* Modal with Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h3 className="text-2xl font-semibold text-gray-800">Start Your Journey</h3>
                        <p className="mt-4 text-gray-600">Please fill out the form below to get started with your trip planning.</p>

                        {/* Form */}
                        <form className="mt-6">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="destination" className="block text-gray-700">Preferred Destination</label>
                                <input
                                    type="text"
                                    id="destination"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter your preferred destination"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Destinations;
