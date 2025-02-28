import { useState, useRef, useEffect } from "react";
import white from "../ServicesHover/images/choose.png";
import black from "../ServicesHover/images/chooseblack.png";
import { useTheme } from "../../Context/ThemeContext";
import gsap from "gsap";

export function WhyChooseUs() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = () => {
    if (!showContent && !isMobile) {
      setShowContent(true);

      gsap.to(imgRef.current, {
        x: "40%",
        y: "-24%",
        scale: 0.8,
        duration: 1.5,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        headerRef.current,
        { y: -400, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
      );
    }
  };

  return (
    <section
      className={`flex flex-col justify-center items-center min-h-screen px-4 lg:px-0 ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
      role="region"
      aria-labelledby="whyChooseUsTitle"
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-[1193.5px] h-auto lg:h-[682px]">
        {/* Image */}
        <img
          ref={imgRef}
          src={isDarkTheme ? white : black}
          alt="Property"
          className="w-full max-w-[754px] h-auto lg:h-[579px] object-cover flex justify-center mx-auto lg:pl-10"
        />

        {/* Content Section */}
        <div
          ref={contentRef}
          className={`mt-6 lg:absolute lg:left-0 lg:mt-0 opacity-100 lg:opacity-0 w-full max-w-[1087px] text-justify text-xl ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {/* Header */}
          <h2
            ref={headerRef}
            id="whyChooseUsTitle"
            className="text-2xl lg:text-4xl font-bold  mb-4 lg:mb-6 px-4 lg:px-10 text-center  md:text-left"
          >
            Why Choose Us?
          </h2>

          {/* Content */}
          <div className="px-4 lg:px-0 text-sm md:text-lg font-semibold">
            <ul className="list-disc text-left space-y-2 ml-4 lg:ml-0 ">
              <li>End-to-End Solutions: From implementation to training, we provide comprehensive support</li>
              <li>Innovation-First Approach: We stay ahead of technology trends to deliver cutting-edge solutions</li>
              <li>Client Success Focus: Your success metrics are our success metrics</li>
              <li>Educational Leadership: We don&apos;t just implement solutions; we build capabilities</li>
              <li>Certified Professionals: Our team holds multiple certifications in Salesforce and ServiceNow</li>
              <li>Proven Methodology: We follow industry best practices and agile methodologies</li>
              <li>Continuous Support: We provide ongoing maintenance and support after implementation</li>
            </ul>
            <p className="mt-5 text-justify">
              Our commitment goes beyond service delivery - we strive to be long-term partners in your organization&apos;s growth journey. Through our multi-faceted approach of Salesforce excellence, ServiceNow mastery, web development expertise, and educational empowerment, we help businesses achieve their digital transformation goals while building a skilled workforce for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
