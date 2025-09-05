import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { allProducts, cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Your Shopping Cart</h1>
            {totalAmount > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2">
                        {/* Headers */}
                        <div className="grid grid-cols-6 gap-4 font-semibold text-gray-500 border-b pb-4 mb-4">
                            <div className="col-span-2">Product</div>
                            <div className="text-center">Price</div>
                            <div className="text-center">Quantity</div>
                            <div className="text-center">Total</div>
                            <div className="text-center">Remove</div>
                        </div>
                        {/* Items */}
                        <div>
                            {allProducts.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return <CartItem key={product.id} data={product} />;
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md self-start">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">Order Summary</h2>
                        <div className="flex justify-between mb-2 text-gray-600">
                            <span>Subtotal</span>
                            <span>₹{totalAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-gray-600">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-4 text-gray-800">
                            <span>Total</span>
                            <span>₹{totalAmount.toLocaleString()}</span>
                        </div>
                        <button onClick={() => navigate('/checkout')} className="w-full mt-6 bg-primeColor text-white font-semibold py-3 rounded-md hover:bg-brandHover transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
                    <Link to="/" className="bg-primeColor text-white font-semibold py-3 px-8 rounded-md hover:bg-brandHover transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;