import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../utils/mockData';
import { FaShieldAlt, FaUndo, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { ShopContext } from '../../context/ShopContext';

const StarRating = ({ rating, reviewCount }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return (
        <div className="flex items-center gap-2">
            <div className="flex text-lg">{stars}</div>
            <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
        </div>
    );
};


const ProductDetailPage = () => {
    const { productId } = useParams();
    const { addToCart } = useContext(ShopContext);
    const product = allProducts.find(p => p.id === parseInt(productId));

    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (product) {
            setSelectedImage(product.images[0]);
        }
        window.scrollTo(0, 0);
    }, [product]);

    if (!product) {
        return <div className="text-center py-20 font-bold text-2xl">Product not found!</div>;
    }

    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Gallery Section */}
                    <div>
                        <div className="border rounded-lg mb-4 flex items-center justify-center p-4">
                            <img src={selectedImage} alt={product.name} className="w-full max-w-md h-auto max-h-[500px] object-contain" />
                        </div>
                        <div className="flex gap-2 justify-center">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`thumbnail ${index + 1}`}
                                    className={`w-20 h-20 object-cover border-2 rounded-md cursor-pointer ${selectedImage === img ? 'border-primeColor' : 'border-gray-200'}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="text-gray-800">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
                        <p className="text-sm text-gray-500 uppercase mb-3">{product.category}</p>

                        <div className="mb-4">
                            <StarRating rating={product.rating} reviewCount={product.reviews} />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold text-primeColor">Rs. {product.price.toLocaleString()}</span>
                            <span className="text-xl text-gray-400 line-through">Rs. {product.oldPrice.toLocaleString()}</span>
                            {discount > 0 && (
                                <span className="bg-red-100 text-red-500 text-sm font-semibold px-2 py-1 rounded">{discount}% OFF</span>
                            )}
                        </div>

                        {/* REMOVED: Color selector block */}

                        <button onClick={() => addToCart(product.id, 1)} className="w-full bg-primeColor text-white font-bold py-3 rounded-md hover:bg-brandHover transition-colors text-lg mb-8">
                            Add To Cart
                        </button>

                        {/* REMOVED: Empty placeholder boxes */}

                        <div className="flex justify-around border-t pt-6 text-center">
                            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                                <MdOutlineLocalShipping className="text-primeColor text-2xl" />
                                Free Delivery
                            </div>
                            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                                <FaShieldAlt className="text-primeColor text-2xl" />
                                2 Year Warranty
                            </div>
                            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
                                <FaUndo className="text-primeColor text-2xl" />
                                30 Day Returns
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;