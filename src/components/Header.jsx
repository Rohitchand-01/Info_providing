import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">My Website</Link>
                <div className="hidden sm:flex space-x-6">
                    <Link to="/" className="hover:text-orange-400 transition-all">Home</Link>
                    <Link to="/about" className="hover:text-orange-400 transition-all">About</Link>
                    <Link to="/explore" className="hover:text-orange-400 transition-all">Explore</Link>
                    <Link to="/contact" className="hover:text-orange-400 transition-all">Contact</Link>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        ☰
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-gray-800 text-white p-4 space-y-4">
                    <Link to="/" className="block hover:text-orange-400">Home</Link>
                    <Link to="/about" className="block hover:text-orange-400">About</Link>
                    <Link to="/contact" className="block hover:text-orange-400">Contact</Link>
                    <Link to="/explore" className="block hover:text-orange-400">Explore</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
