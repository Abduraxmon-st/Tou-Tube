import { Video, VideoType } from "@/types"
import { Avatar } from "../avatar"
import { Card } from "../ui/card"
import Image from "next/image"
import { VideosSelect } from "../select"
type MainCardProps = {
  video: Video,
  hover?: boolean,
  videoType?: VideoType,
  ownerVisible?: boolean,
  onHome?: boolean
}
export const MainCard = ({
  video,
  hover = true,
  videoType = "classic",
  ownerVisible = true,
  onHome = true,
}: MainCardProps) => {
  return (
    <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer group">
      <div className={`absolute z-3 size-full scale-100 group-hover:scale-x-106 group-hover:scale-y-108  ${hover && video.hover_color} rounded-xl transition-all duration-300 ease-in-out`} />
      <div className="relative z-4">
        <div className={`relative aspect-video overflow-hidden ${!onHome && "rounded-md!"} sm:rounded-xl`}>
          <Image loading="lazy" width={1024} height={480} src={video.cover_image} alt={video.title} />
          <span className="absolute bottom-2 right-2 text-sm sm:text-[13px] font-medium bg-mainColor/70 px-1 py-0.5 rounded-[5px]">{video.time}</span>
        </div>

        <div className="flex gap-3 py-2 sm:p-2 3md:p-3">
          {ownerVisible && <Avatar icon={video.avatar_image} className="size-9 ml-2 xm:ml-0" />}
          <div className="flex-1 relative pr-4 2xm:pr-6">
            <h2 className="font-medium line-clamp-2">{video.title}</h2>
            <p className="hidden xm:block text-thirdColor text-sm">{video.owner}</p>
            <VideosSelect videoType={videoType} buttonClass="absolute -top-2 right-0 sm:-right-5.5" />
            <div className="text-thirdColor text-sm xm:hidden! line-clamp-1">
              <span className="text-thirdColor text-sm">{video.owner}</span>
              <span>{" "}•{" "}</span>
              <span>{video.views}</span>
              <span>{" "}•{" "}</span>
              <span>{video.date}</span>
            </div>
            <div className="text-thirdColor text-sm hidden xm:block line-clamp-1">
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
