import { Avatar } from '../avatar'
import { NotificationMenu } from '../menu'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

export const NavbarRight = () => {
    return (
        <div className='hidden sm:flex items-center gap-2'>
            <Button variant="iconVariant" className="flex items-center gap-1.5 rounded-[18px] [&_svg:not([class*='size-'])]:size-6 pl-3! pr-4! py-1.5! bg-secondColor/8"><Plus /> Create</Button>
            <NotificationMenu />
            <Avatar icon={"https://yt3.googleusercontent.com/ytc/AIdro_lkDhfR4IQoQOti0IosPsSAEqhLLgtyGqmMmRGIpKBIdhtOTK_iy1Z_GU0MKBc9sh8dlA=s88-c-k-c0x00ffffff-no-rj"} className='mx-2' />
        </div>
    )
}

export default NavbarRight