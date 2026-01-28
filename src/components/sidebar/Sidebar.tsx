"use client"
import useStore from "@/context/store"
import { SidebarClosed } from "./SidebarClosed"
import { SidebarOpen } from "./SidebarOpen"

export const Sidebar = () => {
  const { sidebarToggle } = useStore()
  if (sidebarToggle) {
    return <SidebarOpen />
  } else return <SidebarClosed />
}
