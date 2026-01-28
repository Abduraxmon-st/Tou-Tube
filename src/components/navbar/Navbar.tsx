"use client"
import { Menu, X } from "lucide-react"
import { Logo } from "../logo"
import { Link } from "@/i18n/navigation"
import { Input } from "../ui/input"
import { useRef, useState } from "react"
import { Button } from "../ui/button"

export const Navbar = () => {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyboardClick = () => {
    inputRef.current?.focus();
  };
  const handleClear = () => {
    setQuery("")
  }
  return (
    <div className="flex items-center justify-between px-4 max-h-14">
      <div className="flex items-center">
        {/* sidebar menu */}
        <div className="p-2">
          <Menu size={24} />
        </div>

        <Link href="/"><Logo className="py-3.5 px-4" /></Link>
      </div>
      <div className="relative border py-1 border-secondColor/10 rounded-tl-[40px] rounded-bl-[40px]">
        <Input
          ref={inputRef}  
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-none pr-16 focus-visible:ring-0"
        />
        <div className="absolute inset-y-0 right-1 flex items-center">
          <Button
            type="button"
            onClick={handleKeyboardClick}
            className="p-0! rounded-lg bg-transparent!"
          >
            ⌨️
          </Button>

          {query && (
            <Button
              type="button"
              onClick={handleClear}
              className="p-0! bg-transparent! flex items-center justify-center"
            >
              <X  />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
