import { Logo } from '@/assets/images'
import Image from 'next/image'

export const Avatar = ({ className }: { className?: string }) => {
  return (
    <Image src={Logo} alt='avatar profile' width={32} height={32} className={`object-contain rounded-full ${className}`} />
  )
}
