
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import InterestSection from "../components/InterestSection";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

// Mock blog post data
const blogPosts = [
  {
    id: "post-1",
    image: "/lovable-uploads/a21ca549-71a7-47da-8f27-0b3723c813e9.png",
    date: "15 Aprile 2025",
    dateEN: "April 15, 2025",
    datePL: "15 Kwietnia 2025",
    title: "Nuova collaborazione con Leonardo per il settore aerospaziale",
    titleEN: "New collaboration with Leonardo for the aerospace sector",
    titlePL: "Nowa współpraca z Leonardo dla sektora kosmicznego",
    content: `<p>SDM Group annuncia una nuova importante collaborazione con Leonardo nel settore aerospaziale per lo sviluppo di componenti innovativi ad alta precisione. Questa partnership strategica permetterà di ampliare le capacità produttive e di accedere a nuove tecnologie all'avanguardia.</p>
    
    <p>La collaborazione, che durerà almeno tre anni, prevede lo sviluppo e la produzione di componenti strutturali per i nuovi modelli di elicotteri civili e militari. SDM Group metterà a disposizione il suo know-how nella lavorazione di materiali speciali e nella produzione di componenti di altissima precisione.</p>
    
    <p>"Siamo entusiasti di questa nuova partnership con Leonardo, un'azienda leader nel settore aerospaziale a livello mondiale", ha dichiarato il CEO di SDM Group. "Questa collaborazione rappresenta un importante riconoscimento delle nostre capacità tecniche e della qualità dei nostri prodotti."</p>
    
    <p>Il progetto coinvolgerà principalmente lo stabilimento di Rivoli, dove verranno implementate nuove linee produttive dedicate specificamente a questa commessa. Si prevede inoltre l'assunzione di nuovo personale specializzato per far fronte all'aumento della produzione.</p>`,
    contentEN: `<p>SDM Group announces a new important collaboration with Leonardo in the aerospace sector for the development of innovative high-precision components. This strategic partnership will expand production capabilities and access to cutting-edge technologies.</p>
    
    <p>The collaboration, which will last at least three years, involves the development and production of structural components for new civil and military helicopter models. SDM Group will provide its know-how in the processing of special materials and in the production of high-precision components.</p>
    
    <p>"We are excited about this new partnership with Leonardo, a world leader in the aerospace sector," said the CEO of SDM Group. "This collaboration represents an important recognition of our technical capabilities and the quality of our products."</p>
    
    <p>The project will mainly involve the Rivoli plant, where new production lines specifically dedicated to this order will be implemented. New specialized personnel will also be hired to cope with the increase in production.</p>`,
    contentPL: `<p>SDM Group ogłasza nową ważną współpracę z Leonardo w sektorze kosmicznym w zakresie rozwoju innowacyjnych komponentów o wysokiej precyzji. To strategiczne partnerstwo pozwoli rozszerzyć możliwości produkcyjne i dostęp do najnowocześniejszych technologii.</p>
    
    <p>Współpraca, która potrwa co najmniej trzy lata, obejmuje rozwój i produkcję elementów konstrukcyjnych dla nowych modeli śmigłowców cywilnych i wojskowych. SDM Group zapewni swoje know-how w zakresie przetwarzania specjalnych materiałów i produkcji komponentów o wysokiej precyzji.</p>
    
    <p>"Jesteśmy podekscytowani tym nowym partnerstwem z Leonardo, światowym liderem w sektorze kosmicznym," powiedział dyrektor generalny SDM Group. "Ta współpraca stanowi ważne uznanie naszych możliwości technicznych i jakości naszych produktów."</p>
    
    <p>Projekt będzie głównie angażował zakład w Rivoli, gdzie zostaną wdrożone nowe linie produkcyjne specjalnie dedykowane temu zamówieniu. Zatrudniony zostanie również nowy wyspecjalizowany personel, aby poradzić sobie ze wzrostem produkcji.</p>`,
    author: "Team SDM Group"
  },
  {
    id: "post-2",
    image: "/lovable-uploads/ab5578b5-dd1e-4b76-8bbe-7d5fde1fdb4c.png",
    date: "10 Marzo 2025",
    dateEN: "March 10, 2025",
    datePL: "10 Marca 2025",
    title: "Inaugurazione del nuovo stabilimento di Rivoli",
    titleEN: "Inauguration of the new Rivoli plant",
    titlePL: "Inauguracja nowego zakładu w Rivoli",
    content: `<p>A seguito dell'espansione delle attività produttive, SDM Group ha inaugurato il nuovo stabilimento di Rivoli, ampliando la propria capacità produttiva con macchinari di ultima generazione. Un investimento importante per il futuro dell'azienda e del territorio.</p>
    
    <p>La nuova struttura, che si estende su una superficie di oltre 5.000 metri quadrati, è stata progettata secondo i più moderni standard di efficienza energetica e sostenibilità ambientale. Al suo interno sono stati installati macchinari a controllo numerico di ultima generazione, che permetteranno di aumentare significativamente la capacità produttiva dell'azienda.</p>
    
    <p>All'inaugurazione hanno partecipato numerose autorità locali e rappresentanti del mondo industriale, a testimonianza dell'importanza di questo investimento per l'economia del territorio.</p>`,
    contentEN: `<p>Following the expansion of production activities, SDM Group has inaugurated the new Rivoli plant, expanding its production capacity with state-of-the-art machinery. An important investment for the future of the company and the territory.</p>
    
    <p>The new structure, which extends over an area of more than 5,000 square meters, has been designed according to the most modern standards of energy efficiency and environmental sustainability. Inside, the latest generation numerical control machinery has been installed, which will significantly increase the company's production capacity.</p>
    
    <p>Numerous local authorities and representatives of the industrial world participated in the inauguration, testifying to the importance of this investment for the economy of the territory.</p>`,
    contentPL: `<p>W wyniku rozszerzenia działalności produkcyjnej, SDM Group zainaugurowało nowy zakład w Rivoli, zwiększając swoje zdolności produkcyjne dzięki najnowocześniejszym maszynom. To ważna inwestycja w przyszłość firmy i regionu.</p>
    
    <p>Nowa struktura, która rozciąga się na powierzchni ponad 5000 metrów kwadratowych, została zaprojektowana zgodnie z najnowocześniejszymi standardami efektywności energetycznej i zrównoważonego rozwoju środowiskowego. Wewnątrz zainstalowano najnowszej generacji maszyny sterowane numerycznie, które znacznie zwiększą zdolności produkcyjne firmy.</p>
    
    <p>W inauguracji uczestniczyły liczne lokalne władze i przedstawiciele świata przemysłowego, potwierdzając znaczenie tej inwestycji dla gospodarki regionu.</p>`,
    author: "Team SDM Group"
  },
  {
    id: "post-3",
    image: "/lovable-uploads/6e07a2af-51dd-4640-919a-a612099091a3.png",
    date: "25 Febbraio 2025",
    dateEN: "February 25, 2025",
    datePL: "25 Lutego 2025",
    title: "SDM Polska celebra il secondo anniversario",
    titleEN: "SDM Polska celebrates its second anniversary",
    titlePL: "SDM Polska świętuje drugą rocznicę",
    content: `<p>SDM Polska celebra due anni di attività con risultati eccellenti. La sede di Lublin continua a crescere, assumendo nuovo personale specializzato e ampliando il proprio portfolio clienti nel mercato dell'Europa orientale.</p>
    
    <p>Negli ultimi due anni, SDM Polska ha registrato una crescita costante, diventando un punto di riferimento per molte aziende del settore aerospaziale e automotive nell'Europa dell'Est. Il numero dei dipendenti è quasi raddoppiato e il fatturato è aumentato del 65% rispetto al primo anno di attività.</p>
    
    <p>"Siamo molto soddisfatti dei risultati ottenuti in questi primi due anni", ha dichiarato il direttore generale di SDM Polska. "Il mercato dell'Europa orientale offre molte opportunità e siamo ben posizionati per coglierle."</p>`,
    contentEN: `<p>SDM Polska celebrates two years of activity with excellent results. The Lublin office continues to grow, hiring new specialized staff and expanding its client portfolio in the Eastern European market.</p>
    
    <p>In the past two years, SDM Polska has seen steady growth, becoming a reference point for many companies in the aerospace and automotive sector in Eastern Europe. The number of employees has almost doubled and turnover has increased by 65% compared to the first year of activity.</p>
    
    <p>"We are very satisfied with the results achieved in these first two years," said the general manager of SDM Polska. "The Eastern European market offers many opportunities and we are well positioned to seize them."</p>`,
    contentPL: `<p>SDM Polska świętuje dwa lata działalności z doskonałymi wynikami. Biuro w Lublinie nadal się rozwija, zatrudniając nowy wyspecjalizowany personel i poszerzając swoje portfolio klientów na rynku wschodnioeuropejskim.</p>
    
    <p>W ciągu ostatnich dwóch lat SDM Polska odnotowała stały wzrost, stając się punktem odniesienia dla wielu firm z sektora kosmicznego i motoryzacyjnego w Europie Wschodniej. Liczba pracowników prawie się podwoiła, a obroty wzrosły o 65% w porównaniu do pierwszego roku działalności.</p>
    
    <p>"Jesteśmy bardzo zadowoleni z wyników osiągniętych w tych pierwszych dwóch latach," powiedział dyrektor generalny SDM Polska. "Rynek wschodnioeuropejski oferuje wiele możliwości, a my jesteśmy dobrze przygotowani, aby je wykorzystać."</p>`,
    author: "Team SDM Group"
  }
];

const BlogPost = () => {
  const { postId } = useParams();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [post, setPost] = useState<any | null>(null);
  
  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find(p => p.id === postId);
    setPost(foundPost || null);
  }, [postId]);
  
  // If post not found, redirect to blog page
  if (post === null) {
    return <Navigate to="/blog" replace />;
  }

  // Get the appropriate title, date and content based on language
  const getTitle = () => {
    if (language === "EN" && post.titleEN) return post.titleEN;
    if (language === "PL" && post.titlePL) return post.titlePL;
    return post.title;
  };

  const getDate = () => {
    if (language === "EN" && post.dateEN) return post.dateEN;
    if (language === "PL" && post.datePL) return post.datePL;
    return post.date;
  };

  const getContent = () => {
    if (language === "EN" && post.contentEN) return post.contentEN;
    if (language === "PL" && post.contentPL) return post.contentPL;
    return post.content;
  };

  return (
    <div>
      {/* Simple hero section with just the title */}
      <div className="bg-gray-900 py-16">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">{getTitle()}</h1>
        </div>
      </div>

      {/* Blog post content */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured image */}
            <div className="relative h-[400px]">
              <img 
                src={post.image} 
                alt={getTitle()}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Post meta */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-500">{getDate()}</div>
                <div className="text-gray-500">{post.author}</div>
              </div>
              
              {/* Post content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: getContent() }}
              />

              {/* Back button */}
              <div className="mt-12 text-center">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  &larr; {t('blog.backToBlog') || 'Torna al blog'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest section */}
      <InterestSection />
    </div>
  );
};

export default BlogPost;
