export function playlists(length: number) {
  return Array.from({ length: length }, (_, i) => ({
    id: (i + 1) * 656,

    cover_image: `https://picsum.photos/seed/video${i}/640/360`,
    title: `Frontend Development Playlist #${i + 1}`,
    owner: "Namdr Dev, CodeUz, Frontend School, JS Master",
    type: ["Jam", `${Math.floor(Math.random() * 10 + 2)} videos`][i % 2],
    time: `${Math.floor(Math.random() * 10 + 2)}:${Math.floor(
      Math.random() * 59
    )
      .toString()
      .padStart(2, "0")}`,
  }));
} 
