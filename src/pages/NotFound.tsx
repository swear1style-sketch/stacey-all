import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export const NotFound: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold text-stone-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Page Not Found</h2>
        <p className="text-stone-600 mb-8 leading-relaxed">
          The requested page could not be located in the Stacey Soans Digital Encyclopedia &amp; Media Archive.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-stone-900 text-stone-50 text-sm uppercase tracking-wider font-semibold rounded-sm hover:bg-stone-800 transition-colors"
        >
          Return to Archive Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
