
export interface User {
  name: string;
  avatarUrl: string;
  coverPhotoUrl: string;
  category: string;
  followers: string;
  likes: string;
  intro: {
    details: string;
    website?: string;
    joined: string;
  };
  photos: string[];
}

export interface Post {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
  };
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}
