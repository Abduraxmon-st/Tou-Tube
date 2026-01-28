"use client"
import useStore from "@/context/store"
import { SidebarClosed } from "./SidebarClosed"
import { SidebarOpen } from "./SidebarOpen"
import { SidebarSheet } from "../sheet"

export const Sidebar = () => {
  const { sidebarToggle } = useStore()
  if (window.innerWidth < 1313) {
    return (
      <>
        <SidebarSheet />
        <SidebarClosed />
      </>
    )
  } else {
    if (sidebarToggle) {
      return <SidebarOpen />
    } else return <SidebarClosed />
  }
}
