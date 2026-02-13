"use client"
import { useParams } from "next/navigation";

const VideoPlayPage = () => {
  const params = useParams();
  const video = params.slug as string;
  return (
    <div>{video}</div>
  )
}
export default VideoPlayPage