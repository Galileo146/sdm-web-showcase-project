
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";
import CompanyCard from "../components/CompanyCard";
import { Separator } from "@/components/ui/separator";

const Companies = () => {
  // Company data with correct companies and logos
  const companies = [
    {
      id: 1,
      name: "SDM TORINO",
      logo: "/lovable-uploads/988aab65-f764-48d2-9665-c95ef2e0b400.png",
      description: "Con sede principale a Torino, SDM rappresenta il cuore operativo del gruppo. Lo stabilimento torinese è specializzato nella produzione di componenti ad alta precisione per i settori automotive e aerospaziale, con particolare focus su soluzioni innovative e sostenibili. La nostra sede di Torino integra tecnologie di ultima generazione e processi di produzione all'avanguardia.",
      images: [
        "https://via.placeholder.com/600x400?text=SDM+Torino+1",
        "https://via.placeholder.com/600x400?text=SDM+Torino+2",
        "https://via.placeholder.com/600x400?text=SDM+Torino+3",
        "https://via.placeholder.com/600x400?text=SDM+Torino+4",
        "https://via.placeholder.com/600x400?text=SDM+Torino+5"
      ]
    },
    {
      id: 2,
      name: "SDM RIVOLI",
      logo: "/lovable-uploads/b14f24ce-aefb-4334-a544-188b4ed08258.png",
      description: "Situata nell'area industriale di Rivoli, questa sede è specializzata nella lavorazione di materiali avanzati e componenti di precisione per il settore industriale. Con un focus particolare sull'innovazione tecnologica, SDM Rivoli ospita anche un centro di ricerca e sviluppo dedicato all'implementazione di nuove tecnologie produttive e alla sperimentazione di materiali innovativi.",
      images: [
        "https://via.placeholder.com/600x400?text=SDM+Rivoli+1",
        "https://via.placeholder.com/600x400?text=SDM+Rivoli+2",
        "https://via.placeholder.com/600x400?text=SDM+Rivoli+3",
        "https://via.placeholder.com/600x400?text=SDM+Rivoli+4",
        "https://via.placeholder.com/600x400?text=SDM+Rivoli+5"
      ]
    },
    {
      id: 3,
      name: "SDM POLSKA",
      logo: "/lovable-uploads/28721224-14d7-4c33-b02e-1817cdef47a6.png",
      description: "La sede polacca, inaugurata nel 2023 a Lublino, rappresenta l'espansione internazionale più recente del gruppo SDM. Questo stabilimento serve i mercati dell'Europa dell'Est, offrendo soluzioni integrate per l'industria automobilistica e meccanica. SDM Polska combina l'esperienza italiana con le competenze locali, creando un ponte strategico per lo sviluppo del business nell'Europa orientale.",
      images: [
        "https://via.placeholder.com/600x400?text=SDM+Polska+1",
        "https://via.placeholder.com/600x400?text=SDM+Polska+2",
        "https://via.placeholder.com/600x400?text=SDM+Polska+3",
        "https://via.placeholder.com/600x400?text=SDM+Polska+4",
        "https://via.placeholder.com/600x400?text=SDM+Polska+5"
      ]
    },
    {
      id: 4,
      name: "CHIALES TOOLS",
      logo: "/lovable-uploads/4d73b204-8c56-40be-bd09-eed7dcdf9e9f.png",
      description: "Chiales Tools è una società specializzata nella produzione di utensili e attrezzature di alta precisione per l'industria manifatturiera. Con un'esperienza consolidata nel settore metalmeccanico, Chiales Tools offre soluzioni personalizzate per lavorazioni complesse, garantendo la massima qualità e precisione. L'azienda fa parte del gruppo SDM dal 2018, ampliando così l'offerta di servizi integrati per i clienti.",
      images: [
        "https://via.placeholder.com/600x400?text=Chiales+Tools+1",
        "https://via.placeholder.com/600x400?text=Chiales+Tools+2",
        "https://via.placeholder.com/600x400?text=Chiales+Tools+3",
        "https://via.placeholder.com/600x400?text=Chiales+Tools+4",
        "https://via.placeholder.com/600x400?text=Chiales+Tools+5"
      ]
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero 
        backgroundImage="/lovable-uploads/083c20b6-609c-4ff3-906d-782248fabf1a.png"
        title="LE AZIENDE"
        height="450px"
        centerTitle={false}
      />

      {/* 2. Group Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold">IL GRUPPO</h2>
            </div>
            
            <div className="md:col-span-1 flex justify-center">
              <div className="hidden md:block w-1 bg-sdm-red h-16 rounded-full"></div>
            </div>
            
            <div className="md:col-span-8">
              <p className="text-lg text-gray-700 mb-6">
                SDM Group rappresenta l'eccellenza italiana nella meccanica di precisione, con una presenza capillare sul territorio nazionale e un'espansione internazionale in costante crescita. Fondato su principi di innovazione, qualità e sostenibilità, il gruppo integra competenze diverse e complementari attraverso le sue sedi operative.
              </p>
              <p className="text-lg text-gray-700">
                Ogni stabilimento SDM è specializzato in specifici settori e tecnologie, garantendo al gruppo la capacità di rispondere alle esigenze più complesse dei clienti con soluzioni personalizzate e all'avanguardia. L'integrazione tra le diverse realtà crea sinergie uniche che permettono di ottimizzare processi, condividere know-how e massimizzare l'efficienza produttiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Companies Section */}
      <section className="py-8 md:py-16">
        <div className="container-wide">
          {companies.map((company, index) => (
            <CompanyCard 
              key={company.id}
              company={company}
              reversed={index % 2 !== 0}
              index={index + 1}
            />
          ))}
        </div>
      </section>

      {/* 4. Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Companies;
