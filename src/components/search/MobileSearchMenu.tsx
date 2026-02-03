import { Cast, Mic, Search, Settings } from "lucide-react"
import { Button } from "../ui/button"
import useStore from "@/context/store"
import { useState } from "react"
import { VoiceModal } from "../modal"
import { NotificationMenu } from "../menu"
import { Link } from "@/i18n/navigation"
interface MobileSearchProps {
  open: boolean,
  setOpen: (value: boolean) => void
  youPage: boolean
}
export const MobileSearchMenu = ({ open, setOpen, youPage }: MobileSearchProps) => {
  const [_query, setQuery] = useState("")
  const { microToggle, setMicroToggle } = useStore()

  // const handleClear = () => {
  //   setQuery("")
  // }
  return (
    <>
      <div className="flex flex-1 justify-end">
        <Button
          variant="iconVariant"
          type="button"
          className="mr-1">
          <Cast />
        </Button>
        <div className="sm:hidden">
          <NotificationMenu />
        </div>
        <Button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center size-max! [&_svg:not([class*='size-'])]:size-6 rounded-full p-2! ml-1 bg-transparent!">
          <Search />
        </Button>
        {youPage &&
          <Link href='/settings'>
            <Button
              className="flex items-center justify-center size-max! [&_svg:not([class*='size-'])]:size-6 rounded-full p-2! ml-1 bg-transparent!">
              <Settings />
            </Button>
          </Link>
        }
        <Button
          variant="iconVariant"
          type="button"
          onClick={() => setMicroToggle(!microToggle)}
          className="hidden sm:block">
          <Mic />
        </Button>
      </div>

      <VoiceModal
        open={microToggle}
        onOpenChange={setMicroToggle}
        onResult={(text) =>
          setQuery((prev) => (prev ? prev + " " + text : text))
        }
      />
    </>
  )
}
