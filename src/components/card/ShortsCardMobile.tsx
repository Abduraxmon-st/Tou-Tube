import { Short } from "@/types"
import { Card } from "../ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import { VideosSelect } from "../select"

export const ShortsCardMobile = ({ short }: { short: Short }) => {
  return (
    <Card className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-md overflow-hidden aspect-[0.664] text-secondColor">
      <Image loading="lazy" width={360} height={480} src={short.cover_image} alt={short.title} className="size-full object-cover" />
      <VideosSelect videoType="classic-shorts" align="end" buttonClass="absolute top-1 right-0 [&_svg:not([class*='size-'])]:size-5 p-1!"/>
      {/* <Button variant="iconVariant" className="absolute top-1 right-0 [&_svg:not([class*='size-'])]:size-5 p-1!"><EllipsisVertical /></Button> */}
      <div className="absolute bottom-0 left-0 w-full pl-2 pb-1 pt-5 bg-linear-to-b from-transparent to-black/60">
        <h2 className="text-sm font-medium line-clamp-2 text-shadow-m">{short.title}</h2>
      </div>
    </Card>
  )
}
