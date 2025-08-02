
import React from 'react';
import { User, Post } from './types';

export const MOCK_USER: User = {
  name: "Saurabh Sahgal",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHiNXiYyk1sOQ/profile-displayphoto-crop_800_800/B4DZg4wU6.GQAI-/0/1753298851270?e=1756944000&v=beta&t=_zDnZwakof3ldmtfF6faT2744tfJIMWJGztB7bh1OiE",
  coverPhotoUrl: "https://images.macrumors.com/t/3SwpDI7nrMQeeIro9X7SbILE4_I=/1600x0/article-new/2021/03/Facebook-Feature.jpg",
  category: "Software Company",
  followers: "7.2B",
  likes: "1.2B",
  intro: {
    details: "🎓 CS Student | Full Stack Developer [MERN] | C++ & Java Practitioner | System Thinker | Focused on Scalable Solutions | Lifelong Learner | Building Beyond Code.",
    website: "www.linkedin.com/in/sauravofficial14/",
    joined: "October 2004",
  },
  photos: [
    ,
  ],
};

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    author: {
      name: MOCK_USER.name,
      avatarUrl: MOCK_USER.avatarUrl,
    },
    timestamp: "7h ago",
    content: "Some events don’t just teach you tech—they shift your mindset Thrilled to have attended my first React Kolkata Virtual Meetup — an electrifying event filled with cutting-edge ideas, passionate developers, and moments that redefined how I think about frontend development.",
    imageUrl: " https://media.licdn.com/dms/image/v2/D4D22AQEVYPyMsLT0oA/feedshare-shrink_2048_1536/B4DZhKCoDkH4As-/0/1753588860346?e=1756944000&v=beta&t=I2wogC23uKXyA6cZbKNGPVixM1Egv-GyEOV_ROirhZA",
    likes: 12000,
    comments: 845,
    shares: 412,
  },
  {
    id: 3,
    author: {
      name: MOCK_USER.name,
      avatarUrl: MOCK_USER.avatarUrl,
    },
    timestamp: "7d ago",
    content: "🙌 Shoutout for the Best Post from React Kolkata!A huge shoutout to Saurabh Sahgal for sharing the most impactful post about our first-ever React Kolkata event!Your words beautifully captured the energy of the day — insightful talks, vibrant conversations, and the birth of a thriving React/JS community right here in Kolkata Seeing the event through your lens truly meant a lot to all of us who poured our hearts into making it happen. ",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQEVYPyMsLT0oA/feedshare-shrink_800/B4DZhKCoDkH4Ak-/0/1753588860317?e=1756944000&v=beta&t=0x9Md3PsGlXBKdjo4ohZVsR7fTjAdlTLSZr7n7aI02k",
    likes: 7800,
    comments: 321,
    shares: 256,
  },
];

// SVGs as React Components
export const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

export const VideoIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5v-9l6 4.5-6 4.5zM20 4.4v15.2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4.4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zM6 4h12v16H6V4z"/></svg>
);

export const StoreIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.6,12L8,7.4,9.4,6l6,6-6,6L8,16.6ZM4,20V4H6V20Z"/></svg>
);

export const GroupIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);

export const ThumbsUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5l-1.07-1.07a.454.454 0 00-.639 0l-1.07 1.07H2.25a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-8.25a.75.75 0 00-.75-.75h-.317z" />
  </svg>
);

export const CommentIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.671.97-.077 1.944-.194 2.902-.345 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.344 48.344 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

export const ShareIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 4.186m0-4.186c.114-.022.228-.043.344-.063m-3.44 0a2.25 2.25 0 100 4.186m3.44-4.186a2.25 2.25 0 100 4.186m0-4.186l-3.44 2.09m3.44-2.09a2.25 2.25 0 100-4.186m0 4.186l3.44 2.09m-3.44-2.09l3.44-2.09m-3.44 2.09a2.25 2.25 0 100-4.186m0 4.186l-3.44-2.09" />
  </svg>
);

export const WorldIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const MoreIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
);
