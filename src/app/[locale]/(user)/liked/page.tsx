import { ListCard } from "@/components/card/ListCard"
import { ReusableTabs } from "@/components/tabs"
import { historyTabs } from "@/data/tabs"
import { videos } from "@/data/videos"
const likedVideos = videos(15)
const LikedPage = () => {
  return (
    <div className="relative max-w-7xl mx-auto lg:grid grid-cols-3 gap-4 lg:pt-5">
      <div className="col-span-1 bg-amber-300 h-100 lg:sticky top-5"></div>
      <div className="col-span-2">
        <div className="lg:sticky z-10 top-0 pl-6 pt-4 pb-2 w-full backdrop-blur-3xl bg-mainColor/80">
          <ReusableTabs tabs={historyTabs} defaultTab="All" />
        </div>
        <div className="flex flex-col gap-4 mt-4 px-4 lg:px-0 lg:pr-6!">
          {likedVideos.map((video, i) => (
            <div key={video.id} className="flex items-center gap-4 w-full">
              <span className="text-sm font-medium text-thirdColor hidden lg:block">{i + 1}</span>
              <ListCard video={video} coverWidth="max-w-[50%] 2xm:max-w-[30%]" ownerVisible={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LikedPage