
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">La nostra azienda</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-sdm-red transition-colors">Home</Link></li>
              <li><Link to="/aziende" className="hover:text-sdm-red transition-colors">Chi siamo</Link></li>
              <li><Link to="/innovazione" className="hover:text-sdm-red transition-colors">Innovazione e Qualità</Link></li>
              <li><Link to="/blog" className="hover:text-sdm-red transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Risorse</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-sdm-red transition-colors">Certificazioni</Link></li>
              <li><Link to="#" className="hover:text-sdm-red transition-colors">Processi speciali</Link></li>
              <li><Link to="#" className="hover:text-sdm-red transition-colors">Ricerca e sviluppo</Link></li>
              <li><Link to="#" className="hover:text-sdm-red transition-colors">Lavora con noi</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+39 011 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@sdmgroup.it" className="hover:text-sdm-red transition-colors">info@sdmgroup.it</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Seguici</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-sdm-red transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-sdm-red transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-sdm-red transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dove siamo</h3>
            <ul className="space-y-2">
              <li>
                <p className="font-medium">SDM Torino</p>
                <p>Via Example, 123 - 10100 Torino (TO)</p>
              </li>
              <li>
                <p className="font-medium">SDM Rivoli</p>
                <p>Via Sample, 456 - 10098 Rivoli (TO)</p>
              </li>
              <li>
                <p className="font-medium">SDM Polska</p>
                <p>ul. Przemysłowa, 789 - 20-001 Lublin, Polonia</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-10 pt-10">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4 text-center">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-center">Iscriviti alla nostra newsletter per ricevere aggiornamenti</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Il tuo indirizzo email" 
                className="flex-grow px-4 py-2 bg-gray-800 rounded-l focus:outline-none focus:ring-1 focus:ring-sdm-red"
              />
              <button className="bg-sdm-red px-6 py-2 rounded-r hover:bg-red-700 transition-colors">
                Invia
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
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
