import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import salesforce from "../../../../public/images/SalesForce.png";

gsap.registerPlugin(ScrollTrigger);

const SalesForce = () => {
  const imageRef = useRef(null); // Reference to the image
  const containerRef = useRef(null); // Reference to the container
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false); // Track animation state

  useEffect(() => {
    // Set the initial opacity for all elements
    gsap.set(imageRef.current, { opacity: 1 });
    gsap.set([headingRef.current, paragraphRef.current, listRef.current], {
      opacity: 0,
    });
  }, []);

  const handleMouseEnter = () => {
    if (hasAnimated) return; // Prevent animation if already triggered

    // Trigger animations
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
        duration: 1,
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
        duration: 2.9,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.9,
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
        duration: 3,
        stagger: 0.9,
        ease: "power3.out",
      }
    );

    setHasAnimated(true); // Mark the animation as triggered
  };

  return (
    <div
      ref={containerRef}
      className="w-[1055px] h-[544.81px] gap-[20px] left-[20px] relative"
      onMouseEnter={handleMouseEnter} // Trigger animation on mouse enter
    >
      <img
        ref={imageRef}
        src={salesforce}
        alt="Salesforce"
        className="service-img absolute" // Position image absolutely inside the container
      />
      <h1
        className="w-[288px] h-[31px] font-raleway font-thin text-3xl p-[10px] gap-[10px] ml-28 mb-12"
        ref={headingRef}
      >
        Salesforce Services
      </h1>

      <p
        className="w-[1035px] h-[225px] font-raleway text-[20px] text-justify leading-[24.6px] p-[10px] gap-[10px] mb-9"
        ref={paragraphRef}
      >
        At Softshala Technologies, as a Premium Salesforce Consulting Partner, we are dedicated to
        delivering outstanding Salesforce solutions that drive real transformation for your
        business. Rooted in values of trust and transparency, we share Salesforce&apos;s vision
        that businesses can be a powerful force for good, creating positive change in the world.
        <br />
        Inspired by Salesforce&apos;s commitment to innovation, we strive to push technological
        boundaries to offer cutting-edge solutions that give your business a competitive edge.{" "}
        <br />
        Focused on your success, our team of certified Salesforce professionals works closely with
        you to deliver customized solutions that address the specific needs of your organization.
        We ensure smooth implementation and maximize your ROI, enabling your business to grow and
        thrive.
      </p>

      <div
        className="flex justify-between mx-auto w-[1055px] h-[170px] p-[10px] ml-16"
        ref={listRef}
      >
        <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6 ">
          <li>Salesforce Consulting</li>
          <li>Salesforce Development</li>
          <li>Salesforce Implementation</li>
          <li>Salesforce Integration</li>
          <li>Appexchange App Development</li>
          <li>Salesforce Managed Services</li>
        </ul>

        <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6">
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
