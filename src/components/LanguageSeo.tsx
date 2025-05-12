
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Component for adding hreflang meta tags to support SEO for multilingual sites
 */
const LanguageSeo = () => {
  const location = useLocation();
  const { getLocalizedPath } = useLanguage();
  
  useEffect(() => {
    // Get the current URL without query parameters
    const path = location.pathname;
    
    // Create the full URLs for all languages
    const baseUrl = window.location.origin;
    const italianUrl = `${baseUrl}${getLocalizedPath(path).replace(/\/en\/?/, '/').replace(/\/pl\/?/, '/')}`;
    const englishUrl = `${baseUrl}${getLocalizedPath(path).replace(/^\/?/, '/en/').replace(/\/pl\/?/, '/en/')}`;
    const polishUrl = `${baseUrl}${getLocalizedPath(path).replace(/^\/?/, '/pl/').replace(/\/en\/?/, '/pl/')}`;
    
    // Remove any existing hreflang link tags
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());
    
    // Create and add the new link tags
    const italianLink = document.createElement('link');
    italianLink.rel = 'alternate';
    italianLink.hreflang = 'it';
    italianLink.href = italianUrl;
    document.head.appendChild(italianLink);
    
    const englishLink = document.createElement('link');
    englishLink.rel = 'alternate';
    englishLink.hreflang = 'en';
    englishLink.href = englishUrl;
    document.head.appendChild(englishLink);
    
    const polishLink = document.createElement('link');
    polishLink.rel = 'alternate';
    polishLink.hreflang = 'pl';
    polishLink.href = polishUrl;
    document.head.appendChild(polishLink);
    
    // Add x-default link (usually points to the main language or a language selector)
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = italianUrl; // Using Italian as the default
    document.head.appendChild(defaultLink);
    
    return () => {
      // Clean up when component unmounts
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    };
  }, [location.pathname, getLocalizedPath]);
  
  return null; // This component doesn't render anything
};

export default LanguageSeo;
