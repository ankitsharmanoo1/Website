import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceNowWhite from "../../../../public/images/Servicenow.png";
// import serviceNowWhite from "../../../../public/images/ServicenowGreen.png"
import serviceNowBlack from "../../../../public/images/ServiceNowBlack.png";
import { useTheme } from "../../../Context/ThemeContext";


gsap.registerPlugin(ScrollTrigger);

const ServiceNow = () => {
  const imageRef = useRef(null); // Reference to the image
  const containerRef = useRef(null); // Reference to the container
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);


const { isDarkTheme } = useTheme();

const [hasAnimated, setHasAnimated] = useState(false); // Track animation state


useEffect(() => {
  // Set the initial opacity for all elements
  gsap.set(imageRef.current, { opacity: 1 });
  gsap.set([headingRef.current, paragraphRef.current, listRef.current,listRef2.current], {
    opacity: 0,
  });
}, []);

const handleMouseEnter = () => {
  if (hasAnimated) return;

  
  gsap.fromTo(
    imageRef.current,
    {
      x: "0%",
      y: "0%",
      scale: 1,
      opacity: 1,
    },
    {
      x: "-60%", // Moves to the right 60% of the container width
      y: "-45%", // Moves upward a little
      scale: 0.5, // Shrinks the image
      opacity: 1, // Keeps the image visible
      duration: 2,
      ease: "power3.inOut",
      marginLeft: "120px",
    }
  );
  gsap.fromTo(
    headingRef.current,
    { x: 900, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      delay:1.2,
      duration: 1,
      ease: "power3.out",
    }
  );
  gsap.fromTo(
    paragraphRef.current,
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay:1.4,
      duration: 1.2,
      stagger: 0.9,
      ease: "power3.out",
    }
  );
  gsap.fromTo(
    listRef.current,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay:1.8,
      duration: 2,
      stagger: 0.9,
      ease: "power3.out",
    }
  );

  gsap.fromTo(
    listRef2.current,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay:2,
      duration: 1.5,
      stagger: 0.9,
      ease: "power3.out",
    }
  );
  setHasAnimated(true); // Mark the animation as triggered
};

  // const handleMouseLeave = () => {
  //   // Optional: Reset animation on mouse leave
  //   gsap.to([imageRef.current, headingRef.current, paragraphRef.current, listRef.current], {
  //     opacity: 0,
  //     x: 0,
  //     y: 0,
  //     scale: 1,
  //     duration: 1,
  //   });
  // };

  return (
    <div
      ref={containerRef}
      className="w-[1055px] h-[544.81px] gap-[20px] left-[20px] mt-14"
      onMouseEnter={handleMouseEnter} // Trigger animation on mouse enter
      // onMouseLeave={handleMouseLeave} // Optionally reset on mouse leave
    >
      <img
        ref={imageRef}
        src={isDarkTheme ?serviceNowWhite : serviceNowBlack}
        alt="Salesforce"
        className="service-img absolute" // Position image absolutely inside the container
      />
      <h1
        className="w-[288px] h-[31px] font-raleway font-thin text-3xl p-[10px] gap-[10px] ml-32 mb-10"
        ref={headingRef}
      >
        Services
      </h1>


      <p
        className="w-[1035px] h-[225px] font-raleway text-[20px] text-justify leading-[24.6px] p-[10px] gap-[10px] mb-9"
        ref={paragraphRef}
      >
        Elevate your digital transformation journey with Softshala Technologies, your reliable ally
        for all ServiceNow solutions. Leveraging the power of ServiceNow’s cutting-edge technology,
        we enhance and simplify digital workflows, fostering a harmonious synergy of efficiency and
        innovation that drives your business to new heights. At Softshala Technologies, we
        prioritize your unique needs and bring unmatched expertise to the table, tailoring our
        strategies to align seamlessly with your vision. Our dedication to delivering innovative and
        impactful solutions ensures that every ServiceNow implementation creates measurable value,
        positioning your organization for sustained success in today’s rapidly evolving digital
        landscape.
      </p>

      <div
        className="flex justify-between mx-auto w-[1055px] h-[170px] p-[10px] ml-16"
       
      >
        <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6"  ref={listRef}>
          <li>ServiceNow Consulting</li>
          <li>ServiceNow Implementation</li>
          <li>ServiceNow Integration</li>
          <li>ServiceNow Migration</li>
        </ul>

        <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6" ref={listRef2}>
          <li>ServiceNow Customization</li>
          <li>ServiceNow App Development</li>
          <li>ServiceNow Managed Services</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceNow;








