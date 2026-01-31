import { ShortsSection } from "@/components/section"
import { VideosSection } from "@/components/section/VideosSection"
import { videos } from "@/data/videos"
const videosSection_1 = videos(3)
const videosSection_2 = videos(9)

const Home = () => {
  return (
    <div className="max-w-545 mx-auto xm:pr-4 xm:pl-4 sm:pl-6 sm:pr-6 2md:pl-0! 2xl:pr-10 pt-4 sm:pt-6">
      <VideosSection videos={videosSection_1} />
      <ShortsSection />
      <VideosSection videos={videosSection_2} />
      <ShortsSection />
      <VideosSection videos={videosSection_2} />
    </div>
  )
}

export default Home