
import Hero from "../components/Hero";
import { Separator } from "@/components/ui/separator";
import InterestSection from "../components/InterestSection";
import MissionSection from "../components/MissionSection";
import VisionSection from "../components/VisionSection";
import TimelineSection from "../components/TimelineSection";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        backgroundImage="/lovable-uploads/9409e7b2-8adf-4abe-8fba-1dd665c97c7f.png"
        title="CHI SIAMO"
      />

      {/* Mission Section */}
      <MissionSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Interest Section */}
      <InterestSection />
    </div>
  );
};

export default AboutUs;
