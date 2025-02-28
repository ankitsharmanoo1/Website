import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../../public/images/about-us.png";
import { useTheme } from "../Context/ThemeContext";
import NavBar from "./NavBar";
// import Footer from "./Footer";


const AboutUs = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const sectionRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable animation on mobile

    const about = aboutRef.current;
    const mission = missionRef.current;
    const vision = visionRef.current;
    const section = sectionRef.current;
    
    const allElements = [about, vision];
    gsap.set(allElements, { opacity: 0, x: 400 });
    gsap.set(mission, { opacity: 0, x: -400 });

    const triggerAnimation = () => {
      gsap.to(about, { x: 0, opacity: 1, duration: 1.9, delay: 0.2 });
      gsap.to(mission, { x: 0, opacity: 1, duration: 1.9, delay: 0.4 });
      gsap.to(vision, { x: 0, opacity: 1, duration: 1.9, delay: 0.6 });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div
        id="about-section"
        ref={sectionRef}
        className={`flex flex-col items-center w-full  p-5 gap-10 font-raleway 
          ${isDarkTheme ? "bg-black" : "bg-white"}`}
      >
        {/* About Us Section */}
        <div className="w-full mt-10 md:mt-20 px-5 md:px-20">
          <div
            className={`flex flex-col md:flex-row w-full overflow-hidden rounded-xl md:rounded-[25px_0px_0px_25px] 
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={aboutRef}
          >



            <div className="flex-1 flex flex-col justify-center gap-4 p-8  ">
            <h2 className={`text-2xl md:text-3xl font-heading ${isDarkTheme ? "text-white" : "text-black"} text-center md:text-left`}>About Us</h2>

              <p className={`text-[0.8rem] md:text-lg md:w-[130%] text-justify ${isDarkTheme ? "text-white" : "text-black"}`}>
              At Softshala Technologies, we&apos;re architects of digital
              transformation, specializing in enterprise solutions that empower
              businesses to thrive in the digital age. With our expertise,
              we&apos;ve established ourselves as pioneers in delivering
              comprehensive ServiceNow and Salesforce solutions, while
              nurturing future talent through our innovative learning platform,
              Learn with Softshala. Our team of certified professionals brings
              deep industry knowledge and technical expertise to every project,
              ensuring solutions that drive real business value.
              </p>
            </div>
            <div className="flex-1 relative flex justify-center md:justify-end p-5 hidden md:flex">
              <img src={image} alt="About Us" className="max-w-full h-auto md:max-w-[80%]" />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10 px-5 md:px-20">
          {/* Our Mission */}
          <div
            className={`flex-1 p-8 rounded-xl md:rounded-[25px_0px_0px_25px] 
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={missionRef}
          >
            <h2 className={`text-2xl md:text-3xl font-heading ${isDarkTheme ? "text-white" : "text-black"} text-center md:text-left`}>Our Mission</h2>
            <p className={`text-[0.8rem] md:text-lg text-justify mt-4 ${isDarkTheme ? "text-white" : "text-black"}`}>
            To empower organizations through innovative technology solutions
            while fostering a culture of continuous learning and excellence. We
            believe in transforming businesses by delivering solutions that not
            only solve today&apos;s challenges but prepare them for
            tomorrow&apos;s opportunities. Through our commitment to quality
            and innovation, we aim to be the catalyst for digital transformation
            across industries.
            </p>
          </div>



          {/* Our Vision */}
          <div
            className={`flex-1 p-8 rounded-xl  md:rounded-[25px_0px_0px_25px]
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={visionRef}
          >
            <h2 className={`text-2xl md:text-3xl font-heading ${isDarkTheme ? "text-white" : "text-black"} text-center md:text-left`}>Our Vision</h2>
            <p className={`text-[0.8rem] md:text-lg text-justify mt-4 ${isDarkTheme ? "text-white" : "text-black"}`}>
            To empower organizations through innovative technology solutions
            while fostering a culture of continuous learning and excellence. We
            believe in transforming businesses by delivering solutions that not
            only solve today&apos;s challenges but prepare them for
            tomorrow&apos;s opportunities. Through our commitment to quality
            and innovation, we aim to be the catalyst for digital transformation
            across industries.
            </p>
          </div>
        </div>

      </div>
    {/* <Footer/> */}
    </>
  );
};

export default AboutUs;