import { Bell, BellOff, BellRing, UserRoundX } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { useId } from 'react'

type SubscriptionSelectProps = {
    setSubs: (value: boolean) => void
}

export const SubscriptionSelect = ({ setSubs }: SubscriptionSelectProps) => {
    const id = useId()
    return (
        <div className='w-full! 2md:max-w-xs space-y-2'>
            <Select onValueChange={(value) => {
                if (value === 'Cancel subscription') {
                    setSubs(false)
                }
            }} defaultValue='Based on preferences'>
                <SelectTrigger id={id} className="w-full! 2md:w-max! flex justify-center 2md:justify-between h-9 rounded-[18px] bg-secondColor/8 border-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:last:size-6 [&_svg]:last:text-white! cursor-pointer">
                    <SelectValue placeholder='Select a music genre' />
                </SelectTrigger>
                <SelectContent className='bg-selectColor text-white border-none hover:bg-selectColor! hover:text-white!'>
                    <SelectGroup>
                        <SelectItem value='all' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            <BellRing color='white' />
                            All
                        </SelectItem>
                        <SelectItem value='Based on preferences' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            <Bell color='white' />
                            Based on preferences
                        </SelectItem>
                        <SelectItem value='None' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            <BellOff color='white' />
                            None
                        </SelectItem>
                        <SelectItem value='Cancel subscription' className="hover:bg-secondColor/8! hover:text-white! [&_svg:not([class*='size-'])]:size-6 cursor-pointer [&_svg]:last:size-6 [&_svg]:last:text-white!">
                            <UserRoundX color='white' />
                            Cancel subscription
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SubscriptionSelect