import AboutSection from "../../components/AboutSection/AboutSection";
import AboutVitSection from "../../components/AboutVitSection/AboutVitSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import LocationSection from "../../components/LocationSection/LocationSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="home-page-container">
        <HeroSection />
        <AboutSection />
        <AboutVitSection />
        <TimelineSection />
        <TeamSection />
        <LocationSection />
      </div>
    </>
  );
};

export default HomePage;
