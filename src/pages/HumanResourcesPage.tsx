import React from "react";
import PageLayout from "@/components/PageLayout";

export const HumanResourcesPage: React.FC = () => {
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="border-b border-stone-300 pb-8 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500 mb-3">
            Professional Reference &amp; Leadership
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
            Stacey Soans of Toronto, Canada — Human Resources
          </h1>
        </header>

        {/* Featured Photo with complete aspect ratio preservation */}
        <div className="mb-12 bg-stone-100 p-2 sm:p-4 border border-stone-200 rounded-sm">
          <div className="max-w-md mx-auto">
            <img
              src="/images/9C219E80-B070-43E2-9205-4C89E9973E4F.JPG"
              alt="Stacey Soans of Toronto, Canada — Human Resources"
              className="w-full h-auto block rounded-sm shadow-sm"
              style={{ objectFit: "contain", maxHeight: "650px" }}
            />
          </div>
        </div>

        <div className="space-y-10 text-base sm:text-lg text-stone-800 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Human Resources Business Partner
            </h2>
            <p>
              Stacey Soans of Toronto, Canada is a Human Resources Business Partner and HR leader with professional experience supporting employees, managers and business operations across mining, engineering and commercial real estate.
            </p>
            <p>
              Her Human Resources background includes business partnering, workforce operations, employee lifecycle processes, performance management, compensation, workforce planning, HR systems, onboarding, offboarding and people-process development.
            </p>
            <p>
              Stacey Soans has worked in HR leadership environments where Human Resources operates as a strategic business function, partnering with leaders and teams to support organizational priorities and effective people practices.
            </p>
            <p>
              Her experience includes Human Resources systems and technology, workforce administration, employee support, process documentation, policy implementation, manager support and operational HR.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              HR Leadership
            </h2>
            <p>
              Stacey Soans' Human Resources career encompasses HR Business Partnering and HR leadership responsibilities, with experience supporting organizational leaders and employees in complex operational environments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              Industries
            </h2>
            <p>
              Her professional Human Resources experience includes mining, engineering and commercial real estate in Toronto, Canada, providing exposure to organizations with operational, technical and corporate workforces.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 border-b border-stone-200 pb-3">
              HR Expertise
            </h2>
            <p className="font-semibold text-stone-900">
              Areas of professional experience include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-800">
              <li>Human Resources Business Partnering</li>
              <li>HR leadership</li>
              <li>Workforce planning</li>
              <li>Performance management</li>
              <li>Compensation</li>
              <li>Employee lifecycle processes</li>
              <li>Onboarding and offboarding</li>
              <li>HR systems</li>
              <li>HR operations</li>
              <li>Manager support</li>
              <li>Process development</li>
              <li>Workforce administration</li>
              <li>People programs</li>
            </ul>
          </section>

          <footer className="pt-6 border-t border-stone-200 text-stone-700 italic">
            This section serves as a professional reference for Stacey Soans of Toronto, Canada and her Human Resources career.
          </footer>
        </div>
      </article>
    </PageLayout>
  );
};

export default HumanResourcesPage;
