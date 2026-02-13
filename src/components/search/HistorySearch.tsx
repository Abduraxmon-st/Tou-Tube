import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { hisorySettingsSelectData, historySelectData } from "@/data/select-types-data"

export const HistorySearch = () => {
  return (
    <div>
      <div className="relative pl-6 border-b pb-1 w-max">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2" />
        <Input className="border-0 py-0! text-base!" placeholder="Search in history" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {
          historySelectData.map((item) => (
            <Button key={item.label} variant="iconVariant" className="pr-3!">
              {item.icon}
              {item.label}
            </Button>
          ))
        }
        {
          hisorySettingsSelectData.map((item) => (
            <p key={item} className="pl-12 text-thirdColor cursor-pointer">{item}</p>
          ))
        }
      </div>
    </div>
  )
}
