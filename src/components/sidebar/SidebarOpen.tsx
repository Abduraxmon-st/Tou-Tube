import { otherPossibilities, sidebarLinksSection_1, sidebarLinksSection_2, sidebarLinksSection_3 } from "@/data/sidebar-links"
import { Separator } from "../ui/separator"
import { SidebarLink } from "../link"
import { ChevronRight } from "lucide-react"
import { sidebarSubscriptionsSection } from "@/data/subscription"
import { Link } from "@/i18n/navigation"

export const SidebarOpen = () => {
  return (
    <div className="w-60 h-max overflow-x-hidden">
      <div className="p-3">
        {sidebarLinksSection_1.map((item) => (
          <SidebarLink key={item.label} item={item} />
        ))}
      </div>
      <Separator />

      <div className="p-3">
        <Link href="/subscriptions" className="flex items-center gap-2 px-3 h-10 hover:bg-buttonBgColor rounded-[10px]">
          <p className="font-semibold">Subscriptions</p>
          <ChevronRight size={16} />
        </Link>

        {sidebarSubscriptionsSection.map((item, index) => (
          <SidebarLink key={item.label + index} item={item} />
        ))}
      </div>
      <Separator />

      <div className="p-3">
        <Link href="/you" className="flex items-center gap-2 px-3 h-10 hover:bg-buttonBgColor rounded-[10px]">
          <p className="font-semibold">You</p>
          <ChevronRight size={16} />
        </Link>
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
  )
}
