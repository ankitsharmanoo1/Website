import { useState, useRef } from "react";
import white from "../ServicesHover/images/choose.png";
import black from "../ServicesHover/images/chooseblack.png"
import { useTheme } from "../../Context/ThemeContext";
import gsap from "gsap"; // Import GSAP

export function WhyChooseUs() {
  const [showContent, setShowContent] = useState(false); // State to control visibility of content
  const imgRef = useRef(null); // Reference for the image to animate
  const contentRef = useRef(null); // Reference for the content to show/hide
  const headerRef = useRef(null); // Reference for the header animation
  const { isDarkTheme } = useTheme(); // Access theme context

  const handleMouseEnter = () => {
    if (!showContent) {
      setShowContent(true);

      // Animate the image to the right
      gsap.to(imgRef.current, {
        x: "40%",
        y: "-24%",
        scale: 0.8, // Scales down slightly
        duration: 1.5,
        ease: "power3.inOut",
      });

      // Animate the header
      gsap.fromTo(
        headerRef.current,
        { y: -400, opacity: 0 }, // Start above the visible area (negative y-axis)
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" } // Slide down into view
      );

      // Animate the content
      gsap.fromTo(
        contentRef.current,
        { x: -500, opacity: 0 }, // Start position and opacity
        { x: 0, opacity: 1.5, duration: 1.5, delay: 0.3, ease: "power3.out" } // End position and opacity
      );
    }
  };

  return (
    <section
      className={`flex flex-col mt-14 justify-center items-center min-h-screen ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
      role="region"
      aria-labelledby="whyChooseUsTitle"
      onMouseEnter={handleMouseEnter} // Trigger animations on hover
    >
      <div className="relative flex justify-center items-center w-[1193.5px] h-[682px]">
        {/* Animated Image */}
        <img
          ref={imgRef}
          src={isDarkTheme ? white : black}
          alt="Property"
          className="absolute w-[754px] h-[579px] object-cover"
        />

        {/* Content Section */}
        <div
          ref={contentRef}
          className={`absolute flex flex-col font-raleway  left-0  leading-[24.6px] w-[1087px] text-justify h-[360px] text-xl tracking-[0] opacity-0 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
        >
          {/* Animated Header */}
          <h2
            ref={headerRef}
            id="whyChooseUsTitle"
            className={`text-4xl font-raleway text-left font-bold mb-6 h-[63px] px-10 py-2.5 left-0   leading-[43.4px]`}
          >
            Why Choose Us?
          </h2>

         <div className="w-[1087px] h-[360px] top-0 left-0 font-raleway font-normal text-xl text-justify leading-[24.6px] ">

          {/* Animated Content */}
          <ul className="list-disc text-left text-xl">
            <li>End-to-End Solutions: From implementation to training, we provide comprehensive support</li>
            <li>Innovation-First Approach: We stay ahead of technology trends to deliver cutting-edge solution</li>
            <li>Client Success Focus: Your success metrics are our success metrics</li>
            <li>Educational Leadership: We don&apos;t just implement solutions; we build capabilities</li>
            <li>Certified Professionals: Our team holds multiple certifications in Salesforce and ServiceNow</li>
            <li>Proven Methodology: We follow industry best practices and agile methodologies</li>
            <li>Continuous Support: We provide ongoing maintenance and support after implementation</li>
          </ul>
          <p className="mt-5 text-xl text-justify leading-[24.6px]">
         
Our commitment goes beyond service delivery - we strive to be long-term partners in your organization&apos;s growth journey. Through our multi-faceted approach of Salesforce excellence, ServiceNow mastery, web development expertise, and educational empowerment, we help businesses achieve their digital transformation goals while building a skilled workforce for tomorrow.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
