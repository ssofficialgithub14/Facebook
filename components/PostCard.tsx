
import React from 'react';
import { Post } from '../types';
import { ThumbsUpIcon, CommentIcon, ShareIcon, WorldIcon, MoreIcon } from '../constants';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const formatCount = (num: number) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <img src={post.author.avatarUrl} alt={post.author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-gray-800">{post.author.name}</p>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <span>{post.timestamp}</span>
                            <span>·</span>
                            <WorldIcon className="w-3 h-3"/>
                        </div>
                    </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 rounded-full p-2">
                    <MoreIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-3">{post.content}</p>
            {post.imageUrl && (
                <div className="-mx-4 mb-3">
                    <img src={post.imageUrl} alt="Post content" className="w-full object-cover" />
                </div>
            )}

            {/* Post Stats */}
            <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                <div className="flex items-center space-x-1">
                    <div className="p-1 bg-blue-500 rounded-full">
                        <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.865.802V10.333z"/></svg>
                    </div>
                    <span>{formatCount(post.likes)}</span>
                </div>
                <div className="flex space-x-4">
                    <span>{formatCount(post.comments)} comments</span>
                    <span>{formatCount(post.shares)} shares</span>
                </div>
            </div>

            <hr className="border-gray-200" />
            
            {/* Post Actions */}
            <div className="flex justify-around text-gray-600 font-semibold mt-1">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <ThumbsUpIcon className="w-6 h-6" />
                    <span>Like</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <CommentIcon className="w-6 h-6" />
                    <span>Comment</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg">
                    <ShareIcon className="w-6 h-6" />
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default PostCard;
