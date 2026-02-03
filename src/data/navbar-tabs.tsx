import { GoogleIcon, ShareIcon } from "@/assets/icons"
import { BookUser, HatGlasses } from "lucide-react"

export const navbarTabs = [
  {
    label: "All",
    active: true
  },
  {
    label: "Music"
  },
  {
    label: "Jams"
  },
  {
    label: "Video Games"
  },
  {
    label: "Recently Published"
  },
  {
    label: "Viewed"
  },
  {
    label: "New for You"
  },
]

export const youPageTabs = [
  {
    label: "Change account",
    icon: <BookUser />
  },
  {
    label: "Account Google",
    icon: <GoogleIcon />
  },
  {
    label: "Enable incognito mode",
    icon: <HatGlasses />
  },
  {
    label: "Share channel",
    icon: <ShareIcon />
  },
]