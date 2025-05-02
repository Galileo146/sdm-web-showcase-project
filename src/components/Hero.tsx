
import { ReactNode } from "react";

interface HeroProps {
  backgroundImage?: string;
  youtubeVideoId?: string;
  title: ReactNode;
  subtitle?: string;
}

const Hero = ({ backgroundImage, youtubeVideoId, title, subtitle }: HeroProps) => {
  return (
    <div 
      className="hero relative"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {youtubeVideoId && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      )}
      <div className="hero-content relative z-10">
        {typeof title === "string" ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
        ) : (
          title
        )}
        {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;
