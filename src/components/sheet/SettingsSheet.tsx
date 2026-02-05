"use client"
import { Check, X } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { useState } from "react"

export const SettingsSheet = () => {
    const [viewMode, setViewMode] = useState<'only' | 'record'>('only')
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"iconVariant"} className="p-0! text-blue-500">Settings</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="w-[calc(100%-1rem)] mx-auto mb-2 gap-0 p-0! bg-buttonBgColor border-t-0 rounded-xl" showCloseButton={false}>
                <div className="bg-thirdColor/25 w-[10%] h-1 mx-auto my-1.5 rounded-full" />
                <SheetTitle className="flex items-center justify-between px-3! pb-3 pt-2">
                    <p className="text-[18px] leading-6.5 font-semibold text-white">What content should be shown in the "Subscriptions" section?</p>
                </SheetTitle>
                <Separator />
                <div className="flex flex-col">
                    <button onClick={() => setViewMode('only')} className={`p-3 flex items-center gap-2 active:bg-thirdColor/20! transition-colors duration-150`}>
                        <Check className={`${viewMode === 'only' ? "opacity-100" : "opacity-0"}`} />  Recordings and video
                    </button>
                    <button onClick={() => setViewMode('record')} className={`p-3 flex items-center gap-2 active:bg-thirdColor/20! transition-colors duration-150`}>
                        <Check className={`${viewMode === 'record' ? "opacity-100" : "opacity-0"}`} />  Only video
                    </button>
                </div>
                <Separator />
                <SheetClose className="p-3">
                    <div className="[&_svg:not([class*='size-'])]:size-5.5 text-white -mr-2 flex items-center gap-2"><X /> Cancel</div>
                </SheetClose>
            </SheetContent>
        </Sheet>
    )
}

export default SettingsSheet