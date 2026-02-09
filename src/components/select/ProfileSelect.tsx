import { Link } from '@/i18n/navigation'
import { Avatar } from '../avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { profileSelectData } from '@/data/select-types-data'
import { ChevronRight } from 'lucide-react'

export const ProfileSelect = () => {
  return (
    <Popover>
      <PopoverTrigger className="p-0! mx-2! cursor-pointer">
        <Avatar icon={"https://yt3.googleusercontent.com/ytc/AIdro_lkDhfR4IQoQOti0IosPsSAEqhLLgtyGqmMmRGIpKBIdhtOTK_iy1Z_GU0MKBc9sh8dlA=s88-c-k-c0x00ffffff-no-rj"} />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={12} className='p-0 max-w-75! max-h-[calc(100vh-100px)]! overflow-hidden flex flex-col bg-buttonBgColor border-0! text-secondColor rounded-xl'>
        <div className='overflow-auto pb-2'>
          <div className='flex gap-4 p-4'>
            <Avatar icon={"https://yt3.googleusercontent.com/ytc/AIdro_lkDhfR4IQoQOti0IosPsSAEqhLLgtyGqmMmRGIpKBIdhtOTK_iy1Z_GU0MKBc9sh8dlA=s88-c-k-c0x00ffffff-no-rj"} className='size-10!' />
            <div>
              <p className='font-medium'>Rohn Doe</p>
              <p className='font-medium'>@rohndoe</p>
              <Link href="/you" className='text-sm text-blue-500'>View your channel</Link>
            </div>
          </div>
          <Separator />
          <div className='grid'>
            {
              profileSelectData.map((item, i) => (
                <Button
                  key={item.label + i}
                  variant="iconVariant"
                  className={`w-full! justify-start gap-3 font-normal rounded-none! ${item.label === "separator" ? "h-max! px-0! bg-transparent! cursor-default" : "h-10! px-4! active:bg-thirdColor/20!"}`} >
                  {item.icon}
                  {item.label !== "separator" && <p>{item.label}</p>}
                  {
                    item.chevron && <ChevronRight className="ml-auto" />
                  }
                </Button>
              ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
