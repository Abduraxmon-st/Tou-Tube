import { Avatar } from "../avatar";
import Image from "next/image";
import { VideosSelect } from "../select";
import { Video, VideoType } from "@/types";
import { Card } from "../ui/card";
import { Link } from "@/i18n/navigation";
import { slugify } from "@/lib/slugify";
interface ListCardProps {
  videoType?: VideoType,
  ownerVisible?: boolean,
  video: Video,
  coverWidth?: string,
}
export const ListCard = ({ videoType = "classic", ownerVisible = true, video, coverWidth }: ListCardProps) => {
  return (
    <Link href={`/${slugify(video.title)}`}>
      <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer">
        <div className="relative flex gap-2">
          <div className={`relative aspect-video overflow-hidden rounded-xl ${coverWidth ? coverWidth : "max-w-[45%] xl:max-w-125"}`}>
            <Image loading="lazy" width={1024} height={480} src={video.cover_image} alt={video.title} className="size-full object-cover" />
            <span className="absolute bottom-2 right-2 text-sm sm:text-[13px] font-medium bg-mainColor/70 px-1 py-0.5 rounded-[5px]">{video.time}</span>
          </div>

          <div className="flex-1 relative pr-6 sm:p-2 3md:p-4 flex flex-col">
            <h2 className=" xm:text-lg font-medium line-clamp-2">{video.title}</h2>
            <p className="xm:hidden text-thirdColor text-sm">{video.owner}</p>
            <VideosSelect videoType={videoType} align="end" buttonClass="absolute -top-2 -right-1 sm:-right-5.5" />
            <div className="text-thirdColor text-sm xm:hidden!">
              <span>{video.views}</span>
            </div>
            <div className="text-thirdColor text-sm hidden xm:block line-clamp-1">
              <span>{video.views}</span>
              <span>{" "}•{" "}</span>
              <span>{video.date}</span>
            </div>
            {ownerVisible &&
              <div className="flex items-center gap-2 py-3">
                <Avatar icon={video.avatar_image} className="size-6" />
                <span className="text-thirdColor text-xs font-medium">{video.owner}</span>
              </div>
            }
            <span className="hidden xm:block text-thirdColor text-sm line-clamp-2 mt-auto">
              {video.description}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ListCard