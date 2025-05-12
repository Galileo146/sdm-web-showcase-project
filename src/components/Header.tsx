
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import useTranslation from "../hooks/useTranslation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, languageLabels, getLocalizedPath } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const languages = [
    { code: "IT", label: languageLabels.IT },
    { code: "EN", label: languageLabels.EN },
    { code: "PL", label: languageLabels.PL }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (lang: "IT" | "EN" | "PL") => {
    setLanguage(lang);
    // Navigate to the equivalent page in the selected language
    const localizedPath = getLocalizedPath(location.pathname);
    navigate(localizedPath);
  };

  return (
    <header className="fixed top-0 w-full z-50" style={{ 
      background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.65))"
    }}>
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Left side nav (desktop) */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
            <div className="relative group flex items-center">
              <button className="flex items-center space-x-2 text-white">
                <Globe size={20} className="text-white mr-2" />
                <span>{language}</span>
                <span className="text-sdm-red">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-black/90 shadow-lg rounded-md py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                    onClick={() => handleLanguageChange(lang.code as "IT" | "EN" | "PL")}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Link 
              to={getLocalizedPath("/chi-siamo")} 
              className={`text-white px-4 py-2 transition-colors ${isActive(getLocalizedPath("/chi-siamo")) ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              {t("navLinks.aboutUs")}
            </Link>
            <Link 
              to={getLocalizedPath("/aziende")} 
              className={`text-white px-4 py-2 transition-colors ${isActive(getLocalizedPath("/aziende")) ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              {t("navLinks.companies")}
            </Link>
          </div>
          
          {/* Logo (centered) */}
          <Link to={getLocalizedPath("/")} className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/72be639c-a35b-4b78-a0bd-9eadcc9e6299.png" 
              alt="SDM Logo" 
              className="h-12"
            />
          </Link>
          
          {/* Right side nav (desktop) */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <Link 
              to={getLocalizedPath("/innovazione")} 
              className={`text-white px-4 py-2 transition-colors ${isActive(getLocalizedPath("/innovazione")) ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              {t("navLinks.innovation")}
            </Link>
            <Link 
              to={getLocalizedPath("/blog")}
              className={`text-white px-4 py-2 transition-colors ${isActive(getLocalizedPath("/blog")) ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              {t("navLinks.news")}
            </Link>
            <Link 
              to={getLocalizedPath("/contatti")} 
              className="border border-sdm-red text-white px-5 py-2 rounded flex items-center hover:border-red-400 transition-colors"
            >
              {t("navLinks.contact")}
              <ArrowRight size={16} className="ml-2 text-sdm-red" />
            </Link>
          </div>
          
          {/* Placeholder for mobile */}
          <div className="md:hidden">
            <Link to={getLocalizedPath("/contatti")} className="text-white border border-sdm-red px-3 py-1 rounded text-sm flex items-center">
              {t("navLinks.contact")}
              <ArrowRight size={12} className="ml-1 text-sdm-red" />
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 mt-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center mb-2 text-white">
                <Globe size={16} className="mr-2" />
                <span className="mr-2">LINGUA:</span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`px-2 py-1 mx-1 ${language === lang.code ? 'bg-sdm-red' : 'bg-gray-800'} rounded`}
                    onClick={() => handleLanguageChange(lang.code as "IT" | "EN" | "PL")}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
              <Link to={getLocalizedPath("/chi-siamo")} className="text-white hover:text-gray-300 transition-colors">
                {t("navLinks.aboutUs")}
              </Link>
              <Link to={getLocalizedPath("/aziende")} className="text-white hover:text-gray-300 transition-colors">
                {t("navLinks.companies")}
              </Link>
              <Link to={getLocalizedPath("/innovazione")} className="text-white hover:text-gray-300 transition-colors">
                {t("navLinks.innovation")}
              </Link>
              <Link to={getLocalizedPath("/blog")} className="text-white hover:text-gray-300 transition-colors">
                {t("navLinks.news")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
