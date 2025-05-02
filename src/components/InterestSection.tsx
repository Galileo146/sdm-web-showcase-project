
import InfoCard from "./InfoCard";

interface InterestSectionProps {
  darkBg?: boolean;
}

const InterestSection = ({ darkBg = false }: InterestSectionProps) => {
  const cards = [
    {
      title: "Chi siamo",
      image: "/lovable-uploads/9409e7b2-8adf-4abe-8fba-1dd665c97c7f.png",
      link: "/chi-siamo",
    },
    {
      title: "Innovazione",
      image: "/lovable-uploads/e2e4b026-4a27-4bab-98de-3ce3a87a2a3d.png",
      link: "/innovazione",
    },
    {
      title: "Le aziende",
      image: "/lovable-uploads/ba1d52b8-220a-48ce-812c-40e0bdbe4ca6.png",
      link: "/aziende",
    },
  ];

  return (
    <section className={`py-12 md:py-16 ${darkBg ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className={`text-3xl font-bold ${darkBg ? 'text-white' : ''}`}>
            TI POTREBBE INTERESSARE
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkBg ? 'text-gray-300' : 'text-gray-600'}`}>
            Scoprite di più su SDM, sulla nostra ampia offerta di mercato e sulle nostre soluzioni innovative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card) => (
            <InfoCard
              key={card.title}
              image={card.image}
              title={card.title}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
