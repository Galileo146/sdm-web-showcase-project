
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { type CarouselApi } from "@/components/ui/carousel";

interface LogoSliderProps {
  className?: string;
}

const LogoSlider = ({ className }: LogoSliderProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || !inView) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api, inView]);

  const logos = [
    {
      src: "/lovable-uploads/23c705d4-6347-45b4-92f7-7ab35f104584.png",
      alt: "MVP Aerospace"
    },
    {
      src: "/lovable-uploads/12532793-bacb-447d-9b93-0f63e3d5a467.png",
      alt: "Collins Aerospace"
    },
    {
      src: "/lovable-uploads/cc332bab-ac9e-40c8-b57f-af1d2c99dbf3.png",
      alt: "AvioAerow"
    },
    {
      src: "/lovable-uploads/7f31167c-5f74-4c61-a09e-ce4ea09b0a3e.png",
      alt: "Leonardo"
    },
    {
      src: "/lovable-uploads/a617eabc-81b0-4d88-8d7a-a0d64ba55246.png",
      alt: "GE Aerospace"
    },
    {
      src: "/lovable-uploads/03d7f2eb-340b-4b40-a4a8-2106a072f153.png",
      alt: "Combustion Research Commission"
    },
    {
      src: "/lovable-uploads/2c49db35-1fc5-48a8-b0cf-9175184c1afa.png",
      alt: "Avio ABC"
    },
    {
      src: "/lovable-uploads/42f45b95-55d9-4663-81b4-2c7bd0c44cb2.png",
      alt: "Leonardo Engines"
    },
    {
      src: "/lovable-uploads/5057d329-0128-4a0a-ba8c-b4f7b68fdd1d.png",
      alt: "Safran"
    },
    {
      src: "/lovable-uploads/77e94150-786b-4bb5-b336-393200a6c06d.png",
      alt: "MASS"
    },
    {
      src: "/lovable-uploads/b57f36a1-2382-43b6-bdc5-de567a395c2c.png",
      alt: "Fly"
    },
    {
      src: "/lovable-uploads/a8c2a739-c10c-44d7-9acd-d4a25a3e4373.png",
      alt: "MA Group"
    },
    {
      src: "/lovable-uploads/d20852b7-9b7e-4b8f-a309-ea4a6a5606b4.png",
      alt: "Kopter"
    },
    {
      src: "/lovable-uploads/7b543d17-d906-4d2c-980a-ff6f2914806b.png",
      alt: "MTU Aero Engines"
    },
    {
      src: "/lovable-uploads/63520b4c-77c1-47e2-ae12-9c22df60c9f4.png",
      alt: "OMA"
    },
    {
      src: "/lovable-uploads/2c7d3c65-9701-4229-959f-6cc582040eed.png",
      alt: "EM Group"
    },
    {
      src: "/lovable-uploads/1fdfb90b-be58-4cf7-9118-62799303ed34.png",
      alt: "Avio Aero"
    },
    {
      src: "/lovable-uploads/d9ad22d5-2726-4bd9-977e-509d6d223d21.png",
      alt: "Leonardo Full"
    },
  ];

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
              <div className="h-20 p-2 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 lg:-left-4 bg-white/50 hover:bg-white" />
        <CarouselNext className="right-0 lg:-right-4 bg-white/50 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default LogoSlider;
