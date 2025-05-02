
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  hasCarousel?: boolean;
  carouselImages?: string[];
  isLeft?: boolean;
}

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  image, 
  hasCarousel = false, 
  carouselImages = [], 
  isLeft = false 
}: TimelineItemProps) => {
  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}>
      <div className="md:w-1/2 mb-6 md:mb-0">
        {hasCarousel ? (
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`Timeline image ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
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
          <div className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className={`flex items-center justify-center md:justify-${isLeft ? 'start' : 'end'} mb-4`}>
          <div className="bg-sdm-red text-white text-2xl font-bold py-2 px-5 rounded-md">
            {year}
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
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
      isLeft: true
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
      isLeft: true
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

  return (
    <section className="py-16">
      <div className="container-wide">
        {/* Timeline Title */}
        <div className="flex items-center mb-16">
          <div className="w-1 bg-sdm-red h-12 mr-4"></div>
          <h2 className="text-3xl font-bold">STORIA</h2>
        </div>
        
        {/* Timeline Items */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Timeline content */}
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              image={item.image}
              hasCarousel={item.hasCarousel}
              carouselImages={item.carouselImages}
              isLeft={item.isLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
