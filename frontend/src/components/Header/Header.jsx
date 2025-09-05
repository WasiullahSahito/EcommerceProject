import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaChevronDown, FaRocket } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';

const Header = ({ onOpenSidebar }) => {
    const { getTotalCartItems, wishlistItems } = useContext(ShopContext);
    const totalCartItems = getTotalCartItems();
    const totalWishlistItems = wishlistItems.length;

    // State to manage the text inside the search input
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Function to handle the search submission
    const handleSearch = (e) => {
        // Prevent the form from reloading the page
        e.preventDefault();
        // If the search term is not empty, navigate to the products page with a search query
        if (searchTerm.trim()) {
            navigate(`/products?search=${searchTerm.trim()}`);
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-30">
            {/* Top promotional bar removed to match the screenshot */}

            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-3xl font-bold text-gray-800">
                    <FaShoppingCart className="text-primeColor" />
                    <span className="text-2xl">CLASSYSHOP</span>
                </Link>

                {/* Search Form - Fully Functional */}
                <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primeColor/50 text-gray-900"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FaSearch />
                        </button>
                    </div>
                </form>

                <div className="flex items-center space-x-6 text-gray-700">
                    <span className="text-sm">
                        <Link to="/login" className="hover:text-primeColor">Login</Link> | <Link to="/register" className="hover:text-primeColor">Register</Link>
                    </span>
                    <Link to="/wishlist" className="relative text-2xl">
                        <FaHeart />
                        {totalWishlistItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primeColor text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {totalWishlistItems}
                            </span>
                        )}
                    </Link>
                    <Link to="/cart" className="relative text-2xl">
                        <FaShoppingCart />
                        {totalCartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primeColor text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {totalCartItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <div className="border-t">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div
                        className="flex items-center font-semibold px-4 py-2 cursor-pointer text-gray-700"
                        onClick={onOpenSidebar}
                    >
                        <FaBars className="mr-2" />
                        <span>SHOP BY CATEGORIES</span>
                        <FaChevronDown className="ml-2" />
                    </div>

                    <nav className="flex space-x-8 font-semibold text-gray-700">
                        <NavLink to="/" className='hover:text-primeColor'>Home</NavLink>
                        {['Fashion', 'Electronics', 'Bags', 'Footwear', 'Groceries', 'Beauty', 'Wellness', 'Jewellery'].map(item => (
                            <NavLink key={item} to={`/products?category=${item.toLowerCase()}`} className='hover:text-primeColor'>
                                {item}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center text-sm font-semibold text-gray-700">
                        <FaRocket className="mr-2 text-primeColor" />
                        <span>Free International Delivery</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;