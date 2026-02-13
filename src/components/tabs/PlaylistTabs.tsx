import { playlistTabs } from "@/data/tabs"
import { PlaylistTabsSelect } from "../select"
import { ReusableTabs } from "./ReusableTabs"

export const PlaylistTabs = () => {
  return (
    <div className="overflow-x-auto pt-3 w-full max-w-full">
      <div className="flex flex-row items-center gap-2 h-10 px-3 sm:px-6 2md:px-0 w-max">
        <PlaylistTabsSelect />
        <ReusableTabs tabs={playlistTabs} />
      </div>
    </div>
  )
}
