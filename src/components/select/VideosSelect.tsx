"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { EllipsisVertical } from "lucide-react"
import { Button } from "../ui/button"
import { AllSelectsForVideo } from "@/data/select-types-data"
import { VideoTypeProps } from "@/types"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { isMobile } from "@/constants"

export const VideosSelect = ({
  videoType,
  buttonClass,
  align = "start"
}: VideoTypeProps) => {
  const select = AllSelectsForVideo.find((item) => item.type === videoType)?.data || []

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild className={buttonClass}>
          <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-5.5"><EllipsisVertical /></Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="w-[calc(100%-1rem)] mx-auto mb-2 gap-0 p-0! bg-buttonBgColor border-t-0 rounded-xl" showCloseButton={false}>
          <SheetTitle className="hidden">
          </SheetTitle>
          <div className="bg-thirdColor/25 w-[10%] h-1 mx-auto my-1.5 rounded-full" />

          {select.map((button) => (
            <Button key={button.label} className="w-full! justify-start px-3.5! h-10! max-h-14! gap-5 bg-transparent! active:bg-thirdColor/20! [&_svg:not([class*='size-'])]:size-6 rounded-none text-base! text-wrap! text-start">
              {button.icon}
              <p>{button.label}</p>
            </Button>
          ))}
        </SheetContent>
      </Sheet>
    )
  } else {
    return (
      <Popover>
        <PopoverTrigger asChild className={buttonClass}>
          <Button variant="iconVariant" className="[&_svg:not([class*='size-'])]:size-5.5"><EllipsisVertical /></Button>
        </PopoverTrigger>
        <PopoverContent align={align} className='p-0 w-max! min-w-55 flex flex-col bg-buttonBgColor border-0! text-secondColor rounded-xl overflow-hidden'>
          {select?.map((item) => (
            <Button key={item.label} className="w-full! justify-start px-4! h-10! max-h-14! gap-3 bg-transparent! active:bg-thirdColor/20! [&_svg:not([class*='size-'])]:size-5 font-normal rounded-none">
              {item.icon}
              <p>{item.label}</p>
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    )
  }
}
