import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
    const { allProducts, wishlistItems } = useContext(ShopContext);
    const wishlistProducts = allProducts.filter(product => wishlistItems.includes(product.id));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
            {wishlistProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wishlistProducts.map(product => (
                        <ProductGridCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-600 mb-4">Your wishlist is empty.</p>
                    <Link to="/" className="bg-primeColor text-white font-semibold py-3 px-8 rounded-md hover:bg-brandHover transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;