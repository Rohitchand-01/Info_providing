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
                <h2 className="text-3xl sm:text-2xl font-semibold text-gray-800">Our Story</h2>
                <p className="mt-4 text-lg sm:text-base text-gray-600">We are passionate about delivering the best experience for our users. Our team works tirelessly to bring innovative features and improvements.</p>
                <div className="mt-8 max-w-4xl mx-auto text-left">
                    <p className="text-lg text-gray-600">
                        We started with a vision to create a platform that offers a unique and seamless experience for everyone. Over the years, we have expanded our services and features, and we continue to innovate and grow. Our mission is to empower our users with tools and resources that enhance their daily lives.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
