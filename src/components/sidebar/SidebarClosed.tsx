import { sidebarClosedLinks } from "@/data/sidebar-links"
import { SidebarClosedLink } from "../link"

export const SidebarClosed = () => {
  return (
    <div className="px-1">
      {sidebarClosedLinks.map((item) => (
        <SidebarClosedLink key={item.label} item={item} />
      ))}
    </div>
  )
}
