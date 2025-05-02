import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";
const Innovation = () => {
  const certifications = [{
    logo: "/lovable-uploads/d660197a-3274-41b5-8867-d0f1bc5e09d5.png",
    title: "KIWA",
    iso: "EN 9120:2018, AS9100D, JISQ 9100:2016, ISO 9001:2015",
    description: ""
  }, {
    logo: "/lovable-uploads/19c2dcc1-48d3-448a-ac0a-13fb2f133c96.png",
    title: "NADCAP",
    iso: "NADCAP NDT",
    description: "NON DESTRUCTIVE TESTING ACCREDITATION"
  }, {
    logo: "/lovable-uploads/e3fa59c0-f74a-48a5-b483-b72a5d4c6a2f.png",
    title: "NADCAP",
    iso: "NADCAP HT",
    description: "HEAT TREATMENTS ACCREDITATION"
  }, {
    logo: "/lovable-uploads/03f3e236-1bf0-4d4b-893f-446944fdb70b.png",
    title: "MTIC",
    iso: "DIN ISO 14001-2015, DIN ISO 45001-2018",
    description: "SYSTEM CERTIFIED"
  }];

  // Use multiple images for a single innovation instead of multiple innovations
  const innovationImages = ["/lovable-uploads/8ead2349-d6b5-4a0e-a410-12bb902792a3.png", "/lovable-uploads/fb8b76fb-1087-4a61-9acf-9886861c8b6b.png", "/lovable-uploads/f411fccd-d237-4d9e-889b-989e7872d140.png" // Adding the new image
  ];
  const [api, setApi] = useState(null);
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
  return <div>
      {/* Hero Section with the new image */}
      <Hero backgroundImage="/lovable-uploads/d2abc7f7-3e52-45f8-b48b-64603659a72d.png" title="INNOVAZIONE E QUALITÀ" height="450px" />

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-8 relative">
              <div className="flex">
                <div className="min-h-full w-0 bg-sdm-red mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  LE NOSTRE<br />CERTIFICAZIONI
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex">
                <div className="min-h-full w-1 bg-sdm-red mr-4"></div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certifications.map((cert, index) => <div key={index} className="p-6 shadow-md rounded-md flex flex-col items-center text-center bg-gray-100">
                <img src={cert.logo} alt={cert.title} className="h-16 mb-4 object-contain" />
                <h3 className="font-bold text-xl mb-1">{cert.title}</h3>
                <div className="text-sm text-gray-700 mb-2">{cert.iso}</div>
                {cert.description && <p className="text-xs text-gray-700 mt-auto">{cert.description}</p>}
              </div>)}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Button className="bg-sdm-red hover:bg-red-700 text-white px-8 py-2">
              Certificati SDM Torino
            </Button>
            <Button className="bg-sdm-red hover:bg-red-700 text-white px-8 py-2">
              Certificati SDM Rivoli
            </Button>
            <Button className="bg-sdm-red hover:bg-red-700 text-white px-8 py-2">
              Certificati SDM Polska
            </Button>
          </div>
        </div>
      </section>

      {/* Innovations Section - Updated to a single innovation with image carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-8 relative">
              <div className="flex">
                <div className="min-h-full w-0 bg-sdm-red mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  INNOVAZIONI ED<br />INVESTIMENTI
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex">
                <div className="min-h-full w-1 bg-sdm-red mr-4"></div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare.
                </p>
              </div>
            </div>
          </div>

          {/* Single fixed card with image gallery on left side */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row h-[600px]">
                {/* Image gallery container - left side (55%) */}
                <div className="md:w-[55%] relative h-full">
                  <Carousel className="w-full h-full" setApi={setApi} opts={{
                  loop: true,
                  align: "center"
                }}>
                    <CarouselContent className="h-full">
                      {innovationImages.map((image, index) => <CarouselItem key={index} className="h-full">
                          <div className="h-full">
                            <img src={image} alt={`Innovation image ${index + 1}`} className="w-full h-full object-cover rounded-[24px]" />
                          </div>
                        </CarouselItem>)}
                    </CarouselContent>
                    
                    {/* Navigation arrows positioned at the middle height */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                      <CarouselPrevious className="relative h-10 w-10 rounded-full bg-white/70 hover:bg-white border-0" />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                      <CarouselNext className="relative h-10 w-10 rounded-full bg-white/70 hover:bg-white border-0" />
                    </div>
                    
                    {/* Pagination dots below the image */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {innovationImages.map((_, index) => <button key={index} onClick={() => api?.scrollTo(index)} className={cn("p-0 w-3 h-3 rounded-full transition-all focus:outline-none", current === index ? "bg-sdm-red" : "bg-white")} aria-label={`Go to slide ${index + 1}`} />)}
                    </div>
                  </Carousel>
                </div>
                
                {/* Content container - right side (45%) */}
                <div className="md:w-[45%] p-6 md:p-10 flex flex-col justify-center">
                  <Badge variant="outline" className="mb-4 bg-black text-white py-1 px-3 text-xs uppercase rounded-xl self-start">
                    In sviluppo
                  </Badge>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase">NUOVE TECNOLOGIE AVANZATE</h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. 
                    Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim 
                    nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non 
                    condimentum ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  
                  <div className="mt-auto">
                    <Button variant="outline" className="border-2 border-sdm-red text-sdm-red hover:bg-sdm-red/10 rounded-full px-8 uppercase">
                      Visita il sito web
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection darkBg={true} />
    </div>;
};
export default Innovation;