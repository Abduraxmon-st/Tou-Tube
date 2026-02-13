import { ListCard } from "@/components/card"
import { HistorySearch } from "@/components/search/HistorySearch"
import { HistorySearchMobile } from "@/components/search/HistorySearchMobile"
import { ReusableTabs } from "@/components/tabs"
import { historyTabs } from "@/data/tabs"
import { videos } from "@/data/videos"
const historyTodayVideos = videos(4)
const historyYesterdayVideos = videos(10)

const HistoryPage = () => {
  return (
    <div className="relative lg:flex justify-between lg:gap-10 lg:max-w-380 w-full mx-auto pt-2.5 sm:pt-6 pb-4 sm:pb-0">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl 2md:text-[36px] font-bold pl-4 lg:pl-0">History</h2>
        <HistorySearchMobile />
        <div className="pl-4 lg:pl-0">
          <ReusableTabs tabs={historyTabs} defaultTab="All" />
        </div>
        <div className="w-full pl-4 lg:pl-0 pr-2 2xm:pr-6 lg:pr-0">
          <h3 className="text-xl font-bold pt-2 xm:pt-6 xm:pb-2">Today</h3>
          <div className="flex flex-col gap-4 pt-4">
            {
              historyTodayVideos.map((video) => (
                <ListCard key={video.id} video={video} coverWidth="max-w-[45%] 2xm:max-w-[30%]" ownerVisible={false} />
              ))
            }
          </div>
        </div>
        <div className="w-full pl-4 lg:pl-0 pr-2 2xm:pr-6 lg:pr-0">
          <h3 className="text-xl font-bold pt-2 xm:pt-6 xm:pb-2">Yesterday</h3>
          <div className="flex flex-col gap-4 pt-4">
            {
              historyYesterdayVideos.map((video) => (
                <ListCard key={video.id} video={video} coverWidth="max-w-[45%] 2xm:max-w-[30%]" ownerVisible={false} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="max-w-96 w-full hidden lg:block sticky top-40 self-start">
        <HistorySearch />
      </div>
    </div>
  )
}

export default HistoryPage