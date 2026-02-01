import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Flag, Forward } from "lucide-react";

type Information = {
    icon:React.ReactNode;
    title: string;
}

export type SubscriptionItem = {
    label: string;
    slug: string;
    logo: string;
    banner: string;
    path: string;
    subscriptions: string;
    videos: string;
    cardNumber: string;
    name: string;
    reklamaLink: string;
    description: string;
    icon: React.ReactNode;
    informationIcon: Information[];
  };

export const SubscriptionModal = ( subscription: SubscriptionItem) => {
    return (
        <Dialog>
            <DialogTrigger asChild className="">
                <Button className="bg-transparent hover:bg-transparent pb-4.5 px-0!">…more</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[539px] bg-buttonBgColor border-buttonBgColor">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-[20px] leading-7">{subscription?.label}</DialogTitle>
                    <DialogDescription className="text-white">
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
                            {subscription?.informationIcon.map((icon:Information, index:number) => (
                                <li key={index} className="flex items-center gap-4 py-2">
                                    {icon?.icon} {icon?.title}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </DialogDescription>
                    <DialogFooter className="flex gap-3  justify-start!">
                        <Button className="rounded-[18px] w-[196px] bg-secondColor/8"><Forward /> Share channel</Button>
                        <Button className="rounded-[18px] w-[268px] bg-secondColor/8"><Flag /> Report a user</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SubscriptionModal