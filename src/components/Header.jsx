import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-purple-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Brand Name */}
                <Link to="/" className="text-3xl font-bold text-white">
                    MyWebsite
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-green-500 transition-all duration-300">
                        Home
                    </Link>
                    <Link to="/explore" className="hover:text-green-500 transition-all duration-300">
                        Explore
                    </Link>
                    <Link to="/about" className="hover:text-green-500 transition-all duration-300">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-green-500 transition-all duration-300">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-purple-800 text-white py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link to="/" className="hover:text-green-500">
                            Home
                        </Link>
                        <Link to="/explore" className="hover:text-green-500">
                            Explore
                        </Link>
                        <Link to="/about" className="hover:text-green-500">
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-green-500">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
