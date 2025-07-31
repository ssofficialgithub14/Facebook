
import React from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import { MOCK_USER, MOCK_POSTS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main>
        <ProfileHeader user={MOCK_USER} />
        <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <LeftSidebar user={MOCK_USER} />
          </div>
          <div className="lg:col-span-7">
            <MainContent user={MOCK_USER} posts={MOCK_POSTS} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
