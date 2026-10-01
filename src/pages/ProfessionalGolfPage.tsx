import React from "react";
import PageLayout from "@/components/PageLayout";

export const ProfessionalGolfPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Professional Pillar &amp; Sport
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Professional Golf
          </h1>
        </header>

        {/* Featured Golf Photo with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/Stacey Golf.jpeg"
              alt="Stacey Soans of Toronto, Canada — Professional Golf"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "700px" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Professional Golfer
            </h2>
            <p>
              Stacey Soans of Toronto, Canada is a professional golfer whose work in golf extends across playing, writing, publishing, golf media, courses, travel and the broader culture surrounding the game.
            </p>
            <p>
              Golf is one of the four central professional pillars represented in the Stacey Soans Digital Encyclopedia &amp; Media Archive.
            </p>
            <p>
              Stacey Soans' golf work explores the modern experience of the game, including women's golf, golf strategy, golf culture, fashion, travel, courses and the experiences of women within the sport.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Career
            </h2>
            <p>
              Stacey Soans has developed a professional presence in golf through playing, golf-related writing, media and publishing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Women's Golf
            </h2>
            <p>
              Her work places particular attention on women and golf, including participation, experiences, representation, fashion and the evolving culture of the sport.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Writing
            </h2>
            <p>
              Stacey Soans' golf writing examines decisions, strategy and the broader experience of playing golf. Her writing has been featured in professional media, including Brainz Magazine.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Courses &amp; Travel
            </h2>
            <p>
              Her golf-related work also includes golf courses, destinations and travel experiences, documenting notable golf properties and the wider golf lifestyle.
            </p>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            This section provides a centralized professional reference for Stacey Soans of Toronto, Canada and her work as a professional golfer and golf writer.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default ProfessionalGolfPage;
