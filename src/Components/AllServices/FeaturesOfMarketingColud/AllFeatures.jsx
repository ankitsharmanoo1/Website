import JournyBuilder from "./logos/journyBuilder.png";
import AudinceBuilder from "./logos/AudienceBuilder.png";
import Personalize from "./logos/Personalize.png";
import ContentBuilder from "./logos/ContentBuilder.png";
import Analyse from "./logos/AnalysicBuilder.png";
import MarketingCloud from "./logos/MarketingCloud.png";
import AgentMarketingCloud from "./logos/AgentMarketing.png";
import backLetter from "../images/Envelop back.png";
import WhiteBack from "../images/white features.png";
import BlackBack from "../images/BlackBack.png";
import frontLetter from "../images/Envelop Front.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../../../Context/ThemeContext";



gsap.registerPlugin(ScrollTrigger);

const AllFeatures = () => {
  const { isDarkTheme } = useTheme();

  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".FeaturesBox",
      { x: 60, opacity: 1 },
      {
        x: -1900, // Moves to the left
        opacity: 1, // Optional: fade effect
        duration: 20,
        delay:1,
        // stagger: 0.2, // Stagger effect for smooth animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: true, // Moves along with scroll
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-row justify-center ">
      {/* Left: Image Section */}
      <img src={isDarkTheme ? BlackBack : WhiteBack} className="relative top-0 z-10 " style={{ width: "150px", height: "298.39px" }} />
      <div className="relative w-1/3 flex justify-center">
        <img src={backLetter} className="absolute top-0 left-0 z-0" />
        <img
          src={frontLetter}
          className="absolute top-0 left-0 pb-10 pr-5 z-10 object-cover"
          style={{ width: "300px", height: "298.39px" }}
        />
        <div
          className="absolute top-0 left-0 z-20 flex items-center justify-center pb-10"
          style={{ width: "300px", height: "298.39px" }}
        >
          <h2 className="text-5xl text-center mr-16">Features</h2>
        </div>
      </div>

      {/* Right: Features Grid */}
      <div ref={featuresRef} className="w-2/3 flex flex-row justify-start  cards">
        {/* Feature Cards */}

        <FeatureCard
          image={JournyBuilder}
          title="Journey Builder"
          description="Use Case: Design automated, cross-channel customer journeys to create consistent and engaging experiences. From sending welcome emails to re-engaging inactive users, help your clients connect with their audience at every touchpoint."
        />
        <FeatureCard
          image={AudinceBuilder}
          title="Audience Builder"
          description="Use Case: Segment customers based on behavior, demographics, or interests to deliver highly targeted campaigns. Ideal for personalized promotions, customer retention strategies, and upselling opportunities."
        />
        <FeatureCard
          image={Personalize}
          title="Personalization Builder"
          description="Use Case: Use AI-driven recommendations to deliver personalized content, such as product suggestions or tailored offers, increasing engagement and conversions. Perfect for e-commerce, B2B, and service-oriented businesses."
        />
        <FeatureCard
          image={ContentBuilder}
          title="Content Builder"
          description="Use Case: Centralize content management for consistent branding and easy access. Enable your team to collaborate, approve, and deploy assets quickly across marketing campaigns."
        />
        <FeatureCard
          image={Analyse}
          title="Analytics Builder"
          description="Use Case: Monitor campaign performance and customer engagement with advanced reporting and predictive insights. Empower data-driven decisions to optimize ROI and marketing effectiveness."
        />
        <FeatureCard
          image={MarketingCloud}
          title="Marketing Cloud Connect"
          description="Use Case: Integrate marketing, sales, and service data for a unified view of the customer journey. Trigger personalized messages based on customer actions to ensure a seamless experience."
        />
        <FeatureCard
          image={AgentMarketingCloud}
          title="Agent Marketing Cloud"
          description="Save time and scale 1:1 personalisation with trusted AI Agents to help analyse, generate, and continuously optimise campaigns based on your defined business goals."
        />
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="font-raleway FeaturesBox w-[400px] h-[230px] bg-white p-[0.625rem] text-[#000000] rounded-[15px] shadow-inner-custom flex flex-col items-center m-6 overflow-hidden">
      <img src={image} className="w-[34px] h-[34px] mt-1" alt={title} />
      <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">
        {title}
      </h3>
      <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] text-justify">
        {description}
      </p>
    </div>
  );
};

export default AllFeatures;