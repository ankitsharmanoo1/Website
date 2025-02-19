import ServiceNowpng from "./images/ServiceNow.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import allServices from "./images/ServicesNoww.png";
import ServiceNowConsulting from "./ServicesNowServices/ServiceNowConsulting";
import ServiceNowImplementation from "./ServicesNowServices/ServiceNowImplementation";
import ServiceNowIntegration from "./ServicesNowServices/ServiceNowIntegration";
import ServiceNowMigration from "./ServicesNowServices/ServiceNowMigration";
import ServiceNowCustomization from "./ServicesNowServices/ServiceNowCustomization";
import ServiceNowAppDevelopment from "./ServicesNowServices/ServiceNowAppDevelopment";
import ServiceNowManagedServices from "./ServicesNowServices/ServiceNowManagedServices";
import blackService from "./images/BlackServicenow.png";
import lines from ".././images/2x lines.png";
import blackLines from ".././images/blackLines.png";
import { useTheme } from "../../../Context/ThemeContext";
import NavBar from "../../NavBar";

const ServiceNow = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);
  const movingImageRef = useRef(null);
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 500, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" } // End position (top) and opacity
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 4, scale: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      span1Ref.current,
      { x: -100, opacity: 0 }, // Start position (left) and opacity
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1.5 } // End position (center) and opacity with delay
    );
    gsap.fromTo(
      span2Ref.current,
      { y: 100, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2 } // End position (center) and opacity with delay
    );
    gsap.fromTo(
      span3Ref.current,
      { x: 100, opacity: 0 }, // Start position (right) and opacity
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2.5 } // End position (center) and opacity with delay
    );

    const images = movingImageRef.current.querySelectorAll("img");
    gsap.to(images, {
      xPercent: -100 * (images.length / 2), // Move full width to left
      duration: 25, // Adjust speed
      repeat: -1, // Infinite loop
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100), // Ensure no gap by resetting position instantly after full cycle
      },
    });
  }, []);

  return (
    <div
      className={`w-full font-raleway salesforceservice min-h-screen  grid grid-row-5 gap-28 ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />
      <div className="flex flex-col items-center justify-center text-center uppercase pt-20">
        <div
          ref={textRef}
          className="leading-[5rem] tracking-[0.4em] text-[2.25rem] font-bold"
        >
          <span>Revolutionize Your IT</span>
          <br />
          <span>Service Delivery</span>
          <br />
          <span>with</span>
        </div>
        <img
          ref={imageRef}
          src={isDarkTheme ? ServiceNowpng : blackService}
          className="w-[33rem] left-[20px] p-[0.625rem] gap-[0.625rem]"
          alt="SalesForce"
        />
        <br />
        <div className="text-[1.3rem] leading-[1.125rem] tracking-[0.26em] p-[0.625rem] mt-16">
          <div className="flex flex-row justify-center items-center">
            <span ref={span1Ref}>Trusted by 70M+ Users | </span>
            <span ref={span2Ref}>AI-Powered Automation | </span>
            <span ref={span3Ref}>Scalable IT Solutions</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button
          type="submit"
          className={`w-[210px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
            form-item ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-500"
                : "bg-black text-white hover:bg-gray-500"
            }`}
        >
          Schedule a Consultation
        </button>
      </div>
      <div className="p-10 w-full overflow-hidden relative">
        <div className="2nd content">
          <div className="flex justify-left items-center mt-8 p-[10px] ml-20">
            <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
              Why Choose Softshala Technologies?
            </h6>
          </div>
          <div className="flex justify-left items-center mt-0.5 ml-20">
            <hr
              className="w-[730px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "px",
                border: "none",
              }}
            />
          </div>
          <p className="text-start ml-24 justify-start text-[1.3rem] font-normal leading-[1.837rem] tracking-[0.125rem] pt-6 mr-24 text-2xl">
            At Softshala Technologies, we ensure that every stage of your
            ServiceNow journey is seamless and ROI-driven. Whether you’re
            adopting the platform for the first time or enhancing your existing
            setup, our tailored approach guarantees measurable outcomes.
          </p>
        </div>
        <div className="w-full h-70 p-20 overflow-hidden relative">
          <div className="flex absolute left-0" ref={movingImageRef}>
            <img src={allServices} className="w-auto h-auto" alt="Services" />
            <img src={allServices} className="w-auto h-auto" alt="Services" />
            <img src={allServices} className="w-auto h-auto" alt="Services" />
            <img src={allServices} className="w-auto h-auto" alt="Services" />
          </div>
        </div>
        <div className="flex justify-left items-center mt-8 p-[10px] ml-20">
          <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-center">
            Our ServiceNow Offerings
          </h6>
        </div>
        <div className="flex justify-left items-center mt-0.5 ml-20">
          <hr
            className="w-[510px] h-[1px] border-none"
            style={{
              backgroundImage: isDarkTheme
                ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                : "linear-gradient(to right, #000000, #1F4B55)",
              height: "px",
              border: "none",
            }}
          />
        </div>
        <ServiceNowConsulting />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowImplementation />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowIntegration />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowMigration />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowCustomization />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowAppDevelopment />
        <img src={isDarkTheme ? lines : blackLines} className="mt-10" />
        <ServiceNowManagedServices />
        <img src={isDarkTheme ? lines : blackLines} className="mt-4" />
      </div>
      <div className="flex flex-col gap-4 ml-20">
        <div className="flex justify-left items-left ">
          <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-left">
            Ready to Transform Your Business
            <hr
              className="w-[670px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "px",
                border: "none",
              }}
            />
          </h6>
        </div>
        <div className="flex justify-left items-left ">
          <h6 className="font-bold text-[34px] leading-[45.49px] tracking-[0.1em] text-left">
            with ServiceNow?
            <hr
              className="w-[330px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "px",
                border: "none",
              }}
            />
          </h6>
        </div>
      </div>
      <div className="flex flex-row gap-4 ml-20 justify-center items-center ">
        <button
          type="submit"
          className={`w-[22.75rem] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
            form-item ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-500"
                : "bg-black text-white hover:bg-gray-500"
            }`}
        >
          Contact Us Today
        </button>
        <p className="text-start justify-start text-[1.3rem] font-normal leading-[1.837rem] tracking-[0.125rem] pb-3 mr-24 text-2xl">
          Whether you&apos;re exploring ServiceNow for the first time or optimizing
          your existing platform, Softshala Technologies is your trusted
          partner. We bring unparalleled expertise and cutting-edge solutions to
          revolutionize your IT service delivery.
        </p>
      </div>
    </div>
  );
};

export default ServiceNow;
