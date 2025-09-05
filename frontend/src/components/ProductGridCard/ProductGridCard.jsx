import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';

// We can define a more specific StarRating for this card style
const CardStarRating = ({ rating, reviewCount }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        else stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
    return (
        <div className="flex items-center justify-center gap-1">
            <div className="flex text-lg">{stars}</div>
            <span className='text-xs text-gray-400'>({reviewCount})</span>
        </div>
    );
};

const ProductGridCard = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col p-4">
            <Link to={`/products/${product.id}`} className="block relative">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg" />
            </Link>
            <div className="pt-4 text-center flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-md truncate mb-2 text-gray-800">{product.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                        <CardStarRating rating={product.rating} reviewCount={product.reviews} />
                    </div>
                </div>
                <div className='my-3'>
                    <span className="text-primeColor font-bold text-xl mr-2">Rs. {product.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through text-sm">Rs. {product.oldPrice.toLocaleString()}</span>
                </div>
                <button
                    onClick={() => addToCart(product.id)}
                    className="w-full border border-primeColor text-primeColor py-2 rounded-lg hover:bg-primeColor hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2"
                >
                    <FaShoppingCart />
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductGridCard;