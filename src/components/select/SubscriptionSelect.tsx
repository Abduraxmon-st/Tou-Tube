"use client"
import { Bell, BellOff, BellRing, UserRoundX } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { useId, useMemo, useState } from 'react'

type SubscriptionSelectProps = {
    setSubs: (value: boolean) => void
}
const ICONS = {
    all: BellRing,
    "Based on preferences": Bell,
    None: BellOff,
    "Cancel subscription": UserRoundX,
};

export const SubscriptionSelect = ({ setSubs }: SubscriptionSelectProps) => {
    const id = useId()
    const [value, setValue] = useState<keyof typeof ICONS>("Based on preferences");


    const Icon = useMemo(() => ICONS[value], [value]);
    return (
        <div className='w-full! 2md:max-w-xs space-y-2'>
            <div className='hidden 2xm:block'>
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
            <div className='block 2xm:hidden'>
                <Select
                    value={value}
                    onValueChange={(val) => {
                        setValue(val as keyof typeof ICONS);

                        if (val === "Cancel subscription") {
                            setSubs(false);
                        }
                    }}
                >
                    {/* TRIGGER — faqat icon */}
                    <SelectTrigger
                        id={id}
                        className="w-full! 2md:w-max! flex justify-center h-9 rounded-[18px] bg-secondColor/8 border-none cursor-pointer"
                    >
                        <Icon className="size-5 text-white" />
                    </SelectTrigger>

                    {/* CONTENT — ochilganda icon + text */}
                    <SelectContent className="bg-selectColor text-white border-none">
                        <SelectGroup>
                            <SelectItem value="all" className="flex items-center gap-2">
                                <BellRing className="size-5" />
                                <span>All</span>
                            </SelectItem>

                            <SelectItem value="Based on preferences" className="flex items-center gap-2">
                                <Bell className="size-5" />
                                <span>Based on preferences</span>
                            </SelectItem>

                            <SelectItem value="None" className="flex items-center gap-2">
                                <BellOff className="size-5" />
                                <span>None</span>
                            </SelectItem>

                            <SelectItem value="Cancel subscription" className="flex items-center gap-2">
                                <UserRoundX className="size-5" />
                                <span>Cancel subscription</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SubscriptionSelect