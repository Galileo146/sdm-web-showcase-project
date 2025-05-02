
import { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  hasCarousel?: boolean;
  carouselImages?: string[];
}

const TimelineItem = ({
  year,
  title,
  description,
  image,
  hasCarousel = false,
  carouselImages = []
}: TimelineItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left side: Image */}
      <div className="md:w-1/2">
        {hasCarousel ? (
          <Carousel opts={{
            align: "center",
            loop: true
          }} className="w-full">
            <CarouselContent>
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="overflow-hidden rounded-lg">
                    <img src={img} alt={`Timeline image ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        ) : (
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        )}
      </div>
      
      {/* Right side: Text content */}
      <div className="md:w-1/2 md:pl-6">
        <div className="bg-white p-6 rounded-lg relative">
          <div className="absolute -top-4 left-6">
            <div className="bg-sdm-red text-white text-lg font-bold py-1 px-4 rounded-md">
              {year}
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      year: "2024",
      title: "Espansione nei Processi Speciali",
      description: "SDM Group espande ulteriormente le proprie capacità produttive con l'introduzione di nuovi processi speciali per trattamenti superficiali e finiture di alta precisione, rafforzando la propria offerta nel settore aerospaziale.",
      image: "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png",
    },
    {
      year: "2023",
      title: "SDM Polska Sp. z o.o.",
      description: "Inaugurazione della nuova sede in Polonia, ampliando la presenza europea del gruppo e rafforzando la capacità produttiva per servire meglio i clienti dell'Europa centrale e orientale.",
      image: "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png",
      hasCarousel: true,
      carouselImages: [
        "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png", 
        "/lovable-uploads/9409e7b2-8adf-4abe-8fba-1dd665c97c7f.png"
      ]
    },
    {
      year: "2021",
      title: "Nuove frontiere nella produzione",
      description: "Implementazione di tecnologie avanzate di Industria 4.0 e automazione dei processi produttivi, con significativi investimenti in macchinari a controllo numerico di ultima generazione.",
      image: "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png",
    },
    {
      year: "2012",
      title: "Espansione Internazionale",
      description: "SDM Group avvia il processo di internazionalizzazione con l'apertura delle prime partnership strategiche nei mercati europei, ponendo le basi per la futura crescita globale dell'azienda.",
      image: "/lovable-uploads/ba1d52b8-220a-48ce-812c-40e0bdbe4ca6.png",
      hasCarousel: true,
      carouselImages: [
        "/lovable-uploads/ba1d52b8-220a-48ce-812c-40e0bdbe4ca6.png", 
        "/lovable-uploads/e2e4b026-4a27-4bab-98de-3ce3a87a2a3d.png"
      ]
    }
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
    <section className="py-16">
      <div className="container-wide">
        {/* Timeline Title with Description */}
        <div className="flex flex-col md:flex-row mb-16 gap-10">
          <div className="md:w-1/3 flex items-start">
            <div>
              <h2 className="text-3xl font-bold">LA NOSTRA</h2>
              <h2 className="text-3xl font-bold">STORIA</h2>
            </div>
          </div>
          
          <div className="md:w-2/3 relative pl-6 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sdm-red"></div>
            <p className="text-gray-700 leading-relaxed">
              La visione di SDM Group è quella di diventare il partner preferito per le soluzioni di ingegneria e produzione nei settori aerospaziali e automobilistica, attraverso l'innovazione continua e l'eccellenza operativa. 
              Puntiamo a creare valore sostenibile per i nostri clienti, dipendenti e la comunità, mantenendo i più alti standard di qualità e responsabilità ambientale.
            </p>
          </div>
        </div>
        
        {/* Timeline Items in Carousel */}
        <Carousel 
          opts={{
            align: "center"
          }} 
          className="w-full" 
          setApi={setApi}
        >
          <CarouselContent>
            {timelineItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <TimelineItem 
                  year={item.year} 
                  title={item.title} 
                  description={item.description} 
                  image={item.image} 
                  hasCarousel={item.hasCarousel} 
                  carouselImages={item.carouselImages}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation arrows on sides */}
          <div className="hidden absolute top-1/2 -translate-y-1/2 justify-between w-full px-4 md:flex">
            <CarouselPrevious className="relative left-[-40px] h-10 w-10 rounded-full shadow-md border-0 bg-white hover:bg-gray-100" />
            <CarouselNext className="relative right-[-40px] h-10 w-10 rounded-full shadow-md border-0 bg-white hover:bg-gray-100" />
          </div>
          
          {/* Mobile controls */}
          <div className="flex md:hidden justify-between items-center mt-8">
            <CarouselPrevious className="static transform-none h-10 w-10 rounded-full shadow-md border-0 bg-white hover:bg-gray-100" />
            <CarouselNext className="static transform-none h-10 w-10 rounded-full shadow-md border-0 bg-white hover:bg-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TimelineSection;
