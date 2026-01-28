import { Menu } from "lucide-react"
import { Logo } from "../logo"
import { Link } from "@/i18n/navigation"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 max-h-14">
      <div className="flex items-center">
        {/* sidebar menu */}
        <div className="p-2">
          <Menu size={24} />
        </div>

        <Link href="/"><Logo className="py-3.5 px-4" /></Link>
      </div>
    </div>
  )
}
