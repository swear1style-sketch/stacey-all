import React from "react";
import PageLayout from "@/components/PageLayout";

export const LegalPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Legal, Copyright &amp; Representation Notice
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Legal &amp; Copyright
          </h1>
        </header>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Legal &amp; Lawyers
            </h2>
            <p>
              The Stacey Soans Digital Encyclopedia &amp; Media Archive is a professional information and media archive documenting Stacey Soans of Toronto, Canada, her career, publications and professional work.
            </p>
            <p>
              Original written content, photographs, graphics, publications and other original materials appearing on this website may be protected by applicable copyright and intellectual-property laws.
            </p>
            <p>
              Where third-party materials are referenced or displayed for legitimate informational, archival, editorial or attribution purposes, ownership remains with the respective rights holder.
            </p>
          </section>

          {/* Legal Representation Details retrieved directly from the client's .ca website */}
          <section className="mt-8 p-6 sm:p-8 bg-stone-50 border border-stone-300 rounded-sm space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-stone-950 border-b border-stone-200 pb-2">
              Retained Legal Counsel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-800">
              <div className="p-4 bg-white border border-stone-200 rounded-sm space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block">
                  Civil Counsel
                </span>
                <p className="font-bold text-stone-950 text-lg">Milosevic &amp; Associates</p>
                <p className="text-stone-700">Arad Moslehi, Partner</p>
                <div className="text-stone-600 text-sm pt-2 border-t border-stone-100 leading-relaxed">
                  <p>40 King Street West, Suite 3602</p>
                  <p>Toronto, Ontario M5H 3S1</p>
                  <p>Canada</p>
                </div>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-sm space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500 block">
                  Intellectual Property Counsel
                </span>
                <p className="font-bold text-stone-950 text-lg">Smarter and Bigger LLP</p>
                <p className="text-stone-700">Daniel M. Anthony, Senior Partner</p>
                <div className="text-stone-600 text-sm pt-2 border-t border-stone-100 leading-relaxed">
                  <p>55 Metcalfe Street, Suite 1000</p>
                  <p>Ottawa, Ontario K1P 6L5</p>
                  <p>Canada</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Copyright
            </h2>
            <p>
              Unauthorized reproduction, distribution or commercial use of original copyrighted materials may be prohibited under applicable law.
            </p>
            <p>
              For copyright, intellectual-property or website-related inquiries, please use the Contact section.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Accuracy
            </h2>
            <p>
              This website is intended to provide an organized factual reference concerning Stacey Soans of Toronto, Canada and her professional work, including Human Resources, professional golf, authorship, publishing and professional modelling.
            </p>
          </section>
        </div>
      </article>
    </PageLayout>
  );
};

export default LegalPage;
