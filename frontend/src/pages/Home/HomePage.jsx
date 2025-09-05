import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { allProducts, categories, blogPosts } from '../../utils/mockData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- ALL REQUIRED IMAGES ---
import SliderImage1 from '../../assets/images/slider_image_1.jpg';
import SliderImage2 from '../../assets/images/slider_image_2.jpg';
import SliderImage3 from '../../assets/images/slider_image_3.jpg';
import SliderImage4 from '../../assets/images/slider_image_4.jpg';
import SliderImage5 from '../../assets/images/slider_image_5.jpg';
import IphonePink from '../../assets/images/iphone_pink.png';
import WomenTopBanner from '../../assets/images/women_top_banner.jpg';


const ProductCarousel = ({ title, subtitle, products, tabs }) => {
    // Set the initial active tab to the first one in the list
    const [activeTab, setActiveTab] = useState(tabs ? tabs[0] : null);
    const scrollRef = useRef(null);

    // Function to scroll the carousel
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300; // How many pixels to scroll
            current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    // Filter products based on the active tab
    const displayedProducts = activeTab
        ? products.filter(p => p.category.toLowerCase() === activeTab.toLowerCase())
        : products;

    return (
        <section className="py-12">
            <div className="text-center mb-4"><h2 className="text-3xl font-bold">{title}</h2>{subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}</div>
            {tabs && (<div className="flex justify-center space-x-8 mb-6 border-b">{tabs.map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 px-4 text-gray-800 font-semibold transition-colors ${activeTab === tab ? 'text-primeColor border-b-2 border-primeColor' : 'hover:text-primeColor'}`}>{tab.toUpperCase()}</button>))}</div>)}
            <div className="relative">
                <div ref={scrollRef} className="flex overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide scroll-smooth">
                    {displayedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
                <button onClick={() => scroll('left')} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primeColor hover:text-white z-10 transition-colors duration-300">
                    <FaChevronLeft />
                </button>
                <button onClick={() => scroll('right')} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primeColor hover:text-white z-10 transition-colors duration-300">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

const NewPromoSlider = () => {
    const slides = [
        {
            layout: 'split',
            bg: 'bg-pink-100',
            image: IphonePink,
            subtitle: 'Special Offer',
            title: 'Premium Fashion Collection – Women\'s Designer Wear',
            price: '₹2,499.00'
        },
        {
            layout: 'background',
            image: WomenTopBanner,
            subtitle: 'Big saving days sale',
            title: 'Apple iPhone 15 Pro Max 256GB, Natural Titanium',
            price: '₹1,34,900.00'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setTimeout(nextSlide, 6000);
        return () => clearTimeout(timer);
    }, [currentSlide, slides.length]);

    return (
        <div className="relative h-full rounded-lg overflow-hidden group">
            {slides.map((slide, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    {slide.layout === 'background' ? (
                        <div className="w-full h-full bg-cover bg-center flex items-center justify-end" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="w-1/2 text-center text-gray-800 pr-10">
                                <p className="text-md mb-2">{slide.subtitle}</p>
                                <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                                <p className="text-lg">Starting At Only <span className="text-3xl font-bold text-primeColor">{slide.price}</span></p>
                            </div>
                        </div>
                    ) : (
                        <div className={`w-full h-full flex items-center justify-center p-8 ${slide.bg}`}>
                            <div className="w-1/2 flex justify-center items-center">
                                <img src={slide.image} alt={slide.title} className="w-auto h-auto object-contain max-w-[70%] max-h-[70%]" />
                            </div>
                            <div className="w-1/2 text-left text-gray-800 pl-4">
                                <p className="text-md mb-2">{slide.subtitle}</p>
                                <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                                <p className="text-lg">Starting At Only <span className="text-3xl font-bold text-primeColor">{slide.price}</span></p>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/60 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primeColor hover:text-white z-10 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/60 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primeColor hover:text-white z-10 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                <FaChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentSlide ? 'bg-primeColor' : 'bg-gray-400/50'}`} />
                ))}
            </div>
        </div>
    );
};


const HomePage = () => {
    const slides = [SliderImage1, SliderImage2, SliderImage3, SliderImage4, SliderImage5];
    const [currentSlide, setCurrentSlide] = useState(0);

    const shoesImageUrl = "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=250&fit=crop";
    const phoneImageUrl = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop";

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="bg-white font-sans text-black">
            <main className="container mx-auto px-4">
                <section className="my-8 relative h-96">
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
                    ))}
                    <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/60 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primeColor hover:text-white z-10 transition-colors duration-300"><FaChevronLeft /></button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/60 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primeColor hover:text-white z-10 transition-colors duration-300"><FaChevronRight /></button>
                </section>

                <section className="my-8 py-4 bg-gray-50 rounded-lg shadow-sm">
                    <div className="flex justify-around">
                        {categories.map(cat => (
                            <div key={cat.name} className="flex flex-col items-center text-center w-24 group cursor-pointer">
                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-2 overflow-hidden p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primeColor/30">
                                    <img src={cat.icon} alt={cat.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="font-semibold text-sm group-hover:text-primeColor">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <ProductCarousel title="Popular Products" subtitle="Do not miss the current offers until the end of March" products={allProducts} tabs={['Fashion', 'Electronics', 'Bags', 'Footwear', 'Groceries', 'Beauty', 'Wellness', 'Jewellery']} />

                <section className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 relative rounded-lg overflow-hidden h-96 lg:h-[450px]">
                        <NewPromoSlider />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="rounded-lg flex-1 relative overflow-hidden group">
                            <img src={shoesImageUrl} alt="Footwear Promotion" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">Buy Men's Footwear with low price</h3>
                                <p className="text-2xl font-bold text-primeColor">₹1,500</p>
                            </div>
                        </div>
                        <div className="rounded-lg flex-1 relative overflow-hidden group">
                            <img src={phoneImageUrl} alt="Smartphone Collection" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-1">Premium Smartphone Collection</h3>
                                <p className="text-2xl font-bold text-primeColor">₹23,999</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center my-8">
                    <Link to="/products" className="bg-primeColor text-white font-semibold py-3 px-8 rounded-md hover:bg-brandHover transition-colors text-lg">
                        View All Products
                    </Link>
                </div>

                <ProductCarousel title="Latest Products" products={allProducts.slice().reverse()} />
                <ProductCarousel title="Featured Products" products={allProducts.slice(4, 10)} />

                <section className="py-12">
                    <div className="text-center mb-8"><h2 className="text-3xl font-bold">From The Blog</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                                <div className="relative overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:rotate-1" />
                                    <span className="absolute bottom-2 right-2 bg-primeColor text-white text-xs px-2 py-1 rounded">{post.date}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold mb-2 h-12">{post.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                    <a href="#" className="font-semibold text-primeColor hover:underline">Read More &gt;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;