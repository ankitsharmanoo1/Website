import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import salesforce from "../../../../public/images/SalesForce.png";

gsap.registerPlugin(ScrollTrigger);

const SalesForce = () => {
  const imageRef = useRef(null);
  // const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

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
        src={salesforce}
        alt="Salesforce"
        className={`w-full md:w-auto max-w-[400px] mr-9 md:mr-0 md:max-w-none service-img ${isMobile ? "relative" : "absolute z-20"}`}
      />
      <h1 ref={headingRef} className="text-1xl hidden  md:flex md:text-3xl font-raleway font-thin     md:mt-4 mb-3 md:ml-32 text-center md:text-left">
        SalesForce Services
      </h1>
      <p
        className="text-sm md:text-lg mt-0 md:mt-5 leading-relaxed text-justify w-[300px] mr-9 md:w-full"
        ref={paragraphRef}
      >
        At Softshala Technologies, as a Premium Salesforce Consulting Partner, we are dedicated to
        delivering outstanding Salesforce solutions that drive real transformation for your
        business. Rooted in values of trust and transparency, we share Salesforce&apos;s vision
        that businesses can be a powerful force for good, creating positive change in the world.
        <br />
        Inspired by Salesforce&apos;s commitment to innovation, we strive to push technological
        boundaries to offer cutting-edge solutions that give your business a competitive edge.
        <br />
        Focused on your success, our team of certified Salesforce professionals works closely with
        you to deliver customized solutions that address the specific needs of your organization.
        We ensure smooth implementation and maximize your ROI, enabling your business to grow and
        thrive.
      </p>
      <div className="text-sm md:text-lg flex flex-col md:flex-row md:justify-between gap-3  w-[300px] md:w-full p-4">
      <ul ref={listRef} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>Salesforce Consulting</li>
          <li>Salesforce Development</li>
          <li>Salesforce Implementation</li>
          <li>Salesforce Integration</li>
          <li>Appexchange App Development</li>
          <li>Salesforce Managed Services</li>
        </ul>
        <ul ref={listRef2} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>Salesforce CPQ (Configure, Price, Quote)</li>
          <li>Salesforce Marketing Cloud Solutions</li>
          <li>Salesforce Sales Cloud Solutions</li>
          <li>Salesforce Service Cloud Solutions</li>
          <li>Salesforce Experience Cloud</li>
        </ul>
      </div>
    </div>
  );
};

export default SalesForce;
