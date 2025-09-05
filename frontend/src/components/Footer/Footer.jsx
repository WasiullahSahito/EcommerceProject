import React from 'react';
import { FaUndo, FaGift, FaHeadset, FaRegCommentDots, FaCreditCard } from 'react-icons/fa';
import { MdOutlineLocalShipping } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-white text-lightText font-bodyFont border-t">
            {/* Top Section: Perks */}
            <div className="bg-backgroundColor py-10">
                <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">

                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <MdOutlineLocalShipping className="text-3xl text-primeColor mb-2" />
                        <h4 className="font-bold text-black text-sm">Free Shipping</h4>
                        <p className="text-xs text-lightText">Orders Over $100</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <FaUndo className="text-3xl text-primeColor mb-2" />
                        <h4 className="font-bold text-black text-sm">30 Days Returns</h4>
                        <p className="text-xs text-lightText">Easy Exchange</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <FaCreditCard className="text-3xl text-primeColor mb-2" />
                        <h4 className="font-bold text-black text-sm">Secured Payment</h4>
                        <p className="text-xs text-lightText">Cards Accepted</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <FaGift className="text-3xl text-primeColor mb-2" />
                        <h4 className="font-bold text-black text-sm">Special Gifts</h4>
                        <p className="text-xs text-lightText">First Order</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <FaHeadset className="text-3xl text-primeColor mb-2" />
                        <h4 className="font-bold text-black text-sm">Support 24/7</h4>
                        <p className="text-xs text-lightText">Contact Anytime</p>
                    </div>

                </div>
            </div>

            {/* Middle Section: Links and Newsletter */}
            <div className="container mx-auto px-4 pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-black">Contact us</h4>
                        <p className="mb-2">Classyshop - Mega Super Store</p>
                        <p className="mb-4">507-Union Trade Centre France</p>
                        <p className="mb-2">
                            <a href="mailto:sales@yourcompany.com" className="hover:text-primeColor transition-colors">sales@yourcompany.com</a>
                        </p>
                        <p className="text-xl font-bold text-primeColor mb-4">(+91) 9876-543-210</p>
                        <div className="flex items-center gap-3">
                            <FaRegCommentDots className="text-3xl" />
                            <div>
                                <p className="font-semibold text-black">Online Chat</p>
                                <p className="text-sm">Get Expert Help</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-black">Products</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primeColor transition-colors">Prices drop</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">New products</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Best sales</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Sitemap</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Stores</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-black">Our company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primeColor transition-colors">Delivery</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Legal Notice</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Secure Payment</a></li>
                            <li><a href="#" className="hover:text-primeColor transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-black">Subscribe to Newsletter</h4>
                        <p className="mb-4 text-sm">Subscribe to our latest newsletter to get news about special discounts.</p>
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full border border-gray-300 p-2 rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-primeColor"
                        />
                        <div className="flex items-center text-sm">
                            <input type="checkbox" id="terms" className="mr-2 accent-primeColor" />
                            <label htmlFor="terms">I agree to the terms and conditions and the privacy policy</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="border-t">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-center text-sm text-gray-500">© 2025 Classyshop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;