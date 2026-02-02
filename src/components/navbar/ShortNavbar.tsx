"use client"
import { EllipsisVertical, Search } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { ShortSheet } from "../sheet"
import { isTablet } from "@/constants"
import { VideosSelect } from "../select"

export const ShortNavbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 w-full h-max sm:hidden px-3 pt-2 pb-4 bg-linear-to-t from-transparent to-black/50">
      <div className="flex items-end">
        <h2 className="flex-1 text-xl font-bold">Shorts</h2>
        <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-5.5 mr-2"><Search /></Button>
        {isTablet ? (
          <Button onClick={() => setOpen(!open)} variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-5.5 -mr-2"><EllipsisVertical /></Button>
        ) : (
          <VideosSelect videoType="shorts" />
        )}
      </div>
      {/* <ShortsNavbarLinks /> */}
      {/* <ShareButton /> */}
      <ShortSheet open={open} setOpen={setOpen} />
    </div>
  )
}
