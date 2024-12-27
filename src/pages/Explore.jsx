const Explore = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-96 flex items-center justify-center text-white"
                style={{ backgroundImage: 'url("https://www.w3schools.com/w3images/mountains.jpg")' }}
            >
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">Explore the World</h1>
            </section>

            {/* Explore Content Section */}
            <section className="py-16 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Discover New Places</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600 max-w-4xl mx-auto">
                    Whether you're looking for adventure, relaxation, or cultural experiences, we have something for everyone. Explore destinations around the world and find your next getaway.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Destination 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Mountain Adventures</h3>
                            <p className="mt-2 text-gray-600">Explore breathtaking mountain landscapes and enjoy outdoor activities like hiking and skiing.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Destination 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Beach Escapes</h3>
                            <p className="mt-2 text-gray-600">Relax on pristine beaches, swim in crystal-clear waters, and enjoy the sun.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1080724/pexels-photo-1080724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Destination 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">Cultural Experiences</h3>
                            <p className="mt-2 text-gray-600">Immerse yourself in diverse cultures, history, and traditions from around the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Start Your Journey</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600">Your next adventure is waiting. Explore more destinations and create unforgettable memories.</p>
                <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Explore More</button>
            </section>
        </div>
    );
};

export default Explore;
