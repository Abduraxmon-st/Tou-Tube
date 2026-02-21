import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const ComplaintsSelect = () => {
    return (
        <Select defaultValue="All">
            <SelectTrigger className="w-max focus-visible:ring-0 text-secondColor hover:text-secondColor bg-secondColor/9 h-8! py-0! pl-3 pr-2 hover:bg-secondColor/12 border-0 [&>svg]:last:size-5">
                <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent align="start" className="bg-selectColor text-white border-none hover:bg-selectColor!">
                <SelectGroup>
                    <SelectItem value="Over the last month">Over the last month</SelectItem>
                    <SelectItem value="Over the past year">Over the past year</SelectItem>
                    <SelectItem value="All">All</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default ComplaintsSelect