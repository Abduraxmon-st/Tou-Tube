import { Short } from "@/types"
import { Card } from "../ui/card"
import Image from "next/image"
import { VideosSelect } from "../select"

export const ShortsCard = ({ short }: { short: Short }) => {
  return (
    <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer">
      <div className="relative rounded-md overflow-hidden aspect-[0.664]">
        <Image loading="eager" width={360} height={480} src={short.cover_image} alt={short.title} className="size-full object-cover" />
      </div>
      <div className="py-2 pr-9">
        <div className="relative">
          <VideosSelect videoType="classic-shorts" buttonClass="absolute top-0 -right-9 [&_svg:not([class*='size-'])]:size-5.5" />
          <h2 className="font-medium line-clamp-2">{short.title}</h2>
        </div>
        <span className="text-thirdColor text-sm">{short.views}</span>
      </div>
    </Card>
  )
}
