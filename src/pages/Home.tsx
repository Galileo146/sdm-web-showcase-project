import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import InterestSection from "../components/InterestSection";
import { Separator } from "@/components/ui/separator";
import LocationsSection from "../components/LocationsSection";
import CompanySection from "../components/CompanySection";
import LogoSlider from "../components/LogoSlider";
const Home = () => {
  const newsItems = [{
    image: "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png",
    date: "15 Aprile 2025",
    title: "Nuova collaborazione con Leonardo per il settore aerospaziale",
    excerpt: "SDM Group annuncia una nuova importante collaborazione con Leonardo nel settore aerospaziale per lo sviluppo di componenti innovativi ad alta precisione...",
    link: "/blog/news-1"
  }, {
    image: "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png",
    date: "10 Marzo 2025",
    title: "Inaugurazione del nuovo stabilimento di Rivoli",
    excerpt: "A seguito dell'espansione delle attività produttive, SDM Group ha inaugurato il nuovo stabilimento di Rivoli, ampliando la propria capacità produttiva con macchinari di ultima generazione...",
    link: "/blog/news-2"
  }, {
    image: "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png",
    date: "25 Febbraio 2025",
    title: "SDM Polska celebra il secondo anniversario",
    excerpt: "SDM Polska celebra due anni di attività con risultati eccellenti. La sede di Lublin continua a crescere, assumendo nuovo personale specializzato e ampliando il proprio portfolio clienti...",
    link: "/blog/news-3"
  }];
  return <div>
      {/* Hero Section */}
      <Hero youtubeVideoId="eqlEDkywdCI" preTitle="SDM GROUP" title="DA 25 ANNI TECNOLOGIE ED INNOVAZIONE" />

      {/* New section with title, red divider, and text */}
      <section className="py-12 container-wide">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight md:text-3xl px-[10px]">TECNOLOGIA E INNOVAZIONE</h2>
          </div>
          
          <div className="hidden md:flex mx-6 items-stretch self-stretch">
            <div className="w-1 bg-sdm-red h-full"></div>
          </div>
          
          <div className="md:w-2/3">
            <p className="leading-relaxed text-base">
              S.D.M. S.r.l. nasce nel 2000, e ha preso il suo posto tra le aziende piemontesi che lavorano nella 
              progettazione e produzione di strumenti per il settore manifatturiero industriale soprattutto nel 
              campo aerospaziale.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />

      {/* Our Companies Section */}
      <CompanySection />

      {/* News Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="section-title">Notizie dal mondo SDM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {newsItems.map((item, index) => <NewsCard key={index} image={item.image} date={item.date} title={item.title} excerpt={item.excerpt} link={item.link} />)}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-red-500">
        <div className="container-wide">
          <h2 className="font-bold text-center mb-8 text-3xl">I NOSTRI CLIENTI</h2>
          <LogoSlider className="mt-8" />
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>;
};
export default Home;