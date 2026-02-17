import Image from 'next/image'

export const Avatar = ({ className, icon }: { className?: string, icon: string | undefined }) => {
  if (icon) {
    return (
      <Image loading="eager" src={icon} alt='avatar profile' width={32} height={32} className={`object-cover rounded-full ${className}`} />
    )
  }
}
