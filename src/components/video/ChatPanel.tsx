import { X } from "lucide-react"
import { Button } from "../ui/button"
import { VideosSelect } from "../select"

export const ChatPanel = ({ setChatOpen }: { setChatOpen: (value: boolean) => void }) => {
  return (
    <div className="bg-secondaryBgColor rounded-xl border border-thirdColor/30 w-full mb-5">
      <div className="flex justify-between items-center pl-5 pr-1 py-1 border-b border-thirdColor/30">
        <h2 className="font-bold">Chat Panel</h2>
        <div>
          <VideosSelect videoType="classic-shorts" align="end" />
          <Button variant='iconVariant' onClick={() => setChatOpen(false)}><X /></Button>
        </div>
      </div>
      <div className="h-46 overflow-y-auto p-4">
        {/* Chat messages would go here */}
        <p className="text-sm text-mutedForeground">No chat messages yet.</p>
      </div>
    </div>
  )
}
