import { sidebarSubscriptionsSection } from "@/data/subscription"
import { Avatar } from "../avatar"
import { SubscriptionItem } from "@/types"
import { Link } from "@/i18n/navigation"
import { SubscriptionsTabs } from "../tabs"

export const MysubscriptionCarousel = () => {
    return (
        <>
            <div className="flex 2md:hidden px-3 sm:px-4">
                <div className="flex gap-3 w-full mb-1">
                    {sidebarSubscriptionsSection.map((subscription: SubscriptionItem) => (
                        <Link href={`/subscriptions/${subscription?.slug}`} key={subscription.label}>
                            <Avatar className="size-14" icon={subscription?.logo} />
                            <p className="text-sm max-w-[8ch] truncate pt-1">{subscription?.label}</p>
                        </Link>
                    ))}
                </div>
                <Link href="/mysubscriptions" className="w-10 flex pt-5 justify-center text-blue-500">All</Link>
            </div>
            <SubscriptionsTabs />
        </>
    )
}

export default MysubscriptionCarousel