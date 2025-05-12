
import { useState } from "react";
import NewsCard from "../components/NewsCard";
import InterestSection from "../components/InterestSection";
import { useLanguage } from "../contexts/LanguageContext";
import useTranslation from "../hooks/useTranslation";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const { language } = useLanguage();
  const { t } = useTranslation();

  // Get the right title and date based on language
  const getLocalizedTitle = (post: any) => {
    if (language === "EN" && post.titleEN) return post.titleEN;
    if (language === "PL" && post.titlePL) return post.titlePL;
    return post.title;
  };

  const getLocalizedDate = (post: any) => {
    if (language === "EN" && post.dateEN) return post.dateEN;
    if (language === "PL" && post.datePL) return post.datePL;
    return post.date;
  };

  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      image: "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png",
      date: "15 Aprile 2025",
      dateEN: "April 15, 2025",
      datePL: "15 Kwietnia 2025",
      title: "Nuova collaborazione con Leonardo per il settore aerospaziale",
      titleEN: "New collaboration with Leonardo for the aerospace sector",
      titlePL: "Nowa współpraca z Leonardo dla sektora kosmicznego",
      excerpt: "SDM Group annuncia una nuova importante collaborazione con Leonardo nel settore aerospaziale per lo sviluppo di componenti innovativi ad alta precisione. Questa partnership strategica permetterà di ampliare le capacità produttive e di accedere a nuove tecnologie all'avanguardia.",
      excerptEN: "SDM Group announces a new important collaboration with Leonardo in the aerospace sector for the development of innovative high-precision components. This strategic partnership will expand production capabilities and access to cutting-edge technologies.",
      excerptPL: "SDM Group ogłasza nową ważną współpracę z Leonardo w sektorze kosmicznym w zakresie rozwoju innowacyjnych komponentów o wysokiej precyzji. To strategiczne partnerstwo pozwoli rozszerzyć możliwości produkcyjne i dostęp do najnowocześniejszych technologii.",
      link: "/blog/post-1"
    },
    {
      id: 2,
      image: "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png",
      date: "10 Marzo 2025",
      dateEN: "March 10, 2025",
      datePL: "10 Marca 2025",
      title: "Inaugurazione del nuovo stabilimento di Rivoli",
      titleEN: "Inauguration of the new Rivoli plant",
      titlePL: "Inauguracja nowego zakładu w Rivoli",
      excerpt: "A seguito dell'espansione delle attività produttive, SDM Group ha inaugurato il nuovo stabilimento di Rivoli, ampliando la propria capacità produttiva con macchinari di ultima generazione. Un investimento importante per il futuro dell'azienda e del territorio.",
      excerptEN: "Following the expansion of production activities, SDM Group has inaugurated the new Rivoli plant, expanding its production capacity with state-of-the-art machinery. An important investment for the future of the company and the territory.",
      excerptPL: "W wyniku rozszerzenia działalności produkcyjnej, SDM Group zainaugurowało nowy zakład w Rivoli, zwiększając swoje zdolności produkcyjne dzięki najnowocześniejszym maszynom. To ważna inwestycja w przyszłość firmy i regionu.",
      link: "/blog/post-2"
    },
    {
      id: 3,
      image: "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png",
      date: "25 Febbraio 2025",
      dateEN: "February 25, 2025",
      datePL: "25 Lutego 2025",
      title: "SDM Polska celebra il secondo anniversario",
      titleEN: "SDM Polska celebrates its second anniversary",
      titlePL: "SDM Polska świętuje drugą rocznicę",
      excerpt: "SDM Polska celebra due anni di attività con risultati eccellenti. La sede di Lublin continua a crescere, assumendo nuovo personale specializzato e ampliando il proprio portfolio clienti nel mercato dell'Europa orientale.",
      excerptEN: "SDM Polska celebrates two years of activity with excellent results. The Lublin office continues to grow, hiring new specialized staff and expanding its client portfolio in the Eastern European market.",
      excerptPL: "SDM Polska świętuje dwa lata działalności z doskonałymi wynikami. Biuro w Lublinie nadal się rozwija, zatrudniając nowy wyspecjalizowany personel i poszerzając swoje portfolio klientów na rynku wschodnioeuropejskim.",
      link: "/blog/post-3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600x400?text=Blog+4",
      date: "18 Gennaio 2025",
      dateEN: "January 18, 2025",
      datePL: "18 Stycznia 2025",
      title: "Innovazione nei processi di trattamento superficiale",
      titleEN: "Innovation in surface treatment processes",
      titlePL: "Innowacje w procesach obróbki powierzchniowej",
      excerpt: "SDM Group ha implementato una nuova linea di trattamenti superficiali che migliorano significativamente la resistenza alla corrosione e l'usura dei componenti meccanici, rispondendo alle esigenze sempre più specifiche del settore aerospaziale.",
      excerptEN: "SDM Group has implemented a new line of surface treatments that significantly improve corrosion resistance and wear of mechanical components, responding to the increasingly specific needs of the aerospace sector.",
      excerptPL: "SDM Group wdrożyła nową linię obróbki powierzchniowej, która znacznie poprawia odporność na korozję i zużycie elementów mechanicznych, odpowiadając na coraz bardziej specyficzne potrzeby sektora kosmicznego.",
      link: "/blog/post-4"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600x400?text=Blog+5",
      date: "5 Dicembre 2024",
      dateEN: "December 5, 2024",
      datePL: "5 Grudnia 2024",
      title: "Partecipazione alla fiera internazionale dell'aerospazio",
      titleEN: "Participation in the international aerospace fair",
      titlePL: "Udział w międzynarodowych targach lotniczych i kosmicznych",
      excerpt: "SDM Group ha partecipato con successo alla fiera internazionale dell'aerospazio a Parigi, presentando le ultime innovazioni e stringendo nuove partnership strategiche con aziende leader del settore.",
      excerptEN: "SDM Group successfully participated in the international aerospace fair in Paris, presenting the latest innovations and establishing new strategic partnerships with leading companies in the sector.",
      excerptPL: "SDM Group z powodzeniem uczestniczyła w międzynarodowych targach lotniczych i kosmicznych w Paryżu, prezentując najnowsze innowacje i nawiązując nowe strategiczne partnerstwa z wiodącymi firmami w sektorze.",
      link: "/blog/post-5"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/600x400?text=Blog+6",
      date: "20 Novembre 2024",
      dateEN: "November 20, 2024",
      datePL: "20 Listopada 2024",
      title: "Investimenti in ricerca e sviluppo per il 2025",
      titleEN: "Investments in research and development for 2025",
      titlePL: "Inwestycje w badania i rozwój na rok 2025",
      excerpt: "SDM Group annuncia un aumento degli investimenti in ricerca e sviluppo per il 2025, con l'obiettivo di sviluppare nuovi processi produttivi e migliorare ulteriormente la qualità dei prodotti offerti ai clienti.",
      excerptEN: "SDM Group announces an increase in research and development investments for 2025, with the aim of developing new production processes and further improving the quality of products offered to customers.",
      excerptPL: "SDM Group ogłasza zwiększenie inwestycji w badania i rozwój na rok 2025, z celem opracowania nowych procesów produkcyjnych i dalszej poprawy jakości produktów oferowanych klientom.",
      link: "/blog/post-6"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/600x400?text=Blog+7",
      date: "15 Ottobre 2024",
      dateEN: "October 15, 2024",
      datePL: "15 Października 2024",
      title: "Nuova certificazione di qualità per processi speciali",
      titleEN: "New quality certification for special processes",
      titlePL: "Nowa certyfikacja jakości dla procesów specjalnych",
      excerpt: "SDM Group ha ottenuto una nuova importante certificazione per i processi speciali, confermando l'impegno dell'azienda verso la massima qualità e l'eccellenza produttiva in tutti i suoi settori di attività.",
      excerptEN: "SDM Group has obtained a new important certification for special processes, confirming the company's commitment to the highest quality and production excellence in all its business sectors.",
      excerptPL: "SDM Group uzyskała nową ważną certyfikację dla procesów specjalnych, potwierdzając zaangażowanie firmy w najwyższą jakość i doskonałość produkcyjną we wszystkich sektorach działalności.",
      link: "/blog/post-7"
    },
    {
      id: 8,
      image: "https://via.placeholder.com/600x400?text=Blog+8",
      date: "3 Settembre 2024",
      dateEN: "September 3, 2024",
      datePL: "3 Września 2024",
      title: "Espansione del portafoglio clienti nel settore automotive",
      titleEN: "Expansion of the customer portfolio in the automotive sector",
      titlePL: "Rozszerzenie portfolio klientów w sektorze motoryzacyjnym",
      excerpt: "SDM Group amplia la propria presenza nel settore automotive con nuovi importanti contratti per la fornitura di componenti di precisione destinati ai veicoli elettrici di nuova generazione.",
      excerptEN: "SDM Group expands its presence in the automotive sector with new important contracts for the supply of precision components for new generation electric vehicles.",
      excerptPL: "SDM Group rozszerza swoją obecność w sektorze motoryzacyjnym dzięki nowym ważnym kontraktom na dostawę komponentów precyzyjnych dla pojazdów elektrycznych nowej generacji.",
      link: "/blog/post-8"
    }
  ];

  // Get the localized excerpt based on language
  const getLocalizedExcerpt = (post: any) => {
    if (language === "EN" && post.excerptEN) return post.excerptEN;
    if (language === "PL" && post.excerptPL) return post.excerptPL;
    return post.excerpt;
  };

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = blogPosts.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(blogPosts.length / articlesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const categories = [
    { name: t('blog.categories.all') || "Tutte", count: 8 },
    { name: t('blog.categories.innovation') || "Innovazione", count: 3 },
    { name: t('blog.categories.company') || "Azienda", count: 2 },
    { name: t('blog.categories.events') || "Eventi", count: 2 },
    { name: t('blog.categories.technology') || "Tecnologia", count: 1 },
  ];

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section - Simpler for blog */}
      <div className="bg-gray-900 py-16">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            {t('blog.newsAndUpdates') || 'News e Aggiornamenti'}
          </h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">{t('blog.categories.title') || 'Categorie'}</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between hover:text-sdm-red transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4">{t('blog.featuredArticles') || 'Articoli in evidenza'}</h2>
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <a key={post.id} href={post.link} className="flex gap-3 group">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={getLocalizedTitle(post)}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sdm-red transition-colors line-clamp-2">
                          {getLocalizedTitle(post)}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{getLocalizedDate(post)}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <h2 className="text-xl font-bold mt-8 mb-4">{t('blog.search') || 'Cerca'}</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('blog.searchArticles') || "Cerca articoli..."}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sdm-red"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentArticles.map((article) => (
                  <NewsCard
                    key={article.id}
                    image={article.image}
                    date={getLocalizedDate(article)}
                    title={getLocalizedTitle(article)}
                    excerpt={getLocalizedExcerpt(article)}
                    link={article.link}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => paginate(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-md disabled:opacity-50"
                  >
                    &laquo;
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 border rounded-md ${
                        currentPage === index + 1 
                          ? 'bg-sdm-red text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-md disabled:opacity-50"
                  >
                    &raquo;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default Blog;
