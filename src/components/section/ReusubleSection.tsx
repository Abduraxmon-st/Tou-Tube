"use client"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react";
import { ReusubleVideosSwiper } from "../swiper";
import { Link } from "@/i18n/navigation";
import { Video } from "@/types";
type SectionProps = {
  title: string
  link: string
  videos: Video[]
}
export const ReusubleSection = ({ videos, link, title }: SectionProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="pt-6">
      {/* top navigation */}
      <div className="flex items-center justify-between ml-2 mb-4">
        <h3 className="text-[20px] font-bold pl-4 2xm:pl-0">{title}</h3>
        <div className="flex gap-2 pr-4 2xm:pr-0">
          <Link href={link}>
            <Button variant={'iconVariant'} className="[&_svg:not([class*='size-'])]:size-4.5 border border-thirdColor/40 px-4! py-2!">
              See all
            </Button>
          </Link>
          <Button ref={prevRef} variant={'iconVariant'} className="hidden 2md:block border border-thirdColor/40 p-1.5!">
            <ChevronLeft />
          </Button>
          <Button ref={nextRef} variant={'iconVariant'} className="hidden 2md:block border border-thirdColor/40 p-1.5!">
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* swiper */}
      <ReusubleVideosSwiper prevRef={prevRef} nextRef={nextRef} videos={videos} />
    </section>
  )
}
