
import { useState } from "react";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import InterestSection from "../components/InterestSection";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      image: "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png",
      date: "15 Aprile 2025",
      title: "Nuova collaborazione con Leonardo per il settore aerospaziale",
      excerpt: "SDM Group annuncia una nuova importante collaborazione con Leonardo nel settore aerospaziale per lo sviluppo di componenti innovativi ad alta precisione. Questa partnership strategica permetterà di ampliare le capacità produttive e di accedere a nuove tecnologie all'avanguardia.",
      link: "/blog/post-1"
    },
    {
      id: 2,
      image: "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png",
      date: "10 Marzo 2025",
      title: "Inaugurazione del nuovo stabilimento di Rivoli",
      excerpt: "A seguito dell'espansione delle attività produttive, SDM Group ha inaugurato il nuovo stabilimento di Rivoli, ampliando la propria capacità produttiva con macchinari di ultima generazione. Un investimento importante per il futuro dell'azienda e del territorio.",
      link: "/blog/post-2"
    },
    {
      id: 3,
      image: "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png",
      date: "25 Febbraio 2025",
      title: "SDM Polska celebra il secondo anniversario",
      excerpt: "SDM Polska celebra due anni di attività con risultati eccellenti. La sede di Lublin continua a crescere, assumendo nuovo personale specializzato e ampliando il proprio portfolio clienti nel mercato dell'Europa orientale.",
      link: "/blog/post-3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600x400?text=Blog+4",
      date: "18 Gennaio 2025",
      title: "Innovazione nei processi di trattamento superficiale",
      excerpt: "SDM Group ha implementato una nuova linea di trattamenti superficiali che migliorano significativamente la resistenza alla corrosione e l'usura dei componenti meccanici, rispondendo alle esigenze sempre più specifiche del settore aerospaziale.",
      link: "/blog/post-4"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600x400?text=Blog+5",
      date: "5 Dicembre 2024",
      title: "Partecipazione alla fiera internazionale dell'aerospazio",
      excerpt: "SDM Group ha partecipato con successo alla fiera internazionale dell'aerospazio a Parigi, presentando le ultime innovazioni e stringendo nuove partnership strategiche con aziende leader del settore.",
      link: "/blog/post-5"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/600x400?text=Blog+6",
      date: "20 Novembre 2024",
      title: "Investimenti in ricerca e sviluppo per il 2025",
      excerpt: "SDM Group annuncia un aumento degli investimenti in ricerca e sviluppo per il 2025, con l'obiettivo di sviluppare nuovi processi produttivi e migliorare ulteriormente la qualità dei prodotti offerti ai clienti.",
      link: "/blog/post-6"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/600x400?text=Blog+7",
      date: "15 Ottobre 2024",
      title: "Nuova certificazione di qualità per processi speciali",
      excerpt: "SDM Group ha ottenuto una nuova importante certificazione per i processi speciali, confermando l'impegno dell'azienda verso la massima qualità e l'eccellenza produttiva in tutti i suoi settori di attività.",
      link: "/blog/post-7"
    },
    {
      id: 8,
      image: "https://via.placeholder.com/600x400?text=Blog+8",
      date: "3 Settembre 2024",
      title: "Espansione del portafoglio clienti nel settore automotive",
      excerpt: "SDM Group amplia la propria presenza nel settore automotive con nuovi importanti contratti per la fornitura di componenti di precisione destinati ai veicoli elettrici di nuova generazione.",
      link: "/blog/post-8"
    }
  ];

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = blogPosts.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(blogPosts.length / articlesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const categories = [
    { name: "Tutte", count: 8 },
    { name: "Innovazione", count: 3 },
    { name: "Azienda", count: 2 },
    { name: "Eventi", count: 2 },
    { name: "Tecnologia", count: 1 },
  ];

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section - Simpler for blog */}
      <div className="bg-gray-900 py-16">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">News e Aggiornamenti</h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Categorie</h2>
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

                <h2 className="text-xl font-bold mt-8 mb-4">Articoli in evidenza</h2>
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <a key={post.id} href={post.link} className="flex gap-3 group">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sdm-red transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <h2 className="text-xl font-bold mt-8 mb-4">Cerca</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cerca articoli..."
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
                    date={article.date}
                    title={article.title}
                    excerpt={article.excerpt}
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
