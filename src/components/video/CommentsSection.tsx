import { Comment } from "@/types"
import { Smile, TextAlignStart } from "lucide-react"
import { Avatar } from "../avatar"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const CommentsSection = ({ comments, avatar }: { comments: Comment[], avatar: string }) => {
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentText, setCommentText] = useState("")

  const handleCancel = () => {
    setCommentText("")
    setCommentOpen(false)
  }
  return (
    <div className="hidden lg:block mt-6 pb-8 px-4 lg:px-0">
      <div className="flex gap-6 mb-6">
        <h3 className="text-xl font-bold">{comments.length} comments</h3>
        <div className="flex items-center gap-3 text-sm">
          <TextAlignStart />
          regularize
        </div>
      </div>
      <div>
        <div className="flex items-start gap-3">
          <Avatar icon={avatar} className={commentOpen ? "size-10" : "size-6"} />
          <Input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder={!commentOpen ? "Add a comment..." : ''}
            className="flex-1 border-b-2! border-b-buttonBgColor! border-mainColor pl-0! pb-1! pt-0 h-auto placeholder:text-thirdColor rounded-none"
            onFocus={() => setCommentOpen(true)} />
        </div>
        {commentOpen && (
          <div className="flex items-center justify-between pl-13">
            <Smile />
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                className="bg-blue-500 text-mainColor rounded-full ml-3"
                onClick={handleCancel}>
                Post a comment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
