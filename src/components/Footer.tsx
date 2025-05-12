
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Globe, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import useTranslation from "../hooks/useTranslation";

const Footer = () => {
  const { language, setLanguage, languageLabels, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageChange = (lang: "IT" | "EN" | "PL") => {
    setLanguage(lang);
    // The language context will handle the navigation in Layout
  };
  
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
                src="/lovable-uploads/a637e3bd-3c07-44f2-9444-0a98589d4c9c.png" 
                alt="SDM Group Logo" 
                className="h-14"
              />
            </div>
            
            {/* Mission Text */}
            <p className="text-gray-300 text-base max-w-md">
              {t("footer.mission")}
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
              <h3 className="text-lg font-bold mb-3">{t("footer.newsletter.title")}</h3>
              <p className="text-gray-300 mb-6">
                {t("footer.newsletter.description")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder={t("footer.newsletter.placeholder")}
                className="bg-[#111] border-[#333] focus:border-sdm-red text-white"
              />
              <Button 
                className="bg-sdm-red hover:bg-red-700 text-white transition-colors"
              >
                {t("footer.newsletter.button")}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Four Column Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800 mb-12">
          {/* Column 1 - Our Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.company.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath("/chi-siamo")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.company.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/aziende")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.company.companies")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/innovazione-e-qualita")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.company.innovation")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/blog")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.company.news")}
                </Link>
              </li>
            </ul>
            
            {/* Language Selector */}
            <div className="mt-6 relative group">
              <button className="flex items-center text-white">
                <Globe className="w-5 h-5 text-sdm-red mr-2" />
                <span>
                  {language === "IT" ? "ITALIANO" : language === "EN" ? "ENGLISH" : "POLSKI"}
                </span>
                <ChevronDown className="w-4 h-4 text-sdm-red ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-black/90 shadow-lg rounded-md py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button 
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  onClick={() => handleLanguageChange("IT")}
                >
                  {languageLabels.IT}
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  onClick={() => handleLanguageChange("EN")}
                >
                  {languageLabels.EN}
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  onClick={() => handleLanguageChange("PL")}
                >
                  {languageLabels.PL}
                </button>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.resources.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.resources.certifications")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/blog")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.resources.blog")}
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.resources.faq")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contact.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath("/contatti")} className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.contact.contactUs")}
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.contact.support")}
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center hover:text-sdm-red transition-colors">
                  <span className="text-sdm-red mr-2">•</span>
                  {t("footer.contact.careers")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.location.title")}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>{t("footer.location.address")}:</strong><br />
                  Strada del Francese 153/A, 10156, Torino TO – Italy
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>{t("footer.location.phone")}:</strong><br />
                  +39 011 909 45 36
                </span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-sdm-red flex-shrink-0 mr-2 mt-1" />
                <span>
                  <strong>{t("footer.location.email")}:</strong><br />
                  info@sdmtooling.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SDM Group. {t("footer.copyright")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-sdm-red transition-colors">{t("footer.links.privacy")}</Link>
            <Link to="#" className="hover:text-sdm-red transition-colors">{t("footer.links.cookie")}</Link>
            <Link to="#" className="hover:text-sdm-red transition-colors">{t("footer.links.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
