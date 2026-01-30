export function shorts(length: number) {
  return Array.from({ length: length }, (_, i) => ({
    id: i + 52 * 52,

    cover_image: `https://picsum.photos/seed/short${i}/400/700`,
    title: `Funny Short Clip #${i + 1}`,
    views: `${(Math.random() * 900 + 100).toFixed(0)}K views`,

    avatar_image: `https://i.pravatar.cc/40?img=${i + 12}`,
    owner: ["ShortsMaster", "CodeGuru", "DevQueen", "JSKing"][i % 4],
    likes: `${Math.floor(Math.random() * 50 + 1)}K`,
    hashtags: ["#shorts", "#frontend", "#funny"],

    comments: [
      {
        avatar_image: `https://i.pravatar.cc/40?img=${i + 32}`,
        owner: "Commenter" + i,
        date: `${Math.floor(Math.random() * 5 + 1)} days ago`,
        likes: `${Math.floor(Math.random() * 500)}K`,
        comment: "This is hilarious 😂",
        liked: Math.random() > 0.5,
        answers: [
          {
            avatar_image: `https://i.pravatar.cc/40?img=${i + 45}`,
            owner: "ReplyUser" + i,
            date: "1 day ago",
            likes: "42",
            comment: "Totally agree 👌",
          },
        ],
      },
    ],
  }));

}