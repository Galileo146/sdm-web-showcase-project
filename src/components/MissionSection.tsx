
import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  const stats = [
    {
      icon: "/lovable-uploads/68833927-394a-4229-8a44-5bf2d1181413.png",
      value: "4",
      label: "SEDI",
      description: "In Italia e Polonia per servire il mercato europeo"
    },
    {
      icon: "/lovable-uploads/6f2edb7c-0f60-4590-84f9-796b71b6fd01.png",
      value: "+100",
      label: "DIPENDENTI",
      description: "Professionisti qualificati nelle diverse divisioni"
    },
    {
      icon: "/lovable-uploads/f74cffcd-4230-4fc7-ab90-06ef1faad198.png",
      value: "7000",
      label: "SQM",
      description: "Di superficie produttiva tra le varie sedi"
    },
    {
      icon: "/lovable-uploads/147274b9-f1e0-4d73-941f-cebda32ae82b.png",
      value: "5%",
      label: "R&D",
      description: "Del fatturato investito in ricerca e sviluppo"
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        {/* Mission Title and Text Section */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-3xl">LA NOSTRA<br/>MISSION</h2>
          </div>
          
          <div className="md:w-2/3 relative pl-6 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sdm-red"></div>
            <p className="text-gray-700 leading-relaxed">
              S.D.M. Group è specializzata nella progettazione e produzione di componenti di alta precisione per 
              l'industria aerospaziale, automobilistica e manifatturiera. La nostra missione è combinare tecnologia 
              e innovazione per creare soluzioni sostenibili che soddisfino le esigenze dei nostri clienti più esigenti, 
              garantendo qualità e affidabilità in ogni fase del processo produttivo.
            </p>
          </div>
        </div>

        {/* World Map Section */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <img 
                src="/lovable-uploads/7102fb1f-23ee-43e5-af7d-565aff09bf98.png" 
                alt="Mappa mondo SDM Group" 
                className="w-full h-auto"
              />
              
              {/* Location markers can be added here if needed */}
            </div>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <img src={stat.icon} alt={stat.label} className="h-16 w-auto" />
                </div>
                <div className="text-3xl font-bold text-sdm-red mb-1">{stat.value}</div>
                <div className="uppercase text-gray-800 font-medium mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
