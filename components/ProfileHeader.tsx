
import React from 'react';
import { User } from '../types';

interface ProfileHeaderProps {
    user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
    return (
        <div className="bg-white shadow-sm">
            <div className="container mx-auto max-w-7xl">
                {/* Cover Photo */}
                <div className="h-64 md:h-96 bg-gray-200 rounded-b-lg overflow-hidden relative">
                    <img src={user.coverPhotoUrl} alt="Cover" className="w-full h-full object-cover" />
                </div>
                
                {/* Profile Info */}
                <div className="px-4 pb-4">
                    <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-8 space-x-0 md:space-x-6">
                        <div className="relative">
                            <img 
                                src={user.avatarUrl} 
                                alt="Profile" 
                                className="w-40 h-40 rounded-full border-4 border-white object-cover" 
                            />
                        </div>
                        <div className="flex-grow text-center md:text-left pt-4">
                            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                            <p className="text-gray-500">{user.likes} likes · {user.followers} followers</p>
                        </div>
                        <div className="flex space-x-2 mt-4 md:mt-0">
                            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.865.802V10.333z"/></svg>
                                <span>Like</span>
                            </button>
                            <button className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300">Follow</button>
                            <button className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300">Share</button>
                            <button className="bg-gray-200 text-gray-800 font-semibold px-3 py-2 rounded-lg hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="border-t border-gray-300 px-4">
                    <nav className="flex space-x-2 -mb-px">
                        <a href="#" className="py-3 px-4 text-blue-600 border-b-2 border-blue-600 font-semibold">Posts</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">About</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">Mentions</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">Reviews</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">Followers</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">Photos</a>
                        <a href="#" className="py-3 px-4 text-gray-600 font-semibold hover:bg-gray-100 rounded-t-lg">More</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
