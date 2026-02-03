"use client"
import { Link, usePathname } from "@/i18n/navigation"
import { SidebarToggle } from "../toggle"
import { Logo } from "../logo"
import { MobileSearchMenu } from "../search"
import NavbarRight from "./NavbarRight"
import { useEffect, useState } from "react"

interface MobileNavbarProps {
  open: boolean,
  setOpen: (value: boolean) => void
}

export const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  const pathname = usePathname()
  const [youPage, setYouPage] = useState(false)
  useEffect(() => {
    if (pathname === "/you") {
      setYouPage(true)
    } else setYouPage(false)
  }, [pathname])

  return (
    <div className="flex items-center justify-between pr-1 sm:px-4 max-h-14">
      {!youPage && <div className="flex items-center">
        <SidebarToggle />
        <Link href="/"><Logo className="py-2.5 px-4 text-lg! [&>img]:size-7" /></Link>
      </div>}
      <MobileSearchMenu open={open} setOpen={setOpen} youPage={youPage} />
      <NavbarRight />
    </div>
  )
}
