import React from "react";

const InfoSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-extrabold text-purple-900 text-center mb-8">
                    Why Choose Us?
                </h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                    We provide valuable insights, resources, and tools to help you make
                    informed decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-purple-900">Quality Content</h3>
                        <p className="mt-2 text-gray-600">
                            We curate high-quality content tailored to your needs.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-purple-900">Expert Insights</h3>
                        <p className="mt-2 text-gray-600">
                            Learn from the best with our expert-led articles and resources.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-purple-900">Reliable Tools</h3>
                        <p className="mt-2 text-gray-600">
                            Our tools are designed to help you make better decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
