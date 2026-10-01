import React from "react";
import PageLayout from "@/components/PageLayout";

export const ProfessionalModellingPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Fashion, Beauty, Editorial, Runway &amp; Commercial
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Professional Modelling
          </h1>
        </header>

        {/* Lead Fashion & Editorial Photo with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/Outdoor shot.jpeg"
              alt="Stacey Soans of Toronto, Canada — Professional Modelling"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "700px" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Professional Model
            </h2>
            <p>
              Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling.
            </p>
            <p>
              Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Modelling Career
            </h2>
            <p>
              Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Representation
            </h2>
            <p>
              Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Beauty &amp; Fashion
            </h2>
            <p>
              Her modelling portfolio includes work within Toronto's fashion and beauty industries, including beauty campaigns and editorial projects.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Editorial &amp; Runway
            </h2>
            <p>
              Stacey Soans' modelling credits include editorial and runway work as well as appearances associated with Toronto fashion events and publications.
            </p>
          </section>

          {/* Editorial & Digitals Gallery — Preserving complete original proportions */}
          <section className="pt-6 border-t border-stone-200 space-y-6">
            <h3 className="text-xl font-bold text-stone-950 uppercase tracking-wider">
              Selected Modelling Media &amp; Digitals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="bg-stone-50 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/IMG_8755.jpg"
                  alt="Stacey Soans editorial portrait"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-stone-50 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/IMG_8741.JPG"
                  alt="Stacey Soans portrait shot"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-stone-50 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/Stacey- Digitals.JPG"
                  alt="Stacey Soans digitals"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-stone-50 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/Digitals .jpeg"
                  alt="Stacey Soans digital portfolio"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            This section provides a centralized professional reference for Stacey Soans of Toronto, Canada and her modelling career.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default ProfessionalModellingPage;
