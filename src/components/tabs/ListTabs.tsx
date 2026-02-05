import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Grid3X3, List } from "lucide-react"

type ListTabsProps = {
    viewMode: 'grid' | 'list',
    setViewMode: (mode: 'grid' | 'list') => void
}
export const ListTabs = ({viewMode, setViewMode}:ListTabsProps) => {
    return (
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')} className="w-fit">
            <TabsList className="bg-transparent rounded-lg p-1">
                <TabsTrigger value="grid" className={`p-2 ${viewMode !== 'grid' && "text-white"}`}>
                    <Grid3X3 className="w-5 h-5" />
                </TabsTrigger>
                <TabsTrigger value="list" className={`p-2 ${viewMode !== 'list' && "text-white"}`}>
                    <List className="w-5 h-5" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ListTabs