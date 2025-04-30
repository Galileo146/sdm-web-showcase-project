
import { ReactNode } from "react";

interface HeroProps {
  backgroundImage: string;
  title: ReactNode;
  subtitle?: string;
}

const Hero = ({ backgroundImage, title, subtitle }: HeroProps) => {
  return (
    <div 
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
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
