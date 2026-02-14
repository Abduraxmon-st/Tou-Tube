import { Video } from "@/types"
import { MessagesSquare } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
interface VideoDetailsSectionProps {
  video: Video
  chatOpen: boolean
  setChatOpen: (open: boolean) => void
}
export const VideoDetailsSection = ({ video, chatOpen, setChatOpen }: VideoDetailsSectionProps) => {
  const [detailOpen, setDetailOpen] = useState(false)
  return (
    <div className="flex gap-3 flex-wrap mt-3">
      <button className={`relative p-3 bg-buttonBgColor rounded-xl text-sm text-start ${detailOpen ? "w-full" : "xl:w-1/2"}`} onClick={() => setDetailOpen(!detailOpen)}>
        <div className="flex gap-1">
          <span>{video.views} views</span>
          <span>{video.subDate}</span>
        </div>
        <p>
          {video.description}
        </p>
        <div className={`${detailOpen ? "relative w-max" : "absolute bottom-1 right-1"} flex items-center justify-center p-2 text-sm`}>
          {!detailOpen && <div className="w-10 h-5 bg-linear-to-r from-transparent to-buttonBgColor" />}
          <p className="bg-buttonBgColor pl-2">{detailOpen ? "Hide details" : "...more"}</p>
        </div>
      </button>

      <div className={`relative hidden xl:block p-3 bg-buttonBgColor rounded-xl text-start text-sm ${detailOpen ? "w-1/2" : "flex-1"}`} onClick={() => setChatOpen(!chatOpen)}>
        <p>Chat records</p>
        <div className="flex items-center gap-2 mt-1">
          <MessagesSquare className="size-7" />
          <p>Check out how this video was discussed during the broadcast.</p>
          <Button variant="iconVariant" disabled={chatOpen} className="bg-thirdColor/20! px-2.5! h-6! text-xs!">
            Open panel
          </Button>
        </div>
      </div>
    </div>
  )
}
