import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../../public/images/about-us.png";
import { useTheme } from "../Context/ThemeContext";

const AboutUs = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const sectionRef = useRef(null);

  const { isDarkTheme } = useTheme(); // Access the theme context

  useEffect(() => {
    const about = aboutRef.current;
    const mission = missionRef.current;
    const vision = visionRef.current;
    const section = sectionRef.current;

    const allElements = [about, vision];

    // Set initial animation state
    gsap.set(allElements, { opacity: 0, x: 400 });
    gsap.set(mission, { opacity:0, x:-400})

    // Function to handle animations
    const triggerAnimation = () => {
      gsap.to(about, {
        x: 0,
        opacity: 1,
        duration: 1.9,
        delay: 0.2,
      });
      gsap.to(mission, {
        x: 0,
        opacity: 1,
        duration: 1.9,
        delay: 0.4,
      });
      gsap.to(vision, {
        x: 0,
        opacity: 1,
        duration: 1.9,
        delay: 0.6,
      });
    };

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect(); // Disconnect observer after animation triggers
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="about-section"
      ref={sectionRef}
      className={`flex font-raleway flex-col items-center w-full min-h-screen  p-5 gap-10 ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
    >
      {/* About Us Section */}
      <div className="ml-20">
        <div
          className={`flex w-full ${
            isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
          } rounded-[25px_0px_0px_25px]`}
          ref={aboutRef}
        >
          <div className="flex-1 flex flex-col justify-center gap-4 p-8">
            <h2
              className={`font-heading text-3xl  ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              About Us
            </h2>
            <p
              className={`font-raleway text-lg leading-relaxed text-justify ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
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
          <div className="flex-1 relative  flex gap-2.5">
            <img
              src={image}
              alt="About Us"
              className="absolute right-0 mr-20 top-1/2 transform -translate-y-1/2  object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex w-full gap-10 ml-35">
        {/* Our Mission */}
        <div
          className={`flex-1 items-start w-full ${
            isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
          } rounded-[0px_25px_25px_0px] p-8 mr-20`}
          ref={missionRef}
        >
          <h2
            className={`font-heading text-3xl tracking-wide ml-20 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Our Mission
          </h2>
          <p
            className={`font-raleway text-lg leading-relaxed text-justify mt-4 ml-20 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
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
          className={`flex-1 ${
            isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
          } rounded-[25px_0px_0px_25px] p-2.5`}
          ref={visionRef}
        >
          <h2
            className={`font-heading text-3xl tracking-wide mt-5 ml-6 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Our Vision
          </h2>
          <p
            className={`font-raleway text-lg leading-relaxed text-justify mt-4 mr-20 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
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
  );
};

export default AboutUs;
