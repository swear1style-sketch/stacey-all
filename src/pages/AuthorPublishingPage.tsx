import React from "react";
import PageLayout from "@/components/PageLayout";

export const AuthorPublishingPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Publishing, Books &amp; Editorial Commentary
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Author &amp; Publishing
          </h1>
        </header>

        {/* Featured Author Portrait with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/DB340C27-DE01-4A28-953E-E56912833156.JPG"
              alt="Stacey Soans of Toronto, Canada — Author & Publishing"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "650px" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Published Author
            </h2>
            <p>
              Stacey Soans of Toronto, Canada is a published author and the author of Fairways &amp; Femininity: The Modern Woman’s Guide to Golf, published on May 1, 2025.
            </p>
            <p>
              The book explores women's experiences in golf while bringing together golf, sport, fashion, travel, community and the modern golf experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Fairways &amp; Femininity
            </h2>
            <p>
              Fairways &amp; Femininity: The Modern Woman’s Guide to Golf is Stacey Soans' published book focused on women and the game of golf.
            </p>
            <p>
              The book examines golf through a contemporary lens, incorporating golf experiences, commentary, research and industry insight alongside subjects including women's golf, fashion, travel and community.
            </p>

            {/* Book Details Box */}
            <div className="mt-6 p-6 bg-stone-50 border border-stone-300 rounded-sm space-y-3 text-stone-900">
              <h3 className="text-lg font-bold uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-2">
                Book Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <div>
                  <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">Title:</span>
                  <span>Fairways &amp; Femininity</span>
                </div>
                <div>
                  <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">Subtitle:</span>
                  <span>The Modern Woman’s Guide to Golf</span>
                </div>
                <div>
                  <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">Author:</span>
                  <span>Stacey Soans</span>
                </div>
                <div>
                  <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">Publication year:</span>
                  <span>2025</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider mb-1">
                  ISBN:
                </span>
                <ul className="space-y-1 font-mono text-sm text-stone-800">
                  <li>9781069602435</li>
                  <li>9781069602428</li>
                  <li>9781069602411</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Writing
            </h2>
            <p>
              Stacey Soans' writing extends beyond her book through golf commentary and professional media contributions.
            </p>
            <p>
              Her published work includes commentary examining golf strategy, decision-making and the modern experience of the game.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Brainz Magazine
            </h2>
            <p>
              Stacey Soans has contributed to Brainz Magazine as an author and Executive Contributor, writing about golf and decision-making in the game.
            </p>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            This section documents Stacey Soans of Toronto, Canada as an author, writer and publishing professional, including her book, articles and published commentary.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default AuthorPublishingPage;
