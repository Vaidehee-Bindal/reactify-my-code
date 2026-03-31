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
import FindALocation from "./pages/FindALocation";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import { HistoryPage, MediaRelations, PrivacyPolicy, KnowledgeCentre, FindYourFit, LawEnforcement, PropertyManagement } from "./pages/GenericPage";

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
            
            {/* Security Services */}
            <Route path="/security-services" element={<SecurityServices />} />
            <Route path="/security-services/:service" element={<SecurityServices />} />
            
            {/* Industries */}
            <Route path="/industries-served" element={<IndustriesServed />} />
            <Route path="/industries-served/:industry" element={<IndustriesServed />} />
            
            {/* Locations */}
            <Route path="/find-a-location" element={<FindALocation />} />
            <Route path="/locations/:location" element={<FindALocation />} />
            
            {/* About Us */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/:page" element={<AboutUs />} />
            <Route path="/about-us/why-paladin/:subpage" element={<AboutUs />} />
            <Route path="/about-us/our-culture/:subpage" element={<AboutUs />} />
            
            {/* Careers */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:page" element={<Careers />} />
            <Route path="/find-your-fit" element={<FindYourFit />} />
            
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            
            {/* Other pages */}
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/media-relations" element={<MediaRelations />} />
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
