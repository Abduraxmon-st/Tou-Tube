"use client"
import { Comment } from "@/types"
import { Avatar } from "../avatar"
import { Button } from "../ui/button"
import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react"
import { useState } from "react"

export const CommentCard = ({ comment }: { comment: Comment }) => {
  const [answersOpen, setAnswersOpen] = useState(false)
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Avatar icon={comment.avatar_image} className="size-9 object-cover" />
        <div className="absolute top-10 right-1/2 h-[calc(100%-66px)] w-px bg-thirdColor/20">
          <div className={`absolute -bottom-3.5 size-5 border-b-3 rotate-56 border-thirdColor/20 rounded-full`} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-sm">@{comment.owner} <span className="text-xs text-thirdColor">{comment.date}</span></p>
        <p className="text-sm">{comment.comment}</p>
        <span className="text-sm text-thirdColor">Translate</span>
        <div className="flex items-center -ml-2">
          <div className="flex items-center">
            <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-4">
              <ThumbsUp />
            </Button>
            <span className="text-xs last:text-thirdColor">
              {comment.likes}
            </span>
          </div>
          <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-4">
            <ThumbsDown />
          </Button>
          <p className="text-sm ml-4">Answer</p>
        </div>
        {
          answersOpen && (
            comment.answers.map((answer, i) => (
              <div key={i} className="flex gap-4">
                <div className="relative">
                  <div className={`absolute top-0 -left-8.5 size-5 border-b-3 rotate-56 border-thirdColor/20 rounded-full`} />
                  <Avatar icon={answer.avatar_image} className="size-9 object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-sm">@{answer.owner} <span className="text-xs text-thirdColor">{answer.date}</span></p>
                  <p className="text-sm">{answer.comment}</p>
                  <span className="text-sm text-thirdColor">Translate</span>
                  <div className="flex items-center -ml-2">
                    <div className="flex items-center">
                      <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-4">
                        <ThumbsUp />
                      </Button>
                      <span className="text-xs last:text-thirdColor">
                        {answer.likes}
                      </span>
                    </div>
                    <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-4">
                      <ThumbsDown />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )
        }
        {comment.answers.length > 0 && (
          <div>
            <div onClick={() => setAnswersOpen(!answersOpen)} className="text-sm mt-4">
              {comment.answers.length} answers <ChevronDown className="inline" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
