
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("IT");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const languages = [
    { code: "IT", label: "Italiano" },
    { code: "EN", label: "English" },
    { code: "PL", label: "Polski" }
  ];

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop nav left side */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>{currentLanguage}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setCurrentLanguage(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Link to="/" className="hover:text-sdm-red transition-colors">Home</Link>
            <Link to="/aziende" className="hover:text-sdm-red transition-colors">Aziende</Link>
          </div>
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src="https://via.placeholder.com/120x40?text=SDM+LOGO" alt="SDM Logo" className="h-10" />
          </Link>
          
          {/* Desktop nav right side */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/innovazione" className="hover:text-sdm-red transition-colors">Innovazione e Qualità</Link>
            <Link to="/blog" className="hover:text-sdm-red transition-colors">Blog</Link>
            <Link to="#contattaci" className="btn btn-outline px-4 py-2 rounded">Contattaci</Link>
          </div>
          
          {/* Placeholder for mobile */}
          <div className="md:hidden">
            <Link to="#contattaci" className="btn btn-outline px-3 py-1 rounded text-sm">Contattaci</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`px-2 py-1 ${currentLanguage === lang.code ? 'bg-sdm-red text-white' : 'bg-gray-100'} rounded`}
                    onClick={() => setCurrentLanguage(lang.code)}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
              <Link to="/" className="hover:text-sdm-red transition-colors">Home</Link>
              <Link to="/aziende" className="hover:text-sdm-red transition-colors">Aziende</Link>
              <Link to="/innovazione" className="hover:text-sdm-red transition-colors">Innovazione e Qualità</Link>
              <Link to="/blog" className="hover:text-sdm-red transition-colors">Blog</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
