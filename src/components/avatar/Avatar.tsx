import Image from 'next/image'

export const Avatar = ({ className, icon }: { className?: string, icon: string }) => {
  return (
    <Image loading="eager" src={icon} alt='avatar profile' width={32} height={32} className={`object-contain rounded-full ${className}`} />
  )
}
