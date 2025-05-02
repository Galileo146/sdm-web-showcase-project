
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ITALIANO");
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const languages = [
    { code: "IT", label: "Italiano" },
    { code: "EN", label: "English" },
    { code: "PL", label: "Polski" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 w-full z-50" style={{ 
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
                <span>{currentLanguage}</span>
                <span className="text-sdm-red">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-black/90 shadow-lg rounded-md py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setCurrentLanguage(lang.label.toUpperCase())}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Link 
              to="/chi-siamo" 
              className={`text-white px-4 py-2 transition-colors ${isActive('/chi-siamo') ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              CHI SIAMO
            </Link>
            <Link 
              to="/aziende" 
              className={`text-white px-4 py-2 transition-colors ${isActive('/aziende') ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              LE AZIENDE
            </Link>
          </div>
          
          {/* Logo (centered) */}
          <Link to="/" className="flex items-center justify-center">
            <img 
              src="public/lovable-uploads/c9aca676-dbe8-4863-8b29-105461861b9f.png" 
              alt="SDM Logo" 
              className="h-12"
            />
          </Link>
          
          {/* Right side nav (desktop) */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <Link 
              to="/innovazione" 
              className={`text-white px-4 py-2 transition-colors ${isActive('/innovazione') ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              INNOVAZIONE E QUALITÀ
            </Link>
            <Link 
              to="/blog" 
              className={`text-white px-4 py-2 transition-colors ${isActive('/blog') ? 'border-b-2 border-sdm-red' : 'hover:text-gray-300'}`}
            >
              NEWS
            </Link>
            <Link 
              to="#contattaci" 
              className="border border-sdm-red text-white px-5 py-2 rounded flex items-center hover:border-red-400 transition-colors"
            >
              CONTATTACI
              <ArrowRight size={16} className="ml-2 text-sdm-red" />
            </Link>
          </div>
          
          {/* Placeholder for mobile */}
          <div className="md:hidden">
            <Link to="#contattaci" className="text-white border border-sdm-red px-3 py-1 rounded text-sm flex items-center">
              CONTATTACI
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
                    className={`px-2 py-1 mx-1 ${currentLanguage === lang.label.toUpperCase() ? 'bg-sdm-red' : 'bg-gray-800'} rounded`}
                    onClick={() => setCurrentLanguage(lang.label.toUpperCase())}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
              <Link to="/chi-siamo" className="text-white hover:text-gray-300 transition-colors">CHI SIAMO</Link>
              <Link to="/aziende" className="text-white hover:text-gray-300 transition-colors">LE AZIENDE</Link>
              <Link to="/innovazione" className="text-white hover:text-gray-300 transition-colors">INNOVAZIONE E QUALITÀ</Link>
              <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">NEWS</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
