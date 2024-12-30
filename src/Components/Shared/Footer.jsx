import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-5">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">EaseRoom</h2>
                    <p className="text-gray-400">
                        Your trusted partner for seamless hotel bookings. Explore, book, and relax with ease.
                    </p>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook text-xl hover:text-white"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter text-xl hover:text-white"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram text-xl hover:text-white"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin text-xl hover:text-white"></i>
                        </a>
                    </div>
                </div>

                {/* Services Section */}
                <nav>
                    <h6 className="text-lg font-semibold mb-4">Services</h6>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Branding</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Design</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Marketing</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Advertisement</a>
                        </li>
                    </ul>
                </nav>

                {/* Company Section */}
                <nav>
                    <h6 className="text-lg font-semibold mb-4">Company</h6>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">About us</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Contact</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Jobs</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Press kit</a>
                        </li>
                    </ul>
                </nav>

                {/* Legal Section */}
                <nav>
                    <h6 className="text-lg font-semibold mb-4">Legal</h6>
                    <ul>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Terms of use</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Privacy policy</a>
                        </li>
                        <li className="mb-2">
                            <a className="hover:underline" href="#">Cookie policy</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} EaseRoom. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
