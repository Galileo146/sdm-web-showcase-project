
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

interface TimelineSectionProps {
  title?: string;
  subtitle?: string;
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
        <h3 className="event-title text-xl font-semibold mt-3 mb-2">
          {title}
        </h3>
        <p className="event-description text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const TimelineSection = ({ title, subtitle }: TimelineSectionProps) => {
  // Timeline data
  const timelineItems = [
    {
      year: "2023",
      title: "Espansione nei mercati dell'Est Europa",
      description: "Apertura della sede polacca SDM Polska a Lublin, strategicamente posizionata per servire i mercati dell'Europa orientale e consolidare la presenza internazionale del gruppo.",
      image: "/lovable-uploads/6f2edb7c-0f60-4590-84f9-796b71b6fd01.png",
    },
    {
      year: "2015",
      title: "Investimenti tecnologici avanzati",
      description: "Integrazione di sistemi di produzione di ultima generazione e implementazione di processi Industry 4.0 per migliorare l'efficienza produttiva e garantire i massimi standard di qualità.",
      image: "/lovable-uploads/db39e129-cfbe-4d72-bee6-15a905af8f49.png",
      hasCarousel: true,
      carouselImages: [
        "/lovable-uploads/db39e129-cfbe-4d72-bee6-15a905af8f49.png",
        "/lovable-uploads/6f2edb7c-0f60-4590-84f9-796b71b6fd01.png",
        "/lovable-uploads/eec1228f-68ee-49c9-997f-d9d0c12f1fbf.png"
      ]
    },
    {
      year: "2009",
      title: "Nasce SDM Meccanica di Precisione",
      description: "Fondazione dell'azienda con l'obiettivo di fornire componenti di alta precisione per i settori automotive, aerospaziale e industriale, con un focus sulla qualità e l'innovazione.",
      image: "/lovable-uploads/eec1228f-68ee-49c9-997f-d9d0c12f1fbf.png",
    }
  ];
  
  // Carousel state
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            LA NOSTRA <br /> STORIA
          </h2>
          {subtitle && <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
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
      
      <style>{`
        .story-card {
          height: 450px;
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
