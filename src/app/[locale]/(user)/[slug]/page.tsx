"use client"
import { Avatar } from "@/components/avatar";
import { ListCard } from "@/components/card";
import { Button } from "@/components/ui/button";
import useStore from "@/context/store";
import { videos } from "@/data/videos";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
const othervideos = videos(10)
const video = videos(1)[0]
const VideoPlayPage = () => {
  const params = useParams();
  const { setInVideoPlay } = useStore();
  const videoSlug = params.slug as string;
  useEffect(() => {
    setInVideoPlay(true);
    return () => {
      setInVideoPlay(false);
    }
  }, [videoSlug, setInVideoPlay]);

  return (
    <div className="flex gap-4 pt-4">
      {/* Main Video */}
      <div className="flex-1">
        <div className="aspect-video h-max">
          <Image src={video.cover_image} alt={video.title} className="size-full object-cover rounded-xl" width={1024} height={480} />
        </div>
        <h1 className="mt-4 text-xl font-bold line-clamp-1">{video.title}</h1>
        <div className="flex justify-between w-full mt-3">
          <div className="flex items-center gap-3">
            <Avatar icon={video.avatar_image} className="size-10!" />
            <div>
              <p>{video.owner}</p>
              <p className="text-thirdColor text-xs">{video.subscribers} subscribers</p>
            </div>
            <Button variant="iconVariant" className="bg-secondColor text-mainColor px-4! ml-3">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Other videos */}
      <div className="flex flex-col gap-2 max-w-104 w-full pr-6">
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
    </div>
  )
}
export default VideoPlayPage