import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ShopAppRouter from './ShopAppRouter';
import Sidebar from './components/Sidebar/Sidebar';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import carosurl_1_image_1 from "./assets/images/carosurl_1_image_1.webp";
import carosurl_1_image_2 from "./assets/images/carosurl_1_image_2.webp";
import carosurl_1_image_3 from "./assets/images/carosurl_1_image_3.webp";
import carosurl_2_image_1 from "./assets/images/carosurl_2_image_1.webp";
import carosurl_2_image_2 from "./assets/images/carosurl_2_image_2.webp";
import carosurl_3_image_1 from "./assets/images/carosurl_3_image_1.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from "./assets/icons/Menu-bars-white.svg";
import SearchIcon from "./assets/icons/Search.svg";
import UserIcon from "./assets/icons/User.svg";
import BagIcon from "./assets/icons/Beg.svg";
import CloseIcon from "./assets/icons/Close.svg";
import LogoWhite from "./assets/icons/Logo-white.svg";

const pages = [
    { id: 1, bg: "bg-black", images: [carosurl_1_image_1, carosurl_1_image_2, carosurl_1_image_3], bottomLinks: ["Men", "Women", "Kids"] },
    { id: 2, bg: "bg-gray-800", images: [carosurl_2_image_1, carosurl_2_image_2, carosurl_1_image_1], bottomLinks: ["Shoes", "Accessories", "Sale"] },
    { id: 3, bg: "bg-blue-900", images: [carosurl_3_image_1, carosurl_1_image_1, carosurl_1_image_2], bottomLinks: ["Jackets", "Sweaters", "Boots"] },
    { id: 4, bg: "bg-white", isLandingPage: true },
];

const ANIMATION_COOLDOWN = 800;

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const lastAnimationTime = useRef(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(pages.map(() => 0));
    const [imageAnimating, setImageAnimating] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [bagOpen, setBagOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const navigate = (direction) => {
            const now = Date.now();
            if (now - lastAnimationTime.current < ANIMATION_COOLDOWN) return;

            if (direction === 'down' && currentPage < pages.length - 1) {
                lastAnimationTime.current = now;
                setCurrentPage(p => p + 1);
            } else if (direction === 'up' && currentPage > 0) {
                lastAnimationTime.current = now;
                setCurrentPage(p => p + 1);
            }
        };

        const handleScroll = (e) => {
            if (isSidebarOpen || menuOpen || bagOpen || currentPage === pages.length - 1) return;
            if (e.deltaY > 0) navigate('down');
            else navigate('up');
        };

        const handleKeyDown = (e) => {
            if (isSidebarOpen || menuOpen || bagOpen || currentPage === pages.length - 1) return;
            if (e.key === 'ArrowDown') navigate('down');
            else if (e.key === 'ArrowUp') navigate('up');
        };

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentPage, isSidebarOpen, menuOpen, bagOpen]);

    const nextImage = (pageIndex) => {
        if (imageAnimating) return;
        const total = pages[pageIndex].images.length;
        if (currentImageIndex[pageIndex] < total - 1) {
            setImageAnimating(true);
            setCurrentImageIndex((prev) => prev.map((idx, i) => (i === pageIndex ? idx + 1 : idx)));
        }
    };

    const prevImage = (pageIndex) => {
        if (imageAnimating) return;
        if (currentImageIndex[pageIndex] > 0) {
            setImageAnimating(true);
            setCurrentImageIndex((prev) => prev.map((idx, i) => (i === pageIndex ? idx - 1 : idx)));
        }
    };

    const isLastPage = currentPage === pages.length - 1;

    return (
        <div className="relative w-screen h-screen overflow-hidden text-white font-sans">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <header className={`absolute top-0 left-0 right-0 z-[100] flex justify-between items-center p-6 transition-opacity duration-300 ${isLastPage ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="flex items-center gap-4">
                    <img src={MenuIcon} alt="Menu" className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
                    <img src={LogoWhite} alt="Outfitters Logo" className="h-6" />
                </div>
                <div className="flex items-center gap-6">
                    <img src={SearchIcon} alt="Search" className="h-5 w-5 cursor-pointer" />
                    <img src={UserIcon} alt="User" className="h-5 w-5 cursor-pointer" />
                    <img src={BagIcon} alt="Shopping Bag" className="h-5 w-5 cursor-pointer" onClick={() => setBagOpen(true)} />
                </div>
            </header>

            <div className={`fixed top-0 left-0 h-full bg-white z-[202] shadow-lg w-full md:w-1/3 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-between items-center border-b text-black">
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={() => setMenuOpen(false)}>
                        <img src={CloseIcon} alt="close" className="h-5 w-5" />
                    </button>
                </div>
                <ul className="p-4 space-y-4 text-black"><li>Home</li><li>Shop</li><li>About</li><li>Contact</li></ul>
            </div>

            <ShoppingBag open={bagOpen} onClose={() => setBagOpen(false)} />

            {pages.map((page, pageIndex) => (
                <div
                    key={page.id}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${page.bg}`}
                    style={{
                        transform: pageIndex === currentPage ? "translateY(0%)" : pageIndex < currentPage ? "translateY(-100%)" : "translateY(100%)",
                        zIndex: pages.length - pageIndex,
                        overflowY: pageIndex === pages.length - 1 ? 'auto' : 'hidden',
                    }}
                >
                    {page.isLandingPage ? (
                        <ShopAppRouter onOpenSidebar={() => setIsSidebarOpen(true)} />
                    ) : (
                        <div className="relative w-full h-full">
                            {page.images.map((src, i) => (<div key={i} className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: i === currentImageIndex[pageIndex] ? 1 : 0, zIndex: i === currentImageIndex[pageIndex] ? 10 : 1 }} onTransitionEnd={() => setImageAnimating(false)}><img src={src} alt="" className="w-full h-full object-cover" /></div>))}
                            <button onClick={() => prevImage(pageIndex)} className="absolute z-20 left-4 top-1/2 -translate-y-1/2 text-white px-4 py-2 rounded text-2xl"><FaChevronLeft /></button>
                            <button onClick={() => nextImage(pageIndex)} className="absolute z-20 right-4 top-1/2 -translate-y-1/2 text-white px-4 py-2 rounded text-2xl"><FaChevronRight /></button>
                            {currentImageIndex[pageIndex] === page.images.length - 1 && (<div className="absolute bottom-8 w-full flex justify-center space-x-8 text-white text-lg z-20">{page.bottomLinks.map((link, idx) => (<a key={idx} href="#" className="hover:underline">{link}</a>))}</div>)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}