import { Link } from "@/i18n/navigation"
import { SidebarItemType } from "@/types"

export const SidebarLink = ({ item, className }: { item: SidebarItemType, className?: string }) => {
  return (
    <Link key={item.label} href={item.path} className={`flex items-center gap-6 px-3 h-10 hover:bg-buttonBgColor rounded-[10px] ${className}`}>
      <div>
        {item.icon}
      </div>
      <p className="text-sm font-medium line-clamp-1">{item.label}</p>
    </Link>
  )
}
