import { ShortsSwiper } from "@/components/swiper"
import { ShortSwiperMobile } from "@/components/swiper"

const ShortsPage = () => {
  return (
    <div className="grid">
      <ShortsSwiper />
      <ShortSwiperMobile />
    </div>
  )
}

export default ShortsPage