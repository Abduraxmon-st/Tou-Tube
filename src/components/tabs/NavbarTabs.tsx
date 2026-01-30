"use client"
import { navbarTabs } from "@/data/navbar-tabs"
import { Button } from "../ui/button"
import useStore from "@/context/store"
import { Compass } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export const NavbarTabs = ({ className }: { className?: string }) => {
  const { sidebarToggle } = useStore()
  return (
    <div style={{ scrollbarWidth: 'none' }} className={`relative 2md:ml-auto px-3 sm:px-5.75 xl:px-6.5 w-full ${sidebarToggle ? "md:max-w-[calc(100vw-80px)] xxl:max-w-[calc(100vw-252px)]!" : "md:max-w-[calc(100vw-80px)]"} h-max overflow-auto ${className}`}>
      <Tabs defaultValue="All" className="flex flex-row! items-center gap-3 w-fit py-2.5">
        <Button variant="tabsVariant" className="[&_svg:not([class*='size-'])]:size-5.5 px-2.5! mr-2 sm:hidden">
          <Compass />
        </Button>
        <TabsList className="p-0! bg-transparent gap-3">
          {navbarTabs.map((item) => (
            <TabsTrigger
              value={item.label}
              key={item.label}
              className="text-secondColor hover:text-secondColor bg-secondColor/9 h-7.5 sm:h-8.5 py-0 px-3 hover:bg-secondColor/12">
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}