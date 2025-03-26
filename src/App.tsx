import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import RavanOS from "./pages/RavanOS";
import GovOS from "./pages/GovOS";
import Solve from "./pages/Solve";
import Vision from "./pages/Vision";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import GovLanding from "./pages/GovLanding";
import GermanLanding from "./pages/GermanLanding";

// This component ensures the page scrolls to the top when navigating to a new route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<GovLanding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/presentation" element={<Index />} />
          <Route path="/ravanos" element={<RavanOS />} />
          <Route path="/govos" element={<GovOS />} />
          <Route path="/solve" element={<Solve />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/gov" element={<GovLanding />} />
          <Route path="/german" element={<GermanLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
