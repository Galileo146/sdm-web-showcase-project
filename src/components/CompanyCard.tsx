
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  images: string[];
}

interface CompanyCardProps {
  company: Company;
  reversed: boolean;
  index: number;
}

const CompanyCard = ({ company, reversed, index }: CompanyCardProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className={`mb-24 last:mb-0`}>
      <div className={`grid grid-cols-1 ${reversed ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-12 items-center`}>
        {/* Swap column order based on reversed prop */}
        <div className={`${reversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
          <div className="flex items-start mb-6">
            {/* Numbered circle */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sdm-red text-white text-xl font-bold mr-4 flex-shrink-0">
              {index}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between w-full">
              <h3 className="text-2xl font-bold">{company.name}</h3>
              <img 
                src={company.logo} 
                alt={`${company.name} Logo`} 
                className="mt-3 md:mt-0 h-10"
              />
            </div>
          </div>
          
          <p className="text-gray-700 mb-8">
            {company.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="text-sdm-red font-medium hover:underline flex items-center">
              SCOPRI LE NOSTRE CAPABILITIES
              <ArrowRight size={16} className="ml-2" />
            </button>
            
            <button className="border border-sdm-red text-sdm-red px-5 py-2 rounded flex items-center hover:bg-sdm-red/10 transition-colors">
              VISITA IL NOSTRO SITO WEB
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        
        {/* Carousel Section */}
        <div className={`${reversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
          <div className="relative">
            <Carousel className="w-full mb-4" selectedIndex={activeImage}>
              <CarouselContent>
                {company.images.map((image, i) => (
                  <CarouselItem key={i}>
                    <img 
                      src={image} 
                      alt={`${company.name} Image ${i+1}`} 
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {company.images.map((image, i) => (
                <button 
                  key={i} 
                  onClick={() => handleThumbnailClick(i)}
                  className={`overflow-hidden rounded-lg ${activeImage === i ? 'ring-2 ring-sdm-red' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${i+1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
