import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaExpandArrowsAlt, FaSyncAlt, FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';

export const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        else stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
    return <div className="flex justify-center">{stars}</div>;
};

const ProductCard = ({ product }) => {
    const { toggleWishlist, isItemInWishlist, addToCart } = useContext(ShopContext);
    const inWishlist = isItemInWishlist(product.id);
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return (
        <div className="group relative border border-gray-200 rounded-xl p-3 flex flex-col flex-shrink-0 w-72 m-2 bg-white transition-shadow duration-300 hover:shadow-lg">
            {/* The top part of the card remains a link to the product details page */}
            <Link to={`/products/${product.id}`} className="block flex-grow">
                <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                    <span className="absolute top-3 left-3 bg-primeColor text-white text-xs font-bold px-2 py-1 rounded-md">{discount}%</span>

                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button title="Quick View" className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-primeColor hover:text-white transition-colors">
                            <FaExpandArrowsAlt size={14} />
                        </button>
                        <button title="Compare" className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-primeColor hover:text-white transition-colors">
                            <FaSyncAlt size={14} />
                        </button>
                        <button
                            title="Add to Wishlist"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleWishlist(product.id);
                            }}
                            className={`bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-primeColor hover:text-white transition-colors ${inWishlist ? 'text-red-500' : 'text-gray-800'}`}
                        >
                            {inWishlist ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
                        </button>
                    </div>
                </div>
                <div className="p-2 text-center">
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <h3 className="font-semibold text-md truncate" title={product.name}>{product.name}</h3>
                    <div className="my-1"><StarRating rating={product.rating} /></div>
                    <div className="flex justify-center items-center space-x-2">
                        <p className="text-gray-500 line-through">₹{product.oldPrice.toLocaleString()}</p>
                        <p className="text-primeColor font-bold text-lg">₹{product.price.toLocaleString()}</p>
                    </div>
                </div>
            </Link>

            {/* BUTTON UPDATED: Now an "Add to Cart" button */}
            <button
                onClick={() => addToCart(product.id)}
                className="mt-3 w-full flex items-center justify-center gap-2 border border-primeColor text-primeColor py-2 rounded-full hover:bg-primeColor hover:text-white transition-colors text-sm font-bold"
            >
                <FaShoppingCart />
                ADD TO CART
            </button>
        </div>
    );
};

export default ProductCard;