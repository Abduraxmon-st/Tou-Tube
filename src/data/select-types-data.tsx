import { ShareIcon } from "@/assets/icons";
import { Separator } from "@/components/ui/separator";
import { selectItemType, VideoType } from "@/types";
import { ArrowDownToLine, Ban, Bookmark, ChevronFirst, CircleMinus, CircleX, Clock, ClosedCaption, Flag, ListVideo, MessageSquareWarning, Pencil, TextAlignStart, Trash, Vibrate } from "lucide-react";

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