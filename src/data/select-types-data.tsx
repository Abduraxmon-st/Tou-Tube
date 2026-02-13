import { GoogleIcon, ShareIcon } from "@/assets/icons";
import { Separator } from "@/components/ui/separator";
import { selectItemType, VideoType } from "@/types";
import { ArrowDownToLine, Ban, Bookmark, BookUser, ChevronFirst, CircleDollarSign, CircleMinus, CircleQuestionMark, CircleStar, CircleX, Clock, ClosedCaption, Flag, Globe, Keyboard, Languages, ListVideo, LogIn, MessageSquareWarning, Moon, Pause, Pencil, Settings, ShieldUser, TextAlignStart, Trash, UserCog, Vibrate } from "lucide-react";

export const selectClassic = [
  {
    label: "Add to queue",
    icon: <ListVideo />
  },
  {
    label: "See later",
    icon: <Clock />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "Download",
    icon: <ArrowDownToLine />
  },
  {
    label: "Share",
    icon: <ShareIcon />
  },
  {
    label: "Not interested",
    icon: <Ban />
  },
  {
    label: "Do not recommend videos from this channel",
    icon: <CircleMinus />
  },
  {
    label: "Complain",
    icon: <Flag />
  },
]

export const selectClassicShorts = [
  {
    label: "Add to queue",
    icon: <ListVideo />
  },
  {
    label: "Not interested",
    icon: <Ban />
  },
  {
    label: "Send feedback",
    icon: <MessageSquareWarning />
  },
  {
    label: "Complain",
    icon: <Flag />
  },
]

export const selectAllShorts = [
  {
    label: "Show less shorts",
    icon: <CircleX />
  }
]

export const selectShorts = [
  {
    label: "Description",
    icon: <TextAlignStart />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "BackLight",
    icon: <Vibrate className="rotate-90" />
  },
  {
    label: "Subtitres",
    icon: <ClosedCaption />
  },
  {
    label: "Do not recommend videos from this channel",
    icon: <CircleMinus />
  },
  {
    label: "Send feedback",
    icon: <MessageSquareWarning />
  },
  {
    label: "Complain",
    icon: <Flag />
  },
]

export const selectHistory = [
  {
    label: "Add to queue",
    icon: <ListVideo />
  },
  {
    label: "See later",
    icon: <Clock />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "Share",
    icon: <ShareIcon />
  },
  {
    label: "Delete from browsing history",
    icon: <Trash />
  },
]

export const selectPlaylist = [
  {
    label: "Delete",
    icon: <Trash />
  },
  {
    label: "Edit",
    icon: <Pencil />
  },
]

export const selectSeeLater = [
  {
    label: "Add to queue",
    icon: <ListVideo />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "Delete from playlist",
    icon: <Trash />
  },
  {
    label: "Download",
    icon: <ArrowDownToLine />
  },
  {
    label: "Share",
    icon: <ShareIcon />
  },
  {
    label: "separator",
    icon: <Separator />
  },
  {
    label: "Move to top",
    icon: <ChevronFirst className="-rotate-90" />
  },
  {
    label: "Move to bottom",
    icon: <ShareIcon className="rotate-90" />
  },
]

export const selectLiked = [
  {
    label: "Add to queue",
    icon: <ListVideo />
  },
  {
    label: "See later",
    icon: <Clock />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "Share",
    icon: <ShareIcon />
  },
  {
    label: "separator",
    icon: <Separator />
  },
  {
    label: "Delete from liked",
    icon: <Trash />
  },
]

export const AllSelectsForVideo: { type: VideoType; data: selectItemType[] }[] = [
  {
    type: "classic",
    data: selectClassic
  },
  {
    type: "classic-shorts",
    data: selectClassicShorts
  },
  {
    type: "shorts",
    data: selectShorts
  },
  {
    type: "all-shorts",
    data: selectAllShorts
  },
  {
    type: "history",
    data: selectHistory
  },
  {
    type: "playlist",
    data: selectPlaylist
  },
  {
    type: "see-later",
    data: selectSeeLater
  },
  {
    type: "liked",
    data: selectLiked
  },
]

export const profileSelectData = [
  {
    label: "Account Google",
    icon: <GoogleIcon />,
    chevron: false
  },
  {
    label: "Change account",
    icon: <BookUser />,
    chevron: true
  },
  {
    label: "Logout",
    icon: <LogIn />,
    chevron: false
  },
  {
    label: "separator",
    icon: <Separator />,
    chevron: false
  },
  {
    label: "Creative Studio",
    icon: <CircleStar />,
    chevron: false
  },
  {
    label: "Purchases and paid subscriptions",
    icon: <CircleDollarSign />,
    chevron: false
  },
  {
    label: "separator",
    icon: <Separator />,
    chevron: false
  },
  {
    label: "Your data in YouTube",
    icon: <ShieldUser />,
    chevron: false
  },
  {
    label: "Theme: Device theme",
    icon: <Moon />,
    chevron: true
  },
  {
    label: "Language: English",
    icon: <Languages />,
    chevron: true
  },
  {
    label: "Safe mode: Off",
    icon: <UserCog />,
    chevron: true
  },
  {
    label: "Country: United States",
    icon: <Globe />,
    chevron: true
  },
  {
    label: "Fast keyboard",
    icon: <Keyboard />,
    chevron: false
  },
  {
    label: "separator",
    icon: <Separator />,
    chevron: false
  },
  {
    label: "Settings",
    icon: <Settings />,
    chevron: false
  },
  {
    label: "separator",
    icon: <Separator />,
    chevron: false
  },
  {
    label: "Reference",
    icon: <CircleQuestionMark />,
    chevron: false
  },
  {
    label: "Send feedback",
    icon: <MessageSquareWarning />,
    chevron: false
  }
]

export const historySelectData = [
  {
    label: "Delete from history",
    icon: <Trash />
  },
  {
    label: "Don't save history",
    icon: <Pause />
  },
  {
    label: "History settings",
    icon: <Settings />
  }
]
export const hisorySettingsSelectData = [
  "Comments", "Records", "Chat"
]