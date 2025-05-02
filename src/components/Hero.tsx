
import { ReactNode } from "react";

interface HeroProps {
  backgroundImage?: string;
  youtubeVideoId?: string;
  title: ReactNode;
  subtitle?: string;
  preTitle?: string;
  height?: string;
  centerTitle?: boolean;
}

const Hero = ({
  backgroundImage,
  youtubeVideoId,
  title,
  subtitle,
  preTitle,
  height = "70vh",
  centerTitle = false
}: HeroProps) => {
  // Se il titolo è una stringa e contiene "innovazione", dividiamolo in due righe
  let formattedTitle = title;
  if (typeof title === "string" && title.toLowerCase().includes("innovazione")) {
    const titleParts = title.split("INNOVAZIONE");
    formattedTitle = <>
        {titleParts[0]}
        <br />
        INNOVAZIONE{titleParts[1] || ""}
      </>;
  }
  
  return <div 
    className="hero relative w-full mt-0" 
    style={{
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      height: height,
      objectFit: "cover",
      width: "100%",
    }}
  >
      {youtubeVideoId && <div className="absolute inset-0 overflow-hidden w-full h-full">
          <div className="relative w-full h-full">
            <iframe src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full object-cover"></iframe>
            {/* Overlay scuro migliorato - con z-index più alto per garantire che sia sopra il video */}
            <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          </div>
        </div>}
      
      {/* Aggiunto overlay scuro per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Posizionamento del testo centrato o a sinistra in base alla prop */}
      <div className={`absolute inset-0 flex items-center ${centerTitle ? 'justify-center' : 'justify-start px-8 md:px-16'} z-10`}>
        <div className={`${centerTitle ? 'text-center' : 'max-w-2xl'}`}>
          {preTitle && <p className="text-xl md:text-2xl font-medium mb-2 text-white">{preTitle}</p>}
          {typeof formattedTitle === "string" ? 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{formattedTitle}</h1> : 
            <h1 className="text-4xl md:text-5xl font-bold text-white lg:text-5xl">{formattedTitle}</h1>}
          {subtitle && <p className="mt-4 text-lg md:text-xl text-white">{subtitle}</p>}
        </div>
      </div>
    </div>;
};

export default Hero;
