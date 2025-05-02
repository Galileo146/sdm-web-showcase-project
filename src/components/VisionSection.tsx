
import { useState, useEffect, useCallback } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  const images = [
    "/lovable-uploads/601770b6-d8bf-4c46-a346-2424892f2fa2.png",
    "/lovable-uploads/f2d4595c-4e0c-48d8-b450-d2169599ab57.png", 
    "/lovable-uploads/8821f0dd-5ff9-4682-8189-c35136f86ca7.png", 
    "/lovable-uploads/218ef476-6c90-486a-800d-2b10c26f6fb4.png", 
    "/lovable-uploads/121f3c66-9407-464d-9e7d-e88d6a06b4a3.png",
    "/lovable-uploads/35c28c7b-c407-43d8-b274-0b9e577269a9.png"
  ];
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        {/* Vision Title and Text Section */}
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">LA NOSTRA VISION</h2>
          </div>
          
          <div className="md:w-2/3 relative pl-6 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sdm-red"></div>
            <p className="text-gray-700 leading-relaxed">
              La visione di SDM Group è quella di diventare il partner preferito per le soluzioni di ingegneria e produzione nei settori aerospaziali e automobilistica, attraverso l'innovazione continua e l'eccellenza operativa. 
              Puntiamo a creare valore sostenibile per i nostri clienti, dipendenti e la comunità, mantenendo i più alti standard di qualità e responsabilità ambientale.
            </p>
          </div>
        </div>

        {/* Image Carousel with Focus Effect */}
        <div className="mt-10">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }} 
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/3 lg:basis-1/3 transition-all duration-300"
                >
                  <div className={cn(
                    "overflow-hidden rounded-[20px] transition-all duration-300",
                    current === index 
                      ? "h-[400px] scale-100 opacity-100" 
                      : "h-[340px] scale-90 opacity-70"
                  )}>
                    <img 
                      src={image} 
                      alt={`Vision image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom carousel navigation */}
            <div className="flex justify-between items-center mt-6">
              <CarouselPrevious 
                className="static transform-none border-0 bg-transparent hover:bg-gray-100 h-10 w-10 rounded-full shadow-md"
              />
              
              {/* Dot indicators */}
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-3 h-3 p-0 rounded-full",
                      current === index ? "bg-sdm-red" : "bg-gray-300"
                    )}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
              
              <CarouselNext 
                className="static transform-none border-0 bg-transparent hover:bg-gray-100 h-10 w-10 rounded-full shadow-md"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
