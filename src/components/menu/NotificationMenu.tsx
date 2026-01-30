import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { BellIcon, Settings } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Link } from "@/i18n/navigation"
import { PopoverClose } from "@radix-ui/react-popover"

// const notifications = [
//     {
//         id: 1,
//         image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
//         message: 'Harry assigned you task of New API implementation',
//         fallback: 'HL',
//         time: '15 Minutes'
//     },
//     {
//         id: 2,
//         image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
//         message: 'Jerry joined team',
//         fallback: 'OS',
//         time: '35 Minutes'
//     },
//     {
//         id: 3,
//         image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
//         message: 'Congratulate ruby for married life',
//         fallback: 'HR',
//         time: '3 days'
//     }
// ]

export const NotificationMenu = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'iconVariant'} size='icon'>
                    <BellIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className='w-120 max-w-120 max-h-160.5 p-0 bg-buttonBgColor border-0! text-secondColor rounded-2xl'>
                <div className='flex items-center justify-between gap-2 py-3 px-4'>
                    <span className='font-medium'>Notifications</span>
                    <Link href="/settings">
                        <PopoverClose>
                            <Settings />
                        </PopoverClose>
                    </Link>
                </div>
                <Separator />
                <div className="flex flex-col items-center justify-center h-140 max-w-65 pb-10 mx-auto text-center text-secondColor/35!">
                    <BellIcon size={120} />
                    <p className="font-semibold mt-5">There's nothing here yet</p>
                    <p className="text-sm mt-2">This section will collect notifications about new videos on channels you're subscribed to.</p>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default NotificationMenu