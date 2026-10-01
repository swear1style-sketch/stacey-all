import React from "react";
import PageLayout from "@/components/PageLayout";

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Biography &amp; Professional Background
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada
          </h1>
        </header>

        {/* Featured Portrait with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/IMG_8663.JPG"
              alt="Stacey Soans of Toronto, Canada"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "650px" }}
            />
          </div>
        </div>

        <section className="space-y-6 text-base sm:text-lg text-stone-800 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3 mt-8">
            About Stacey Soans
          </h2>

          <p>
            Stacey Soans of Toronto, Canada is a Human Resources Business Partner, professional golfer, published author and professional model whose professional work spans Human Resources, golf, publishing, writing, fashion and modelling.
          </p>

          <p>
            Stacey Soans is a graduate of the University of Toronto, where she studied Political Science with honours. Her professional career includes Human Resources leadership and Human Resources Business Partner experience across industries including mining, engineering and commercial real estate in Toronto, Canada.
          </p>

          <p>
            Alongside her Human Resources career, Stacey Soans has established a professional presence in golf and publishing. She is the author of Fairways &amp; Femininity: The Modern Woman’s Guide to Golf, published in 2025, and has written and contributed commentary relating to golf, women in golf and the modern golf experience.
          </p>

          <p>
            Stacey Soans also has a professional modelling career spanning more than a decade, with experience in fashion, beauty, editorial, runway and commercial modelling.
          </p>

          <p className="pt-4 border-t border-stone-200 text-stone-700 italic">
            This section provides a centralized biography and professional reference for Stacey Soans of Toronto, Canada, including her education, professional background, career experience and four primary professional areas: Human Resources, golf, authorship and modelling.
          </p>
        </section>
      </article>
    </PageLayout>
  );
};

export default AboutPage;
