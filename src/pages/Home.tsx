
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import InterestSection from "../components/InterestSection";

const Home = () => {
  const newsItems = [
    {
      image: "https://via.placeholder.com/600x400?text=News+1",
      date: "15 Aprile 2025",
      title: "Nuova collaborazione con Leonardo per il settore aerospaziale",
      excerpt: "SDM Group annuncia una nuova importante collaborazione con Leonardo nel settore aerospaziale per lo sviluppo di componenti innovativi ad alta precisione...",
      link: "/blog/news-1",
    },
    {
      image: "https://via.placeholder.com/600x400?text=News+2",
      date: "10 Marzo 2025",
      title: "Inaugurazione del nuovo stabilimento di Rivoli",
      excerpt: "A seguito dell'espansione delle attività produttive, SDM Group ha inaugurato il nuovo stabilimento di Rivoli, ampliando la propria capacità produttiva con macchinari di ultima generazione...",
      link: "/blog/news-2",
    },
    {
      image: "https://via.placeholder.com/600x400?text=News+3",
      date: "25 Febbraio 2025",
      title: "SDM Polska celebra il secondo anniversario",
      excerpt: "SDM Polska celebra due anni di attività con risultati eccellenti. La sede di Lublin continua a crescere, assumendo nuovo personale specializzato e ampliando il proprio portfolio clienti...",
      link: "/blog/news-3",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://via.placeholder.com/1920x1080?text=Hero+Industrial+Image"
        title="Da 25 anni tecnologie ed innovazione"
      />

      {/* Technology and Innovation Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">Tecnologia e Innovazione</h2>
          <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/800x600?text=Europe+Map" 
                  alt="Mappa Europa con sedi SDM" 
                  className="w-full rounded-lg"
                />
                {/* Location markers */}
                <div className="absolute top-[40%] left-[40%] h-4 w-4 bg-sdm-red rounded-full animate-pulse">
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Torino</span>
                </div>
                <div className="absolute top-[45%] left-[38%] h-4 w-4 bg-sdm-red rounded-full animate-pulse">
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Rivoli</span>
                </div>
                <div className="absolute top-[35%] left-[60%] h-4 w-4 bg-sdm-red rounded-full animate-pulse">
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Lublin</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Le nostre sedi in Europa</h3>
              <p className="text-gray-700 mb-6">
                SDM Group è presente con diverse sedi strategiche in Italia e Polonia, garantendo una presenza capillare e un servizio efficiente ai nostri clienti in tutta Europa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-sdm-red transition-colors">
                  <h4 className="font-bold mb-2">SDM Torino</h4>
                  <p className="text-sm text-gray-600">Sede principale del gruppo, dedicata alla produzione di componenti di precisione.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:border-sdm-red transition-colors">
                  <h4 className="font-bold mb-2">SDM Rivoli</h4>
                  <p className="text-sm text-gray-600">Centro specializzato nei processi speciali e trattamenti superficiali.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:border-sdm-red transition-colors">
                  <h4 className="font-bold mb-2">SDM Polska</h4>
                  <p className="text-sm text-gray-600">Sede polacca dedicata al mercato dell'Europa orientale.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:border-sdm-red transition-colors">
                  <h4 className="font-bold mb-2">Chiales Tools</h4>
                  <p className="text-sm text-gray-600">Divisione specializzata nella produzione di utensili di precisione.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="bg-gray-100 section-padding">
        <div className="container-wide">
          <h2 className="section-title">Le nostre aziende</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-hover">
              <img src="https://via.placeholder.com/600x400?text=SDM+Torino" alt="SDM Torino" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">SDM Torino</h3>
                <p className="text-gray-600 mb-4">Sede principale con impianti produttivi all'avanguardia.</p>
                <a href="#" className="text-sdm-red font-medium hover:underline">Scopri di più →</a>
              </div>
            </div>
            <div className="card-hover">
              <img src="https://via.placeholder.com/600x400?text=SDM+Rivoli" alt="SDM Rivoli" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">SDM Rivoli</h3>
                <p className="text-gray-600 mb-4">Centro specializzato per processi speciali e trattamenti.</p>
                <a href="#" className="text-sdm-red font-medium hover:underline">Scopri di più →</a>
              </div>
            </div>
            <div className="card-hover">
              <img src="https://via.placeholder.com/600x400?text=SDM+Polska" alt="SDM Polska" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">SDM Polska</h3>
                <p className="text-gray-600 mb-4">La nostra presenza nell'Europa dell'Est, in rapida crescita.</p>
                <a href="#" className="text-sdm-red font-medium hover:underline">Scopri di più →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">Notizie dal mondo SDM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">I nostri clienti</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src="https://via.placeholder.com/200x80?text=Leonardo" 
                  alt="Leonardo" 
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Home;
