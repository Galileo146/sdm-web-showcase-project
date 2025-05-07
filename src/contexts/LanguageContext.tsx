
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Language = "IT" | "EN";
type LanguageLabels = { [key in Language]: string };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languageLabels: LanguageLabels;
  isEnglishRoute: (path: string) => boolean;
  getLocalizedPath: (path: string) => string;
}

const defaultLanguage: Language = "IT";

export const languageLabels: LanguageLabels = {
  IT: "Italiano",
  EN: "English"
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  languageLabels,
  isEnglishRoute: () => false,
  getLocalizedPath: (path) => path
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize language based on route on first load
  useEffect(() => {
    const isEnRoute = isEnglishRoute(location.pathname);
    setLanguage(isEnRoute ? "EN" : "IT");
  }, []);

  // Check if current route is an English route
  const isEnglishRoute = (path: string): boolean => {
    return path.startsWith("/en");
  };

  // Convert between routes with and without /en prefix
  const getLocalizedPath = (path: string): string => {
    // Special case for homepage
    if (path === "/") {
      return language === "EN" ? "/en" : "/";
    }
    
    // Special case for English homepage
    if (path === "/en") {
      return language === "EN" ? "/en" : "/";
    }
    
    // Handle normal routes
    if (language === "EN") {
      // If already an English route, return as is
      if (path.startsWith("/en/")) return path;
      if (path === "/en") return path;
      // Add /en/ prefix to route
      return `/en${path}`;
    } else {
      // If this is an English route, remove the /en prefix
      if (path.startsWith("/en/")) {
        return path.substring(3);
      }
      if (path === "/en") {
        return "/";
      }
      return path;
    }
  };

  // Effect to navigate when language changes
  useEffect(() => {
    const currentPath = location.pathname;
    const isCurrentEnglish = isEnglishRoute(currentPath);
    
    // Only navigate if language doesn't match current route type
    if ((language === "EN" && !isCurrentEnglish) || (language === "IT" && isCurrentEnglish)) {
      navigate(getLocalizedPath(currentPath));
    }
  }, [language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        languageLabels,
        isEnglishRoute,
        getLocalizedPath
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
