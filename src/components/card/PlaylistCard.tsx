import Image from "next/image"
import { Card } from "../ui/card"
import { Playlist } from "@/types"
import { VideosSelect } from "../select"
import { ListVideo } from "lucide-react"
import { PlayArrowIcon } from "@/assets/icons/PlayArrowIcon"
type PlaylistCardProps = {
  playlist: Playlist,
  hover?: boolean,
}

export const PlaylistCard = ({
  playlist,
  hover = true,
}: PlaylistCardProps) => {
  return (
    <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer group">
      <div className={`absolute z-3 size-full scale-100 group-hover:scale-x-106 group-hover:scale-y-110 -translate-y-1 ${hover && "group-hover:bg-secondColor/10"} rounded-xl transition-all duration-300 ease-in-out`} />
      <div className="relative z-4">
        <div className="relative aspect-video">
          <Image loading="lazy" width={1024} height={480} src={playlist.cover_image} alt={playlist.title} className="relative z-3 top-0 left-0 size-full  rounded-xl border-t border-t-mainColor" />
          <Image loading="lazy" width={1024} height={480} src={playlist.cover_image} alt={playlist.title} className="absolute -top-2 w-[calc(100%-2rem)] h-6 left-1/2 -translate-x-1/2 rounded-t-xl opacity-30" />
          <Image loading="lazy" width={1024} height={480} src={playlist.cover_image} alt={playlist.title} className="absolute -top-1 w-[calc(100%-1rem)] h-6 left-1/2 -translate-x-1/2 rounded-t-xl border-t border-t-mainColor opacity-75" />
          <span className="absolute flex items-center gap-1 z-4 bottom-2 right-2 text-sm sm:text-[13px] font-medium bg-mainColor/70 px-1 py-0.5 rounded-[5px]">
            {
              playlist.type !== "Jam" ? (
                <>
                  <ListVideo size={14} />
                  <span>{playlist.type}</span>
                </>
              ) : (
                <>
                  <PlayArrowIcon className="size-3.5" />
                  <span>{playlist.type}</span>
                </>
              )
            }
          </span>
        </div>

        <div className="flex gap-3 py-2 sm:p-2 3md:p-3">
          <div className="flex-1 relative pr-4 2xm:pr-6">
            <h2 className="font-medium line-clamp-2">{playlist.title}</h2>
            <p className="block text-thirdColor text-sm truncate max-w-[40ch]">{playlist.owner} and other</p>
            <VideosSelect videoType="playlist" buttonClass="absolute -top-2 right-0 sm:-right-5.5" />
          </div>
        </div>
      </div>
    </Card>
  )
}
