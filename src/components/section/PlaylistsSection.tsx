import { Playlist } from "@/types"
import { PlaylistCard } from "../card"

export const PlaylistsSection = ({ playlists }: { playlists: Playlist[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 3md:grid-cols-3! gap-x-5 gap-y-7.5 xm:gap-y-10 w-full">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  )
}
