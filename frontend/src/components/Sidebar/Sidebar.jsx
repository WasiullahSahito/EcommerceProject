import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { sidebarCategories } from '../../utils/mockData';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 z-[200]' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-[201] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b text-black">
                    <h2 className="text-lg font-semibold">Shop By Categories</h2>
                    <button onClick={onClose}>
                        <FaX className="text-xl" />
                    </button>
                </div>
                <ul className="p-4 text-black">
                    {sidebarCategories.map(category => (
                        <li key={category} className="flex justify-between items-center py-3 border-b cursor-pointer hover:bg-gray-50">
                            <span>{category}</span>
                            <FaPlus className="text-gray-400" />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;