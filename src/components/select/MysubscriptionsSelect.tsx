import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { useId } from 'react'

export const MysubscriptionsSelect = () => {
    const id = useId()
    return (
        <div>
            <Select defaultValue='Most relevant'>
                <SelectTrigger id={id} className="w-max! flex justify-center 2md:justify-between h-9 rounded-[8px] bg-secondColor/8 border-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:last:size-6 [&_svg]:last:text-white! cursor-pointer">
                    <SelectValue placeholder='Select a music genre' />
                </SelectTrigger>
                <SelectContent className='bg-selectColor text-white border-none hover:bg-selectColor! hover:text-white!'>
                    <SelectGroup>
                        <SelectItem value='Most relevant' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            Most relevant
                        </SelectItem>
                        <SelectItem value='New action' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            New action
                        </SelectItem>
                        <SelectItem value='A–Z' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            A–Z
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default MysubscriptionsSelect