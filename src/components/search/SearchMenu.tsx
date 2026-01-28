"use client"
import { Keyboard, Mic, Search, X } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { Button } from "../ui/button"
import { VoiceModal } from "../modal"

// declare global {
//     interface Window {
//         webkitSpeechRecognition: any;
//     }
// }

export const SearchMenu = () => {
    const [query, setQuery] = useState("")
    const [open, setOpen] = useState(false);
    // const inputRef = useRef<HTMLInputElement>(null);

    // const handleKeyboardClick = () => {
    //     inputRef.current?.focus();
    // };
    const handleClear = () => {
        setQuery("")
    }
    return (
        <>
            <div className="flex items-center">
                <div className="w-135.5 flex">
                    <div className="relative border border-secondColor/15 border-r-0 rounded-tl-[40px] rounded-bl-[40px] h-10 w-full pl-2">
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="border-none pr-14 h-full focus-visible:ring-0 placeholder:text-[16px] leading-5.5"
                            placeholder="Enter your request"
                        />
                        <div className="absolute inset-y-0 right-1 flex items-center justify-center gap-2 pr-2">
                            {/* <Button
                        type="button"
                        onClick={handleKeyboardClick}
                        className="p-0! w-5 rounded-lg bg-transparent!"
                    > */}
                            <Keyboard />
                            {/* </Button> */}

                            {query && (
                                <Button
                                    type="button"
                                    onClick={handleClear}
                                    className="p-0! w-4 [&_svg:not([class*='size-'])]:size-6 bg-transparent! flex items-center justify-center"
                                >
                                    <X />
                                </Button>
                            )}
                        </div>
                    </div>
                    <Button className="border bg-secondColor/8! border-secondColor/8! rounded-r-full flex items-center justify-center w-16 h-10 [&_svg:not([class*='size-'])]:size-6">
                        <Search />
                    </Button>
                </div>
                <Button variant="iconVariant" type="button" onClick={() => setOpen(true)} className="bg-secondColor/9 ml-3"><Mic /></Button>
            </div>
            <VoiceModal
                open={open}
                onOpenChange={setOpen}
                onResult={(text) =>
                    setQuery((prev) => (prev ? prev + " " + text : text))
                }
            />
        </>
    )
}

export default SearchMenu