import blog_post_1 from '../assets/images/blog_post_1.jpg';
import blog_post_2 from '../assets/images/blog_post_2.jpg';
import blog_post_3 from '../assets/images/blog_post_3.jpg';

export const categories = [
    { name: 'Fashion', icon: 'https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png' },
    { name: 'Electronics', icon: 'https://serviceapi.spicezgold.com/download/1741660988059_ele.png' },
    { name: 'Bags', icon: 'https://serviceapi.spicezgold.com/download/1741661045887_bag.png' },
    { name: 'Footwear', icon: 'https://serviceapi.spicezgold.com/download/1741661061379_foot.png' },
    { name: 'Groceries', icon: 'https://serviceapi.spicezgold.com/download/1741661077633_gro.png' },
    { name: 'Beauty', icon: 'https://serviceapi.spicezgold.com/download/1741661092792_beauty.png' },
    { name: 'Wellness', icon: 'https://serviceapi.spicezgold.com/download/1741661105893_well.png' },
    { name: 'Jewellery', icon: 'https://serviceapi.spicezgold.com/download/1749273446706_jw.png' },
];

export const sidebarCategories = ['Fashion', 'Electronics', 'Bags', 'Footwear', 'Groceries', 'Beauty', 'Wellness', 'Jewellery'];

// --- NEW MOCK DATA BASED ON THE LATEST SCREENSHOTS ---

const products = [
    // Fashion
    {
        id: 1,
        name: 'Classic White T-Shirt',
        brand: 'Urban Threads',
        category: 'Fashion',
        price: 1200,
        oldPrice: 1500,
        rating: 4.5,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80']
    },
    {
        id: 2,
        name: 'Vintage Leather Jacket',
        brand: 'Retro Rides',
        category: 'Fashion',
        price: 8500,
        oldPrice: 10000,
        rating: 4.8,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&q=80']
    },
    {
        id: 12,
        name: 'Blue Denim Jeans',
        brand: 'Dapper Denim',
        category: 'Fashion',
        price: 2800,
        oldPrice: 3500,
        rating: 4.6,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80']
    },

    // Electronics
    {
        id: 3,
        name: 'Wireless Noise-Cancelling Headphones',
        brand: 'SoundWave',
        category: 'Electronics',
        price: 12500,
        oldPrice: 15000,
        rating: 4.7,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80']
    },
    {
        id: 4,
        name: 'Modern Smartwatch',
        brand: 'TechTime',
        category: 'Electronics',
        price: 18000,
        oldPrice: 22000,
        rating: 4.6,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80']
    },

    // Bags
    {
        id: 5,
        name: 'Elegant Leather Handbag',
        brand: 'Chic Carry',
        category: 'Bags',
        price: 4500,
        oldPrice: 6000,
        rating: 4.9,
        reviews: 180,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80']
    },
    {
        id: 13,
        name: 'Traveler\'s Backpack',
        brand: 'GoExplore',
        category: 'Bags',
        price: 3800,
        oldPrice: 4500,
        rating: 4.7,
        reviews: 220,
        image: 'https://www.witzman.com/cdn/shop/files/b682_travel_backpack_for_men_nylon_pack_witzman_4.webp?v=1750833928',
        images: ['https://www.witzman.com/cdn/shop/files/b682_travel_backpack_for_men_nylon_pack_witzman_4.webp?v=1750833928']
    },

    // Footwear
    {
        id: 6,
        name: 'Classic Brown Sneakers',
        brand: 'StreetStyle',
        category: 'Footwear',
        price: 3200,
        oldPrice: 4000,
        rating: 4.7,
        reviews: 250,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80']
    },
    {
        id: 14,
        name: 'High-Performance Running Shoes',
        brand: 'QuickStride',
        category: 'Footwear',
        price: 5500,
        oldPrice: 6500,
        rating: 4.8,
        reviews: 190,
        image: 'https://www.hopkicks.pk/image/cache/catalog/2024/NOV%202024/SHOES%20ORDER/5/11-500x500.jpg',
        images: ['https://www.hopkicks.pk/image/cache/catalog/2024/NOV%202024/SHOES%20ORDER/5/11-500x500.jpg']
    },

    // Groceries
    {
        id: 7,
        name: 'Artisanal Coffee Beans',
        brand: 'The Daily Grind',
        category: 'Groceries',
        price: 1200,
        oldPrice: 1400,
        rating: 4.9,
        reviews: 250,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80']
    },

    // Beauty
    {
        id: 8,
        name: 'Natural Ingredient Soap Bar',
        brand: 'PureEarth',
        category: 'Beauty',
        price: 500,
        oldPrice: 600,
        rating: 4.7,
        reviews: 180,
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80']
    },

    // Wellness
    {
        id: 9,
        name: 'Aromatherapy Diffuser',
        brand: 'CalmScents',
        category: 'Wellness',
        price: 2200,
        oldPrice: 2500,
        rating: 4.8,
        reviews: 160,
        image: 'https://img.drz.lazcdn.com/static/pk/p/380f5ec969f57ac1cfee25a070775da6.jpg_720x720q80.jpg',
        images: ['https://img.drz.lazcdn.com/static/pk/p/380f5ec969f57ac1cfee25a070775da6.jpg_720x720q80.jpg']
    },

    // Jewellery
    {
        id: 10,
        name: 'Elegant Gold Necklace',
        brand: 'Aura Jewels',
        category: 'Jewellery',
        price: 25000,
        oldPrice: 30000,
        rating: 4.9,
        reviews: 80,
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80',
        images: ['https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80']
    },
    {
        id: 11,
        name: 'Minimalist Silver Ring',
        brand: 'Aura Jewels',
        category: 'Jewellery',
        price: 3500,
        oldPrice: 4000,
        rating: 4.7,
        reviews: 110,
        image: 'https://i5.walmartimages.com/seo/ChicSilver-2mm-925-Sterling-Silver-Ring-High-Polish-Plain-Dome-Wedding-Band-for-Women-Comfort-Fit-Size-4-12_0d0d4ff2-b4bc-4bd5-9203-f58280ce4025.711abbdcd284b935eaae1d0fabce28ef.jpeg',
        images: ['https://i5.walmartimages.com/seo/ChicSilver-2mm-925-Sterling-Silver-Ring-High-Polish-Plain-Dome-Wedding-Band-for-Women-Comfort-Fit-Size-4-12_0d0d4ff2-b4bc-4bd5-9203-f58280ce4025.711abbdcd284b935eaae1d0fabce28ef.jpeg']
    },
];

// Re-export the products for different parts of the app
export const popularProducts = products.slice(0, 8);
export const allProducts = products;

export const blogPosts = [
    { title: 'Sustainable living through cutting-edge prefabricated homes', date: '2035-03-12', image: blog_post_1, excerpt: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...' },
    { title: 'Explore sustainable living through cutting-edge prefabricated homes', date: '2035-03-12', image: blog_post_2, excerpt: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...' },
    { title: 'This prefabrice passive house is highly sustainable', date: '2035-03-12', image: blog_post_3, excerpt: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...' },
    { title: 'This prefabrice passive house is memorable highly sustainable', date: '2035-03-12', image: blog_post_1, excerpt: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...' },
];