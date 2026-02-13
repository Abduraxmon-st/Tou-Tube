import { sidebarClosedLinks } from "@/data/sidebar-links"
import { SidebarClosedLink } from "../link"

export const SidebarClosed = ({ inVideoPlay }: { inVideoPlay: boolean }) => {
  return (
    <div className={inVideoPlay ? 'hidden' : 'hidden 2md:block px-1'}>
      {sidebarClosedLinks.map((item) => (
        <SidebarClosedLink key={item.label} item={item} />
      ))}
    </div>
  )
}
