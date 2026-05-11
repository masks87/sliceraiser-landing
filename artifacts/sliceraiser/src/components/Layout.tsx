import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="theme-brand min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main className="flex-1 pt-14 lg:pt-[60px]">{children}</main>
      <Footer />
    </div>
  );
}
