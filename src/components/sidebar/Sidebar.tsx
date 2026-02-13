"use client"
import useStore from "@/context/store"
import { SidebarClosed } from "./SidebarClosed"
import { SidebarOpen } from "./SidebarOpen"
import { SidebarSheet } from "../sheet"
import { isNotDescktop } from "@/constants"

export const Sidebar = () => {
  const { sidebarToggle, inVideoPlay } = useStore()
  if (isNotDescktop || inVideoPlay) {
    return (
      <>
        <SidebarSheet />
        <SidebarClosed inVideoPlay={inVideoPlay} />
      </>
    )
  } else {
    if (sidebarToggle) {
      return <SidebarOpen />
    } else return <SidebarClosed inVideoPlay={inVideoPlay} />
  }
}
