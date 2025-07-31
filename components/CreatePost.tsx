
import React from 'react';
import { User } from '../types';

interface CreatePostProps {
    user: User;
}

const CreatePost: React.FC<CreatePostProps> = ({ user }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-3">
                <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full" />
                <div className="w-full">
                    <textarea 
                        className="w-full bg-gray-100 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={2}
                        placeholder={`What's on your mind?`}
                    ></textarea>
                </div>
            </div>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-around text-gray-600 font-semibold">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                    <span>Photo/video</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    <span>Tag people</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
                    <span>Feeling/activity</span>
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
