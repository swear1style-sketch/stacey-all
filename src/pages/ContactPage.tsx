import React from "react";
import PageLayout from "@/components/PageLayout";

export const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Inquiries &amp; Communications
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Contact
          </h1>
        </header>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Contact Stacey Soans
            </h2>
            <p>
              For professional inquiries relating to Human Resources, golf, authorship, publishing, media or professional modelling, please use the contact information provided on this website.
            </p>
            <p>
              Stacey Soans of Toronto, Canada works across four professional areas: Human Resources, professional golf, authorship and professional modelling.
            </p>
            <p>
              Media, publishing, professional collaboration and business inquiries can be directed through the appropriate contact information provided on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Professional Areas
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-stone-800">
              <li>Human Resources</li>
              <li>Professional Golf</li>
              <li>Authorship &amp; Publishing</li>
              <li>Professional Modelling</li>
              <li>Media &amp; Press</li>
              <li>Professional Collaborations</li>
            </ul>
          </section>

          {/* Contact Details Card */}
          <section className="mt-8 p-6 bg-stone-50 border border-stone-300 rounded-sm space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2">
              Communication Channels
            </h3>
            <p className="text-sm sm:text-base text-stone-700">
              Professional communications and formal inquiries can be directed through verified platforms:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base pt-2">
              <div>
                <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/staceysoans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline hover:text-stone-600"
                >
                  linkedin.com/in/staceysoans
                </a>
              </div>
              <div>
                <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">Instagram:</span>
                <a
                  href="https://www.instagram.com/stacey.soans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline hover:text-stone-600"
                >
                  @stacey.soans
                </a>
              </div>
              <div>
                <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">YouTube:</span>
                <a
                  href="https://www.youtube.com/@StaceySoansGolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline hover:text-stone-600"
                >
                  @StaceySoansGolf
                </a>
              </div>
              <div>
                <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">X (Twitter):</span>
                <a
                  href="https://x.com/Staceysoans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline hover:text-stone-600"
                >
                  @Staceysoans
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
};

export default ContactPage;
