import { otherPossibilities, sidebarLinksSection_1, sidebarLinksSection_2, sidebarLinksSection_3, sidebarSubscriptionsSection } from "@/data/sidebar-links"
import { Separator } from "../ui/separator"
import { SidebarLink } from "../link"
import { ChevronRight } from "lucide-react"

export const Sidebar = () => {
  return (
    <div className="h-full max-h-[calc(100vh-3.5rem)] overflow-y-scroll sidebarScrollBar">
      <div className="w-60 h-max">
        <div className="p-3">
          {sidebarLinksSection_1.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-3">
          <div className="flex items-center gap-2 px-3 h-10 hover:bg-buttonBgColor rounded-[10px]">
            <p className="font-semibold">Subscriptions</p>
            <ChevronRight size={16} />
          </div>

          {sidebarSubscriptionsSection.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-3">
          {sidebarLinksSection_2.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-3">
          <p className="font-semibold pl-3">Other possibilities</p>
          {otherPossibilities.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-3">
          {sidebarLinksSection_3.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
