"use client"
import { Navbar, ShortNavbar } from "@/components/navbar";
import { MobileNavigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { NavbarTabs } from "@/components/tabs";
import { SidebarToggle } from "@/components/toggle";
import { isTablet } from "@/constants";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const contentRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const [tabs, setTabs] = useState(true)
  const [short, setShort] = useState(false)
  useEffect(() => {
    if (pathname !== "/") {
      setTabs(false)
    } else setTabs(true)

    if (pathname === "/shorts") {
      setShort(true)
    } else setShort(false)
  }, [pathname])

  useEffect(() => {

    if (!isTablet) {
      return
    }
    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      const st = el.scrollTop;

      // not hide, waiting 100px 
      if (st < 100) {
        navbarRef.current!.style.transform = "translateY(0)";
        lastScrollTop.current = st;
        return;
      }

      navbarRef.current!.style.transform =
        st > lastScrollTop.current
          ? "translateY(-120px)"
          : "translateY(0)";

      lastScrollTop.current = st;
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-dvh max-h-dvh overflow-hidden">
      <div ref={navbarRef} className="relative z-10 sm:mr-1.5 backdrop-blur-3xl bg-mainColor/80 border-b sm:border-b-0 border-buttonBgColor transition-transform duration-200 ease-in-out">
        {!short ? <Navbar /> : <ShortNavbar />}
        {tabs && <NavbarTabs />}
      </div>
      <div className="2md:flex">
        <div className={`hidden sm:block z-10 ${tabs && "-mt-14"}`}>
          {short && (
            <div className="hidden 2md:block pl-4 pt-3">
              <SidebarToggle />
            </div>
          )}
          <Sidebar />
        </div>
        <div ref={contentRef} className={`relative ${tabs ? '-mt-28 pt-28' : !short && "pt-14 -mt-14"} z-9 flex-1 h-max max-h-dvh w-full overflow-y-auto pb-14 sm:pb-0 2md:pl-6`}>
          {children}
        </div>
      </div>
      <MobileNavigation />
    </div>
  );
}