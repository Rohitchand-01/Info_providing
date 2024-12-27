import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Logo/Brand Name */}
                    <Link to="/" className="text-3xl font-bold text-white mb-4 sm:mb-0">
                        MyWebsite
                    </Link>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 mb-4 sm:mb-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-all duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-all duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-all duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 text-center text-gray-300">
                    <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
