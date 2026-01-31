import { Ban, Bookmark, CircleX, ClosedCaption, Flag, Flame, MessageSquareWarning, Radio, Settings, TextAlignStart, TvMinimalPlay } from "lucide-react";

export const shortsLinks = [
  {
    label: "Subscriptions",
    icon: <TvMinimalPlay className="-scale-x-100 rotate-180" />,
    path: "/subscriptions"
  },
  {
    label: "On air",
    icon: <Radio />,
    path: "/"
  },
  {
    label: "Trends",
    icon: <Flame />,
    path: "/"
  }
]

export const shortsSheetButtons = [
  {
    label: "Description",
    icon: <TextAlignStart />
  },
  {
    label: "Add to playlist",
    icon: <Bookmark />
  },
  {
    label: "Subtitres",
    icon: <ClosedCaption />
  },
  {
    label: "Quality",
    icon: <Settings />
  },
  {
    label: "Not interested",
    icon: <Ban />
  },
  {
    label: "Do not recommend videos from this channel",
    icon: <CircleX />
  },
  {
    label: "Complain",
    icon: <Flag />
  },
  {
    label: "Send feedback",
    icon: <MessageSquareWarning />
  },
]