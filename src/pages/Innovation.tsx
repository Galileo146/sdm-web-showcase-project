
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  const innovations = [{
    image: "https://via.placeholder.com/800x500?text=Innovation+Image+1",
    title: "NUOVE VASCHE TRATTAMENTI SUPERFICIALI",
    tag: "Attiva da Maggio 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare."
  }, {
    image: "https://via.placeholder.com/800x500?text=Innovation+Image+2",
    title: "NUOVI SISTEMI DI CONTROLLO",
    tag: "Dal Gennaio 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare."
  }, {
    image: "https://via.placeholder.com/800x500?text=Innovation+Image+3",
    title: "TECNOLOGIE AVANZATE",
    tag: "In sviluppo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare."
  }];
  return <div>
      {/* Hero Section with the new image */}
      <Hero backgroundImage="/lovable-uploads/d2abc7f7-3e52-45f8-b48b-64603659a72d.png" title="INNOVAZIONE E QUALITÀ" height="450px" />

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-8 relative">
              <div className="flex">
                <div className="min-h-full w-1 bg-sdm-red mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  LE NOSTRE<br />CERTIFICAZIONI
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare.
              </p>
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

          <div className="text-center mt-12">
            <Button className="bg-sdm-red hover:bg-red-700 text-white px-8 py-2">
              Vedi tutte le nostre certificazioni
            </Button>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-8 relative">
              <div className="flex">
                <div className="min-h-full w-1 bg-sdm-red mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  INNOVAZIONI ED<br />INVESTIMENTI
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec egestas nisl. Suspendisse tincidunt porttitor convallis. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare. Duis quis bibendum leo. Integer dignissim nisl non condimentum ornare.
              </p>
            </div>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {innovations.map((item, index) => <CarouselItem key={index} className="md:basis-4/5">
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row bg-white">
                          <div className="md:w-1/2">
                            <img src={item.image} alt={item.title} className="w-full h-64 md:h-full object-cover" />
                          </div>
                          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                              <Badge variant="outline" className="mb-2 bg-black text-white">
                                {item.tag}
                              </Badge>
                              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                              <p className="text-gray-700">{item.description}</p>
                            </div>
                            <div className="mt-6">
                              <Button variant="outline" className="border-sdm-red text-sdm-red hover:bg-sdm-red/10">
                                Visita il sito web
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection darkBg={true} />
    </div>;
};
export default Innovation;
