import { Reaktor } from "@/assets/images";
import { Avatar } from "@/components/avatar";
import { SubscriptionModal } from "@/components/modal";
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
            <div className="flex gap-4 items-center mt-4">
                <Avatar className="size-40" icon={subscription?.logo ?? ""} />
                <div className="flex flex-col pt-2">
                    <h2 className="text-[36px] leading-5.5 font-semibold pb-4">{subscription?.label}</h2>
                    <div className="flex items-center text-thirdColor pb-2.5">
                        <h3 className="font-medium text-white uppercase">@{subscription?.slug}</h3>
                        <Dot size={12} />
                        <p className="text-[14px] leading-5">{subscription?.subscriptions} subscriptions</p>
                        <Dot size={12} />
                        <p className="text-[14px] leading-5">{subscription?.videos} video</p>
                    </div>
                    <div className="text-thirdColor flex gap-1">
                        <h3 className="max-w-[536px] overflow-hidden whitespace-nowrap">{subscription?.description}</h3>
                        <SubscriptionModal subscription={subscription} />
                    </div>
                    <Button className="w-29.5 h-9 font-medium text-[14px] leading-4.5 px-4 rounded-[18px] bg-white text-black">Subscraption</Button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsSlugPage