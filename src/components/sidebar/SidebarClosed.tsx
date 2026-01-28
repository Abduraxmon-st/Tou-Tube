import { sidebarClosedLinks } from "@/data/sidebar-links"
import { SidebarClosedLink } from "../link"

export const SidebarClosed = () => {
  return (
    <div className="hidden 2md:block px-1">
      {sidebarClosedLinks.map((item) => (
        <SidebarClosedLink key={item.label} item={item} />
      ))}
    </div>
  )
}
