"use client"
import { Link, usePathname } from "@/i18n/navigation"
import { SidebarToggle } from "../toggle"
import { Logo } from "../logo"
import { MobileSearchMenu } from "../search"
import { useEffect, useState } from "react"
import useStore from "@/context/store"
import { ArrowLeft } from "lucide-react"

interface MobileNavbarProps {
  open: boolean,
  setOpen: (value: boolean) => void
}

export const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  const pathname = usePathname()
  const [youPage, setYouPage] = useState(false)
  const { inSubSlug, setInSubSlug } = useStore()
  const inMySubscriptions = pathname === "/mysubscriptions"
  useEffect(() => {
    if (pathname === "/you") {
      setYouPage(true)
    } else setYouPage(false)
  }, [pathname])

  return (
    <div className="flex items-center justify-between pr-1 sm:px-4 max-h-14">
      {(!youPage && !inSubSlug && !inMySubscriptions) &&
        <div className="flex items-center">
          <SidebarToggle />
          <Link href="/">
            <Logo className="py-2.5 px-4 text-lg! [&>img]:size-7" />
          </Link>
        </div>
      }
      {
        (inSubSlug || inMySubscriptions) && (
          <Link href="/subscriptions" onClick={() => setInSubSlug(false)}>
            <ArrowLeft className="my-3 mx-4" />
          </Link>
        )
      }
      <MobileSearchMenu open={open} setOpen={setOpen} youPage={youPage} />
    </div>
  )
}
