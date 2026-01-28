import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex gap-6">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}