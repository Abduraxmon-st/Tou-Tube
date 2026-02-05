import { PlaylistTabs } from "@/components/tabs"

const PlaylistsPage = () => {
  return (
    <div className="pt-4 sm:pt-0">
      <h2 className="text-2xl 2md:text-[36px] font-bold pl-3 sm:pl-6 2md:pl-0">Playlists</h2>
      <PlaylistTabs />
    </div>
  )
}

export default PlaylistsPage