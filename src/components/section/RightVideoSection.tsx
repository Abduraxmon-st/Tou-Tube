import { Video } from "@/types"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowDownToLine, Ellipsis, Shuffle } from "lucide-react"
import { PlayArrowIcon } from "@/assets/icons"
interface RightVideoSectionProps {
  video: Video,
  title: string,
  videoLength: number
}
export const RightVideoSection = ({ video, title, videoLength }: RightVideoSectionProps) => {
  return (
    <div className="w-full h-full lg:rounded-2xl bg-cyan-800 bg-linear-to-b from-cyan-800 to-mainColor p-6">
      <Image width={768} height={432} src={video.cover_image} alt={video.title} className="w-full rounded-xl aspect-video object-cover" />
      <h3 className="text-[28px] font-black mt-5">{title}</h3>
      <p className="mt-2">User</p>
      <div className="flex gap-1 line-clamp-1 text-thirdColor text-sm">
        <span>{videoLength} videos</span>
        <span>{video.views} views</span>
        <span>Updated: {video.date}</span>
      </div>
      <div className="flex gap-2 mt-4">
        <Button variant="iconVariant" className="bg-secondColor/10">
          <ArrowDownToLine />
        </Button>
        <Button variant="iconVariant" className="bg-secondColor/10">
          <Ellipsis className="rotate-90" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button variant="iconVariant" className="w-full!  bg-secondColor text-mainColor hover:bg-secondColor/90">
          <PlayArrowIcon />
          Play all
        </Button>
        <Button variant="iconVariant" className="w-full!  bg-secondColor/10">
          <Shuffle />
          Mix
        </Button>
      </div>
    </div>
  )
}
