import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="bg-backgroundColor py-16 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create your account</h2>

                <form className="space-y-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            className="w-full text-base py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor focus:ring-2 focus:ring-primeColor/50 text-gray-900"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Id</label>
                        <input
                            className="w-full text-base py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor focus:ring-2 focus:ring-primeColor/50 text-gray-900"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            className="w-full text-base py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-primeColor focus:ring-2 focus:ring-primeColor/50 text-gray-900"
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-gray-500"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center bg-primeColor text-white p-3 rounded-md tracking-wide font-semibold shadow-md cursor-pointer transition ease-in duration-300 hover:bg-brandHover">
                            REGISTER
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-600 mt-6 text-sm">
                    Already Registered?{' '}
                    <Link to="/login" className="text-primeColor hover:underline font-semibold">Login</Link>
                </p>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">Or continue with social account</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                <button className="w-full flex justify-center items-center gap-2 bg-gray-100 border border-gray-300 p-3 rounded-md tracking-wide font-semibold shadow-sm cursor-pointer transition ease-in duration-300 hover:bg-gray-200 text-gray-700">
                    <FcGoogle size={22} />
                    SIGN UP WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;