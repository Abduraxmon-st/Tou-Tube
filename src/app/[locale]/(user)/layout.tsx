"use client"
import { MysubscriptionCarousel } from "@/components/carousel";
import { Navbar, ShortNavbar } from "@/components/navbar";
import { MobileNavigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { NavbarTabs } from "@/components/tabs";
import { SidebarToggle } from "@/components/toggle";
import { isTablet } from "@/constants";
import useStore from "@/context/store";
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
  const [inHome, setInHome] = useState(true)
  const { inShorts, setInShorts } = useStore()
  const [inSubscriptionsPage, setInSubscriptionsPage] = useState(false)
  const navbarHeight = inSubscriptionsPage ? 120 : 174
  useEffect(() => {
    if (pathname !== "/") {
      setInHome(false)
    } else setInHome(true)

    if (pathname === "/shorts") {
      setInShorts(true)
    } else setInShorts(false)

    if (pathname === "/subscriptions") {
      setInSubscriptionsPage(true)
    } else setInSubscriptionsPage(false)
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
          ? `translateY(-${navbarHeight}px)`
          : "translateY(0)";

      lastScrollTop.current = st;
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-dvh max-h-dvh overflow-hidden">
      <div ref={navbarRef} className="fixed top-0 left-0 w-screen 2md:w-[calc(100vw-6px)] z-10 sm:mr-1.5 backdrop-blur-3xl bg-mainColor/80 border-b sm:border-b-0 border-buttonBgColor transition-transform duration-200 ease-in-out">
        {inShorts ? <ShortNavbar /> : <Navbar />}
        {inHome && <NavbarTabs />}
        {inSubscriptionsPage && <MysubscriptionCarousel />}
      </div>
      <div className="2md:flex">
        <div className={`hidden 2md:block z-11 ${inShorts ? "mt-0" : "mt-14"}`}>
          {inShorts && (
            <div className="hidden 2md:block pl-4 pt-3">
              <SidebarToggle />
            </div>
          )}
          <div className="sidebarScrollBar h-[calc(100vh-56px)] overflow-y-auto">
            <Sidebar />
          </div>
        </div>
        <div ref={contentRef} className={`relative z-9 flex-1 h-max max-h-dvh w-full overflow-y-auto  2md:pl-6 ${!inShorts && "pt-14 pb-14 2md:pb-0"}`}>
          {children}
        </div>
      </div>
      {isTablet && <MobileNavigation />}
    </div>
  );
}