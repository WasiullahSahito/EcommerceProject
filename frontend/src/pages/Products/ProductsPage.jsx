import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allProducts, sidebarCategories as categories } from '../../utils/mockData';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import { FaTh, FaList } from 'react-icons/fa';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();

    // State to hold the products that are currently displayed
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // State for each filter criteria
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [price, setPrice] = useState(75000);
    const [searchTerm, setSearchTerm] = useState('');

    // This effect runs when the component mounts or URL search params change
    useEffect(() => {
        const initialCategory = searchParams.get('category');
        const initialSearch = searchParams.get('search');

        // Pre-select category if it comes from the URL
        if (initialCategory) {
            setSelectedCategories([initialCategory]);
        }
        // Set search term if it comes from the URL
        if (initialSearch) {
            setSearchTerm(initialSearch);
        }
    }, [searchParams]);

    // This is the core filtering logic. It runs whenever any filter state changes.
    useEffect(() => {
        let result = allProducts;

        // 1. Filter by search term
        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Filter by selected categories
        if (selectedCategories.length > 0) {
            result = result.filter(product =>
                selectedCategories.includes(product.category.toLowerCase())
            );
        }

        // 3. Filter by price
        result = result.filter(product => product.price <= price);

        setFilteredProducts(result);
    }, [selectedCategories, price, searchTerm, allProducts]);

    // Handler for category checkbox changes
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategories(prev =>
            e.target.checked
                ? [...prev, category]
                : prev.filter(c => c !== category)
        );
    };

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-4 border-b pb-2">Filters</h3>
                    <div>
                        <h4 className="font-semibold mb-3">Categories</h4>
                        <ul className="space-y-2 text-gray-600">
                            {categories.map(cat => (
                                <li key={cat} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={cat}
                                        value={cat.toLowerCase()}
                                        checked={selectedCategories.includes(cat.toLowerCase())}
                                        onChange={handleCategoryChange}
                                        className="mr-2 h-4 w-4 accent-primeColor"
                                    />
                                    <label htmlFor={cat}>{cat}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h4 className="font-semibold mb-3 pt-4 border-t">Price Range</h4>
                        <input
                            type="range"
                            min="0"
                            max="75000"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primeColor"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>₹0</span>
                            <span>₹{price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Main Content */}
            <main className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-600">{filteredProducts.length} products found</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md bg-primeColor text-white"><FaTh /></button>
                        <button className="p-2 rounded-md border text-gray-500 hover:bg-gray-100"><FaList /></button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <ProductGridCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;