"use client"
import { Navbar } from "@/components/navbar";
import { MobileNavigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { NavbarTabs } from "@/components/tabs";
import { isTablet } from "@/constants";
import { useEffect, useRef } from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

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
        <Navbar />
        <NavbarTabs />
      </div>
      <div className="2md:flex 2md:gap-6">
        <div className="hidden sm:block z-10 -mt-14">
          <Sidebar />
        </div>
        <div ref={contentRef} className="relative -mt-28 z-9 flex-1 h-max max-h-dvh w-full overflow-y-auto pb-15 pt-29 sm:pb-0">
          {children}
        </div>
      </div>
      <MobileNavigation />
    </div>
  );
}