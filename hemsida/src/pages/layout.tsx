import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a]">
      <Header />
      <main className="min-h-screen pt-24 pb-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
