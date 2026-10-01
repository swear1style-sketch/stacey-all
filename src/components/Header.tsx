import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", path: "/about-stacey-soans" },
  { label: "Human Resources", path: "/human-resources" },
  { label: "Golf", path: "/professional-golf" },
  { label: "Author", path: "/author-publishing" },
  { label: "Modelling", path: "/professional-modelling" },
  { label: "Publications", path: "/publications-press" },
  { label: "Archive", path: "/media-archive" },
  { label: "Contact", path: "/contact" },
  { label: "Legal", path: "/legal" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121210]/95 backdrop-blur-md border-b border-white/10 text-white shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Pill Box Brand Mark */}
        <Link to="/">
          <div className="border border-white/30 px-4 sm:px-5 py-1.5 backdrop-blur-md bg-white/5 rounded-sm hover:border-[#f97316] transition-colors">
            <span className="font-serif text-base sm:text-lg tracking-[0.2em] text-white font-bold uppercase">
              STACEY SOANS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs xl:text-sm font-serif tracking-wider uppercase transition-colors duration-300 group py-1 ${
                  isActive ? "text-[#f97316] font-bold" : "text-white/85 hover:text-[#f97316]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#f97316] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#f97316] transition-colors border border-white/20 rounded-sm bg-white/5"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#121210]/98 backdrop-blur-xl border-t border-white/10 px-6 py-5 space-y-2 text-white shadow-2xl"
          >
            <p className="text-[10px] tracking-[0.25em] text-[#f97316] uppercase pb-2 border-b border-white/10 font-serif">
              Digital Encyclopedia &amp; Media Archive
            </p>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-xs uppercase tracking-wider font-serif ${
                  location.pathname === item.path ? "text-[#f97316] font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
