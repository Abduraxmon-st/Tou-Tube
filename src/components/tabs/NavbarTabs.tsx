"use client"
import { navbarTabs } from "@/data/navbar-tabs"
import { Button } from "../ui/button"
import useStore from "@/context/store"
import { Compass } from "lucide-react"

export const NavbarTabs = ({ className }: { className?: string }) => {
  const { sidebarToggle } = useStore()
  return (
    <div style={{ scrollbarWidth: 'none' }} className={`2md:ml-auto px-3 sm:px-6 w-full ${sidebarToggle ? "md:max-w-[calc(100vw-80px)] xxl:max-w-[calc(100vw-252px)]!" : "md:max-w-[calc(100vw-80px)]"} h-max overflow-auto ${className}`}>
      <div className="flex items-center gap-3 w-fit py-3">
        <Button variant="tabsVariant" className="[&_svg:not([class*='size-'])]:size-6 mr-2 sm:hidden">
          <Compass />
        </Button>
        {navbarTabs.map((item) => (
          <Button variant="tabsVariant" key={item.label} className={item.active ? "bg-secondColor text-mainColor" : ""}>{item.label}</Button>
        ))}
      </div>
    </div>
  )
}
