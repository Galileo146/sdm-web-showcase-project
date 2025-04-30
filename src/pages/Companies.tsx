
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";

const Companies = () => {
  const historyItems = [
    {
      year: "2024",
      title: "Espansione nei Processi Speciali",
      description: "Ampliamento delle capacità produttive con l'introduzione di nuove tecnologie nei processi speciali, particolarmente nel settore dei trattamenti superficiali innovativi.",
      image: "https://via.placeholder.com/400x300?text=2024"
    },
    {
      year: "2023",
      title: "Nasce SDM Polska",
      description: "Inaugurazione della nuova sede in Polonia, a Lublin, per servire direttamente i mercati dell'Europa dell'est e ampliare la nostra presenza internazionale.",
      image: "https://via.placeholder.com/400x300?text=2023"
    },
    {
      year: "2021",
      title: "Nuove frontiere nella produzione",
      description: "Investimenti significativi in macchinari di ultima generazione per la lavorazione di materiali avanzati e componenti di alta precisione.",
      image: "https://via.placeholder.com/400x300?text=2021"
    },
    {
      year: "2012",
      title: "Espansione Internazionale",
      description: "Avvio delle prime collaborazioni internazionali e progetti con clienti europei, ampliando l'orizzonte oltre il mercato italiano.",
      image: "https://via.placeholder.com/400x300?text=2012"
    }
  ];

  const slides = [
    "https://via.placeholder.com/1200x600?text=Slide+1",
    "https://via.placeholder.com/1200x600?text=Slide+2",
    "https://via.placeholder.com/1200x600?text=Slide+3",
    "https://via.placeholder.com/1200x600?text=Slide+4",
    "https://via.placeholder.com/1200x600?text=Slide+5"
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://via.placeholder.com/1920x1080?text=Aerial+Industrial+View"
        title="CHI SIAMO"
      />

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">La nostra mission</h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                SDM Group è un'azienda all'avanguardia nella produzione di componenti di precisione per i settori aerospaziale, automobilistico e industriale. La nostra missione è fornire soluzioni tecnologiche innovative, garantendo la massima qualità in ogni fase della produzione.
              </p>
              <p className="text-lg text-gray-700">
                Con una forte attenzione all'innovazione e alla ricerca, investiamo costantemente nello sviluppo di nuovi processi e tecnologie per soddisfare le esigenze più complesse dei nostri clienti, offrendo prodotti di eccellenza che rispettano i più alti standard qualitativi del settore.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://via.placeholder.com/800x600?text=Europe+Map+Detailed" 
                alt="Mappa sedi SDM Group" 
                className="w-full rounded-lg"
              />
              {/* Stats overlays */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-sdm-red">
                  <p className="text-3xl font-bold text-sdm-red">4</p>
                  <p className="text-gray-600">sedi</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-sdm-red">
                  <p className="text-3xl font-bold text-sdm-red">+100</p>
                  <p className="text-gray-600">dipendenti</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-sdm-red">
                  <p className="text-3xl font-bold text-sdm-red">7000</p>
                  <p className="text-gray-600">sqm</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-t-4 border-sdm-red">
                  <p className="text-3xl font-bold text-sdm-red">5%</p>
                  <p className="text-gray-600">R&D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Slider */}
      <section className="bg-gray-100 section-padding">
        <div className="container-wide">
          <h2 className="section-title">La nostra vision</h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                La nostra vision è essere riconosciuti come leader nel settore della meccanica di precisione, sia a livello nazionale che internazionale, grazie all'eccellenza dei nostri prodotti e servizi.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Puntiamo a una crescita sostenibile, investendo in tecnologie innovative e nella formazione costante del nostro personale, per affrontare le sfide del futuro con competenza e professionalità.
              </p>
              <p className="text-lg text-gray-700">
                Crediamo nel valore della collaborazione e nell'importanza di costruire relazioni durature con i nostri clienti, basate sulla fiducia e sulla trasparenza, per creare un futuro di successo condiviso.
              </p>
            </div>
            <div className="relative">
              {/* Simple slider implementation */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="flex snap-x snap-mandatory overflow-x-auto">
                  {slides.map((slide, index) => (
                    <div key={index} className="snap-center shrink-0 w-full">
                      <img 
                        src={slide} 
                        alt={`Slide ${index + 1}`}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      className="w-3 h-3 rounded-full bg-white/70 hover:bg-white"
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">La nostra storia</h2>
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {historyItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-sdm-red transform -translate-x-1/2 border-4 border-white"></div>
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="md:w-1/2 p-6">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="inline-block px-3 py-1 bg-sdm-red text-white text-sm font-medium rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Companies;
