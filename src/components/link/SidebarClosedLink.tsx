import { Link } from "@/i18n/navigation"
import { SidebarItemType } from "@/types"

export const SidebarClosedLink = ({ item, className }: { item: SidebarItemType, className?: string }) => {
  return (
    <Link key={item.label} href={item.path} className={`flex flex-col items-center gap-1.25 pt-4 pb-3.5 w-16 hover:bg-buttonBgColor rounded-[10px] ${className}`}>
      <div>
        {item.icon}
      </div>
      <p className="text-[10px] font-medium line-clamp-1">{item.label}</p>
    </Link>
  )
}
