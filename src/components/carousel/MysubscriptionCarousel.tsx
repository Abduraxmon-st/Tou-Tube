import { sidebarSubscriptionsSection } from "@/data/subscription"
import { Avatar } from "../avatar"
import { SubscriptionItem } from "@/types"
import { Link, usePathname } from "@/i18n/navigation"
import { SubscriptionsTabs } from "../tabs"

export const MysubscriptionCarousel = () => {
    const pathname = usePathname()

    return (
        <div className=" 2xm:hidden">
            <div className="flex">
                <div className={`${pathname === "/subscriptions" ? "" : "hidden"} flex gap-3 pl-2 w-full overflow-auto`}>
                    {sidebarSubscriptionsSection.map((subscription: SubscriptionItem, index) => (
                        <div key={index}>
                            <Avatar className="size-14" icon={subscription?.logo} />
                            <p className="max-w-[8ch] truncate">{subscription?.label}</p>
                        </div>
                    ))}
                </div>
                <Link href="/mysubscriptions" className={`${pathname === "/subscriptions" ? "" : "hidden"} w-10 flex pt-5 justify-center text-blue-500`}>All</Link>
            </div>
            <SubscriptionsTabs />
        </div>
    )
}

export default MysubscriptionCarousel