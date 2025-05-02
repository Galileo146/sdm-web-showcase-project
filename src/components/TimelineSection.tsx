import { useState, useEffect, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

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
    <div className="story-card">
      {/* Left side: Image */}
      <div className="image-container">
        {hasCarousel ? (
          <Carousel opts={{
            align: "center",
            loop: true
          }} className="w-full h-full">
            <CarouselContent className="h-full">
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="h-full">
                  <div className="overflow-hidden h-full">
                    <img src={img} alt={`Timeline image ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="overflow-hidden h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      
      {/* Right side: Text content */}
      <div className="content">
        <span className="year-tag inline-block bg-sdm-red text-white font-bold py-1.5 px-3 rounded-md text-base">
          {year}
        </span>
        <h3 className="event-title text-xl font-semibold text-black mt-3">
          {title}
        </h3>
        <p className="event-description text-base leading-relaxed text-gray-800 mt-2">
          {description}
        </p>
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
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year} 
              title={item.title} 
              description={item.description} 
              image={item.image} 
              hasCarousel={item.hasCarousel} 
              carouselImages={item.carouselImages}
            />
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .story-card {
          height: 370px;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          overflow: hidden;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
        }
        
        .story-card .image-container {
          height: 100%;
          width: 50%;
          overflow: hidden;
          border-radius: 8px 0 0 8px;
        }
        
        .story-card .content {
          height: 100%;
          width: 50%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .year-tag {
          display: inline-block;
          padding: 4px 10px;
          width: auto;
          min-width: unset;
          border-radius: 4px;
        }
        
        @media (max-width: 768px) {
          .story-card {
            flex-direction: column;
            height: auto;
          }
          
          .story-card .image-container {
            width: 100%;
            height: 250px;
            border-radius: 8px 8px 0 0;
          }
          
          .story-card .content {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
