import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { NavbarTabs } from "@/components/tabs";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <div className="relative z-10 sm:mr-1.25 sm:backdrop-blur-3xl bg-mainColor sm:bg-mainColor/80">
        <Navbar />
        <NavbarTabs />
      </div>
      <div className="flex 2md:gap-6">
        <div className=" relative z-10 -mt-14">
          <Sidebar />
        </div>
        <div className="relative z-9 -mt-28 flex-1 h-max max-h-dvh w-full overflow-y-auto">
          <div className="grid gap-4 grid-cols-5 grid-rows-6 h-400">
            <div className="bg-green-600"></div>
            <div className="bg-blue-600"></div>
            <div className="bg-yellow-600"></div>
            <div className="bg-purple-600"></div>
            <div className="bg-cyan-600"></div>
            <div className="bg-red-600"></div>
            <div className="bg-green-600"></div>
            <div className="bg-blue-600"></div>
            <div className="bg-yellow-600"></div>
            <div className="bg-purple-600"></div>
            <div className="bg-cyan-600"></div>
            <div className="bg-red-600"></div>
            <div className="bg-green-600"></div>
            <div className="bg-blue-600"></div>
            <div className="bg-yellow-600"></div>
            <div className="bg-purple-600"></div>
            <div className="bg-cyan-600"></div>
            <div className="bg-red-600"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}