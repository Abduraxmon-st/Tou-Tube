"use client"
import { Logo } from "../logo"
import { Link } from "@/i18n/navigation"
import { SearchMenu } from "../search"
import NavbarRight from "./NavbarRight"
import { SidebarToggle } from "../toggle"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/button"
import { isTablet } from "@/constants"
import { MobileNavbar } from "./MobileNavbar"
import useStore from "@/context/store"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { inVideoPlay } = useStore()
  if (isTablet) {
    if (open) {
      return (
        <div className="flex items-center justify-between py-2 sm:px-4 max-h-14">
          <Button variant="iconVariant" onClick={() => setOpen(!open)}><ArrowLeft /></Button>
          <SearchMenu />
        </div>
      )
    } else {
      return !inVideoPlay ? <MobileNavbar open={open} setOpen={setOpen} /> : null
    }
  } else return (
    <div className="flex items-center justify-between px-2 sm:px-4 max-h-14">
      <div className="flex items-center">
        <SidebarToggle />
        <Link href="/"><Logo className="py-3.5 px-4" /></Link>
      </div>
      <SearchMenu />
      <NavbarRight />
    </div>
  )
}