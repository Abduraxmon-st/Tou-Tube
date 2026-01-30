import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import useStore from "@/context/store"
import { otherPossibilities, sidebarLinksSection_1, sidebarLinksSection_2, sidebarLinksSection_3, sidebarSubscriptionsSection } from "@/data/sidebar-links"
import { Separator } from "../ui/separator"
import { SidebarLink } from "../link"
import { ChevronRight } from "lucide-react"
import { SidebarToggle } from "../toggle"
import { Link } from "@/i18n/navigation"
import { Logo } from "../logo"

export const SidebarSheet = () => {
  const { sidebarToggle, setSidebarToggle } = useStore()
  return (
    <Sheet open={sidebarToggle} onOpenChange={setSidebarToggle}>
      <SheetContent side="left" className="w-61! gap-0 p-0! backdrop-blur-3xl bg-mainColor/80 border-r-0" showCloseButton={false}>
        <SheetTitle className="flex items-center pl-4 h-14 text-secondColor! font-normal">
          <SidebarToggle />

          <Link href="/"><Logo className="py-3.5 px-4" /></Link>
        </SheetTitle>
        <div style={{ scrollbarWidth: "none" }} className="h-full overflow-y-auto">
          <div className="w-60 h-max">
            <div className="p-3">
              {sidebarLinksSection_1.map((item) => (
                <SidebarLink key={item.label} item={item} onClick={() => setSidebarToggle(false)} />
              ))}
            </div>
            <Separator />

            <div className="p-3">
              <div className="flex items-center gap-2 px-3 h-10 hover:bg-buttonBgColor rounded-[10px]">
                <p className="font-semibold">Subscriptions</p>
                <ChevronRight size={16} />
              </div>

              {sidebarSubscriptionsSection.map((item, index) => (
                <SidebarLink key={item.label + index} item={item} onClick={() => setSidebarToggle(false)} />
              ))}
            </div>
            <Separator />

            <div className="p-3">
              <div className="flex items-center gap-2 px-3 h-10 hover:bg-buttonBgColor rounded-[10px]">
                <p className="font-semibold">You</p>
                <ChevronRight size={16} />
              </div>
              {sidebarLinksSection_2.map((item) => (
                <SidebarLink key={item.label} item={item} onClick={() => setSidebarToggle(false)} />
              ))}
            </div>
            <Separator />

            <div className="p-3">
              <p className="font-semibold pl-3">Other possibilities</p>
              {otherPossibilities.map((item) => (
                <SidebarLink key={item.label} item={item} onClick={() => setSidebarToggle(false)} />
              ))}
            </div>
            <Separator />

            <div className="p-3">
              {sidebarLinksSection_3.map((item) => (
                <SidebarLink key={item.label} item={item} onClick={() => setSidebarToggle(false)} />
              ))}
            </div>
            <Separator />

            <div className="flex flex-wrap gap-x-2 text-[13px] pt-4 px-6 text-thirdColor font-medium text-balance">
              <span>About the Service</span>
              <span>Press</span>
              <span>Copyright</span>
              <span>Contact Us</span>
              <span>Authors</span>
              <span>Advertisers</span>
            </div>
            <div className="flex flex-wrap gap-x-2 text-[13px] pt-4 px-6 text-thirdColor font-medium text-balance">
              <span>Developers</span>
              <span>Terms of Service</span>
              <span>Privacy</span>
              <span>Rules and Safety</span>
              <span>How YouTube Works</span>
              <span>Testing New Features</span>
            </div>
            <div className="py-4 px-6 text-xs text-thirdColor/70">© 2026 Not Google LLCPC</div>
          </div>
        </div>
      </SheetContent>
    </Sheet >
  )
}
