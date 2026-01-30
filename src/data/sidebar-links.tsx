import { CreativeStudioIcon, ShortsIcon } from "@/assets/icons";
import { CircleQuestionMark, CircleUserRound, Clock, Flag, Globe, History, Home, Info, ListVideo, MessageSquareWarning, Settings, SquarePlay, ThumbsUp, TrendingUp, TvMinimalPlay, User, Youtube } from "lucide-react";

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
    slug: "vanco-vanco",
    logo: "https://yt3.googleusercontent.com/uF89oobUNUuONZOAUw6nyaQO8PAzgbjzyFRMyZl3QOfKkon4rUPbyYM558w6DA4XTApyHbX1cA=s160-c-k-c0x00ffffff-no-rj",
    path: "/subscriptions/vanco-vanco",
    icon: <div className="size-6 rounded-full overflow-hidden"><img className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="Vanco" /></div>
  },
  {
    label: "REAKTOR",
    slug: "reaktor",
    logo: "https://yt3.googleusercontent.com/uF89oobUNUuONZOAUw6nyaQO8PAzgbjzyFRMyZl3QOfKkon4rUPbyYM558w6DA4XTApyHbX1cA=s160-c-k-c0x00ffffff-no-rj",
    path: "/subscriptions/reaktor",
    subscriptions: "128 thousand",
    videos: "29",
    cardNumber: "5614 0000 0000 0000",
    name: "Rovshanbek M",
    reklamaLink: "https://www.nmadur.com/",
    description: "We tried to show the series you may have seen from a different perspective.We have no personal animosity towards the authors and creators of the series.",
    icon: <div className="size-6 rounded-full overflow-hidden"><img className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="Vanco" /></div>,
    informationIcon: [
      {
        icon: <Youtube />,
        title: "www.youtube.com/@Reaktor",
      },
      {
        icon: <Globe />,
        title: "Turkish",
      },
      {
        icon: <Info />,
        title: "Registration date: 21 Feb 2023",
      },
      {
        icon: <User />,
        title: "128 thousand subscribers",
      },
      {
        icon: <SquarePlay />,
        title: "29 videos",
      },
      {
        icon: <TrendingUp />,
        title: "10 724 062 views",
      },
    ],
  },
  {
    label: "Vanco Vanco",
    slug: "toji",
    logo: "https://yt3.googleusercontent.com/uF89oobUNUuONZOAUw6nyaQO8PAzgbjzyFRMyZl3QOfKkon4rUPbyYM558w6DA4XTApyHbX1cA=s160-c-k-c0x00ffffff-no-rj",
    path: "/subscriptions/toji",
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
    path: "//",
    icon: <CreativeStudioIcon />
  },
  {
    label: "Tue Tube for Kids",
    path: "//",
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
    path: "//",
    icon: <Flag />
  },
  {
    label: "Reference",
    path: "//",
    icon: <CircleQuestionMark />
  },
  {
    label: "Send feedback",
    path: "//",
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