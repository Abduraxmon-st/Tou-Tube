import { playlistTabs } from "@/data/navbar-tabs"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { PlaylistTabsSelect } from "../select"

export const PlaylistTabs = () => {
  return (
    <div className="overflow-x-auto pt-3 w-full max-w-full">
      <div className="flex flex-row items-center gap-2 h-10 px-3 sm:px-6 2md:px-0 w-max">
        <PlaylistTabsSelect />
        <Tabs className="w-max! h-max!">
          <TabsList className="p-0! bg-transparent gap-2 h-9!">
            {playlistTabs.map((item) => (
              <TabsTrigger
                value={item.label}
                key={item.label}
                className="text-secondColor hover:text-secondColor bg-secondColor/9 h-8! py-0 px-3 hover:bg-secondColor/12">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
