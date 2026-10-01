import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";

export const HomePage: React.FC = () => {
  return (
    <PageLayout>
      {/* Full-Screen Immersive Editorial Hero Section */}
      <HeroSection />

      {/* The Four Primary Professional Pillars (Equal visual balance) */}
      <section id="four-pillars" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-stone-500 mb-2">
            Core Foundations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-950">
            Four Primary Professional Pillars
          </h2>
          <div className="w-16 h-0.5 bg-stone-800 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Pillar 1: Human Resources */}
          <div className="flex flex-col bg-white border border-stone-300 p-6 sm:p-8 rounded-sm shadow-sm hover:border-stone-400 transition-colors">
            <div className="mb-4">
              <img
                src="/images/9C219E80-B070-43E2-9205-4C89E9973E4F.JPG"
                alt="Stacey Soans — Human Resources"
                className="w-full h-auto block rounded-sm mb-4"
                style={{ objectFit: "contain", maxHeight: "380px" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block mb-1">
                Pillar I
              </span>
              <h3 className="text-2xl font-bold text-stone-950">Human Resources</h3>
            </div>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed flex-1">
              Stacey Soans of Toronto, Canada is a Human Resources Business Partner and HR leader with professional experience supporting employees, managers and business operations across mining, engineering and commercial real estate.
            </p>
            <div className="mt-6 pt-4 border-t border-stone-200">
              <Link
                to="/human-resources"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
              >
                View Human Resources Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Professional Golf */}
          <div className="flex flex-col bg-white border border-stone-300 p-6 sm:p-8 rounded-sm shadow-sm hover:border-stone-400 transition-colors">
            <div className="mb-4">
              <img
                src="/images/Stacey Golf.jpeg"
                alt="Stacey Soans — Professional Golf"
                className="w-full h-auto block rounded-sm mb-4"
                style={{ objectFit: "contain", maxHeight: "380px" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block mb-1">
                Pillar II
              </span>
              <h3 className="text-2xl font-bold text-stone-950">Professional Golf</h3>
            </div>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed flex-1">
              Stacey Soans of Toronto, Canada is a professional golfer whose work in golf extends across playing, writing, publishing, golf media, courses, travel and the broader culture surrounding the game.
            </p>
            <div className="mt-6 pt-4 border-t border-stone-200">
              <Link
                to="/professional-golf"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
              >
                View Professional Golf Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Authorship & Publishing */}
          <div className="flex flex-col bg-white border border-stone-300 p-6 sm:p-8 rounded-sm shadow-sm hover:border-stone-400 transition-colors">
            <div className="mb-4">
              <img
                src="/images/DB340C27-DE01-4A28-953E-E56912833156.JPG"
                alt="Stacey Soans — Author & Publishing"
                className="w-full h-auto block rounded-sm mb-4"
                style={{ objectFit: "contain", maxHeight: "380px" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block mb-1">
                Pillar III
              </span>
              <h3 className="text-2xl font-bold text-stone-950">Authorship &amp; Publishing</h3>
            </div>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed flex-1">
              Stacey Soans of Toronto, Canada is a published author and the author of Fairways &amp; Femininity: The Modern Woman’s Guide to Golf, published on May 1, 2025. The book explores women's experiences in golf while bringing together golf, sport, fashion, travel, community and the modern golf experience.
            </p>
            <div className="mt-6 pt-4 border-t border-stone-200">
              <Link
                to="/author-publishing"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
              >
                View Author &amp; Publishing Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Professional Modelling */}
          <div className="flex flex-col bg-white border border-stone-300 p-6 sm:p-8 rounded-sm shadow-sm hover:border-stone-400 transition-colors">
            <div className="mb-4">
              <img
                src="/images/Outdoor shot.jpeg"
                alt="Stacey Soans — Professional Modelling"
                className="w-full h-auto block rounded-sm mb-4"
                style={{ objectFit: "contain", maxHeight: "380px" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block mb-1">
                Pillar IV
              </span>
              <h3 className="text-2xl font-bold text-stone-950">Professional Modelling</h3>
            </div>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed flex-1">
              Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling. Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
            </p>
            <div className="mt-6 pt-4 border-t border-stone-200">
              <Link
                to="/professional-modelling"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
              >
                View Modelling Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Media Overview Section */}
      <section className="bg-[#f6f4ec] border-y border-stone-300 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500">
                Publications &amp; Press
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-950">
                Publications &amp; Media
              </h2>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                Stacey Soans of Toronto, Canada has been featured across professional publishing, golf media, editorial publications and other forms of professional media.
              </p>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                This section provides a centralized record of published articles, magazine features, book publications, professional commentary and selected media appearances involving Stacey Soans.
              </p>
              <div className="pt-2">
                <Link
                  to="/publications-press"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
                >
                  Explore Publications &amp; Press Archive <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500">
                Repository
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-950">
                Digital Media Archive
              </h2>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                The Stacey Soans Digital Media Archive is a centralized collection documenting the professional work and public career of Stacey Soans of Toronto, Canada.
              </p>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                The archive includes professional photography, golf-related media, modelling work, editorial appearances, publishing materials and selected professional projects.
              </p>
              <div className="pt-2">
                <Link
                  to="/media-archive"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-stone-950 hover:text-stone-600 transition-colors"
                >
                  Access Central Media Archive <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
