"use client"
import { subscriptionsTabs } from "@/data/tabs"
import useStore from "@/context/store"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { SettingsSheet } from "../sheet"

export const SubscriptionsTabs = ({ className }: { className?: string }) => {
    const { sidebarToggle } = useStore()
    return (
        <div style={{ scrollbarWidth: 'none' }} className={`relative 2md:ml-auto px-3 sm:px-5.75 xl:px-6.5 w-full ${sidebarToggle ? "2md:max-w-[calc(100vw-80px)] xxl:max-w-[calc(100vw-252px)]!" : "2md:max-w-[calc(100vw-80px)]"} h-max overflow-auto ${className}`}>
            <Tabs defaultValue="All" className="flex flex-row! items-center gap-3 w-fit py-1 sm:py-2.5">
                <TabsList className="p-0! bg-transparent gap-3">
                    {subscriptionsTabs.map((item) => (
                        <TabsTrigger
                            value={item.label}
                            key={item.label}
                            className="text-secondColor hover:text-secondColor bg-secondColor/9 h-7.5 sm:h-8.5 py-0 px-3 hover:bg-secondColor/12">
                            {item.label}
                        </TabsTrigger>
                    ))}
                    <SettingsSheet />
                </TabsList>
            </Tabs>
        </div>
    )
}

export default SubscriptionsTabs