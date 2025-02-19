import Manged from "../images/ServiceNowManaged.png";
import ManagedService from "../images/ManagedService.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from 'react-intersection-observer';
import { useTheme } from "../../../../Context/ThemeContext";
import BlackManagedService from "../images/BlackServiceNowManagedService.png";


const ServiceNowManagedServices = () => {

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
      x: '-50%',
      duration: 25,
      ease: 'linear',
      repeat: -1,
     
    });

  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center mt-20 p-[10px] ml-20 ">
        <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
          ServiceNow Managed Services
        </h6>
      </div>
      <div className="flex justify-center items-center mt-0.5 ml-20">
        <hr
          className="w-[600px] h-[1px] border-none"
          style={{
            backgroundImage: isDarkTheme ? 'linear-gradient(to right, #FFFFFF, #FFFFFF)' : 'linear-gradient(to right, #000000, #1F4B55)',
            border: "none",
          }}
        />
      </div>
      <p className="text-[1.9rem] flex justify-center items-center ml-20">
        24/7 Support & Optimization for ServiceNow
      </p>

      <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-11 gap-8">
        <div className="flex justify-left items-center mt-0.5">
          <p className="font-raleway font-medium  p-[0.625rem] text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
            Our ServiceNow Managed Services provide continuous monitoring, maintenance, and support to ensure your ServiceNow platform runs smoothly. We help businesses optimize performance, improve security, and reduce operational costs.
          </p>
        </div>

        <div className="flex justify-center items-center mr-10">
          <img
            src={Manged}
            alt="Discovery & Analysis"
            className="max-w-[25rem] max-h-[18.649375rem] object-contain"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center mt-10 p-[10px] ml-20">
          <h6 className="font-semibold text-[34px]  leading-[45.49px] tracking-[0.1em] text-center">
            Our Managed Services Include:
          </h6>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max"
            ref={movingImageRef}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            <img src={isDarkTheme ? ManagedService : BlackManagedService} className="w-[3589px] h-auto" />
            <img src={isDarkTheme ? ManagedService : BlackManagedService} className="w-[3589px] h-auto" />
            {/* <img src={isDarkTheme ? ManagedService : BlackManagedService} className="w-[3589px] h-auto" />
            <img src={isDarkTheme ? ManagedService : BlackManagedService} className="w-[3589px] h-auto" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNowManagedServices;
