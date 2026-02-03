import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Flag, Forward } from "lucide-react";
import { Information, SubscriptionItem } from "@/types";

export const SubscriptionModal = ({ subscription }: { subscription: SubscriptionItem | undefined }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-transparent text-[12px] leading-4.5 2md:text-[14px] 2md:leading-5 hover:bg-transparent pb-6.5 2md:pb-5.5 px-0!">…more</Button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl bg-buttonBgColor border-buttonBgColor">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-[20px] leading-7">{subscription?.label}</DialogTitle>
                    <div className="text-white">
                        <div className="flex flex-col gap-2 pt-4">
                            <h2 className="text-[20px] leading-7 font-semibold">Description</h2>
                            <h4 className="text-[14px] leading-5">{subscription?.description}</h4>
                            <div className="pt-3">
                                <h2>FOR DONAT:</h2>
                                <p>{subscription?.cardNumber} - {subscription?.name}</p>
                                <h3 className="pt-4">REKLAMA - {subscription?.reklamaLink}</h3>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-[20px] leading-7 font-semibold">Additional information</h2>
                            <ul>
                                {subscription?.informationIcon?.map((icon: Information, index: number) => (
                                    <li key={index} className="flex items-center gap-4 py-2">
                                        {icon?.icon} {icon?.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <Button className="rounded-[18px] bg-secondColor/8"><Forward /> Share channel</Button>
                        <Button className="rounded-[18px] bg-secondColor/8"><Flag /> Report a user</Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SubscriptionModal