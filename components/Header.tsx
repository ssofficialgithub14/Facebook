
import React from 'react';
import { HomeIcon, VideoIcon, StoreIcon, GroupIcon } from '../constants';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-14">
                    {/* Left Section */}
                    <div className="flex items-center space-x-2">
                        <div className="text-blue-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.699C23.41 24 24 23.41 24 22.675V1.325C24 .59 23.41 0 22.675 0z" />
                            </svg>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Facebook"
                                className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                    </div>
                    {/* Middle Section */}
                    <div className="hidden md:flex flex-grow justify-center items-center">
                        <nav className="flex space-x-2">
                            <a href="#" className="w-28 h-12 flex items-center justify-center text-blue-600 border-b-4 border-blue-600"><HomeIcon className="h-7 w-7" /></a>
                            <a href="#" className="w-28 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><VideoIcon className="h-7 w-7" /></a>
                            <a href="#" className="w-28 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><StoreIcon className="h-7 w-7" /></a>
                            <a href="#" className="w-28 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"><GroupIcon className="h-7 w-7" /></a>
                        </nav>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                           <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.79 0 3.47-.45 4.95-1.28L20 22l-1.45-3.05C19.55 17.47 20 15.79 20 14c0-5.52-4.48-10-10-10zm-2.5 9h5v2.5h-5V11zm0-3.5h5V10h-5V7.5z"/></svg>
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                        </button>
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHiNXiYyk1sOQ/profile-displayphoto-scale_400_400/B4DZg4wU6.GQAg-/0/1753298851375?e=1756944000&v=beta&t=TLap6KZPwnuhoI0quW5rC6Mxyy78Yu3AF-MHl5BqkVc" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
