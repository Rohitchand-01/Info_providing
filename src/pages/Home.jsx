const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: 'url("https://www.w3schools.com/w3images/forest.jpg")' }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">Welcome to My Website</h1>
            </section>

            {/* About Us Section */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">About Us</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    We are a passionate team dedicated to providing exceptional services and experiences. Our mission is to help you achieve your goals by offering the best solutions tailored to your needs. With years of experience in the industry, we are committed to delivering high-quality results.
                </p>
            </section>

            {/* Featured Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Explore Our Features</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600">Discover amazing content and experiences tailored just for you.</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Feature 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
                            <p className="mt-2 text-gray-600">Learn more about our first feature and how it can help you.</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/2573604/pexels-photo-2573604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Feature 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
                            <p className="mt-2 text-gray-600">Explore the second feature and discover its amazing benefits.</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Feature 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
                            <p className="mt-2 text-gray-600">Find out more about the third feature and how it enhances your experience.</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-200 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">What Our Clients Say</h2>
                <div className="mt-8 flex justify-center space-x-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
                        <p className="text-lg text-gray-600">"This is the best service I've ever used! It has transformed the way I work."</p>
                        <p className="mt-4 font-semibold text-gray-800">John Doe</p>
                        <p className="text-gray-500">CEO, Example Company</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
                        <p className="text-lg text-gray-600">"A game changer! Highly recommend to anyone looking for top-notch service."</p>
                        <p className="mt-4 font-semibold text-gray-800">Jane Smith</p>
                        <p className="text-gray-500">Founder, Another Company</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-blue-500 text-center text-white">
                <h2 className="text-3xl sm:text-2xl font-semibold">Ready to Get Started?</h2>
                <p className="mt-4 text-lg sm:text-base">Join us today and take your experience to the next level. Don't wait!</p>
                <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg text-lg">Sign Up Now</button>
            </section>
        </div>
    );
};

export default Home;
