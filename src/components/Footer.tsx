import React from "react";
import { Link } from "react-router-dom";

const footerNavLinks = [
  { name: "About Stacey Soans", path: "/about-stacey-soans" },
  { name: "Human Resources", path: "/human-resources" },
  { name: "Professional Golf", path: "/professional-golf" },
  { name: "Author & Publishing", path: "/author-publishing" },
  { name: "Professional Modelling", path: "/professional-modelling" },
  { name: "Publications & Press", path: "/publications-press" },
  { name: "Media Archive", path: "/media-archive" },
  { name: "Contact", path: "/contact" },
  { name: "Legal", path: "/legal" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-300 bg-[#f4f2ea] text-stone-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-300">
          {/* Identity & Locked Description */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl sm:text-2xl tracking-[0.1em] font-bold text-stone-950 uppercase">
              Stacey Soans Digital Encyclopedia &amp; Media Archive
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-xl">
              A comprehensive digital resource covering Stacey Soans and her professional work across Human Resources, professional golf, authorship and professional modelling, including publications and media.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-4">
              Sections &amp; Archives
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-stone-700 hover:text-stone-950 transition-colors"
                >
                  Archive Home
                </Link>
              </li>
              {footerNavLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-700 hover:text-stone-950 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-600">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <p>© 2026 Stacey Soans. All Rights Reserved.</p>
            <span className="hidden sm:inline text-stone-400">·</span>
            <p>
              Engineered by{" "}
              <a
                href="https://vectoraslab.com"
                target="_blank"
                rel="noopener"
                className="font-medium text-stone-850 hover:text-stone-950 underline underline-offset-2 transition-colors"
                title="Vectoras Lab — Digital Engineering & Web Architecture"
              >
                Vectoras Lab
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-stone-950 transition-colors">
              Contact
            </Link>
            <Link to="/legal" className="hover:text-stone-950 transition-colors">
              Legal &amp; Copyright
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;