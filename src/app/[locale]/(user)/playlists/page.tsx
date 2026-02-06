import { PlaylistsSection } from "@/components/section/PlaylistsSection"
import { PlaylistTabs } from "@/components/tabs"
import { playlists } from "@/data/playlists"
const playlistSection = playlists(9)
const PlaylistsPage = () => {
  return (
    <div className="pt-4 sm:pt-0">
      <h2 className="text-2xl 2md:text-[36px] font-bold pl-3 sm:pl-6 2md:pl-0">Playlists</h2>
      <PlaylistTabs />
      <div className="max-w-545 mx-auto pr-3 pl-3 xm:pr-4 xm:pl-4 sm:pl-6 sm:pr-6 2md:pl-0! 2xl:pr-10 pt-5 sm:pt-10">
        <PlaylistsSection playlists={playlistSection} />
      </div>
    </div>
  )
}

export default PlaylistsPage