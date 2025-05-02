
import { Building2, Users2, MapPin, LineChart } from "lucide-react";

const MissionSection = () => {
  const stats = [{
    icon: <Building2 className="h-7 w-7 text-sdm-red" />,
    value: "4",
    label: "SEDI"
  }, {
    icon: <Users2 className="h-7 w-7 text-sdm-red" />,
    value: "+100",
    label: "DIPENDENTI"
  }, {
    icon: <MapPin className="h-7 w-7 text-sdm-red" />,
    value: "7000",
    label: "SQM"
  }, {
    icon: <LineChart className="h-7 w-7 text-sdm-red" />,
    value: "5%",
    label: "R&D"
  }];
  return <section className="py-16">
      <div className="container-wide">
        {/* Mission Title and Text Section */}
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">LA NOSTRA MISSION</h2>
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

        {/* Europe Map and Stats */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/ba1d52b8-220a-48ce-812c-40e0bdbe4ca6.png" alt="Mappa Europa SDM Group" className="max-w-full h-auto" />
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-sdm-red rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-sdm-red rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-sdm-red mb-2">{stat.value}</div>
                  <div className="uppercase text-gray-600 font-medium">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default MissionSection;
