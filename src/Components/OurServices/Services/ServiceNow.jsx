import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceNowWhite from "../../../../public/images/Servicenow.png";
import serviceNowBlack from "../../../../public/images/ServiceNowBlack.png";
import { useTheme } from "../../../Context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const ServiceNow = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);

  const { isDarkTheme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.set(imageRef.current, { opacity: 1 });
      gsap.set([headingRef.current, paragraphRef.current, listRef.current, listRef2.current], {
        opacity: 0,
      });
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (hasAnimated || isMobile) return;

    gsap.fromTo(
      imageRef.current,
      { x: "0%", y: "0%", scale: 1, opacity: 1 },
      { x: "-60%", y: "-45%", scale: 0.5, opacity: 1, duration: 2, ease: "power3.inOut", marginLeft: "120px" }
    );
    gsap.fromTo(
      headingRef.current,
      { x: 900, opacity: 0 },
      { x: 0, opacity: 1, delay: 1.2, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, delay: 1.4, duration: 1.2, stagger: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      listRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, delay: 1.8, duration: 2, stagger: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      listRef2.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, delay: 2, duration: 1.5, stagger: 0.9, ease: "power3.out" }
    );
    setHasAnimated(true);
  };

  return (
    <div
      className={`w-full max-w-[1055px] mx-auto p-4 md:p-0 md:w-[1055px] h-auto md:h-[544.81px] gap-5 relative mt-8 flex flex-col items-center ${
        isMobile ? "justify-center" : "md:items-start"
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <img
        ref={imageRef}
        src={isDarkTheme ? serviceNowWhite : serviceNowBlack}
        alt="ServiceNow"
        className={`w-full md:w-auto max-w-[400px] mr-9 md:mr-0 md:max-w-none service-img ${isMobile ? "relative" : "absolute z-20"}`}
      />
      <h1 ref={headingRef} className="text-1xl hidden  md:flex md:text-3xl font-raleway font-thin     md:mt-4 mb-3 md:ml-32 text-center md:text-left">
        Services
      </h1>
      <p ref={paragraphRef} className="text-sm md:text-lg leading-relaxed text-justify w-[300px] mr-9 md:w-full">
      Elevate your digital transformation journey with Softshala Technologies, your reliable ally for all ServiceNow solutions. Leveraging the power of ServiceNow’s cutting-edge technology, we enhance and simplify digital workflows, fostering a harmonious synergy of efficiency and innovation that drives your business to new heights.

At Softshala Technologies, we prioritize your unique needs and bring unmatched expertise to the table, tailoring our strategies to align seamlessly with your vision. Our dedication to delivering innovative and impactful solutions ensures that every ServiceNow implementation creates measurable value, positioning your organization for sustained success in today’s rapidly evolving digital landscape
      </p>
      <div className="text-sm md:text-lg flex flex-col md:flex-row md:justify-between gap-3  w-[300px] md:w-full p-4">
        <ul ref={listRef} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>ServiceNow Consulting</li>
          <li>ServiceNow Implementation</li>
          <li>ServiceNow Integration</li>
          <li>ServiceNow Migration</li>
        </ul>
        <ul ref={listRef2} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>ServiceNow Customization</li>
          <li>ServiceNow App Development</li>
          <li>ServiceNow Managed Services</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceNow;
