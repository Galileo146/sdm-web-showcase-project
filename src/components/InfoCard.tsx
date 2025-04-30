
import { Link } from "react-router-dom";

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const InfoCard = ({ image, title, description, link }: InfoCardProps) => {
  return (
    <Link 
      to={link}
      className="group block bg-white shadow-md rounded-lg overflow-hidden card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium">Scopri di più</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default InfoCard;
