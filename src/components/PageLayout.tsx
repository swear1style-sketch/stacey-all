import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfcf9] text-stone-900 font-serif selection:bg-stone-300 selection:text-stone-950">
      {!isHomePage && <Header />}
      <main className={`flex-1 w-full ${isHomePage ? "" : "pt-24 sm:pt-28"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
