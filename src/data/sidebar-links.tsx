import { CreativeStudioIcon, ShortsIcon } from "@/assets/icons";
import { CircleQuestionMark, CircleUserRound, Clock, Flag, History, Home, ListVideo, MessageSquareWarning, Settings, SquarePlay, ThumbsUp, TvMinimalPlay } from "lucide-react";

export const sidebarLinksSection_1 = [
  {
    label: "Home",
    path: "/",
    icon: <Home />
  },
  {
    label: "Shorts",
    path: "/shorts",
    icon: <ShortsIcon />
  }
]

export const sidebarSubscriptionsSection = [
  {
    label: "Vanco Vanco",
    path: "/subscriptions",
    icon: <div className="size-6 rounded-full overflow-hidden"><img className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="Vanco" /></div>
  },
  {
    label: "Vanco Vanco",
    path: "/subscriptions",
    icon: <div className="size-6 rounded-full overflow-hidden"><img className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="Vanco" /></div>
  },
  {
    label: "Vanco Vanco",
    path: "/subscriptions",
    icon: <div className="size-6 rounded-full overflow-hidden"><img className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="Vanco" /></div>
  },
]

export const sidebarLinksSection_2 = [
  {
    label: "History",
    path: "/history",
    icon: <History />
  },
  {
    label: "Playlists",
    path: "/playlists",
    icon: <ListVideo />
  },
  {
    label: "See Later",
    path: "/seelater",
    icon: <Clock />
  },
  {
    label: "Liked",
    path: "/liked",
    icon: <ThumbsUp />
  },
  {
    label: "Your Videos",
    path: "/yourvideos",
    icon: <SquarePlay />
  }
]

export const otherPossibilities = [
  {
    label: "Creative Studio Tue Tube",
    path: "/",
    icon: <CreativeStudioIcon />
  },
  {
    label: "Tue Tube for Kids",
    path: "/",
    icon: <img src="/logo.svg" alt="logo" className="w-5.5 ml-0.5 -rotate-10" />
  },
]

export const sidebarLinksSection_3 = [
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings />
  },
  {
    label: "Complaints",
    path: "/",
    icon: <Flag />
  },
  {
    label: "Reference",
    path: "/",
    icon: <CircleQuestionMark />
  },
  {
    label: "Send feedback",
    path: "/",
    icon: <MessageSquareWarning />
  },
]

export const sidebarClosedLinks = [
  {
    label: "Home",
    path: "/",
    icon: <Home />
  },
  {
    label: "Shorts",
    path: "/shorts",
    icon: <ShortsIcon />
  },
  {
    label: "Subscriptions",
    path: "/subscriptions",
    icon: <TvMinimalPlay className="-scale-x-100 rotate-180" />
  },
  {
    label: "You",
    path: "/you",
    icon: <CircleUserRound />
  }
]