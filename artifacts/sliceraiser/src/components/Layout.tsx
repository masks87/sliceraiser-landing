import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="theme-brand min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main className="flex-1 pt-14 lg:pt-[80px] pb-8 sm:pb-12 lg:pb-20">{children}</main>
      <Footer />
    </div>
  );
}
