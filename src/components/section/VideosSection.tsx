import { Video } from "@/types"
import { MainCard } from "../card"

export const VideosSection = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 3md:grid-cols-3! gap-x-5 gap-y-7.5 xm:gap-y-10 w-full">
      {videos.map((video) => (
        <MainCard key={video.id} video={video} videoType="classic" />
      ))}
    </div>
  )
}
