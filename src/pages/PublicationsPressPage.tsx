import React from "react";
import PageLayout from "@/components/PageLayout";

export const PublicationsPressPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Articles, Books &amp; Media Coverage
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Publications &amp; Press
          </h1>
        </header>

        {/* Featured Portrait with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/DB340C27-DE01-4A28-953E-E56912833156.JPG"
              alt="Stacey Soans of Toronto, Canada — Publications & Press"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "650px" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Publications &amp; Media
            </h2>
            <p>
              Stacey Soans of Toronto, Canada has been featured across professional publishing, golf media, editorial publications and other forms of professional media.
            </p>
            <p>
              This section provides a centralized record of published articles, magazine features, book publications, professional commentary and selected media appearances involving Stacey Soans.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Author Publications
            </h2>
            <p>
              Stacey Soans is the author of Fairways &amp; Femininity: The Modern Woman’s Guide to Golf, published in 2025.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Publications
            </h2>
            <p>
              Her published golf work includes commentary relating to golf, decision-making, women's golf and the modern experience of the game.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Professional Media
            </h2>
            <p>
              Stacey Soans' professional profile encompasses Human Resources, golf, authorship and modelling, with media and publications reflecting these areas of work.
            </p>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            The Publications &amp; Press archive provides a structured reference for Stacey Soans of Toronto, Canada and her published professional work.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default PublicationsPressPage;
