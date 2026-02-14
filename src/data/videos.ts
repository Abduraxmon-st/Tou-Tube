const hoverBgMap = [
  "group-hover:bg-blue-500/15",
  "group-hover:bg-green-500/15",
  "group-hover:bg-red-500/15",
  "group-hover:bg-gray-500/15",
  "group-hover:bg-yellow-500/15",
  "group-hover:bg-cyan-500/15",
  "group-hover:bg-purple-500/15",
] as const;

export const getColorByIndex = (i: number) => {
  return hoverBgMap[i % hoverBgMap.length];
};

export function videos(length: number, commentsLength = 5) {
  return Array.from({ length: length }, (_, i) => ({
    id: (i + 1) * 656,

    cover_image: `https://picsum.photos/seed/video${i}/640/360`,
    avatar_image: `https://i.pravatar.cc/150?img=${i}`,
    title: `Frontend Development Tips #${i + 1}`,
    owner: ["Namdr Dev", "CodeUz", "Frontend School", "JS Master"][i % 4],
    views: `${(Math.random() * 900 + 100).toFixed(0)}K views`,
    date: `${Math.floor(Math.random() * 10 + 1)} days ago`,
    time: `${Math.floor(Math.random() * 10 + 2)}:${Math.floor(
      Math.random() * 59
    )
      .toString()
      .padStart(2, "0")}`,
    hover_color: getColorByIndex(i),
    // video detail page data
    subscribers: `${Math.floor(Math.random() * 900 + 100)}K`,
    likes: `${Math.floor(Math.random() * 50 + 1)}K`,
    description:
      "In this video we talk about real frontend problems, performance tips and clean code practices. Perfect for React & Next.js developers.",
    subDate: "30 dek. 2025",

    hashtags: [
      "#frontend",
      "#react",
      "#nextjs",
      "#javascript",
    ],

    comments: Array.from({ length: commentsLength }, (_, j) => ({
      avatar_image: `https://picsum.photos/seed/video${j}/640/360`,
      owner: ["Frontend Guy", "React Fan", "JS Learner", "Code Master", "Dev Enthusiast"][j % 5],
      date: `${Math.floor(Math.random() * 10 + 1)} days ago`,
      likes: `${Math.floor(Math.random() * 100 + 10)}`,
      comment: [
        "Great video! Learned a lot.",
        "Can you make a video about state management?",
        "I love the tips you shared, very useful!",
        "The part about performance optimization was eye-opening.",
        "Thanks for sharing your knowledge with us!",
      ][j % 5],
      liked: true,

      answers: [
        {
          avatar_image: "https://i.pravatar.cc/40?img=32",
          owner: "Namdr Dev",
          date: "1 day ago",
          likes: "45",
          comment: "Xursandman foydali bo‘lganidan 🙌",
        },
        {
          avatar_image: "https://i.pravatar.cc/40?img=45",
          owner: "JS Learner",
          date: "1 day ago",
          likes: "18",
          comment: "Keyingi videoni kutyapmiz 👀",
        },
      ],
    }))
  }));
} 
