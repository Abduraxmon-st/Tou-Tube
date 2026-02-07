import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Flag, X } from "lucide-react"
import { Separator } from "../ui/separator"
import { Information, SubscriptionItem } from "@/types"

export const SubscriptionSheet = ({ subscription }: { subscription: SubscriptionItem | undefined }) => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant={"iconVariant"} className="text-[12px] leading-4.5 px-0! pt-0! -mr-2">...more</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="w-[calc(100%-1rem)] mx-auto mb-2 gap-0 p-0! bg-mainColor border-t-0 rounded-xl" showCloseButton={false}>
                <div className="bg-thirdColor/25 w-[10%] h-1 mx-auto my-1.5 rounded-full" />
                <SheetTitle className="flex items-center justify-between px-3! pb-3">
                    <p className="text-[18px] leading-6.5 font-semibold text-white">{subscription?.label}</p>
                </SheetTitle>
                <Separator />
                <div className="text-white overflow-y-auto max-h-120 px-3.5">
                    <div className="flex flex-col gap-2 pt-4">
                        <h2 className="text-[18px] leading-6.5 font-semibold">Description</h2>
                        <h4 className="text-[14px] leading-5">{subscription?.description}</h4>
                        <div className="pt-3 text-[14px] leading-5">
                            <h2>FOR DONAT:</h2>
                            <p>{subscription?.cardNumber} - {subscription?.name}</p>
                            <h3 className="pt-4">REKLAMA - {subscription?.reklamaLink}</h3>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-[18px] leading-6.5 font-semibold">Additional information</h2>
                        <ul>
                            {subscription?.informationIcon?.map((icon: Information, index: number) => (
                                <li key={index} className="flex items-center gap-4 py-2 text-[14px] leading-5 [&_svg:not([class*='size-'])]:size-6">
                                    {icon?.icon} {icon?.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button className="rounded-[18px] bg-secondColor/8 my-3"><Flag /> Report a user</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SubscriptionSheet