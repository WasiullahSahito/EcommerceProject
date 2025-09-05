import React, { createContext, useState } from 'react';
import { allProducts } from '../utils/mockData';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (const product of allProducts) {
        cart[product.id] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToCart = (itemId, quantity = 1) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
    };

    const updateCartItemQuantity = (newQuantity, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const toggleWishlist = (itemId) => {
        setWishlistItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const isItemInWishlist = (itemId) => {
        return wishlistItems.includes(itemId);
    };

    const contextValue = {
        cartItems,
        wishlistItems,
        allProducts,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
        toggleWishlist,
        isItemInWishlist
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};