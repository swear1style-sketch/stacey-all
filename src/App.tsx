import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HumanResourcesPage from "./pages/HumanResourcesPage";
import ProfessionalGolfPage from "./pages/ProfessionalGolfPage";
import AuthorPublishingPage from "./pages/AuthorPublishingPage";
import ProfessionalModellingPage from "./pages/ProfessionalModellingPage";
import PublicationsPressPage from "./pages/PublicationsPressPage";
import MediaArchivePage from "./pages/MediaArchivePage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main 9 Sections + Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-stacey-soans" element={<AboutPage />} />
          <Route path="/human-resources" element={<HumanResourcesPage />} />
          <Route path="/professional-golf" element={<ProfessionalGolfPage />} />
          <Route path="/author-publishing" element={<AuthorPublishingPage />} />
          <Route path="/professional-modelling" element={<ProfessionalModellingPage />} />
          <Route path="/publications-press" element={<PublicationsPressPage />} />
          <Route path="/media-archive" element={<MediaArchivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />

          {/* WordPress compatibility route aliases */}
          <Route path="/who-is-stacey-soans" element={<Navigate to="/about-stacey-soans" replace />} />
          <Route path="/golf-author" element={<Navigate to="/professional-golf" replace />} />
          <Route path="/modelling" element={<Navigate to="/professional-modelling" replace />} />
          <Route path="/publications" element={<Navigate to="/publications-press" replace />} />
          <Route path="/legal-representation-and-notice" element={<Navigate to="/legal" replace />} />
          <Route path="/lawyers" element={<Navigate to="/legal" replace />} />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
