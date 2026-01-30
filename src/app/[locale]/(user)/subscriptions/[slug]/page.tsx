import { Reaktor } from "@/assets/images";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { sidebarSubscriptionsSection } from "@/data/sidebar-links";
import { Dot } from "lucide-react";
import Image from "next/image";

export const SubscriptionsSlugPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;

    const subscription = sidebarSubscriptionsSection.find(
        (item) => item.slug === slug
    );

    return (
        <div className="px-16.25 flex flex-col gap-2">
            <Image loading="eager" src={Reaktor} alt="Reaktor" className="rounded-3xl w-full h-43" />
            <div className="flex gap-4 items-center">
                <Avatar className="size-40" icon={subscription?.logo ?? ""} />
                <div className="flex flex-col gap-4">
                    <h2 className="text-[36px] leading-5.5 font-semibold">{subscription?.label}</h2>
                    <div className="flex items-center text-thirdColor">
                        <h3 className="font-medium text-white uppercase">@{subscription?.slug}</h3>
                        <Dot size={12} />
                        <p className="text-[14px] leading-5">{subscription?.subscriptions} subscriptions</p>
                        <Dot size={12} />
                        <p className="text-[14px] leading-5">{subscription?.videos} video</p>
                    </div>
                    <h4 className="text-thirdColor w-[560px]">{subscription?.description}</h4>
                    <Button className="w-29.5 h-9 font-medium text-[14px] leading-4.5 px-4 rounded-[18px] bg-white text-black">Subscraption</Button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsSlugPage