
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InfoCardProps {
  image: string;
  title: string;
  link: string;
}

const InfoCard = ({ image, title, link }: InfoCardProps) => {
  return (
    <Link 
      to={link}
      className="group block relative rounded-lg overflow-hidden h-[300px] transition-all duration-300 hover:scale-105 shadow-md"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* Title and Arrow */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  );
};

export default InfoCard;
