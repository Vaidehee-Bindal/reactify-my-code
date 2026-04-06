import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SecurityServices from "./pages/SecurityServices";
import IndustriesServed from "./pages/IndustriesServed";


import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Rakshak24x7 from "./pages/Rakshak24x7";
import ATSIntel from "./pages/ATSIntel";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Location from "./pages/Location";
import { AboutCompany, Mission, FoundingStory, Team, Expansion, WhyTrustUs } from "./pages/AboutPages";
import { HistoryPage, PrivacyPolicy, KnowledgeCentre, FindYourFit, LawEnforcement, PropertyManagement } from "./pages/GenericPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />

            {/* New routes */}
            <Route path="/services/rakshak24x7" element={<Rakshak24x7 />} />
            <Route path="/services/atsintel" element={<ATSIntel />} />
            <Route path="/about/company" element={<AboutCompany />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/founding" element={<FoundingStory />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/expansion" element={<Expansion />} />
            <Route path="/about/trust" element={<WhyTrustUs />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Legacy routes */}
            <Route path="/security-services" element={<SecurityServices />} />
            <Route path="/security-services/:service" element={<SecurityServices />} />
            <Route path="/industries-served" element={<IndustriesServed />} />
            <Route path="/industries-served/:industry" element={<IndustriesServed />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:page" element={<Careers />} />
            <Route path="/find-your-fit" element={<FindYourFit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/history" element={<HistoryPage />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/knowledge-centre-main/rfp" element={<KnowledgeCentre />} />
            <Route path="/knowledge-centre-main" element={<KnowledgeCentre />} />
            <Route path="/law-enforcement" element={<LawEnforcement />} />
            <Route path="/law-enforcement/:page" element={<LawEnforcement />} />
            <Route path="/law-enforcement-careers/:page" element={<LawEnforcement />} />
            <Route path="/property-management" element={<PropertyManagement />} />
            <Route path="/security-prevention/:slug" element={<Blog />} />
            <Route path="/safety-tips/:slug" element={<Blog />} />
            <Route path="/security-careers/:slug" element={<Careers />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
