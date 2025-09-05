import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import CartPage from './pages/Cart/CartPage';
import WishlistPage from './pages/Wishlist/WishlistPage';

export default function ShopAppRouter({ onOpenSidebar }) {
    return (
        <ShopContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout onOpenSidebar={onOpenSidebar} />}>
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductsPage />} />
                        <Route path="products/:productId" element={<ProductDetailPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route path="wishlist" element={<WishlistPage />} />
                    </Route>
                </Routes>
            </Router>
        </ShopContextProvider>
    );
}