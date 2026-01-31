import { ShareIcon } from "@/assets/icons";
import { Short } from "@/types";
import { CircleFadingPlus, MessageSquareText, ThumbsDown, ThumbsUp } from "lucide-react";

export function shortButtons(short: Short) {
  return [
    {
      label: short.likes,
      icon: <ThumbsUp />
    },
    {
      label: "Dislike",
      icon: <ThumbsDown />
    },
    {
      label: short.comments.length,
      icon: <MessageSquareText />
    },
    {
      label: "Share",
      icon: <ShareIcon />
    },
    {
      label: `${Math.floor(Math.random() * 50 + 1)}`,
      icon: <CircleFadingPlus />
    }
  ]
}