import { GoogleIcon } from "@/assets/icons"
import { Avatar } from "@/components/avatar"
import { ReusubleSection } from "@/components/section"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine, BookUser, ChevronRight, Film, SquarePlay } from "lucide-react"
import { videos } from "@/data/videos"
import { youPageTabs } from "@/data/tabs"
import { playlists } from "@/data/playlists"

const history = videos(15)
const playslists = playlists(9)
const seeLater = videos(12)
const liked = videos(30)

const YouPage = () => {
  return (
    <div className="2xm:pr-4 2xm:pl-4 2md:pl-0 pb-4">
      {/* header account info */}
      <div className="flex items-center gap-4 mt-2 2xm:mt-0 pl-4 2xm:pl-0">
        <Avatar icon="https://i.pravatar.cc/150?img=3" className="size-20 2xm:size-24 2md:size-29 2xm:m-2 2md:m-0.5" />
        <div className="flex flex-col">
          <h2 className="text-2xl 2md:text-[36px] font-bold">Frontend user</h2>
          <div className="flex gap-1 text-thirdColor text-sm 2md:text-base w-full">
            <span>@User_1212</span>
            <span>•</span>
            <span>Go to the channel</span>
            <ChevronRight size={18} className="2xm:hidden" />
          </div>
          <div className="hidden 2xm:flex gap-2 mt-2 2md:mt-3 mb-2">
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
      {/* mobile tabs */}
      <div className="max-w-full w-full overflow-x-auto h-max mt-5">
        <div className="flex flex-row 2xm:hidden gap-2 px-4 2xm:px-0 w-max">
          {
            youPageTabs.map((button) => (
              <Button key={button.label} variant={'iconVariant'} className="[&_svg:not([class*='size-'])]:size-4.5 bg-buttonBgColor pl-3! pr-4! w-max">
                {button.icon}
                <p>{button.label}</p>
              </Button>
            ))
          }
        </div>
      </div>
      {/* sections */}
      <ReusubleSection title="History" link="/history" videos={history} />
      <ReusubleSection title="Playlists" link="/playlists" videos={playslists} type="playlist" />
      <ReusubleSection title="See later" link="/seelater" videos={seeLater} />
      <ReusubleSection title="Liked" link="/liked" videos={liked} />

      <div className="2xm:hidden flex flex-col pl-2 mt-8">
        <Button className="w-full! justify-start px-3.5! h-12! gap-5 bg-transparent! active:bg-thirdColor/20! font-normal text-base! rounded-none">
          <SquarePlay />
          <p>Your videos</p>
        </Button>
        <Button className="w-full! justify-start px-3.5! h-12! gap-5 bg-transparent! active:bg-thirdColor/20! font-normal text-base! rounded-none">
          <ArrowDownToLine />
          <p>Downloaded</p>
        </Button>
        <Button className="w-full! justify-start px-3.5! h-12! gap-5 bg-transparent! active:bg-thirdColor/20! font-normal text-base! rounded-none">
          <Film />
          <p>Films</p>
        </Button>
      </div>
    </div>
  )
}

export default YouPage