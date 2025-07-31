
import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { User, Post } from '../types';

interface MainContentProps {
    user: User;
    posts: Post[];
}

const MainContent: React.FC<MainContentProps> = ({ user, posts }) => {
    return (
        <div className="space-y-4">
            <CreatePost user={user} />
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default MainContent;
