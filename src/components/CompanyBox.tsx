
import { Link } from "react-router-dom";

interface CompanyBoxProps {
  image: string;
  logo: string;
  name: string;
  link: string;
}

const CompanyBox = ({ image, logo, name, link }: CompanyBoxProps) => {
  return (
    <Link to={link} className="relative overflow-hidden rounded-lg h-80 block group">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        {/* Logo at top */}
        <div className="flex justify-center">
          <img src={logo} alt={`${name} logo`} className="h-12 object-contain" />
        </div>
        
        {/* Bottom text */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">{name}</h3>
          <p className="text-sm text-gray-200 transition-all group-hover:text-white">
            SCOPRI LE NOSTRE CAPABILITIES →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyBox;
