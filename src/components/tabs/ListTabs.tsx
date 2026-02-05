import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Grid3X3, List } from "lucide-react"

type ListTabsProps = {
    viewMode: 'grid' | 'list',
    setViewMode: (mode: 'grid' | 'list') => void
}
export const ListTabs = ({ viewMode, setViewMode }: ListTabsProps) => {
    return (
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')} className="w-fit">
            <TabsList className="bg-transparent rounded-lg p-1">
                <TabsTrigger value="grid" className="text-secondColor px-1.5!">
                    <Grid3X3 size={20} />
                </TabsTrigger>
                <TabsTrigger value="list" className="text-secondColor px-1.5!">
                    <List size={20} />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ListTabs