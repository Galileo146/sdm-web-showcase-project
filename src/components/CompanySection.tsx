
import CompanyBox from "./CompanyBox";

const CompanySection = () => {
  const companies = [
    {
      name: "SDM TORINO",
      image: "/lovable-uploads/7b41968e-fae1-400b-bc59-6cd7be905687.png",
      logo: "/lovable-uploads/0c02558d-38cd-4428-b403-7cf3fcb2d4fb.png",
      link: "/aziende/sdm-torino"
    },
    {
      name: "SDM RIVOLI",
      image: "/lovable-uploads/47b1da09-ea60-4f23-8f94-e43b09aef34f.png",
      logo: "/lovable-uploads/c6c4cb73-c784-4f2d-9211-4a6f228649b3.png",
      link: "/aziende/sdm-rivoli"
    },
    {
      name: "SDM POLSKA",
      image: "/lovable-uploads/29c5fab9-35c8-4003-b45c-229873cf6e1b.png",
      logo: "/lovable-uploads/3450de51-9bbe-4a52-b147-406028ba7456.png",
      link: "/aziende/sdm-polska"
    },
    {
      name: "CHIALES TOOLS",
      image: "/lovable-uploads/9cd2aba0-efe4-405f-921b-c42cc939bda6.png",
      logo: "/lovable-uploads/95f11912-b619-4235-9ec9-2cc0e23f9ade.png",
      link: "/aziende/chiales-tools"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-wide">
        {/* Title section with red divider */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight md:text-3xl">LE NOSTRE AZIENDE</h2>
          </div>
          
          <div className="hidden md:flex mx-6 items-stretch self-stretch">
            <div className="w-1 bg-sdm-red h-full"></div>
          </div>
          
          <div className="md:w-2/3">
            <p className="leading-relaxed text-base">
              Il gruppo SDM è costituito da quattro realtà produttive, ognuna con le proprie
              specializzazioni e competenze. La nostra struttura ci permette di offrire soluzioni
              complete e integrate per i settori aerospaziale, automotive e industriale.
            </p>
          </div>
        </div>
        
        {/* Companies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <CompanyBox
              key={company.name}
              image={company.image}
              logo={company.logo}
              name={company.name}
              link={company.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
