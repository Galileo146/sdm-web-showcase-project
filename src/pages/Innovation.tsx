
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";

const Innovation = () => {
  const certifications = [
    {
      icon: "https://via.placeholder.com/100x100?text=ISO+9001",
      title: "ISO 9001",
      description: "Certificazione del Sistema di Gestione della Qualità"
    },
    {
      icon: "https://via.placeholder.com/100x100?text=AS+9100",
      title: "AS 9100",
      description: "Certificazione specifica per il settore aerospaziale"
    },
    {
      icon: "https://via.placeholder.com/100x100?text=ISO+14001",
      title: "ISO 14001",
      description: "Certificazione del Sistema di Gestione Ambientale"
    },
    {
      icon: "https://via.placeholder.com/100x100?text=NADCAP",
      title: "NADCAP",
      description: "Accreditamento per processi speciali aerospaziali"
    }
  ];

  const specialProcesses = [
    {
      image: "https://via.placeholder.com/600x400?text=Process+1",
      title: "Trattamenti Termici",
      description: "Processi di trattamento termico di ultima generazione per migliorare le proprietà meccaniche dei materiali."
    },
    {
      image: "https://via.placeholder.com/600x400?text=Process+2",
      title: "Trattamenti Superficiali",
      description: "Tecnologie avanzate per proteggere e migliorare le superfici dei componenti meccanici."
    },
    {
      image: "https://via.placeholder.com/600x400?text=Process+3",
      title: "Controlli Non Distruttivi",
      description: "Metodologie all'avanguardia per verificare l'integrità dei materiali senza comprometterne la funzionalità."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://via.placeholder.com/1920x1080?text=Technology+Image"
        title="INNOVAZIONE E QUALITÀ"
      />

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700">
              La qualità e l'innovazione sono il cuore della nostra produzione. In SDM Group investiamo costantemente in ricerca e sviluppo per garantire processi all'avanguardia e prodotti che superano le aspettative dei nostri clienti nel settore aerospaziale, automobilistico e industriale.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-100 section-padding">
        <div className="container-wide">
          <h2 className="section-title">Certificazioni</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <img 
                  src={cert.icon} 
                  alt={cert.title} 
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Processes Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">Processi speciali</h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialProcesses.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={process.image} 
                  alt={process.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedicati alla Ricerca</h2>
              <p className="text-lg mb-8">
                In SDM Group, l'innovazione è una costante. Investiamo il 5% del nostro fatturato in Ricerca e Sviluppo per rimanere all'avanguardia nel nostro settore e offrire ai nostri clienti soluzioni sempre più efficienti e performanti.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#contattaci" className="btn btn-primary px-6 py-3 rounded-md">
                  Scopri di più
                </a>
                <a href="#contattaci" className="btn btn-outline border-white text-white hover:bg-white/10 px-6 py-3 rounded-md">
                  Collabora con noi
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-sdm-red rounded-full flex flex-col items-center justify-center">
                <span className="text-7xl md:text-8xl font-bold">5%</span>
                <span className="text-xl md:text-2xl">R&D</span>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interessato ai nostri servizi?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contattaci per scoprire come le nostre soluzioni innovative possono aiutare la tua azienda a raggiungere nuovi livelli di eccellenza.
            </p>
            <a 
              href="#contattaci" 
              className="btn btn-primary px-8 py-3 rounded-md text-lg"
            >
              Contattaci ora
            </a>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Innovation;
