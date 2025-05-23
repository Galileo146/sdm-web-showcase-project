
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Innovation from "./pages/Innovation";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageProvider>
          <Routes>
            {/* Italian Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="chi-siamo" element={<AboutUs />} />
              <Route path="aziende" element={<Companies />} />
              <Route path="innovazione" element={<Innovation />} />
              <Route path="innovazione-e-qualita" element={<Innovation />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:postId" element={<BlogPost />} />
              <Route path="contatti" element={<Contact />} />
              
              {/* English Routes */}
              <Route path="en" element={<Home />} />
              <Route path="en/about-us" element={<AboutUs />} />
              <Route path="en/companies" element={<Companies />} />
              <Route path="en/innovation" element={<Innovation />} />
              <Route path="en/innovation-and-quality" element={<Innovation />} />
              <Route path="en/blog" element={<Blog />} />
              <Route path="en/blog/:postId" element={<BlogPost />} />
              <Route path="en/contact" element={<Contact />} />
              
              {/* Polish Routes */}
              <Route path="pl" element={<Home />} />
              <Route path="pl/o-nas" element={<AboutUs />} />
              <Route path="pl/firmy" element={<Companies />} />
              <Route path="pl/innowacje" element={<Innovation />} />
              <Route path="pl/innowacje-i-jakosc" element={<Innovation />} />
              <Route path="pl/blog" element={<Blog />} />
              <Route path="pl/blog/:postId" element={<BlogPost />} />
              <Route path="pl/kontakt" element={<Contact />} />
              
              {/* Redirects for SEO */}
              <Route path="about-us" element={<Navigate to="/en/about-us" replace />} />
              <Route path="companies" element={<Navigate to="/en/companies" replace />} />
              <Route path="innovation" element={<Navigate to="/en/innovation" replace />} />
              <Route path="innovation-and-quality" element={<Navigate to="/en/innovation-and-quality" replace />} />
              <Route path="contact" element={<Navigate to="/en/contact" replace />} />
              
              {/* Polish SEO redirects */}
              <Route path="o-nas" element={<Navigate to="/pl/o-nas" replace />} />
              <Route path="firmy" element={<Navigate to="/pl/firmy" replace />} />
              <Route path="innowacje" element={<Navigate to="/pl/innowacje" replace />} />
              <Route path="innowacje-i-jakosc" element={<Navigate to="/pl/innowacje-i-jakosc" replace />} />
              <Route path="kontakt" element={<Navigate to="/pl/kontakt" replace />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
