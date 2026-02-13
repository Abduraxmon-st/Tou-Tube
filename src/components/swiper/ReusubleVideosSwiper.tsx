"use client"
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Playlist, Video } from "@/types";
import { MainCard, PlaylistCard } from "../card";
import { RefObject } from "react";


type SwiperNavRefs = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  videos: Video[] | Playlist[];
  type?: "playlist" | "classic"
};

export const ReusubleVideosSwiper = ({ prevRef, nextRef, videos, type = "classic" }: SwiperNavRefs) => {

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
        className="w-full p-0! px-4! 2xm:px-0! pt-4!"
      >
        {
          videos.map((video) => (
            <SwiperSlide key={video.id}>
              {
                type === "classic" ? (
                  <MainCard
                    video={video as Video}
                    hover={false}
                    videoType="history"
                    ownerVisible={false}
                    onHome={false}
                    buttonClass="-right-2! bottom-11!" />
                ) : (
                  <PlaylistCard playlist={video as Playlist} hover={false} />
                )
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
