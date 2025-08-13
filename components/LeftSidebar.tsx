
import React from 'react';
import { User } from '../types';

interface LeftSidebarProps {
    user: User;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ user }) => {
    return (
        <div className="space-y-4 sticky top-20">
            {/* Intro Card */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Intro</h3>
                <p className="text-center text-gray-600 text-sm mb-4">{user.intro.details}</p>
                <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        <span>Software Company</span>
                    </div>
                    {user.intro.website && (
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            <a href={`https://${user.intro.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.intro.linkedin}</a>
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        <span>Joined {user.intro.joined}</span>
                    </div>
                </div>
            </div>

            {/* Photos Card */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-xl text-gray-800">Photos</h3>
                    <a href="#" className="text-blue-600 hover:underline text-sm">See all photos</a>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {user.photos.map((photoUrl, index) => (
                        <img key={index} src={photoUrl} alt={`photo-${index}`} className="w-full h-24 object-cover rounded-md" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
