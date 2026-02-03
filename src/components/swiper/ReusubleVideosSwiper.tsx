"use client"
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Video } from "@/types";
import { MainCard } from "../card";
import { RefObject } from "react";


type SwiperNavRefs = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  videos: Video[];
};

export const ReusubleVideosSwiper = ({ prevRef, nextRef, videos }: SwiperNavRefs) => {

  return (
    <div className="relative grid">
      <Swiper
        modules={[Navigation]}
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
        slidesPerView={2}
        slidesPerGroup={2}
        grabCursor={true}
        breakpoints={{
          1: {
            slidesPerView: 2.2,
            slidesPerGroup: 1
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          1990: {
            slidesPerView: 5,
            slidesPerGroup: 5
          }
        }}
        className="w-full p-0! px-4! 2xm:px-0!"
      >
        {
          videos.map((video) => (
            <SwiperSlide key={video.id}>
              <MainCard video={video} hover={false} videoType="history" ownerVisible={false} onHome={false}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
