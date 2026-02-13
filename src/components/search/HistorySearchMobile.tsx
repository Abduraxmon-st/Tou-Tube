import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const HistorySearchMobile = () => {
  return (
    <div className="relative mt-4 mb-5 py-1 bg-buttonBgColor overflow-hidden lg:hidden group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-thirdColor" />
      <Input className="border-0 placeholder:text-thirdColor pl-12 w-full" placeholder="Search in history" />
      <Button variant="iconVariant" className="absolute top-0 py-2! px-4! rounded-none! h-full! bg-secondColor/10! -right-full group-focus:right-0! group-focus-visible:right-0! group-focus-within:right-0! transition-[right] duration-500 ease-in-out">
        Cancel
      </Button>
    </div>
  )
}
