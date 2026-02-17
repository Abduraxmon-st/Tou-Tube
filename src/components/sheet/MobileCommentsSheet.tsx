import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Comment } from "@/types"
import { Button } from "../ui/button"
import { Info, X } from "lucide-react"
import { CommentCard } from "../card"
import { Avatar } from "../avatar"
import { Input } from "../ui/input"

export const MobileCommentsSection = ({ comments, ownerAvatar }: { comments: Comment[], ownerAvatar: string }) => {

  return (
    <Sheet>
      <SheetTrigger asChild className="mt-4 mx-4 pt-2 pb-3 px-3 rounded-lg bg-buttonBgColor">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5">
            <p className="font-medium">Comments</p>
            <span className="text-thirdColor">{comments.length}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Avatar icon={comments[0].avatar_image} className="size-7.5!" />
            <p className="text-sm line-clamp-1">{comments[0].comment}</p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent autoFocus={false} overlay={false} showCloseButton={false} side="bottom" className="max-h-[calc(100dvh-(100vw*9/16)-2px)] h-full gap-0!  outline-0 bg-mainColor border-0 rounded-t-lg">
        <div className="w-[12%] h-1 mx-auto mt-2 bg-buttonBgColor rounded-full" />
        <SheetHeader className="sticky top-0 flex-row items-center justify-between gap-0! p-0! border-b border-buttonBgColor pl-3!">
          <SheetTitle className="text-secondColor text-2xl font-semibold">
            Comments
          </SheetTitle>
          <div className="flex gap-2 pr-2">
            <Button variant="iconVariant" autoFocus={false}>
              <Info />
            </Button>
            <SheetClose autoFocus={false}>
              <div className="p-2 h-fit">
                <X />
              </div>
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-4 overflow-auto pl-3 pr-4 mt-4">
          {
            comments.map((comment) => (
              <CommentCard key={comment.likes} comment={comment} />
            ))
          }
        </div>
        <SheetFooter className="flex-row items-center gap-3 px-3 py-2 border-t border-buttonBgColor">
          <Avatar icon={comments[0].avatar_image} className="size-6!" />
          <Input type="text" className="border-0 bg-buttonBgColor rounded-[4px] placeholder:text-thirdColor" placeholder="Enter comment"/>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
