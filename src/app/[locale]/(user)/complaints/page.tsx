import { ComplaintsSelect } from "@/components/select"
import { ComplaintsTable } from "@/components/table"
import { Separator } from "@/components/ui/separator"
import { ComplaintsTableData } from "@/data/complaints-table-data"
import { Dot } from "lucide-react"

const ComplaintsPage = () => {
    return (
        <div className="max-w-267.5 3xl:max-w-321 mx-auto">
            <div className="flex mt-22 gap-1">
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl leading-8">Thanks for your help</h3>
                    <p className="text-[14px] leading-5 text-thirdColor">Any YouTube user can report a violation of our
                        Community Guidelines. When we receive such a report, we don't necessarily remove the video. We review it and then:</p>
                    <ul className="text-[14px] leading-5 text-thirdColor">
                        <li className="flex"><Dot />Remove the video if it violates our guidelines.</li>
                        <li className="flex"><Dot />Leave the video up if it doesn't violate our guidelines.</li>
                        <li className="flex"><Dot />Restrict the video to certain countries or age groups if it violates our guidelines but has educational, documentary, scientific, or artistic value.</li>
                    </ul>
                    <h4 className="text-[14px] leading-5 text-thirdColor">More information about reporting inappropriate content is available here.</h4>
                </div>
                <img className="h-40 w-[320px]" src="https://www.youtube.com/img/flagging/land-img.png" alt="" />
            </div>
            <Separator className="my-6" />
            <ComplaintsSelect />
            {ComplaintsTableData.length > 0 ? <ComplaintsTable /> : <p className="text-center pt-3 text-[14px] leading-5">You haven't reported any violations in the video yet.</p>}
        </div>
    )
}

export default ComplaintsPage