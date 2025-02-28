import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Outlet } from "react-router-dom";

import lines from "./images/2x lines.png";
import blacklines from "./images/blackLines.png";
import SalesForce from "./images/SalesForceIn Services.png";
import NavBar from "../NavBar";
import { useTheme } from "../../Context/ThemeContext";
import SalesForceConsultingService from "./SalesForceServices/SalesForceConsultingService";
import SalesForceDevlopmentServices from "./SalesForceServices/SalesForceDevlopmentService";
import SalesFroceImplementionServices from "./SalesForceServices/SalesFroceImplementionServices";
import SalesCloudSolutions from "./SalesForceServices/SalesCloudSolutions";
import AppexchangeAppDevelopmentServices from "./SalesForceServices/AppexchangeAppDevelopmentServices";
import SalesForceCPQ from "./SalesForceServices/SalesForceCPQ";
import SalesforceExperienceCloud from "./SalesForceServices/SalesforceExperienceCloud";
import SalesforceIntegrationServices from "./SalesForceServices/SalesforceIntegrationServices";
import SalesForceManagedServices from "./SalesForceServices/SalesForceManagedServices";
import SalesForceMarketingCloud from "./SalesForceServices/SalesForceMarketingCloud";
import SalesCloudSolutionServices from "./SalesForceServices/SalesCloudSolutionServices";


const SalesForceServices = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraph2Ref = useRef(null);
  const spanRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 400, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    ); // End position (top) and opacity
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 4, scale: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 100, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 } // End position (top) and opacity with delay
    );
    gsap.fromTo(
      paragraph2Ref.current,
      { x: -200, opacity: 0 }, // Start position (left) and opacity
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1 } // End position (center) and opacity with delay
    );

    gsap.fromTo(
      spanRef.current,
      { x: 200, opacity: 0 }, // Start position (right) and opacity
      { x: 0, opacity: 1, duration:2, ease: "power3.out", delay: 1.5 } // End position (center) and opacity with delay
    );
  }, []);

  return (
    <>

      <NavBar />
    <div
      className={`w-full font-raleway salesforceservice  grid grid-row-5 gap-44 mt-1 overflow-hidden ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      <div className="flex flex-col items-center justify-center text-center uppercase mt-32 ">
        <div
          ref={textRef}
          className="leading-[4rem] tracking-[0.4em] text-[2.25rem] font-bold"
        >
          <span> Empower Your Business with The</span>
          <br />
          <span> #1 CRM Solution</span>
        </div>
        <img
          ref={imageRef}
          src={SalesForce}
          className="w-[26rem]  left-[20px]   p-[0.625rem] gap-[0.625rem]"
          alt="SalesForce"
        />
        <div
          ref={paragraphRef}
          className="text-[1rem]  leading-[1.125rem] tracking-[0.26em] p-[0.625rem]"
        >
          <div className="flex flex-row justify-center items-center">
            <p ref={paragraph2Ref}>Transform customer experiences,</p>
            <span ref={spanRef}>AUTOMATE WORKFLOWS</span>
          </div>
          <p> and drive business growth with our expert Salesforce solutions</p>
        </div>
      </div>
     

      {/* <div className="flex flex-col items-center">
        <Link to="sales-force-ConsultingService"></Link>
        <Link to="salesforce-development"></Link>
        <Link to=" salesforce-Implementation"></Link>
        <Link to="salescloudsolution"></Link>
        <Link to="appexchangeApp"></Link>
        <Link to="salesforcecpq"></Link>
        <Link to="expreancecloud"></Link>
        <Link to="IntegrationServices"></Link>
        <Link to="SalesForceManagedServices"></Link>
        <Link to="SalesForceMarketingCloud"></Link>
        <Link to="SalesCloudSolutionServices"></Link>
        
        
        
         
        

      </div> */}

      <Outlet />

      {/* <NavBar/> */}


      <SalesForceConsultingService/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesForceDevlopmentServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesFroceImplementionServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesCloudSolutions/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <AppexchangeAppDevelopmentServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesForceCPQ/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesforceExperienceCloud/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesforceIntegrationServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesForceManagedServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesForceMarketingCloud/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />

      <SalesCloudSolutionServices/>
<img src={isDarkTheme ? lines : blacklines} className="mt-10" />


    </div>
    </>
  );
};

export default SalesForceServices;



// import  {  useRef, useState } from "react";
// import { gsap } from "gsap";

// const RotatingWheel = () => {
//   const wheelRef = useRef(null);
//   const [selectedService, setSelectedService] = useState("Regulations Compliance");
//   let rotationAngle = 0;
//   const services = [
//     "Mobile Responsive", "Data Security", "Profile Badges", "Access Management", "Customizable Component", "Enhanced Collaboration", 
//     "Centralized Data Sources", "Adaptable UI", "Resource Sharing", "Customizable Reports", "Business Analysis"
//   ];

//   const serviceDescriptions = {
//     "Mobile Responsive": "Ensures seamless experience across devices.",
//     "Data Security": "Protects sensitive business data with encryption.",
//     "Profile Badges": "Encourages engagement with interactive badges.",
//     "Access Management": "Manages permissions and security policies.",
//     "Customizable Component": "Tailors features to unique business needs.",
//     "Enhanced Collaboration": "Improves teamwork with real-time sharing.",
//     "Centralized Data Sources": "Unifies data for easy accessibility.",
//     "Adaptable UI": "Flexible design for different user needs.",
//     "Resource Sharing": "Facilitates smooth distribution of materials.",
//     "Customizable Reports": "Generates tailored analytics and insights.",
//     "Business Analysis": "Extracts valuable insights from data.",
//     "Customer Insights": "Helps understand customer behavior trends."
//   };

//   const handleClick = (service, index) => {
//     rotationAngle = index * -30;
//     gsap.to(wheelRef.current, {
//       rotation: rotationAngle,
//       duration: 0.5,
//       ease: "power2.out",
//     });
//     setSelectedService(service);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen   text-white">
//       <div className="text-center text-2xl font-extrabold mb-6 text-purple-400 drop-shadow-md uppercase tracking-wider">
//         {selectedService}
//       </div>
//       <div className="w-[800px] h-[800px] flex justify-center items-center relative">
//       {/* <div className="absolute w-[650px] h-[650px] bg-white rounded-full"></div> */}
//         <div
//           ref={wheelRef}
//           className="w-[400px] h-[400px]  bg-white border-gray-700 rounded-full flex justify-center items-center relative shadow-2xl"
//         >


//           {services.map((service, i) => (
//           // eslint-disable-next-line react/jsx-key
//           <div className="absolute bg-white z-20  w-[10.1px]  h-[90.97px]  text-black flex justify-center items-center text-center text-[14px] font-bold p-[3px]    cursor-pointer  duration-300 hover:scale-305">

//             <div
//               key={i}
//               className="absolute bg-white z-20  w-[160.1px]  h-[90.97px]  text-black flex justify-center items-center text-center text-[14px] font-bold p-[3px]    cursor-pointer  duration-300 hover:scale-305"
//               style={{
//                 transform: `rotate(${i * 33.28}deg) translate(300px) rotate(90deg)`,
//               }}
//               onClick={() => handleClick(service, i)}
//             >
//               {service}
//             </div>
//           </div>
//           ))}
//         </div>
//         <div className="absolute w-[499px] h-[499px] bg-black text-white text-center flex justify-center items-center rounded-full p-[3px] shadow-lg border-2 border-gray-600">
//           {serviceDescriptions[selectedService]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RotatingWheel;

