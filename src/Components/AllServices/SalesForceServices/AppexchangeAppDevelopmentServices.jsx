import Appex from "../images/AppexChange.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustumDev from "../images/AppexInvest.png";
import CustumFeature from "../images/WhatWeProvide.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";

const AppexchangeAppDevelopmentServices = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();

  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const salesforceRef = useRef(null);
  const consultingRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  // Using Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Runs animation only once
    threshold: 0.2, // Starts when 20% of the component is visible
  });

  useEffect(() => {
    if (!inView) return; // Only trigger animations when component is in view

    const timeline = gsap.timeline();

    if (paraRef.current) {
      const paraItems = paraRef.current.querySelectorAll("p");
      const paraItems2 = para2Ref.current.querySelectorAll("p");

      gsap.fromTo(
        paraItems,
        { x: 430, opacity: 0 },
        { x: 0, opacity: 1, duration: 2.5, stagger: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        paraItems2,
        { y: 130, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, stagger: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        btnRef.current,
        { opacity: 0 },
        { opacity: 1, x: 300, duration: 1.3, ease: "power3.inOut" }
      );
      gsap.fromTo(
        imgRef.current,
        { y: -400, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
      );

      const salesforceLetters = salesforceRef.current.innerText.split("");
      salesforceRef.current.innerHTML = salesforceLetters
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");

      const consultingLetters = consultingRef.current.innerText.split("");
      consultingRef.current.innerHTML = consultingLetters
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");

      timeline
        .fromTo(
          salesforceRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: "power3.out" }
        )
        .fromTo(
          consultingRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: "power3.out" },
          "<" // Start at the same time as the previous animation
        )
        .fromTo(
          line1Ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 3,
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          line2Ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 3,
            ease: "power3.out",
          },
          "<"
        );
    }
  }, [inView]); // Runs animation only when inView changes




  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } }); // Ensure state is passed
  };

  
  return (

    <>

    <div
      ref={ref}
      className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}
    >
      {" "}
      {/* Attach the observer reference here */}
      <div className="w-full  font-raleway grid grid-cols-2 relative h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10">
          <div className=" text-left">
            <h5
              className="text-[32px] font-medium tracking-[4.8px]"
              ref={salesforceRef}
            >
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2  my-2 w-[255px]"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                }}
              ></div>
            </div>

            <h5
              className="uppercase text-[32px] font-medium tracking-[4.8px]"
              ref={consultingRef}
            >
              Appexchange App Developmet
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2 my-2 w-[650px]"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                }}
              ></div>
            </div>
          </div>

          <div
            className="uppercase text-[2.875rem] font-medium mt-5  tracking-[3.02px] leading-normal text-left"
            ref={paraRef}
          >
            <p>Custom Salesforce</p>
            <p>Appexchange Solutions</p>
            <p>for your Business</p>
          </div>

          <div
            className="text-base uppercase mt-5 font-medium tracking-[2.4px] h-[38px] text-[16px] leading-[18.78px] w-[700px] text-left"
            ref={para2Ref}
          >
            <p>
              Build, Publish and scale your salesforce apps seamlessly with our
              expert development services
            </p>
          </div>

          <div className="flex justify-left mt-14">
            <div>
              <button
                type="submit"
                className={`w-[160px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
                ${
                  isDarkTheme
                    ? "bg-white text-black hover:bg-gray-500"
                    : "bg-black text-white hover:bg-[#525252]"
                }
                form-item`}
                ref={btnRef}
                onClick={handleNavigation}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full">
          <img
            src={Appex}
            alt="salesforce"
            className="h-[472px] w-auto max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-10 object-contain"
            ref={imgRef}
          />
        </div>
      </div>
      <div className="min-h-screen mx-auto items-center justify-center">
        <div className="flex justify-center">
          <p className="w-[1118px] h-[75px] text-base font-raleway font-bold  text-[20px] leading-[21.59px] tracking-[0.1em] text-center">
            {`"AppExchange is a marketplace offering solutions, such as apps, components, and consulting services. To make your own solution publicly available to potential customers, you must be a Salesforce partner."`}
          </p>
        </div>

       
        <div className="">
          <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
            <div className="text-left  max-w-[950px] max-h-[190px] gap-[10px] ml-8">
              <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
                Why Invest in Salesforce AppExchange Development?
                <hr
                  className="w-[920px] h-[1px] border-none"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "px",
                    border: "none",
                  }}
                />
              </h6>

              {/* <div className="flex justify-left items-center mt-0.5"></div> */}
              <p className="font-raleway font-medium   p-[10px] text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
                App Exchange offers an incredible opportunity for businesses to
                enhance their Salesforce experience. By developing applications
                for the AppExchange marketplace, companies can:
                <ul className="list-disc p-6 font-raleway font-medium  text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
                  <li>Extend the core functionalities of Salesforce.</li>
                  <li>Reach thousands of Salesforce users globally.</li>
                  <li>
                    Improve business productivity with tailored applications.
                  </li>
                  <li>
                    Generate revenue through paid applications and
                    subscriptions.
                  </li>
                </ul>
              </p>
            </div>

            <div className="mr-10">
              <img
                src={CustumDev}
                alt="Discovery & Analysis"
                className="w-[300px]  h-[298.39px] object-contain "
              />
            </div>
          </div>

          <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
            <div className="flex  m-10">
              <img
                src={CustumFeature}
                alt="Solution Design"
                className="max-w-[300px] max-h-[298.39px] object-contain"
              />
            </div>

            <div className="text-left max-w-[720px] max-h-[190px] p-[10px] gap-[10px] md:order-2">
              <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
                What We Provide
                <hr
                  className="w-[286px] h-[1px] border-none"
                  style={{
                    backgroundImage: isDarkTheme
                      ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                      : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "px",
                    border: "none",
                  }}
                />
              </h6>

              <div className="text-left max-w-[720p] max-h-[190px]  gap-[10px]">
                <p className="font-raleway font-medium  p-[10px] text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
                  Our company provides comprehensive services to ensure seamless
                  development, deployment, and management of applications on
                  Salesforce AppExchange. Here’s what we offer:
                  <ul className="list-disc  font-raleway font-medium  text-[20px] ml-11 text-justify leading-[24.59px] tracking-[0.1em]">
                    <li>AppExchange App Consulting</li>
                    <li>AppExchange App Development</li>
                    <li>AppExchange Security Review Assistance</li>
                    <li>AppExchange App Compliance & Listing Support</li>
                    <li>AppExchange App Management & Maintenance</li>
                    <li>Salesforce AppExchange Technical Support</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


        <div className="KeyFeatures flex flex-row gap-3">
              <div className="flex flex-row gap-3 ">

                 <h1 className="flex">Key Features</h1>
                 <div className="flex flex-row">
                   <span>Lightning Ready Apps:</span>
                   <span>Mobile Optimization:</span>
                   <span>Scalability:</span>
                   <span>Robust Security:</span>
                 </div>
              </div>

              <div className="flex flex-row gap-3">

                <h1>Benefits</h1>
                <div className="flex flex-row">
                  <span>Enhanced Functionality:</span>
                  <span>Increased Efficiency:</span>
                  <span>Revenue Generation:</span>
                  <span>Seamless Integration:</span>
                </div>
              </div>

        </div>
    </>

  );
};

export default AppexchangeAppDevelopmentServices;
