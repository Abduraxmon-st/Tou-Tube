import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import { ShareIcon } from "@/assets/icons"
import { VideosSelect } from "../select"

export const VideoButtons = ({ like }: { like: string | undefined }) => {

  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <div className="flex items-center lg:p-1 rounded-full bg-buttonBgColor">
        <button className="flex items-center text-sm gap-2 px-3 py-2 lg:py-1 pr-5! rounded-full hover:bg-buttonHoverColor transition-colors">
          <ThumbsUp className="size-4 lg:size-6" />
          {like}.
        </button>
        <div className="h-7 w-px border-l border-secondColor/30" />
        <button className="px-4 py-1 rounded-full hover:bg-buttonHoverColor transition-colors">
          <ThumbsDown className="size-4 lg:size-6" />
        </button>
      </div>
      <Button variant="iconVariant" className="bg-buttonBgColor px-4! [&_svg:not([class*='size-'])]:size-5 lg:[&_svg:not([class*='size-'])]:size-6">
        <ShareIcon />
        <span className="hidden lg:block">Share</span>
      </Button>
      <Button variant="iconVariant" className="bg-buttonBgColor px-4! [&_svg:not([class*='size-'])]:size-5 lg:[&_svg:not([class*='size-'])]:size-6">
        <Bookmark />
        Save
      </Button>
      <VideosSelect videoType="classic" align="end" buttonClass="bg-buttonBgColor! rotate-90" />
    </div>
  )
}
