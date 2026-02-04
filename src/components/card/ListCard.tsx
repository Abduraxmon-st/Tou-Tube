import { videos } from "@/data/videos";
import { Avatar } from "../avatar";
import Image from "next/image";
import { VideosSelect } from "../select";
import { VideoType } from "@/types";
import { Card } from "../ui/card";
const videosSection_1 = videos(3)
interface ListCardProps {
    viewMode?: 'grid' | 'list';
    videoType?: VideoType,
    ownerVisible?: boolean,
}
export const ListCard = ({ viewMode = 'grid', videoType = "classic", ownerVisible }: ListCardProps) => {
    return (
        <div className={` gap-x-3 gap-y-7.5 xm:gap-y-5 w-full mt-3 ${viewMode === 'list' ? 'flex flex-col' : 'grid grid-cols-1 sm:grid-cols-2 3md:grid-cols-3!'
            }`}>
            {videosSection_1.map((video: any, index) => (  
                <Card key={index} className="relative bg-transparent border-0 py-0! gap-0 shadow-none rounded-none text-secondColor cursor-pointer">
                    <div className={`relative ${viewMode === 'list' ? 'flex' : 'w-full'}`}>
                        <div className={`relative aspect-video overflow-hidden rounded-xl`}>
                            <Image loading="eager" width={1024} height={480} src={video.cover_image} alt={video.title} className={`${viewMode === 'list' && "w-61.5"}`} />
                            <span className="absolute bottom-2 right-2 text-sm sm:text-[13px] font-medium bg-mainColor/70 px-1 py-0.5 rounded-[5px]">{video.time}</span>
                        </div>

                        <div className="flex gap-3 p-3 sm:p-2 3md:p-3">
                            {ownerVisible && <Avatar icon={video.avatar_image} className="size-9" />}
                            <div className="flex-1 relative pr-6">
                                <h2 className="font-medium line-clamp-2">{video.title}</h2>
                                <p className="hidden xm:block text-thirdColor text-sm">{video.owner}</p>
                                <VideosSelect videoType={videoType} buttonClass="absolute -top-2 -right-1 sm:-right-5.5" />
                                <div className="text-thirdColor text-sm xm:hidden!">
                                    <span className="text-thirdColor text-sm">{video.owner}</span>
                                    <span>{" "}•{" "}</span>
                                    <span>{video.views}</span>
                                    <span>{" "}•{" "}</span>
                                    <span>{video.date}</span>
                                </div>
                                <div className="text-thirdColor text-sm hidden xm:block line-clamp-1">
                                    <span>{video.views}</span>
                                    <span>{" "}•{" "}</span>
                                    <span>{video.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default ListCard