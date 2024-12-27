import React, { useState } from "react";

const Explore = () => {
    const [filter, setFilter] = useState("all");

    const items = [
        {
            title: "Beach Locations",
            description: "Explore the best beaches for your next vacation.",
            image: "https://via.placeholder.com/400x300",
            category: "beach",
        },
        {
            title: "Mountain Trails",
            description: "Discover the most scenic mountain trails around the world.",
            image: "https://via.placeholder.com/400x300",
            category: "mountain",
        },
        {
            title: "City Adventures",
            description: "Find the most exciting city tours and adventures.",
            image: "https://via.placeholder.com/400x300",
            category: "city",
        },
        {
            title: "Historical Sites",
            description: "Learn about the world's most famous historical landmarks.",
            image: "https://via.placeholder.com/400x300",
            category: "historical",
        },
        {
            title: "Nature Parks",
            description: "Explore beautiful nature parks and natural reserves.",
            image: "https://via.placeholder.com/400x300",
            category: "nature",
        },
        {
            title: "Cultural Festivals",
            description: "Experience the world's most vibrant cultural festivals.",
            image: "https://via.placeholder.com/400x300",
            category: "festival",
        },
    ];

    const filteredItems =
        filter === "all" ? items : items.filter((item) => item.category === filter);

    return (
        <section className="bg-purple-50 py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-semibold text-purple-900 mb-8">Explore</h2>
                <p className="text-lg text-gray-700 mb-12">
                    Discover amazing places and experiences around the world. Explore
                    different categories and plan your next adventure.
                </p>

                {/* Filter Bar */}
                <div className="mb-8">
                    <button
                        onClick={() => setFilter("all")}
                        className="bg-purple-900 text-white px-6 py-2 rounded-lg mr-4 hover:bg-purple-700"
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("beach")}
                        className="bg-purple-900 text-white px-6 py-2 rounded-lg mr-4 hover:bg-purple-700"
                    >
                        Beach
                    </button>
                    <button
                        onClick={() => setFilter("mountain")}
                        className="bg-purple-900 text-white px-6 py-2 rounded-lg mr-4 hover:bg-purple-700"
                    >
                        Mountain
                    </button>
                    <button
                        onClick={() => setFilter("city")}
                        className="bg-purple-900 text-white px-6 py-2 rounded-lg mr-4 hover:bg-purple-700"
                    >
                        City
                    </button>
                    <button
                        onClick={() => setFilter("historical")}
                        className="bg-purple-900 text-white px-6 py-2 rounded-lg mr-4 hover:bg-purple-700"
                    >
                        Historical
                    </button>
                </div>

                {/* Explore Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                            />
                            {/* Overlay with title and description */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-white p-4">
                                <div>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="mt-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
