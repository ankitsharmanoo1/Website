import Customization from "../images/Customization.png";
import  CustomizationService from "../images/CustomizationService.png";
import BlackCustomization from "../images/BlackServiceNowCustomization.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from 'react-intersection-observer';
import { useTheme } from "../../../../Context/ThemeContext";

const ServiceNowCustomization = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Runs animation only once
    threshold: 0.2, // Starts when 20% of the component is visible
  });

  const movingImageRef = useRef(null);
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function


  useEffect(() => {

    if (!inView) return; // Only trigger animations when component is in view

    gsap.set(movingImageRef.current, { x: 0 }); // Start at the initial position

    gsap.to(movingImageRef.current, {
      x: "-50%", // Move halfway to the left
      duration: 25, // Slow down animation
      ease: "linear",
      repeat: -1, // Infinite loop
    });

   
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center mt-20 p-[10px] ml-20">
        <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
        ServiceNow Customization
        </h6>
      </div>
      <div className="flex justify-center items-center mt-0.5 ml-20">
        <hr
          className="w-[550px] h-[1px] border-none"
          style={{
            backgroundImage: isDarkTheme ? 'linear-gradient(to right, #FFFFFF, #FFFFFF)' : 'linear-gradient(to right, #000000, #1F4B55)',
            border: "none",
          }}
        />
      </div>
      <p className="text-[1.7rem] flex justify-center items-center ml-20">
      Tailored Solutions to Fit Your Business Needs
      </p>

      <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-11 gap-8">
        <div className="flex justify-left items-center mt-0.5">
          <p className="font-raleway font-medium  p-[0.625rem] text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
          At Softshala Technologies, we understand that every business has unique needs. Our ServiceNow customization services help you modify workflows, user interfaces, and automation features to enhance your IT operations.
          </p>
        </div>

        <div className="flex justify-center items-center mr-10">
          <img
            src={Customization}
            alt="Discovery & Analysis"
            className="max-w-[25rem] max-h-[18.649375rem] object-contain"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center mt-10 p-[10px] ml-20">
          <h6 className="font-semibold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
          Customization Services We Offer:
          </h6>
        </div>

        {/* 🔥 Perfect Infinite Scrolling 🔥 */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max"
            ref={movingImageRef}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            <img src={isDarkTheme ? CustomizationService : BlackCustomization } className="w-[3000px] h-auto" />
            <img src={isDarkTheme ? CustomizationService : BlackCustomization } className="w-[3000px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNowCustomization;
