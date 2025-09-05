import React from 'react';
import CloseIcon from "../../assets/icons/Close.svg";

export default function ShoppingBag({ open, onClose }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full bg-white z-[203] shadow-lg w-full md:w-1/3 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="p-4 flex justify-between items-center">
                <span className="font-bold text-lg text-black">Your Bag</span>
                <button onClick={onClose}>
                    <img src={CloseIcon} alt="close-icon" />
                </button>
            </div>
            <ul className="p-4 space-y-4 text-black">
                <li>Item 1 (Outfitters Bag)</li>
                <li>Item 2 (Outfitters Bag)</li>
                <li>Total: $200</li>
            </ul>
        </div>
    );
}