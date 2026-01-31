"use client"
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { shorts } from "@/data/shorts";
import Image from "next/image";
import { Button } from "../ui/button";
import { shortButtons } from "@/data/short-buttons";
const shortVideos = shorts(10)

export const ShortSwiperMobile = () => {
  return (
    <div className="relative max-h-[calc(100vh-56px)] grid sm:hidden md:pt-2">
      <Swiper
        direction={'vertical'}
        modules={[Mousewheel]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.03,
            spaceBetween: 0
          },
        }}
        className="w-full p-0! shorts-swiper"
      >
        {
          shortVideos.map((short) => (
            <SwiperSlide key={short.id} className="relative">
              {/* main shection */}
              <div className="relative flex w-full h-full py-7.5">
                <Image src={short.cover_image} width={480} height={960} alt={short.title} className="w-full h-full object-cover" />
                <div className="absolute left-0 bottom-0 h-25 w-full z-2 bg-linear-to-b from-transparent to-black/70" />
                {/* left section mobile */}
                <div className="flex 2xl:hidden absolute z-3 left-2 bottom-2  flex-col gap-2 max-w-full pr-10">
                  <div className="flex items-center gap-2 h-10">
                    <div className="size-8 rounded-full overflow-hidden">
                      <Image src={short.avatar_image} width={40} height={40} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">@{short.owner}</span>
                    <Button className="rounded-full bg-secondColor text-mainColor py-1.5  h-max! ">Subscribe</Button>
                  </div>
                  <div className="font-bold w-full line-clamp-1">
                    <span>{short.title}</span>
                    {short.hashtags.map((item, i) => (
                      <span key={i} className="mr-1">
                        {" "}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* right buttons section */}
              <div className="absolute z-4 right-0 bottom-2 flex flex-col gap-1 justify-end items-center px-2 pb-2 text-xs font-medium" >
                {
                  shortButtons(short).map((item, i) => (
                    <div key={item.label + `${i}`} className="flex flex-col text-center">
                      <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-5">
                        {item.icon}
                      </Button>
                      <p className="text-shadow-lg">{item.label}</p>
                    </div>
                  ))
                }
                <div className="size-8 rounded-md overflow-hidden mt-2 border-3">
                  <Image src={short.avatar_image} width={40} height={40} alt="avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper >
    </div >
  )
}
