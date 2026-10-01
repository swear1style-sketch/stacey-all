import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

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

const letterVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.6 + i * 0.03, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headline = "Stacey Soans";

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#121210]">
      {/* Full-Bleed Full-Color Hero Image with slow zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/images/Outdoor shot.jpeg"
          alt="Stacey Soans of Toronto, Canada"
          className="h-full w-full object-cover object-[center_25%] opacity-90"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft, translucent cinematic gradient overlays matching reference template */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      </motion.div>

      {/* Template-Exact Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between py-4 px-5 sm:py-6 sm:px-6 md:px-12"
      >
        {/* Pill Box Brand Mark */}
        <Link to="/">
          <motion.div
            className="border border-white/40 px-4 sm:px-6 py-2 backdrop-blur-md bg-black/30 rounded-sm hover:border-[#f97316] transition-colors duration-300"
            whileHover={{ borderColor: "hsl(25 95% 55% / 0.8)", backgroundColor: "rgba(0,0,0,0.45)" }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-serif text-lg sm:text-xl tracking-[0.2em] text-white font-bold uppercase">
              STACEY SOANS
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <Link
                to={item.path}
                className="relative text-xs xl:text-sm text-white/90 font-serif tracking-wider hover:text-[#f97316] transition-colors duration-300 group uppercase"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f97316] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white/95 hover:text-[#f97316] transition-colors border border-white/20 rounded-sm bg-black/30 backdrop-blur-md"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 right-0 z-30 lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col py-4 px-6 space-y-2">
              <p className="text-[10px] tracking-[0.25em] text-[#f97316] uppercase pb-2 border-b border-white/10 font-serif">
                Digital Encyclopedia &amp; Media Archive
              </p>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-sm text-white/90 font-serif tracking-wider hover:text-[#f97316] uppercase border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content (Positioned at bottom-left exactly like reference template) */}
      <div className="relative z-10 flex min-h-[78svh] items-end pb-12 sm:pb-16 md:pb-24 px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          
          {/* Eyebrow Tag with Slide-In Animation */}
          <motion.p
            initial={{ opacity: 0, x: -30, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-3 sm:mb-4 text-xs sm:text-sm tracking-[0.3em] text-[#f97316] font-serif uppercase font-semibold overflow-hidden"
          >
            Digital Encyclopedia &amp; Media Archive
          </motion.p>

          {/* Letter-by-Letter Animated Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] sm:leading-[1.05] text-white font-bold drop-shadow-md">
            <span className="inline-flex flex-wrap overflow-hidden">
              {headline.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "mr-[0.25em]" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="italic font-normal text-stone-200"
            >
              of
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="italic font-normal text-[#f97316]"
            >
              Toronto,
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="text-white"
            >
              Canada.
            </motion.span>
          </h1>

          {/* Exact Locked Source Text in Premium Translucent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mt-4 sm:mt-6 space-y-2 max-w-2xl border-l-2 border-[#f97316] pl-4 sm:pl-5 bg-black/35 backdrop-blur-sm p-3.5 rounded-r-sm"
          >
            <p className="text-xs sm:text-sm font-semibold italic text-amber-200 leading-relaxed font-serif">
              A Comprehensive Digital Resource on Stacey Soans, Her Professional Work, Publications &amp; Media
            </p>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif">
              Stacey Soans of Toronto, Canada is a Human Resources Business Partner, professional golfer, published author and professional model whose professional work spans Human Resources, golf, publishing, writing, fashion and modelling.
            </p>
          </motion.div>

          {/* Interactive CTAs Matching Reference Template */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.a
              href="#four-pillars"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#f97316] text-white px-6 sm:px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-serif font-bold rounded-sm hover:brightness-110 transition-all duration-300 text-center min-h-[48px] flex items-center justify-center shadow-lg"
            >
              Explore 4 Pillars
            </motion.a>
            <Link
              to="/about-stacey-soans"
              className="inline-block border border-white/40 text-white px-6 sm:px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-serif font-semibold rounded-sm hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
            >
              Central Biography
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with Pulsing Line */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <a href="#four-pillars" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] tracking-[0.3em] text-white/50 font-serif uppercase group-hover:text-white transition-colors">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#f97316] to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
