import { Avatar } from "@/components/avatar"
import { SubscriptionButton } from "@/components/button"
import { MysubscriptionsSelect } from "@/components/select"
import { sidebarSubscriptionsSection } from "@/data/subscription"
import { SubscriptionItem } from "@/types"
import { Dot } from "lucide-react"

const MySubscriptions = () => {
    return (
        <div className="px-2 2xm:px-18 2md:px-23">
            <h1 className="text-[22px] 2xm:text-[36px] leading-12.5 font-bold pt-6 pb-1">Channels you're subscribed to</h1>
            <MysubscriptionsSelect />
            <div className="flex flex-col gap-4 mt-6">
                {sidebarSubscriptionsSection.map((subscription: SubscriptionItem | undefined, index: number) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Avatar icon={subscription?.logo ?? ""} className="w-10 2xm:w-25 2md:w-34" />
                            <div className="2xm:pb-4">
                                <h3 className="text-[14px] 2xm:text-[18px] leading-6.5 2xm:pb-2">{subscription?.label}</h3>
                                <div className="flex items-center text-[10px] 2xm:text-[12px] leading-4.5 text-thirdColor pb-1">
                                    <h4>@{subscription?.label}</h4>
                                    <Dot size={14} className="hidden 2xm:block" />
                                    <p className="hidden 2xm:block">{subscription?.subscriptions}</p>
                                </div>
                                <h3 className="max-w-146.5 text-[12px] leading-4.5 text-thirdColor hidden 2xm:block">{subscription?.description}</h3>
                            </div>
                        </div>
                        <SubscriptionButton />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MySubscriptions