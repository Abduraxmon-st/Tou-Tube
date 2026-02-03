import { GoogleIcon } from "@/assets/icons"
import { Avatar } from "@/components/avatar"
import { ReusubleSection } from "@/components/section"
import { Button } from "@/components/ui/button"
import { BookUser } from "lucide-react"
import { videos } from "@/data/videos"

const history = videos(15)
const playslists = videos(9)
const seeLater = videos(12)
const liked = videos(30)

const YouPage = () => {
  return (
    <div className="pr-4 pl-4 2md:pl-0 pb-4">
      {/* header account info */}
      <div className="flex items-center gap-4">
        <Avatar icon="https://i.pravatar.cc/150?img=3" className="size-24 2md:size-29 m-2 2md:m-0.5" />
        <div className="flex flex-col">
          <h2 className="text-2xl 2md:text-[36px] font-bold">Frontend user</h2>
          <div className="text-thirdColor text-sm 2md:text-base">
            <span>@User_1212</span>{" "}
            <span>•</span>{" "}
            <span>Go to the channel</span>
          </div>
          <div className="flex gap-2 mt-2 2md:mt-3 mb-2">
            <Button variant={'iconVariant'} className="[&_svg:not([class*='size-'])]:size-4.5 bg-buttonBgColor pl-3! pr-4!">
              <BookUser />
              <p>Change Account</p>
            </Button>
            <Button variant={'iconVariant'} className="[&_svg:not([class*='size-'])]:size-4.5 bg-buttonBgColor pl-3! pr-4!">
              <GoogleIcon />
              <p>Account Google</p>
            </Button>
          </div>
        </div>
      </div>

      {/* sections */}
      <ReusubleSection title="History" link="/history" videos={history} />
      <ReusubleSection title="Playlists" link="/playlists" videos={playslists} />
      <ReusubleSection title="See later" link="/seelater" videos={seeLater} />
      <ReusubleSection title="Liked" link="/liked" videos={liked} />
    </div>
  )
}

export default YouPage