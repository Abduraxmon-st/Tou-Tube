import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
interface ReusableTabsProps {
  tabs: { label: string }[],
  defaultTab?: string,
  className?: string
}
export const ReusableTabs = ({ tabs, defaultTab, className }: ReusableTabsProps) => {
  return (
    <Tabs defaultValue={defaultTab || tabs[0]?.label} className="w-max! h-max!">
      <TabsList className="p-0! bg-transparent gap-2 h-9!">
        {tabs.map((item) => (
          <TabsTrigger
            value={item.label}
            key={item.label}
            className={`text-secondColor hover:text-secondColor bg-secondColor/9 h-8! py-0 px-3 hover:bg-secondColor/12 ${className || ""}`}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
