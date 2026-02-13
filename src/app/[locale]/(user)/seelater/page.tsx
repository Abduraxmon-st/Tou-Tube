"use client"
import { ListCard } from "@/components/card"
import { videos } from "@/data/videos"
import { Equal } from "lucide-react";
import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
const likedVideos = videos(15)

const SeeLaterPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
  
    const swapy = createSwapy(containerRef.current, {
      animation: "dynamic",
      dragAxis: "y",
    });
  
    return () => {
      swapy.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
      </div>
      <div ref={containerRef} className="col-span-2 flex flex-col mt-4 px-4 lg:px-0 lg:pr-6!">
        {likedVideos.map((video) => (
          <div key={video.id} data-swapy-slot={video.id}>
            <div data-swapy-item={video.id} className="hover:bg-secondColor/10 rounded-[12px] p-3">
              <div className="flex items-center gap-4 w-full">
                <span className="text-sm font-medium text-thirdColor hidden lg:block cursor-grab"><Equal /></span>
                <ListCard video={video} coverWidth="max-w-[50%] 2xm:max-w-[30%]" ownerVisible={false} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeeLaterPage