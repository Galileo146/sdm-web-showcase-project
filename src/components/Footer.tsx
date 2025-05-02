
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Globe, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-12">
      <div className="container-wide">
        {/* Top Section - Brand + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left Column - Brand + Mission + Social */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c9aca676-dbe8-4863-8b29-105461861b9f.png" 
                alt="SDM Group Logo" 
                className="h-14"
              />
            </div>
            
            {/* Mission Text */}
            <p className="text-gray-300 text-base max-w-md">
              La nostra missione è combinare tecnologia e innovazione per creare soluzioni 
              sostenibili che migliorano la vita delle persone.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-sdm-red rounded-full hover:bg-red-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-sdm-red rounded-full hover:bg-red-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-sdm-red rounded-full hover:bg-red-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-sdm-red rounded-full hover:bg-red-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-3">NEWSLETTER</h3>
              <p className="text-gray-300 mb-6">
                Iscriviti per rimanere aggiornato sulle nostre novità
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Inserisci email" 
                className="bg-[#111] border-[#333] focus:border-sdm-red text-white"
              />
              <Button 
                className="bg-sdm-red hover:bg-red-700 text-white transition-colors"
              >
                INVIA
              </Button>
            </div>
          </div>
        </div>
        
        {/* Four Column Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800 mb-12">
          {/* Column 1 - Our Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">LA NOSTRA AZIENDA</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chi-siamo" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  La nostra storia
                </Link>
              </li>
              <li>
                <Link to="/aziende" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Le nostre aziende
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Aree di business
                </Link>
              </li>
            </ul>
            
            {/* Language Selector */}
            <div className="mt-6 relative group">
              <button className="flex items-center text-white">
                <Globe className="w-5 h-5 text-sdm-red mr-2" />
                <span>ITALIANO</span>
                <ChevronDown className="w-4 h-4 text-sdm-red ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-black/90 shadow-lg rounded-md py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  Italiano
                </button>
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  Polski
                </button>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">RISORSE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Certificazioni
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">CONTATTI</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#contattaci" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Contattaci
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Supporto
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  Lavora con noi
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">DOVE SIAMO</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>Indirizzo:</strong><br />
                  Strada del Francese 153/A, 10156, Torino TO – Italy
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>Telefono:</strong><br />
                  +39 011 909 45 36
                </span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>Email:</strong><br />
                  info@sdmtooling.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SDM Group. Tutti i diritti riservati.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-sdm-red transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-sdm-red transition-colors">Cookie Policy</Link>
            <Link to="#" className="hover:text-sdm-red transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
