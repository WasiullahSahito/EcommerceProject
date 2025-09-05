import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ data }) => {
    const { id, name, price, images } = data;
    const { cartItems, updateCartItemQuantity, removeFromCart } = useContext(ShopContext);
    const quantity = cartItems[id];

    return (
        <div className="grid grid-cols-6 gap-4 items-center border-b py-4 text-gray-800">
            {/* Product Details */}
            <div className="col-span-2 flex items-center gap-4">
                <img src={images[0]} alt={name} className="w-20 h-20 object-cover rounded-md" />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                </div>
            </div>
            {/* Price */}
            <div className="text-center">
                <p>₹{price.toLocaleString()}</p>
            </div>
            {/* Quantity */}
            <div className="text-center">
                <div className="flex items-center justify-center border rounded-md w-fit mx-auto">
                    <button onClick={() => updateCartItemQuantity(Math.max(1, quantity - 1), id)} className="px-3 py-1 font-bold">-</button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button onClick={() => updateCartItemQuantity(quantity + 1, id)} className="px-3 py-1 font-bold">+</button>
                </div>
            </div>
            {/* Total */}
            <div className="text-center">
                <p className="font-semibold">₹{(price * quantity).toLocaleString()}</p>
            </div>
            {/* Remove Button */}
            <div className="text-center">
                <button onClick={() => removeFromCart(id)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CartItem;