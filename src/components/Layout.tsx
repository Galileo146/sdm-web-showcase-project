
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSeo from "./LanguageSeo";

const Layout = () => {
  const location = useLocation();
  const { setLanguage, isEnglishRoute, isPolishRoute } = useLanguage();
  
  // Set language based on route when location changes
  useEffect(() => {
    try {
      const isEnRoute = isEnglishRoute(location.pathname);
      const isPlRoute = isPolishRoute(location.pathname);
      
      console.log(`Layout detected path: ${location.pathname}, setting language to ${isEnRoute ? 'EN' : isPlRoute ? 'PL' : 'IT'}`);
      
      if (isEnRoute) {
        setLanguage("EN");
      } else if (isPlRoute) {
        setLanguage("PL");
      } else {
        setLanguage("IT");
      }
    } catch (error) {
      console.error("Error setting language in Layout:", error);
    }
  }, [location.pathname, isEnglishRoute, isPolishRoute, setLanguage]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <LanguageSeo />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
