import { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useTheme } from "../../../Context/ThemeContext";

gsap.registerPlugin(MotionPathPlugin);

const RopeAnimation = () => {
  const { isDarkTheme } = useTheme(); // Theme context access
  const lineColor = isDarkTheme ? "#ffffff" : "#000000"; // White for dark theme, black for light theme

  useEffect(() => {
    gsap.to(".ball", {
      motionPath: {
        path: ".zigzag-path",
        align: ".zigzag-path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      duration: 3, // Adjust speed as needed
      repeat: -1, // Infinite loop
      repeatDelay: 1, // Small delay before restarting
      ease: "power1.inOut",
    });
  }, []);
  

  return (
    <div className={`flex justify-center items-center w-full h-screen ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} overflow-hidden`}>
      <div className="animation-container relative w-full max-w-4xl p-12 rounded-xl h-full">
        {/* SVG Zigzag Path */}
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mb-2"
          width="500"
          height="800"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="zigzag-path"
            d="M200 0 
              Q350 70 200 140 
              Q50 210 200 280 
              Q350 350 200 420 
              Q50 490 200 560 
              Q350 630 200 700 
              Q50 770 200 800"
            stroke={lineColor} // Dynamic color change
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        {/* Ball Moving on Path */}
        <div className={`ball w-9 h-9 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 ${isDarkTheme ? 'bg-white' : 'bg-black'}`}></div>

        {/* Process Steps - Now aligned with the Zigzag Turns */}
        <div className="absolute top-[10px] left-[250px] text-lg text-center">
          <p><strong>Requirement Analysis</strong></p>
          <p className="text-sm">Understanding business needs.</p>
        </div>

        <div className="absolute top-[170px] left-[450px] text-lg text-center">
          <p><strong>Planning & Wireframing</strong></p>
          <p className="text-sm">Creating UI/UX blueprints.</p>
        </div>

        <div className="absolute top-[310px] left-[210px] text-lg text-center">
          <p><strong>Development & Integration</strong></p>
          <p className="text-sm">Writing clean, scalable code.</p>
        </div>

        <div className="absolute top-[460px] left-[450px] text-lg text-center">
          <p><strong>Testing & Security Audits</strong></p>
          <p className="text-sm">Ensuring high performance.</p>
        </div>

        <div className="absolute top-[600px] left-[210px] text-lg text-center">
          <p><strong>Deployment & Optimization</strong></p>
          <p className="text-sm">Launch and ongoing improvements.</p>
        </div>
    
        <div className="absolute top-[730px] left-[450px] text-lg text-center">
          <p><strong>Post Deployment Support</strong></p>
          <p className="text-sm">Maintenance & feature updates.</p>
        </div>

      </div>
    </div>
  );
};

export default RopeAnimation;
