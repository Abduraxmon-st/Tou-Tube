import { Avatar } from '../avatar'
import { Button } from '../ui/button'
import { Bell, Plus } from 'lucide-react'

export const NavbarRight = () => {
    return (
        <div className='flex items-center gap-2'>
            <Button variant="iconVariant" className="flex items-center gap-1.5 rounded-[18px] [&_svg:not([class*='size-'])]:size-6 pl-3! pr-4! py-1.5! bg-secondColor/8"><Plus /> Create</Button>
            <Button variant={'iconVariant'}><Bell /></Button>
            <Avatar />
        </div>
    )
}

export default NavbarRight