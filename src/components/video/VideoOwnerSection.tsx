import { Video } from '@/types'
import { Avatar } from '../avatar'
import { Button } from '../ui/button'

export const VideoOwnerSection = ({ video }: { video: Video | null }) => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Avatar icon={video?.avatar_image} className="size-7.5! lg:size-10!" />
      <div className='hidden md:block'>
        <p>{video?.owner}</p>
        <p className="text-thirdColor text-xs">{video?.subscribers} subscribers</p>
      </div>
      <Button variant="iconVariant" className="bg-secondColor text-mainColor px-4! md:ml-3">Subscribe</Button>
    </div>
  )
}
