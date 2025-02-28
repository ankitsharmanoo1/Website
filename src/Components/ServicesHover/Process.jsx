import { useState, useRef, useEffect } from "react";
import gsap from "gsap"; // Import GSAP
import { useTheme } from "../../Context/ThemeContext";
import white from "../ServicesHover/images/Our Process white.png";
import black from "../ServicesHover/images/blackprocess.png";

export function Process() {
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

      gsap.fromTo(
        headerRef.current,
        { y: -400, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: -400, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.to(imgRef.current, {
        x: 400,
        scale: 0.8,
        duration: 1,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <section
      className={`flex flex-col justify-center items-center font-raleway relative px-4 lg:px-0 overflow-hidden ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
      role="region"
      aria-labelledby="whyChooseUsTitle"
    >
      <div
        className="w-full max-w-[1193px] h-auto md:h-[273px] flex flex-col lg:flex-row leading-[24.6px] gap-[10px] relative justify-center items-center text-xl text-justify"
        onMouseEnter={handleMouseEnter}
      >
        <img
          ref={imgRef}
          src={isDarkTheme ? white : black}
          alt="Property"
          className="absolute inset-0 w-full h-full object-cover transition-opacity"
        />

        <h2
          ref={headerRef}
          id="whyChooseUsTitle"
          className={`text-xl md:text-2xl lg:text-4xl mb-4 lg:mb-6 absolute top-2 left-0 bottom-0 w-full md:w-[1062px] h-auto md:h-[63px] px-4 lg:px-10 text-center md:text-left font-bold font-raleway leading-[43.44px] tracking-[0.1em] ${
            showContent ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isDarkTheme ? "text-white" : "text-black"}`}
        >
          Our Process
        </h2>

        <div
          ref={contentRef}
          className={`px-4 lg:px-0 text-sm md:text-lg absolute p-[10px] font-raleway left-0 mt-8 font-normal items-center text-center gap-[10px] transition-opacity duration-500 ${
            showContent ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isDarkTheme ? "text-white" : "text-black"}`}
        >
          <ul className="list-decimal text-left leading-7 px-4 lg:px-0 text-sm md:text-lg font-semibold">
            <li> Discovery: We begin by understanding your business needs and challenges</li>
            <li> Strategy: We develop a comprehensive implementation plan aligned with your goals</li>
            <li> Implementation: Our experts execute the solution using industry best practices</li>
            <li> Testing: Rigorous quality assurance ensures optimal performance</li>
            <li> Training: We provide comprehensive training to your team</li>
            <li> Support: Ongoing maintenance and support to ensure continued success</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
