import { ShortsIconFilled } from "@/assets/icons"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import { ShortsCard, ShortsCardMobile } from "../card"
import { shorts } from "@/data/shorts"
import { VideosSelect } from "../select"
const shortsSection_1 = shorts(5)
const shortsSection_2 = shorts(3)
const shortsSection_3 = shorts(4)

export const ShortsSection = () => {
  return (
    <>
      <div className="hidden xl:block my-5">
        <div className="flex items-center gap-2 mb-4 ml-2">
          <ShortsIconFilled />
          <p className="flex-1 text-[20px] font-bold">Shorts</p>
          <VideosSelect videoType="all-shorts" align="end" />
        </div>
        <div className="grid grid-cols-5 gap-5 xm:gap-y-10 w-full">
          {shortsSection_1.map((shorts) => (
            <ShortsCard key={shorts.id} short={shorts} />
          ))}
        </div>
      </div>

      <div className="hidden md:block xl:hidden my-5">
        <div className="flex items-center gap-2 mb-4 ml-2">
          <ShortsIconFilled />
          <p className="flex-1 text-[20px] font-bold">Shorts</p>
          <VideosSelect videoType="all-shorts" align="end" />
        </div>
        <div className="grid grid-cols-3 gap-5 xm:gap-y-10 w-full">
          {shortsSection_2.map((shorts) => (
            <ShortsCard key={shorts.id} short={shorts} />
          ))}
        </div>
      </div>

      <div className="block md:hidden mt-5 mb-10">
        <div className="flex items-center gap-2 mb-4 ml-2">
          <ShortsIconFilled className="size-9" />
          <p className="flex-1 text-[20px] font-bold">Shorts</p>
          <VideosSelect videoType="all-shorts" align="end" />
        </div>
        <div className="grid grid-cols-2 gap-2 xm:gap-y-10 w-full px-3 2xm:px-0">
          {shortsSection_3.map((shorts) => (
            <ShortsCardMobile key={shorts.id} short={shorts} />
          ))}
        </div>
      </div>
    </>
  )
}
