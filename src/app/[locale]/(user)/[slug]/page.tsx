"use client"
import { CommentCard, ListCard, MainCard } from "@/components/card";
import { MobileCommentsSection } from "@/components/sheet";
import { ChatPanel, CommentsSection, MainVideo, VideoButtons, VideoDetailsSection, VideoOwnerSection } from "@/components/video";
import { isTablet } from "@/constants";
import useStore from "@/context/store";
import { videos } from "@/data/videos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const othervideos = videos(30)
const video = videos(1)[0]
const VideoPlayPage = () => {
  const params = useParams();
  const videoSlug = params.slug as string;
  const { setInVideoPlay, setSidebarToggle } = useStore();
  const [chatOpen, setChatOpen] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setInVideoPlay(true);
    setSidebarToggle(false)
    return () => {
      setInVideoPlay(false);
      setSidebarToggle(false)
    }
  }, [videoSlug, setInVideoPlay]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:pt-4 pb-4">
      {/* Main Video */}
      <div className="flex-1 relative">
        <MainVideo video={video} />
        <div className="aspect-video h-max w-full lg:hidden -mt-14" />
        <div>
          <h1 className="mt-4 text-xl font-bold line-clamp-1 px-4 lg:px-0">{video.title}</h1>
          <p className="md:hidden text-sm text-thirdColor px-4 lg:px-0 mt-1 line-clamp-1">@{video.owner} {video.views} views {video.date}</p>
        </div>
        <div className="w-full overflow-auto">
          <div className="flex flex-row md:flex-col xl:flex-row w-max gap-2 md:gap-4 justify-between md:w-full mt-3 px-4 lg:px-0">
            <VideoOwnerSection video={video} />
            <VideoButtons like={video.likes} />
          </div>
        </div>
        {
          isTablet ?
            <MobileCommentsSection comments={video.comments} />
            : <VideoDetailsSection video={video} chatOpen={chatOpen} setChatOpen={setChatOpen} />
        }
        <CommentsSection comments={video.comments} avatar={video.avatar_image} />
        <div className="hidden lg:flex flex-col gap-4 px-4 lg:px-0">
          {
            video.comments.map((comment) => (
              <CommentCard key={comment.likes} comment={comment} />
            ))
          }
        </div>
      </div>

      {/* Other videos */}
      {isTablet ? (
        <div className="flex flex-col gap-5 w-full md:px-4">
          {
            othervideos.map((video) => (
              <MainCard
                key={video.id}
                video={video}
                hover={false}

              />
            ))
          }
        </div>
      )
        : (
          <div className="flex flex-col gap-2 max-w-90 xl:max-w-107 w-full pr-6">
            {chatOpen && <ChatPanel setChatOpen={setChatOpen} />}
            {
              othervideos.map((video) => (
                <ListCard
                  key={video.id}
                  video={video}
                  coverWidth="w-[45%]"
                  ownerVisible={false}
                  descVisible={false} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}
export default VideoPlayPage