import { Link } from "@/i18n/navigation"
import { Home, Plus, TvMinimalPlay } from "lucide-react"
import { ShortsIcon } from "@/assets/icons"
import { Avatar } from "../avatar"

export const MobileNavigation = () => {
  return (
    <div className="flex fixed z-9 bottom-0 left-0 md:hidden items-center justify-between backdrop-blur-3xl bg-mainColor/80 w-screen border-t border-thirdColor/30">
      <Link href="/" className={`flex flex-col items-center gap-1.25 py-2 w-16 hover:bg-buttonBgColor rounded-[10px]`}>
        <Home />
        <p className="text-[10px] font-medium line-clamp-1">Home</p>
      </Link>
      <Link href="/shorts" className={`flex flex-col items-center gap-1.25 py-2 w-16 hover:bg-buttonBgColor rounded-[10px]`}>
        <ShortsIcon />
        <p className="text-[10px] font-medium line-clamp-1">Shorts</p>
      </Link>

      <div className="flex items-center justify-center size-9 bg-thirdColor/20 rounded-full">
        <Plus size={24}/>
      </div>

      <Link href="/subscriptions" className={`flex flex-col items-center gap-1.25 py-2 w-16 hover:bg-buttonBgColor rounded-[10px]`}>
        <TvMinimalPlay className="-scale-x-100 rotate-180" />
        <p className="text-[10px] font-medium line-clamp-1">Subscriptions</p>
      </Link>
      <Link href="/you" className={`flex flex-col items-center gap-1.25 py-2 w-16 hover:bg-buttonBgColor rounded-[10px]`}>
        <Avatar icon="https://yt3.googleusercontent.com/ytc/AIdro_lkDhfR4IQoQOti0IosPsSAEqhLLgtyGqmMmRGIpKBIdhtOTK_iy1Z_GU0MKBc9sh8dlA=s88-c-k-c0x00ffffff-no-rj" className="size-6" />
        <p className="text-[10px] font-medium line-clamp-1">You</p>
      </Link>
    </div>
  )
}
