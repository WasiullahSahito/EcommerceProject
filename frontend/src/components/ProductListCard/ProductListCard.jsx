import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';

const ListStarRating = ({ rating, reviewCount }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        else stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
    return (
        <div className="flex items-center gap-1">
            <div className="flex text-lg">{stars}</div>
            <span className='text-xs text-gray-400'>({reviewCount})</span>
        </div>
    );
};

const ProductListCard = ({ product }) => {
    const { addToCart } = useContext(ShopContext);
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row p-4 gap-6">
            {/* Image Section */}
            <Link to={`/products/${product.id}`} className="block relative w-full md:w-1/3 flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-48 md:h-full object-cover rounded-lg" />
                <span className="absolute top-3 left-3 bg-primeColor text-white text-xs font-bold px-2 py-1 rounded-md">-{discount}%</span>
            </Link>

            {/* Details Section */}
            <div className="flex flex-col text-left">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
                <div className="mb-3">
                    <ListStarRating rating={product.rating} reviewCount={product.reviews} />
                </div>
                <div className='my-3 flex items-center gap-4'>
                    <span className="text-primeColor font-bold text-2xl">Rs. {product.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through text-lg">Rs. {product.oldPrice.toLocaleString()}</span>
                </div>
                <div className="mt-auto pt-4">
                    <button
                        onClick={() => addToCart(product.id)}
                        className="w-full md:w-auto border border-primeColor text-primeColor px-6 py-2 rounded-lg hover:bg-primeColor hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2"
                    >
                        <FaShoppingCart />
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;