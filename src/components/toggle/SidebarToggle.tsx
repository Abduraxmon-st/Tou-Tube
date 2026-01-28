import useStore from "@/context/store"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"

export const SidebarToggle = () => {
  const { sidebarToggle, setSidebarToggle } = useStore()

  return (
    <Button
      variant={"iconVariant"}
      onClick={() => setSidebarToggle(!sidebarToggle)}
      className="p-2">
      <Menu size={24} />
    </Button>
  )
}
