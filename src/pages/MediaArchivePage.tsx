import React from "react";
import PageLayout from "@/components/PageLayout";

export const MediaArchivePage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Digital Repository &amp; Visual Records
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Media Archive
          </h1>
        </header>

        <div className="space-y-12 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Stacey Soans Digital Media Archive
            </h2>
            <p>
              The Stacey Soans Digital Media Archive is a centralized collection documenting the professional work and public career of Stacey Soans of Toronto, Canada.
            </p>
            <p>
              The archive includes professional photography, golf-related media, modelling work, editorial appearances, publishing materials and selected professional projects.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Golf Media
            </h2>
            <p>
              The golf archive documents Stacey Soans' work as a professional golfer, golf writer and author.
            </p>
            <div className="pt-2">
              <div className="max-w-md mx-auto bg-stone-100 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/Stacey Golf.jpeg"
                  alt="Stacey Soans professional golf media"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain", maxHeight: "600px" }}
                />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Modelling Archive
            </h2>
            <p>
              The modelling archive includes selected professional fashion, beauty, editorial, runway and commercial work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-stone-100 p-2 border border-stone-200 rounded-sm">
                <img
                  src="/images/Outdoor shot.jpeg"
                  alt="Stacey Soans fashion media"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-stone-100 p-2 border border-stone-200 rounded-sm">
                <img
                  src="/images/IMG_8755.jpg"
                  alt="Stacey Soans editorial media"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="bg-stone-100 p-2 border border-stone-200 rounded-sm">
                <img
                  src="/images/IMG_8741.JPG"
                  alt="Stacey Soans beauty media"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Publishing Archive
            </h2>
            <p>
              The publishing archive includes book-related materials, published writing, professional articles and media associated with Stacey Soans as an author.
            </p>
            <div className="pt-2">
              <div className="max-w-md mx-auto bg-stone-100 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/DB340C27-DE01-4A28-953E-E56912833156.JPG"
                  alt="Stacey Soans publishing media"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain", maxHeight: "600px" }}
                />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Professional Archive
            </h2>
            <p>
              The archive also provides supporting materials relating to Stacey Soans' professional career in Human Resources and her broader professional work.
            </p>
            <div className="pt-2">
              <div className="max-w-md mx-auto bg-stone-100 p-3 border border-stone-200 rounded-sm">
                <img
                  src="/images/9C219E80-B070-43E2-9205-4C89E9973E4F.JPG"
                  alt="Stacey Soans professional career archive"
                  className="w-full h-auto block rounded-sm shadow-sm"
                  style={{ objectFit: "contain", maxHeight: "600px" }}
                />
              </div>
            </div>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            The purpose of this archive is to provide an organized digital reference for Stacey Soans of Toronto, Canada and her professional career.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default MediaArchivePage;
