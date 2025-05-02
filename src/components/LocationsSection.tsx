import { Link } from "react-router-dom";
interface CompanyCardProps {
  logo: string;
  name: string;
  websiteUrl: string;
}
const CompanyCard = ({
  logo,
  name,
  websiteUrl
}: CompanyCardProps) => {
  return <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center bg-gray-100">
      <img src={logo} alt={`${name} logo`} className="h-16 mb-4 object-contain" />
      <h3 className="font-bold text-lg mb-3">{name}</h3>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sdm-red hover:underline flex items-center">
        Vedi website
      </a>
    </div>;
};
const LocationsSection = () => {
  const companies = [{
    name: "SDM TORINO",
    logo: "/lovable-uploads/0c02558d-38cd-4428-b403-7cf3fcb2d4fb.png",
    // Swapped with SDM Polska logo
    websiteUrl: "https://www.sdmsrl.it"
  }, {
    name: "SDM RIVOLI",
    logo: "/lovable-uploads/c6c4cb73-c784-4f2d-9211-4a6f228649b3.png",
    websiteUrl: "https://www.sdmsrl.it"
  }, {
    name: "SDM POLSKA",
    logo: "/lovable-uploads/3450de51-9bbe-4a52-b147-406028ba7456.png",
    // Swapped with SDM Torino logo
    websiteUrl: "https://sdm-polska.pl"
  }, {
    name: "CHIALES TOOLS",
    logo: "/lovable-uploads/95f11912-b619-4235-9ec9-2cc0e23f9ade.png",
    websiteUrl: "https://www.chialestools.com"
  }];
  return <section className="py-8">
      <div className="container-wide">
        {/* World Map Image with reduced vertical spacing */}
        <div className="mb-4">
          <img src="/lovable-uploads/db39e129-cfbe-4d72-bee6-15a905af8f49.png" alt="SDM Group locations on world map" className="w-full object-contain" />
        </div>
        
        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map(company => <CompanyCard key={company.name} logo={company.logo} name={company.name} websiteUrl={company.websiteUrl} />)}
        </div>
      </div>
    </section>;
};
export default LocationsSection;