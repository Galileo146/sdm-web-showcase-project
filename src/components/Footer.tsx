
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Brand + Mission + Social */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/9cd2aba0-efe4-405f-921b-c42cc939bda6.png" 
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
                className="bg-transparent border border-sdm-red text-white px-6 hover:bg-sdm-red transition-colors"
              >
                INVIA
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
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
