
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Language = "IT" | "EN" | "PL";
type LanguageLabels = { [key in Language]: string };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languageLabels: LanguageLabels;
  isEnglishRoute: (path: string) => boolean;
  isPolishRoute: (path: string) => boolean;
  getLocalizedPath: (path: string) => string;
}

const defaultLanguage: Language = "IT";

export const languageLabels: LanguageLabels = {
  IT: "Italiano",
  EN: "English",
  PL: "Polski"
};

// Create a default context to avoid the "undefined" error
const defaultContextValue: LanguageContextType = {
  language: defaultLanguage,
  setLanguage: () => {},
  languageLabels,
  isEnglishRoute: () => false,
  isPolishRoute: () => false,
  getLocalizedPath: (path) => path
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is an English route
  const isEnglishRoute = (path: string): boolean => {
    return path.startsWith("/en");
  };

  // Check if current route is a Polish route
  const isPolishRoute = (path: string): boolean => {
    return path.startsWith("/pl");
  };

  // Initialize language based on route on first load
  useEffect(() => {
    try {
      const isEnRoute = isEnglishRoute(location.pathname);
      const isPlRoute = isPolishRoute(location.pathname);
      console.log(`LanguageProvider: Initial path ${location.pathname}, setting language to ${isEnRoute ? 'EN' : isPlRoute ? 'PL' : 'IT'}`);
      
      if (isEnRoute) {
        setLanguage("EN");
      } else if (isPlRoute) {
        setLanguage("PL");
      } else {
        setLanguage("IT");
      }
    } catch (error) {
      console.error("Error in language initialization:", error);
    }
  }, [location.pathname]); // Update when location changes

  // Convert between routes with and without /en or /pl prefix
  const getLocalizedPath = (path: string): string => {
    try {
      // Special case for homepage
      if (path === "/") {
        return language === "EN" ? "/en" : language === "PL" ? "/pl" : "/";
      }
      
      // Special case for language homepage
      if (path === "/en" || path === "/pl") {
        return language === "EN" ? "/en" : language === "PL" ? "/pl" : "/";
      }
      
      // Handle normal routes
      if (language === "EN") {
        // If already an English route, return as is
        if (path.startsWith("/en/")) return path;
        if (path === "/en") return path;
        // Remove Polish prefix if present
        if (path.startsWith("/pl/")) {
          path = path.substring(3);
        }
        // Add /en prefix to route
        return path === "/" ? "/en" : `/en${path}`;
      } else if (language === "PL") {
        // If already a Polish route, return as is
        if (path.startsWith("/pl/")) return path;
        if (path === "/pl") return path;
        // Remove English prefix if present
        if (path.startsWith("/en/")) {
          path = path.substring(3);
        }
        // Add /pl prefix to route
        return path === "/" ? "/pl" : `/pl${path}`;
      } else {
        // If this is an English or Polish route, remove the prefix
        if (path.startsWith("/en/")) {
          return path.substring(3);
        }
        if (path === "/en") {
          return "/";
        }
        if (path.startsWith("/pl/")) {
          return path.substring(3);
        }
        if (path === "/pl") {
          return "/";
        }
        return path;
      }
    } catch (error) {
      console.error("Error in getLocalizedPath:", error);
      return path; // Return original path as fallback
    }
  };

  // Effect to navigate when language changes
  useEffect(() => {
    if (!navigate || !location) return; // Early return if navigate or location are not available
    
    try {
      const currentPath = location.pathname;
      const isCurrentEnglish = isEnglishRoute(currentPath);
      const isCurrentPolish = isPolishRoute(currentPath);
      
      // Only navigate if language doesn't match current route type
      if (
        (language === "EN" && !isCurrentEnglish) || 
        (language === "IT" && (isCurrentEnglish || isCurrentPolish)) ||
        (language === "PL" && !isCurrentPolish)
      ) {
        const localizedPath = getLocalizedPath(currentPath);
        console.log(`Language changed to ${language}, navigating from ${currentPath} to ${localizedPath}`);
        navigate(localizedPath, { replace: true });
      }
    } catch (error) {
      console.error("Error navigating after language change:", error);
    }
  }, [language, location, navigate]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        languageLabels,
        isEnglishRoute,
        isPolishRoute,
        getLocalizedPath
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
