
import InfoCard from "./InfoCard";

interface InterestSectionProps {
  darkBg?: boolean;
}

const InterestSection = ({ darkBg = false }: InterestSectionProps) => {
  const cards = [
    {
      title: "Chi siamo",
      description: "Scopri la nostra storia, mission e vision che guidano il nostro lavoro da oltre 25 anni.",
      image: "https://via.placeholder.com/600x400?text=Chi+Siamo",
      link: "/aziende",
    },
    {
      title: "Innovazione",
      description: "Tecnologie all'avanguardia e processi innovativi per garantire prodotti di altissima qualità.",
      image: "https://via.placeholder.com/600x400?text=Innovazione",
      link: "/innovazione",
    },
    {
      title: "Le aziende",
      description: "Il nostro gruppo industriale composto da unità specializzate nei diversi settori tecnologici.",
      image: "https://via.placeholder.com/600x400?text=Le+Aziende",
      link: "/aziende",
    },
  ];

  return (
    <section className={`section-padding ${darkBg ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container-wide">
        <h2 className={`section-title ${darkBg ? 'text-white' : ''}`}>
          {darkBg ? 'TI POTREBBE INTERESSARE' : 'Ti potrebbe interessare'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card) => (
            <InfoCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
              darkBg={darkBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
