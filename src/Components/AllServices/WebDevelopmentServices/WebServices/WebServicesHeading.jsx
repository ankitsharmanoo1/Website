import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./web.css";
import { useTheme } from "../../../../Context/ThemeContext";

const WebServicesHeading = () => {
  const headingRefs = useRef([]);
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function


  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      if (heading) {
        gsap.set(heading, {
          x: index % 2 === 0 ? 500 : 500, // Move from  top/bottom
          y: index % 2 === 0 ? 500 : 500,
          opacity: 0,
          scale:0.9
        });
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRefs.current.forEach((heading, index) => {
            gsap.to(heading, {
              x: 0, // Move to original position
              y:0,
              opacity: 1,
              duration: 1 + index * 0.2, // Stagger effect
              ease: "power3.out",
              scale:1
            });
          });
        }
      },
      { threshold: 0.5 }
    );

    if (headingRefs.current.length) {
      observer.observe(headingRefs.current[0]); // Observe the first heading
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`4th-content w-full h-screen overflow-hidden relative mt-16  ${isDarkTheme ? "bg-[#121212] text-white" : "bg-white text-black"}`}>
      {/* Row 1 */}
      <div className="1heading flex flex-row relative justify-center items-center">
        <h6 ref={(el) => (headingRefs.current[0] = el)} className="heading">
          Cutting-Edge Technologies
          <hr className="gradient-line" />
        </h6>
        <hr className="vertical-line" />
        <h6 ref={(el) => (headingRefs.current[1] = el)} className="heading">
          End-to-End Development
          <hr className="gradient-line" />
        </h6>
      </div>

      {/* Row 2 */}
      <div className="2ndheading flex flex-row relative justify-center items-center">
        <h6 ref={(el) => (headingRefs.current[2] = el)} className="heading">
          Agile & Scalable Solutions
          <hr className="gradient-line" />
        </h6>
        <hr className="vertical-line" />
        <h6 ref={(el) => (headingRefs.current[3] = el)} className="heading">
          User-Centric Designs
          <hr className="gradient-line" />
        </h6>
      </div>

      {/* Row 3 */}
      <div className="3rdheading flex  flex-row relative justify-center items-center">
        <h6 ref={(el) => (headingRefs.current[4] = el)} className="heading">
          Performance & Security First
          <hr className="gradient-line" />
        </h6>
        <hr className="vertical-line" />
        <h6 ref={(el) => (headingRefs.current[5] = el)} className="heading">
          24/7 Support & Maintenance
          <hr className="gradient-line" />
        </h6>
      </div>
    </div>
  );
};

export default WebServicesHeading;
