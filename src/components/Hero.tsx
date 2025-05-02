
import { ReactNode } from "react";

interface HeroProps {
  backgroundImage?: string;
  youtubeVideoId?: string;
  title: ReactNode;
  subtitle?: string;
  preTitle?: string;
  height?: string;
}

const Hero = ({
  backgroundImage,
  youtubeVideoId,
  title,
  subtitle,
  preTitle,
  height = "450px" // Updated default height to match requirements
}: HeroProps) => {
  // If the titolo is a string and contains "innovazione", dividamolo in due righe
  let formattedTitle = title;
  if (typeof title === "string" && title.toLowerCase().includes("innovazione")) {
    const titleParts = title.split("INNOVAZIONE");
    formattedTitle = <>
        {titleParts[0]}
        <br />
        INNOVAZIONE{titleParts[1] || ""}
      </>;
  }
  
  return (
    <div 
      className="hero relative w-full mt-0" // Removed top margin 
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        height: height,
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: "-88px", // Negative margin to pull hero up under the header
        paddingTop: "88px", // Add padding equal to header height so content doesn't get hidden
      }}
    >
      {youtubeVideoId && (
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <div className="relative w-full h-full">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-[1]"></div> {/* Darker overlay for better readability */}
          </div>
        </div>
      )}
      
      {/* Darker overlay for better text readability */}
      {!youtubeVideoId && <div className="absolute inset-0 bg-black/40 z-[1]"></div>}
      
      {/* Positioning text in the center for better visibility */}
      <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 z-10">
        <div className="text-center">
          {preTitle && <p className="text-xl md:text-2xl font-medium mb-2 text-white">{preTitle}</p>}
          {typeof formattedTitle === "string" ? 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{formattedTitle}</h1> : 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{formattedTitle}</h1>
          }
          {subtitle && <p className="mt-4 text-lg md:text-xl text-white">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
