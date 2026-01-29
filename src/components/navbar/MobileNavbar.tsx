"use client"
import { Link } from "@/i18n/navigation"
import { SidebarToggle } from "../toggle"
import { Logo } from "../logo"
import { MobileSearchMenu } from "../search"
import NavbarRight from "./NavbarRight"

interface MobileNavbarProps {
  open: boolean,
  setOpen: (value: boolean) => void
}

export const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  return (
    <div className="flex items-center justify-between pr-1 sm:px-4 max-h-14">
      <div className="flex items-center">
        <SidebarToggle />
        <Link href="/"><Logo className="py-3.5 px-4" /></Link>
      </div>
      <MobileSearchMenu open={open} setOpen={setOpen} />
      <NavbarRight />
    </div>
  )
}
