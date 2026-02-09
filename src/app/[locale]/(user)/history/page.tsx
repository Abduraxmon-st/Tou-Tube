import { ListCard } from "@/components/card"
import { PlaylistTabs } from "@/components/tabs"
import { videos } from "@/data/videos"
const historyTodayVideos = videos(4)
const historyYesterdayVideos = videos(10)
const HistoryPage = () => {
  return (
    <div className="relative pt-4 sm:pt-6">
      <div className="max-w-321 pr-110 mx-auto">
        <h2 className="text-2xl 2md:text-[36px] font-bold">Playlists</h2>
        <PlaylistTabs />
        <div className="w-full">
          <h3 className="text-xl font-bold pt-6 pb-2">Today</h3>
          <div className="flex flex-col gap-4 pt-4">
            {
              historyTodayVideos.map((video) => (
                <ListCard key={video.id} video={video} coverWidth="max-w-[30%]" ownerVisible={false} />
              ))
            }
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold pt-6 pb-2">Yesterday</h3>
          <div className="flex flex-col gap-4 pt-4">
            {
              historyYesterdayVideos.map((video) => (
                <ListCard key={video.id} video={video} coverWidth="max-w-[30%]" ownerVisible={false} />
              ))
            }
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default HistoryPage