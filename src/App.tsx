import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Trust from "./pages/Trust";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

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

            {/* Services */}
            <Route path="/services/:service" element={<Services />} />

            {/* How It Works */}
            <Route path="/how-it-works/:product" element={<HowItWorks />} />

            {/* Trust & Transparency */}
            <Route path="/trust/:page" element={<Trust />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/:page" element={<About />} />

            {/* Locations */}
            <Route path="/locations" element={<Locations />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;