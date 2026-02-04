"use client"
import { ListCard } from "@/components/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { Grid3X3, List } from "lucide-react"
import { useState } from "react"

const SubscriptionsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  return (
    <div>
      <div className="2xm:flex items-center hidden justify-between pt-6">
        <h2 className="text-[20px] leading-7 font-bold">New</h2>
        <div className="flex items-center gap-2">
          <Link href="/mysubscriptions"><Button variant="iconVariant" className="bg-secondColor/8">Channels you're subscribed to</Button></Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}>
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <ListCard viewMode={viewMode} />
    </div>
  )
}

export default SubscriptionsPage