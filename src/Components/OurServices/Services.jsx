import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SalesForce from "./Services/SalesForce";
import ServiceNow from "./Services/ServiceNow";
import WebDevelopment from "./Services/WebDevelopment";
import { useTheme } from "../../Context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

const { isDarkTheme } = useTheme();


  // ${
  //   isDarkTheme ? "bg-[#121212]" : "bg-white"
  // }

  return (
    <div className={`w-full min-h-screen justify-center flex 
          ${
             isDarkTheme ? "bg-[#000000] text-white" : "bg-white text-black"
           }
    `}>
      <div 
        // ref={containerRef}
        className={` min-w-screen   font-raleway pt-10 left-[20px] items-start gap-[46px] relative
         
         `}
      >
        {/* Our Services Title */}
        <h1 className="services-title font-raleway font-bold text-4xl text-center leading-custom mb-8" >
          Our Services
        </h1>

              <SalesForce/>
              <ServiceNow/>
              <WebDevelopment/>
      </div>
    </div>
  );
};

export default Services;