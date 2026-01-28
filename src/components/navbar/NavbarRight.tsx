import Image from 'next/image'
import { Button } from '../ui/button'
import { Bell, Plus } from 'lucide-react'
import { Logo } from '@/assets/images'

export const NavbarRight = () => {
    return (
        <div className='flex items-center gap-2'>
            <Button className="flex items-center gap-1.5 rounded-[18px] [&_svg:not([class*='size-'])]:size-6 hover:bg-thirdColor/30"><Plus /> Create</Button>
            <Button variant={'iconVariant'}><Bell /></Button>
            <Image src={Logo} alt='' width={32} height={32} className="object-contain rounded-full" />
        </div>
    )
}

export default NavbarRight