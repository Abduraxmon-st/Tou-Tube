import { sidebarSubscriptionsSection } from "@/data/subscription"
import { Avatar } from "../avatar"
import { SubscriptionItem } from "@/types"
import { Link } from "@/i18n/navigation"
import { SubscriptionsTabs } from "../tabs"

export const MysubscriptionCarousel = () => {
    return (
        <>
            <div className="flex">
                <div className="flex gap-3 pl-2 w-full">
                    {sidebarSubscriptionsSection.map((subscription: SubscriptionItem) => (
                        <div key={subscription.label}>
                            <Avatar className="size-14" icon={subscription?.logo} />
                            <p className="max-w-[8ch] truncate">{subscription?.label}</p>
                        </div>
                    ))}
                </div>
                <Link href="/mysubscriptions" className="w-10 flex pt-5 justify-center text-blue-500">All</Link>
            </div>
            <SubscriptionsTabs />
        </>
    )
}

export default MysubscriptionCarousel