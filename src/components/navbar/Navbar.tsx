"use client"
import { Logo } from "../logo"
import { Link } from "@/i18n/navigation"
import { SearchMenu } from "../search"
import NavbarRight from "./NavbarRight"
import { SidebarToggle } from "../toggle"

export const Navbar = () => {

  return (
    <div className="flex items-center justify-between px-4 max-h-14">
      <div className="flex items-center">
        {/* sidebar menu */}
        <SidebarToggle />

        <Link href="/"><Logo className="py-3.5 px-4" /></Link>
      </div>
      <SearchMenu />
      <NavbarRight />
    </div>
  )
}
