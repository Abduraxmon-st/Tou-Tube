import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Bell, BellIcon, Settings } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const notifications = [
    {
        id: 1,
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
        message: 'Harry assigned you task of New API implementation',
        fallback: 'HL',
        time: '15 Minutes'
    },
    {
        id: 2,
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
        message: 'Jerry joined team',
        fallback: 'OS',
        time: '35 Minutes'
    },
    {
        id: 3,
        image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
        message: 'Congratulate ruby for married life',
        fallback: 'HR',
        time: '3 days'
    }
]

export const NotificationMenu = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'iconVariant'} size='icon'>
                    <BellIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className='w-120 p-0 bg-secondColor/8 border-none text-white'>
                <div className='grid'>
                    <div className='flex items-center justify-between gap-2 p-2'>
                        <span className='font-medium'>Notifications</span>
                        <Settings />
                    </div>
                    <Separator />
                    <div>
                        <BellIcon size={120} className="text-secondColor/10!" />
                        <h2 className="">Здесь пока ничего нет</h2>
                        <h4>В этом разделе будут собраны уведомления о новых видео на каналах, на которые вы подписаны.</h4>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default NotificationMenu