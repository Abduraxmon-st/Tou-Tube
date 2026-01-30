export type SidebarItemType = {
  label: string,
  path: string,
  icon: React.ReactNode
}

export interface Video {
  id: number;

  // list page (home, subscriptions)
  cover_image: string;
  avatar_image: string;
  title: string;
  owner: string;
  views: string;        // "245K views"
  date: string;         // "3 days ago"
  time: string;         // "12:34"
  hover_color: string;

  // detail page
  subscribers: string;  // "120K"
  likes: string;        // "15K"
  description: string;
  subDate: string;      // "30 dek. 2025"

  hashtags: string[];

  comments: Comment[];
}

export interface Comment {
  avatar_image: string;
  owner: string;
  date: string;     // "2 days ago"
  likes: string;    // "120"
  comment: string;
  liked: boolean;   // youtuber tomonidan like bosilganmi

  answers: Answer[];
}

export interface Answer {
  avatar_image: string;
  owner: string;
  date: string;
  likes: string;
  comment: string;
}


export interface Short {
  id: number;
  cover_image: string;
  title: string;
  views: string;

  // detail
  avatar_image: string;
  owner: string;
  likes: string;
  hashtags: string[];

  comments: Comment[];
}