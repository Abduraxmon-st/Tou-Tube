import { Video } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ComplaintsTableData } from "@/data/complaints-table-data"

export const ComplaintsTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="text-white!">
                    <TableHead className="w-35">Type</TableHead>
                    <TableHead className="w-100">Content</TableHead>
                    <TableHead>Reason for complaint</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ComplaintsTableData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium flex items-center gap-2"><Video />Video</TableCell>
                        <TableCell className="w-100"><p>{item.content}</p> <span>{item.name}</span></TableCell>
                        <TableCell className="w-100"><p>{item.complaints}</p> <span>{item.date}</span></TableCell>
                        <TableCell className="w-100">{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ComplaintsTable