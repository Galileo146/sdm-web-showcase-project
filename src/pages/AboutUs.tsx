
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
        backgroundImage="/lovable-uploads/f054b80f-d705-4e7d-b98b-de555dfe7af7.png"
        title="CHI SIAMO"
        height="450px"
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
