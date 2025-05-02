import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const VisionSection = () => {
  const images = ["/lovable-uploads/72be639c-a35b-4b78-a0bd-9eadcc9e6299.png", "/lovable-uploads/9409e7b2-8adf-4abe-8fba-1dd665c97c7f.png", "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png", "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png", "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png"];
  return <section className="py-16 bg-gray-50">
      <div className="container-wide">
        {/* Vision Title and Text Section */}
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-start">
              <div className="w-1 bg-sdm-red h-12 mr-4"></div>
              <h2 className="text-3xl font-bold">LA NOSTRA VISION</h2>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              La visione di SDM Group è quella di diventare il partner preferito per le soluzioni di ingegneria e produzione nei settori aerospaziali e automobilistica, attraverso l'innovazione continua e l'eccellenza operativa. 
              Puntiamo a creare valore sostenibile per i nostri clienti, dipendenti e la comunità, mantenendo i più alti standard di qualità e responsabilità ambientale.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Il nostro obiettivo è costruire un futuro in cui tecnologia e sostenibilità si uniscono per creare soluzioni che migliorano la vita delle persone e rispettano l'ambiente.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mt-10">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-4">
              {images.map((image, index) => <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg h-64">
                      <img src={image} alt={`Vision image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default VisionSection;