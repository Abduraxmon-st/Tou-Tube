"use client"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { SubscriptionSelect } from "../select"

export const SubscriptionButton = () => {
  const [subs, setSubs] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false

    const saved = localStorage.getItem('subscription')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('subscription', JSON.stringify(subs))
  }, [subs])


  return (
    <div>
      <Button onClick={() => setSubs(true)} className={`w-29.5 h-9 font-medium text-[14px] leading-4.5 px-4 rounded-[18px] bg-white text-black hover:bg-white ${subs && "hidden"}`}>Subscraption</Button>
      {subs && <SubscriptionSelect setSubs={setSubs} />}
    </div>
  )
}

export default SubscriptionButton