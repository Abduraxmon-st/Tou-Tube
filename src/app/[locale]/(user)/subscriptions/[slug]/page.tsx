"use client"
import { Avatar } from "@/components/avatar";
import { SubscriptionButton } from "@/components/button";
import { SubscriptionModal } from "@/components/modal";
import { SubscriptionSheet } from "@/components/sheet";
import { sidebarSubscriptionsSection } from "@/data/subscription";
import { Dot } from "lucide-react";
import Image from "next/image";

export const SubscriptionsSlugPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;

    const subscription = sidebarSubscriptionsSection.find(
        (item) => item.slug === slug
    );

    return (
        <div className="px-2 2xm:px-15.75 2md:px-12 3md:px-16.25 flex flex-col gap-2">
            <div className="relative w-full h-16.25 2xm:h-25.75 2md:h-43 rounded-xl 2xm:rounded-3xl overflow-hidden">
                <Image src={subscription?.banner ?? ""} fill alt="Reaktor" />
            </div>
            <div className="flex gap-4 items-center mt-1.5">
                <Avatar className="size-18 2xm:size-30 2md:size-40" icon={subscription?.logo ?? ""} />
                <div className="flex flex-col 2xm:pt-6 2md:pt-2">
                    <h2 className="text-[24px] 2xm:text-[36px] leading-5.5 font-semibold pb-2 2xm:pb-4">{subscription?.label}</h2>
                    <div className="flex flex-col 2xm:flex-row items-start 2xm:items-center text-thirdColor 2xm:pb-2.5">
                        <h3 className="2md:font-medium text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5.5 text-white uppercase">@{subscription?.slug}</h3>
                        <Dot size={12} className="hidden 2xm:block" />
                        <div className="flex items-center pt-1 2xm:pt-0">
                            <p className="text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5">{subscription?.subscriptions} subscriptions</p>
                            <Dot size={12} />
                            <p className="text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5">{subscription?.videos} video</p>
                        </div>
                    </div>
                    <div className="text-thirdColor hidden 2xm:flex gap-1">
                        <h3 className="max-w-100.5 2md:max-w-117.5 text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5 overflow-hidden whitespace-nowrap">{subscription?.description}</h3>
                        <SubscriptionModal subscription={subscription} />
                    </div>
                    <div className="hidden 2md:block">
                        <SubscriptionButton />
                    </div>
                </div>
            </div>
            <div className="text-thirdColor flex 2xm:hidden gap-1">
                <h3 className=" text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5 overflow-hidden whitespace-nowrap">{subscription?.description}</h3>
                <SubscriptionSheet subscription={subscription} />
            </div>
            <div className="block 2md:hidden w-full">
                <SubscriptionButton />
            </div>
        </div>
    )
}

export default SubscriptionsSlugPage