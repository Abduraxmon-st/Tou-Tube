"use client"
import { CommentCard, ListCard, MainCard } from "@/components/card";
import { ChatPanel, CommentsSection, MainVideo, VideoButtons, VideoDetailsSection, VideoOwnerSection } from "@/components/video";
import { isMobile, isTablet } from "@/constants";
import useStore from "@/context/store";
import { videos } from "@/data/videos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const othervideos = videos(30)
const video = videos(1)[0]
const VideoPlayPage = () => {
  const params = useParams();
  const videoSlug = params.slug as string;
  const { setInVideoPlay } = useStore();
  const [chatOpen, setChatOpen] = useState(false)
  useEffect(() => {
    setInVideoPlay(true);
    return () => {
      setInVideoPlay(false);
    }
  }, [videoSlug, setInVideoPlay]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:pt-4 pb-4">
      {/* Main Video */}
      <div className="flex-1">
        <MainVideo video={video} />
        <div>
          <h1 className="mt-4 text-xl font-bold line-clamp-1 px-4 lg:px-0">{video.title}</h1>
          <p className="text-sm text-thirdColor px-4 lg:px-0 mt-2 line-clamp-1">@{video.owner} {video.views} views {video.date}</p>
        </div>
        <div className="w-full overflow-auto">
          <div className="flex flex-row md:flex-col xl:flex-row w-max gap-2 md:gap-4 justify-between md:w-full mt-3 px-4 lg:px-0">
            <VideoOwnerSection video={video} />
            <VideoButtons like={video.likes} />
          </div>
        </div>
        {!isMobile && <VideoDetailsSection video={video} chatOpen={chatOpen} setChatOpen={setChatOpen} />}
        <CommentsSection comments={video.comments} avatar={video.avatar_image} />
        <div className="hidden md:flex flex-col gap-4">
          {
            video.comments.map((comment) => (
              <CommentCard key={comment.likes} comment={comment} />
            ))
          }
        </div>
      </div>

      {/* Other videos */}
      {isTablet ? (
        <div className="flex flex-col gap-5 lg:max-w-90 xl:max-w-104 w-full md:px-4 lg:pr-6!">
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
          <div className="flex flex-col gap-2 max-w-90 xl:max-w-104 w-full pr-6">
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
          </div>)
      }
    </div >
  )
}
export default VideoPlayPage