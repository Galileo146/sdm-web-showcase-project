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
      description: "Con sede principale a Torino, SDM S.r.l. rappresenta il cuore operativo del gruppo ed è specializzata nella progettazione e lavorazione della lamiera per i settori aerospaziale, elicotteristico, aeronautico e nella realizzazione di attrezzature tecniche. Lo stabilimento torinese unisce tecnologie di ultima generazione e processi produttivi all'avanguardia, garantendo componenti ad alta precisione e soluzioni innovative e sostenibili per le esigenze dell'industria moderna.",
      images: [
        "/lovable-uploads/e0e7d03a-71c6-4e47-aa98-4559b1c0c68d.png", // Elicottero
        "/lovable-uploads/4a711b9a-b8b3-464e-b98b-59c1ba979ffc.png", // Area 1 e 2
        "/lovable-uploads/b064a197-d842-4067-bc40-a05ff9f4409d.png", // Corridoio stabilimento
        "/lovable-uploads/e64e62ba-034b-4fa5-a3a5-5ce97ec8cbc5.png", // Area stabilimento
        "/lovable-uploads/7058536d-2aef-48f4-a986-cc9e1d68e2b4.png", // Logo SDM sul muro
        "/lovable-uploads/1b4f7a80-c0c2-4290-8e84-990113fef5f5.png" // Area produzione con logo
      ]
    },
    {
      id: 2,
      name: "SDM RIVOLI",
      logo: "/lovable-uploads/b14f24ce-aefb-4334-a544-188b4ed08258.png",
      description: "Situata nell'area industriale di Rivoli, la sede di SDM S.r.l. è specializzata nell'esecuzione di trattamenti galvanici, SurTec 650 e controlli non distruttivi (CND), fondamentali per garantire l'affidabilità e la durata dei componenti destinati al settore industriale e aerospaziale. Lo stabilimento ospita inoltre un centro di ricerca e sviluppo dedicato all'innovazione dei processi produttivi e alla sperimentazione di materiali e trattamenti avanzati, consolidando il ruolo di SDM Rivoli come polo tecnologico del gruppo.",
      images: [
        // Updated with the actual images
        "/lovable-uploads/e145087b-9405-4dab-a4e3-1639632d3532.png", // Building exterior with blue door
        "/lovable-uploads/680fead9-7428-4a83-89b5-e701b04084d3.png", // Building entrance with blue gate
        "/lovable-uploads/4c4bd5ca-2e48-40cd-9194-4f4bd023948f.png", // 3D printer/manufacturing equipment
        "/lovable-uploads/1c309a9a-894b-4350-a874-fa59d0f21112.png", // Large industrial machine
        "/lovable-uploads/14698c82-fe36-4ee3-a836-cc7f507574cf.png"  // Production area with machinery
      ]
    },
    {
      id: 3,
      name: "SDM POLSKA",
      logo: "/lovable-uploads/28721224-14d7-4c33-b02e-1817cdef47a6.png",
      description: "Inaugurata nel 2023 a Lublino, la sede polacca rappresenta l'espansione internazionale più recente del gruppo SDM. Questo stabilimento è dedicato alla progettazione e lavorazione di componenti in lamiera per i settori aerospaziale e industriale, offrendo gli stessi standard qualitativi e servizi avanzati della sede di Torino. Grazie alla sua posizione strategica, SDM Polska rafforza la capacità del gruppo di servire il mercato europeo con soluzioni su misura, qualità costante e tempi di produzione ottimizzati.",
      images: [
        "/lovable-uploads/845a12ef-b693-4efd-bc74-47b33025a3f8.png", // Interior facility image
        "/lovable-uploads/2b870560-1fcf-4f8e-bc5a-c6fe55d60192.png", // Exterior building
        "/lovable-uploads/82d541e4-9a8a-4a60-8b3c-3ac5c1438de1.png", // Building with garage doors
        "/lovable-uploads/91e73154-09bf-4e79-9942-1a263b2055ce.png", // Team photo
        "/lovable-uploads/47ba0ef2-0b02-44ff-b447-4fcdf07f4166.png"  // Front entrance
      ]
    },
    {
      id: 4,
      name: "CHIALES TOOLS",
      logo: "/lovable-uploads/4d73b204-8c56-40be-bd09-eed7dcdf9e9f.png",
      description: "Chiales Tools è una società specializzata nella produzione di utensili e attrezzature di alta precisione per l'industria manifatturiera. Con un'esperienza consolidata nel settore metalmeccanico, Chiales Tools offre soluzioni personalizzate per lavorazioni complesse, garantendo la massima qualità e precisione. L'azienda fa parte del gruppo SDM dal 2018, ampliando così l'offerta di servizi integrati per i clienti.",
      images: [
        // Updated with the newly provided images
        "/lovable-uploads/2de9db87-52bf-4a63-9f9f-c690250a7f18.png", // Cubitr equipment with grinding wheels
        "/lovable-uploads/98de8773-4fc3-4087-a687-d569f2a0d42e.png", // Workshop with 3M products and workbench
        "/lovable-uploads/ab6f5121-0d22-441a-9145-2494e8c3d7b5.png", // Panoramic view of workshop with equipment
        "/lovable-uploads/98de8773-4fc3-4087-a687-d569f2a0d42e.png", // Additional view of the workshop area
        "/lovable-uploads/2de9db87-52bf-4a63-9f9f-c690250a7f18.png"  // Another view of the Cubitr equipment
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
              <div className="hidden md:block w-1 bg-sdm-red h-32 rounded-full"></div>
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
      <section className="py-8 md:py-16 bg-gray-100">
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
