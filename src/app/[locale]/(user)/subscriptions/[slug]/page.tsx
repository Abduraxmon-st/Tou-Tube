import { Reaktor } from "@/assets/images";
import { Avatar } from "@/components/avatar";
import { sidebarSubscriptionsSection } from "@/data/sidebar-links";
import Image from "next/image";

export const SubscriptionsSlugPage = async({params}: {params:{slug:string, icon:string}}) => {
    const { slug } = await params;

    const subscription = sidebarSubscriptionsSection.find(
        (item) => item.slug === slug
      );
    
  return (
    <div className="px-[65px] flex flex-col gap-2">
        <Image src={Reaktor} alt="Reaktor" className="rounded-[16px] w-full h-[172px]" />
        <div className="flex gap-4 items-center">
        <Avatar className="w-40 object-cover" icon={subscription?.logo ?? ""} />
        <div className="flex flex-col gap-4">
            <h2 className="text-[36px] leading-5.5 font-semibold">{subscription?.label}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nulla magnam ad sit optio quod ducimus id dolor minus beatae! Ut, suscipit!</p>
        </div>
        </div>
    </div>
  )
}

export default SubscriptionsSlugPage