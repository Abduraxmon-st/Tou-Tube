import { Video } from "@/types"
import Image from "next/image"

export const MainVideo = ({ video }: { video: Video }) => {
  return (
    <div className="aspect-video h-max">
      <Image src={video.cover_image} alt={video.title} className="size-full object-cover lg:rounded-xl" width={1024} height={480} />
    </div>
  )
}
