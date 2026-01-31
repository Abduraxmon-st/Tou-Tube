import { shortsLinks } from "@/data/shorts-links"
import { Link } from "@/i18n/navigation"

export const ShortsNavbarLinks = () => {
  return (
    <div className="w-full max-w-screen h-max overflow-auto mt-3">
      <div className="flex flex-row items-center w-fit gap-3">
        {
          shortsLinks.map((item) => (
            <Link key={item.label + item.label} href={item.path} className="w-max flex items-center gap-2 px-4 py-1.5 bg-mainColor/40 rounded-full">
              {item.icon}
              <p>{item.label}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
