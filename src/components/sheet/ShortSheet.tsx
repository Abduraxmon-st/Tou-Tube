import { shortsSheetButtons } from "@/data/shorts-links"
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet"
import { Button } from "../ui/button"

export const ShortSheet = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="w-[calc(100%-1rem)] mx-auto mb-2 gap-0 p-0! bg-buttonBgColor border-t-0 rounded-xl" showCloseButton={false}>
        <SheetTitle className="hidden">
        </SheetTitle>
        <div className="bg-thirdColor/25 w-[10%] h-1 mx-auto my-1.5 rounded-full" />

        {shortsSheetButtons.map((button) => (
          <Button key={button.label} className="w-full! justify-start px-3.5! h-10! max-h-14! gap-5 bg-transparent! active:bg-thirdColor/20! [&_svg:not([class*='size-'])]:size-5 font-normal rounded-none">
            {button.icon}
            <p>{button.label}</p>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  )
}
