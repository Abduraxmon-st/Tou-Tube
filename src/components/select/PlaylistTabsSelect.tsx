import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const PlaylistTabsSelect = () => {
  return (
    <Select defaultValue="recently-added">
      <SelectTrigger className="w-max text-secondColor hover:text-secondColor bg-secondColor/9 h-8! py-0! pl-3 pr-2 hover:bg-secondColor/12 border-0 [&>svg]:last:size-5">
        <SelectValue placeholder="Select a variant" />
      </SelectTrigger>
      <SelectContent align="start" className="bg-selectColor text-white border-none hover:bg-selectColor!">
        <SelectGroup>
          <SelectItem value="a-z">A-Z</SelectItem>
          <SelectItem value="recently-added">Recently added</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
