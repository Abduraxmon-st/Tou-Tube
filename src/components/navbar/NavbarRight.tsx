import { NotificationMenu } from '../menu'
import { ProfileSelect } from '../select'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

export const NavbarRight = () => {
    return (
        <div className='hidden md:flex items-center gap-2'>
            <Button variant="iconVariant" className="flex items-center gap-1.5 rounded-[18px] [&_svg:not([class*='size-'])]:size-6 pl-3! pr-4! py-1.5! bg-secondColor/8"><Plus /> Create</Button>
            <NotificationMenu />
            <ProfileSelect />
        </div>
    )
}

export default NavbarRight