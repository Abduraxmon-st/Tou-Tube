import { Video } from "@/types"
import { Avatar } from "../avatar"
import { Card } from "../ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { VideosSelect } from "../select"

export const MainCard = ({ video }: { video: Video }) => {
  return (
    <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer group">
      <div className={`absolute z-3 size-full scale-100 group-hover:scale-x-106 group-hover:scale-y-108  ${video.hover_color} rounded-xl transition-all duration-300 ease-in-out`} />
      <div className="relative z-4">
        <div className="relative aspect-video sm:rounded-xl overflow-hidden">
          <Image loading="eager" width={1024} height={480} src={video.cover_image} alt={video.title} />
          <span className="absolute bottom-2 right-2 text-sm sm:text-[13px] font-medium bg-mainColor/70 px-1 py-0.5 rounded-[5px]">{video.time}</span>
        </div>

        <div className="flex gap-3 p-3">
          <Avatar icon={video.avatar_image} className="size-9" />
          <div className="flex-1 relative pr-6">
            <h2 className="font-medium line-clamp-2">{video.title}</h2>
            <p className="hidden xm:block text-thirdColor text-sm">{video.owner}</p>
            <VideosSelect videoType="classic" buttonClass="absolute -top-2 -right-1 sm:-right-5.5" />
            <div className="text-thirdColor text-sm xm:hidden!">
              <span className="text-thirdColor text-sm">{video.owner}</span>
              <span>{" "}•{" "}</span>
              <span>{video.views}</span>
              <span>{" "}•{" "}</span>
              <span>{video.date}</span>
            </div>
            <div className="text-thirdColor text-sm hidden xm:block">
              <span>{video.views}</span>
              <span>{" "}•{" "}</span>
              <span>{video.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
