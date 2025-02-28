import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const beTheRef = useRef(null);
  const nextGenRef = useRef(null);
  const innovatorRef = useRef(null);
  const navigate = useNavigate();

  
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function

  useEffect(() => {

    if (window.innerWidth <= 768) return; // Disable animation on mobile

    const beThe = beTheRef.current;
    const nextGen = nextGenRef.current;
    const inno = innovatorRef.current;

    if (!beThe || !nextGen || !inno) return; // Debugging: Make sure refs are set

    // Set initial positions for "Be The" and "Next Gen"
    gsap.set(beThe, { opacity: 1, x: -700 });
    gsap.set(nextGen, { opacity: 1, x: 700 });

    // Set initial size and position for "Innovator"
    gsap.set(inno, {
     x: [-4600, 9600],
      y: -3750,
    
      letterSpacing:"530px",
      opacity: 1,
      width: "100vw", // Ensure it covers width
      height: "100vh", 
      // top:"-40px",
      fontSize: "6978px",
    });

    // Animate "Be The" text from left to right
    gsap.to(beThe, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    // Animate "Next Gen" text from right to left
    gsap.to(nextGen, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    // Animate "Innovator" text (from large to normal size)

    gsap.to(inno, {
      y: 0,
      x: [0,0],
  
      opacity: 1,
      width: "auto",
      height: "auto",
      fontSize: "6rem", // Final size
      delay: 1.5,
      letterSpacing: "0px", // Animate letter spacing properly
      duration: 3,
      ease: "power3.out",
});


  }, []);

  const handleCareers = () => {
    navigate("/careers", { state: { scrollToContact: true } }); // Ensure state is passed
  };


  return (
    <div className={`${isDarkTheme ? "bg-[#000000] text-white" : "bg-white text:black" } z-50 mt-9 `}
    >
      <div className="w-full max-w-[1566px] h-[692px] max-auto top-24  gap-[58px] flex flex-col items-start relative z-10 px-4 md:px-0"
              style={{
        background: "linear-gradient(to right, rgba(0, 0, 0, 1)100% , rgba(0, 0, 0, ) 0%)",
      }}
      >
        <div className="relative self-stretch "
        
        
        >
          <div className={`flex flex-col w-full md:w-[40%] items-start gap-10 md:gap-20 relative `}
              style={ isDarkTheme ?{
        background: "linear-gradient(to right, rgba(0, 0, 0, 1)60% , rgba(0, 0, 0, 0))",
      }:{background: "linear-gradient(to right, rgba(255,255,255,1) 60%, rgba(255,255,255,0))"}}
          
          >
    

            <div
              className={`box font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              } `}
              ref={beTheRef}
            >
              BE THE
            </div>
            {/* "Next Gen" text */}
            <div
              className={`font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              } `}
              ref={nextGenRef}
            >
              NEXT GEN
            </div>
            {/* "Innovator" text */}
            <div
              className={`font-thin text-5xl md:text-8xl ml-6 md:ml-32 ${
                isDarkTheme ? "text-white" : "text-black"
              } `}
              ref={innovatorRef}
            >
              INNOVATOR
            </div>
          </div>
        </div>

  <div className="w-full flex flex-col items-center">
    <button className={`w-[105px] h-[39px] text-base font-bold ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-black text-white hover:bg-gray-700"
            } rounded-md`}
             onClick={handleCareers}
            >
      Know More
    </button>
</div>
      </div>
    </div>
  );
};

export default Home;






// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import image from "../../public/images/about-us.png";
// import { useTheme } from "../Context/ThemeContext";
// import NavBar from "./NavBar";

// const AboutUs = () => {
//   const aboutRef = useRef(null);
//   const missionRef = useRef(null);
//   const visionRef = useRef(null);
//   const sectionRef = useRef(null);

//   const { isDarkTheme } = useTheme(); // Access the theme context

//   useEffect(() => {
//     const about = aboutRef.current;
//     const mission = missionRef.current;
//     const vision = visionRef.current;
//     const section = sectionRef.current;

//     const allElements = [about, vision];

//     // Set initial animation state
//     gsap.set(allElements, { opacity: 0, x: 400 });
//     gsap.set(mission, { opacity:0, x:-400})

//     // Function to handle animations
//     const triggerAnimation = () => {
//       gsap.to(about, {
//         x: 0,
//         opacity: 1,
//         duration: 1.9,
//         delay: 0.2,
//       });
//       gsap.to(mission, {
//         x: 0,
//         opacity: 1,
//         duration: 1.9,
//         delay: 0.4,
//       });
//       gsap.to(vision, {
//         x: 0,
//         opacity: 1,
//         duration: 1.9,
//         delay: 0.6,
//       });
//     };

//     // Intersection Observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             triggerAnimation();
//             observer.disconnect(); // Disconnect observer after animation triggers
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <>

//     <div
//       id="about-section"
//       ref={sectionRef}
//       className={`flex font-raleway flex-col items-center w-full min-h-screen    p-5 gap-10 ${isDarkTheme ? "bg-[#000000]" : "bg-white"}`}>
//       {/* About Us Section */}
//     <NavBar/>
//       <div className="ml-20 w-full mt-20 overflow-hidden">
//         <div
//           className={`flex w-full ${
//             isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
//           } rounded-[25px_0px_0px_25px]`}
//           ref={aboutRef}
//         >
//           <div className="flex-1 flex flex-col justify-center gap-4 p-8">
//             <h2
//               className={`font-heading text-3xl  ${
//                 isDarkTheme ? "text-white" : "text-black"
//               }`}
//             >
//               About Us
//             </h2>
//             <p
//               className={`font-raleway text-lg leading-relaxed w-[130%]  text-justify ${
//                 isDarkTheme ? "text-white" : "text-black"
//               }`}
//             >
//               At Softshala Technologies, we&apos;re architects of digital
//               transformation, specializing in enterprise solutions that empower
//               businesses to thrive in the digital age. With our expertise,
//               we&apos;ve established ourselves as pioneers in delivering
//               comprehensive ServiceNow and Salesforce solutions, while
//               nurturing future talent through our innovative learning platform,
//               Learn with Softshala. Our team of certified professionals brings
//               deep industry knowledge and technical expertise to every project,
//               ensuring solutions that drive real business value.
//             </p>
//           </div>
//           <div className="flex-1 relative  flex gap-2.5 ">
//             <img
//               src={image}
//               alt="About Us"
//               className="absolute right-0 mr-20 top-1/2 transform -translate-y-1/2  object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mission and Vision Section */}
//       <div className="flex w-full gap-10 ml-35">
//         {/* Our Mission */}
//         <div
//           className={`flex-1 items-start w-full ${
//             isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
//           } rounded-[0px_25px_25px_0px] p-8 mr-20`}
//           ref={missionRef}
//         >
//           <h2
//             className={`font-heading text-3xl tracking-wide ml-20 ${
//               isDarkTheme ? "text-white" : "text-black"
//             }`}
//           >
//             Our Mission
//           </h2>
//           <p
//             className={`font-raleway text-lg leading-relaxed text-justify mt-4 ml-20 ${
//               isDarkTheme ? "text-white" : "text-black"
//             }`}
//           >
//             To empower organizations through innovative technology solutions
//             while fostering a culture of continuous learning and excellence. We
//             believe in transforming businesses by delivering solutions that not
//             only solve today&apos;s challenges but prepare them for
//             tomorrow&apos;s opportunities. Through our commitment to quality
//             and innovation, we aim to be the catalyst for digital transformation
//             across industries.
//           </p>
//         </div>

//         {/* Our Vision */}
//         <div
//           className={`flex-1 ${
//             isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"
//           } rounded-[25px_0px_0px_25px] p-2.5`}
//           ref={visionRef}
//         >
//           <h2
//             className={`font-heading text-3xl tracking-wide mt-5 ml-6 ${
//               isDarkTheme ? "text-white" : "text-black"
//             }`}
//           >
//             Our Vision
//           </h2>
//           <p
//             className={`font-raleway text-lg leading-relaxed text-justify mt-4 mr-20 ${
//               isDarkTheme ? "text-white" : "text-black"
//             }`}
//           >
//             To empower organizations through innovative technology solutions
//             while fostering a culture of continuous learning and excellence. We
//             believe in transforming businesses by delivering solutions that not
//             only solve today&apos;s challenges but prepare them for
//             tomorrow&apos;s opportunities. Through our commitment to quality
//             and innovation, we aim to be the catalyst for digital transformation
//             across industries.
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AboutUs;

