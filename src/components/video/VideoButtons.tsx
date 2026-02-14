import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import { ShareIcon } from "@/assets/icons"
import { VideosSelect } from "../select"

export const VideoButtons = ({ like }: { like: string }) => {

  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <div className="flex items-center p-1 rounded-full bg-buttonBgColor">
        <button className="flex items-center text-sm gap-2 px-3 py-1 pr-5! rounded-full hover:bg-buttonHoverColor transition-colors">
          <ThumbsUp />
          {like}.
        </button>
        <div className="h-7 w-px border-l border-secondColor/30" />
        <button className="px-4 py-1 rounded-full hover:bg-buttonHoverColor transition-colors">
          <ThumbsDown />
        </button>
      </div>
      <Button variant="iconVariant" className="bg-buttonBgColor px-4!">
        <ShareIcon />
        Share
      </Button>
      <Button variant="iconVariant" className="bg-buttonBgColor px-4!">
        <Bookmark />
        Save
      </Button>
      <VideosSelect videoType="classic" align="end" buttonClass="bg-buttonBgColor! rotate-90" />
    </div>
  )
}
