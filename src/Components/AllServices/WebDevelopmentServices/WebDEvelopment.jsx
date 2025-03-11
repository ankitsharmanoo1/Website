// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

import WebServices from "./WebServices/WebServices";
import "./WebServices/web.css";
import WebServicesHeading from "./WebServices/WebServicesHeading";
import { useTheme } from "../../../Context/ThemeContext";
import NavBar from "../../NavBar";
import CircleDesign from "../Animations/CircleDesign";
import RopeAnimation from "../Animations/RopeAnimation";

const WebDevelopment = () => {
 
  
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function

 

  return (
    <div className="">
      <NavBar />
      <div
        className={isDarkTheme ? "bg-black text-white" : "bg-white text-black" }
      >
        <div
          // ref={containerRef}
          className="flex flex-col items-center gap-10 font-raleway "
        >
          <h4 className="font-thin text-2xl uppercase tracking-[0.55em] leading-[36px] mt-32">
            Transform Ideas into Scalable Web Solutions
          </h4>
          <h4 className="font-thin justify-center text-3xl uppercase tracking-[0.55em] leading-[36px]">
            with
          </h4>

          {/* <div className="w-[643px] h-[643px]"> */}

          <CircleDesign />
          {/* </div> */}

          <div className="2nd content">
            <div className="flex justify-left items-center ml-20">
              <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
                Our Full-Stack Web Development Services
                <hr
                  className="w-[810px] h-[1px] border-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #9CFF00, #00D1FF)",
                    height: "px",
                    border: "none",
                  }}
                />
              </h6>
            </div>
            <p className="text-start  ml-28 justify-start text-[1.4rem] font-normal leading-[1.837rem] tracking-[0.125rem] mr-24 text-2xl">
              We offer comprehensive end-to-end web development solutions,
              ensuring seamless functionality, security, and scalability across
              all aspects of your application.
            </p>
          </div>
        </div>
        <WebServices />
        <div className="3rd content">
          <div className="flex justify-left items-center mt-8 p-[10px] ml-16">
            <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
              Why Choose Us?
              <hr
                className="w-[342px] h-[1px] border-none "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #9CFF00, #00D1FF)",
                  height: "px",
                  border: "none",
                }}
              />
            </h6>
          </div>
          <p className="text-start ml-28 justify-start text-[1.4rem] font-normal leading-[1.837rem] tracking-[0.125rem] pt-6 mr-24 text-2xl">
            We offer comprehensive end-to-end web development solutions,
            ensuring seamless functionality, security, and scalability across
            all aspects of your application.
          </p>
        </div>

        <WebServicesHeading />

        <RopeAnimation />
      </div>
    </div>
  );
};

export default WebDevelopment;
