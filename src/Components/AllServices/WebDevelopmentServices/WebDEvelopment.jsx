import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import box1 from "./images/box-1.png";
import box2 from "./images/box-2.png";
import box3 from "./images/box-3.png";
import box4 from "./images/box-4.png";
import final from "./images/final.png";
import WebServices from "./WebServices/WebServices";
import "./WebServices/web.css";
import WebServicesHeading from "./WebServices/WebServicesHeading";
import { useTheme } from "../../../Context/ThemeContext";
import NavBar from "../../NavBar";


const WebDevelopment = () => {
  const [step, setStep] = useState(0); // 0 = not started, 1-5 = animation steps
  const containerRef = useRef(null);
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function



  // Observer to detect when component is in viewport
  useEffect(() => {
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [step]);

  // Function to run the animation sequence
  const startAnimation = async () => {
    setStep(0);
    await new Promise((r) => setTimeout(r, 500)); // Wait 1.5s
    setStep(1);
    await new Promise((r) => setTimeout(r, 1500)); // Wait 1.5s
    setStep(2);
    await new Promise((r) => setTimeout(r, 2000)); // Wait 2s
    setStep(3);
    await new Promise((r) => setTimeout(r, 2000)); // Wait 2s
    setStep(4);
    await new Promise((r) => setTimeout(r, 2500)); // Wait 2.5s
    setStep(5); // Final image remains fixed
  };

  return (
    <>
<NavBar/>
    <div className= {isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>

    <div
      ref={containerRef}
      className="flex flex-col items-center gap-10 font-raleway w-full h-screen "
    >
      <h4 className="font-thin text-2xl uppercase tracking-[0.55em] leading-[36px] mt-32">
        Transform Ideas into Scalable Web Solutions
      </h4>
      <h4 className="font-thin justify-center text-3xl uppercase tracking-[0.55em] leading-[36px]">
        with
      </h4>

      <div className="relative w-[600px] h-[600px] flex justify-center items-center m-44">
        {/* Box-1 (Always Visible) */}
        {step === 0 && (
          <motion.img
           src={box1}
           alt="box1"
           className="absolute"
           initial={{ opacity: 1 }}
           animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            />
        )

        }

        {/* Box-2 (Scales Up & Stays Before Disappearing) */}
        {step === 2 && (
          <motion.img
            src={box2}
            alt="box2"
            className="absolute"
            initial={{ scale: 0.5, rotate: -155, opacity: 1 }}
            animate={{ scale: 1, rotate: 290, opacity: 0 }}
            transition={{ duration: 9 }}
          />
        )}

        {/* Box-3 (Simply Appears, No Animation) */}
        {step === 3 && (
          <motion.img
            src={box3}
            alt="box3"
            className="absolute"
            initial={{scale:1,  opacity: 1 }}
            animate={{scale:0.9, opacity: 1 }}
            transition={{ duration: 5 }}
          />
        )}

        {/* Box-4 (Fades Out) */}
        {step === 4 && (
          <motion.img
            src={box4}
            alt="box4"
            className="absolute"
            initial={{scale:1.1,  opacity: 1 }}
            animate={{scale:1, opacity: 1 }}
            transition={{ duration: 4 }}
          />
        )}

        {/* Final Image (Fixed After Animation) */}
        {step === 5 && (
          <motion.img
            src={final}
            alt="final"
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </div>
      <div className='2nd content'>
       <div className="flex justify-left items-center mt-8 p-[10px] ml-20">
    <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
    Our Full-Stack Web Development Services
    <hr
      className="w-[810px] h-[1px] border-none"
      style={{
        backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
        height: "px",
        border: "none",
      }}
    />
    </h6>
  </div>
     <p className='text-start ml-28 justify-start text-[1.4rem] font-normal leading-[1.837rem] tracking-[0.125rem] pt-6 mr-24 text-2xl' >We offer comprehensive end-to-end web development solutions, ensuring seamless functionality, security, and scalability across all aspects of your application.</p>
  
       </div>
    </div>
      <WebServices/>
      <div className='3rd content'>
       <div className="flex justify-left items-center mt-8 p-[10px] ml-16">
    <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
    Why Choose Us?
    <hr
      className="w-[342px] h-[1px] border-none "
      style={{
        backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
        height: "px",
        border: "none",
      }}
    />
    </h6>
  </div>
     <p className='text-start ml-28 justify-start text-[1.4rem] font-normal leading-[1.837rem] tracking-[0.125rem] pt-6 mr-24 text-2xl' >We offer comprehensive end-to-end web development solutions, ensuring seamless functionality, security, and scalability across all aspects of your application.</p>
  
       </div>

      <WebServicesHeading />
    </div>
      </>
  );
};

export default WebDevelopment;
