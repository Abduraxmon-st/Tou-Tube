"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from 'swiper/modules';
import { ArrowDown, ArrowUp, MessageSquareText, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { shorts } from "@/data/shorts";
import Image from "next/image";
import { shortButtons } from "@/data/short-buttons";

export const ShortsSwiper = () => {
  const shortVideos = shorts(10)
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative max-h-dvh grid pt-2">
      <Button ref={prevRef} variant="iconVariant" className="absolute top-1/2 right-6 z-9 bg-buttonBgColor p-4! duration-300 prev-btn"><ArrowUp /></Button>
      <Button ref={nextRef} variant="iconVariant" className="absolute top-1/2 -translate-y-[50%] right-6 z-9 bg-buttonBgColor p-4! duration-300 next-btn"><ArrowDown /></Button>

      <Swiper
        direction={'vertical'}
        modules={[Navigation, Mousewheel]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          // @ts-ignore
          swiper.params.navigation!.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation!.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={16}
        slidesPerView={1.03}
        // breakpoints={{
        //   1024: {
        //     slidesPerView: 1.03
        //   },
        //   1600: {
        //     slidesPerView: 1.02
        //   },
        //   1920: {
        //     slidesPerView: 1.02
        //   }
        // }}
        className="w-full p-0! pb-16! shorts-swiper"
      >
        {
          shortVideos.map((short) => (
            <SwiperSlide key={short.id} className="relative pr-15">
              {/* left section */}
              <div className="hidden 2xl:flex absolute z-3 left-0 bottom-0 flex-col gap-3 max-w-100">
                <div className="flex items-center gap-2 h-10">
                  <div className="size-9 rounded-full overflow-hidden">
                    <Image src={short.avatar_image} width={40} height={40} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <span>@{short.owner}</span>
                  <Button className="rounded-full bg-secondColor text-mainColor text-base">Subscribe</Button>
                </div>
                <div className="text-[20px] font-bold w-full line-clamp-1">
                  <span>{short.title}</span>
                  {short.hashtags.map((item, i) => (
                    <span key={i} className="mr-1">
                      {" "}
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* main shection */}
              < div className="flex w-max h-full mx-auto" >
                <div className="relative h-full bg-amber-400 rounded-xl overflow-hidden">
                  <Image src={short.cover_image} width={480} height={960} alt={short.title} className="w-full h-full object-cover" />
                  <div className="absolute left-0 bottom-0 h-25 w-full z-2 bg-linear-to-b from-transparent to-black/70" />
                  {/* left section mobile */}
                  <div className="flex 2xl:hidden absolute z-3 left-4 bottom-4 flex-col gap-3 max-w-full pr-4">
                    <div className="flex items-center gap-2 h-10">
                      <div className="size-9 rounded-full overflow-hidden">
                        <Image src={short.avatar_image} width={40} height={40} alt="avatar" className="w-full h-full object-cover" />
                      </div>
                      <span>@{short.owner}</span>
                      <Button className="rounded-full bg-secondColor text-mainColor text-base">Subscribe</Button>
                    </div>
                    <div className="text-[20px] font-bold w-full line-clamp-1">
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
                < div className="flex flex-col gap-4 justify-end items-center px-3 text-sm font-medium" >
                  {
                    shortButtons(short).map((item, i) => (
                      <div key={item.label + `${i}`} className="flex flex-col gap-1 text-center">
                        <Button variant="iconVariant" className="bg-buttonBgColor p-3!">
                          {item.icon}
                        </Button>
                        <p>{item.label}</p>
                      </div>
                    ))
                  }
                  < div className="size-10 rounded-sm overflow-hidden" >
                    <Image src={short.avatar_image} width={40} height={40} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                </div >
              </div >
            </SwiperSlide >
          ))
        }
      </Swiper >
    </div >
  )
}
