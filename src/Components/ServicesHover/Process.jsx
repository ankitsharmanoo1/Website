import { useState, useRef} from "react";
// import black from "../ServicesHover/images/Property 1=Defaultblack.png";
import gsap from "gsap"; // Import GSAP
import { useTheme } from "../../Context/ThemeContext";
import white from "../ServicesHover/images/Our Process white.png";
import black from "../ServicesHover/images/blackprocess.png";


export function Process() {
  const [showContent, setShowContent] = useState(false); // State to control visibility of content
  const imgRef = useRef(null); // Reference for the image to hide on hover
  const contentRef = useRef(null); // Reference for the content to show/hide
  const headerRef = useRef(null); // Reference for the header animation

  const { isDarkTheme } = useTheme(); // Access the theme context

  // const handleMouseEnter = () => {
  //   setShowContent(true);
  //   gsap.to(imgRef.current, { opacity: 0, duration: 1 });
  // };

  // useEffect(() => {
  //   gsap.fromTo(
  //     contentRef.current,
  //     { y: 150, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 2,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: contentRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     headerRef.current,
  //     { x: 900, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 2,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //     }
  //   );
  // }, []);

  const handleMouseEnter = () => {
    if (!showContent) {
      setShowContent(true); //


      gsap.fromTo(
        headerRef.current,
        { y: -400, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power3.out",
        }
      );

      // Animate the content
      gsap.fromTo(
        contentRef.current,
        { x: -400, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Fade out the image
      gsap.to(imgRef.current, {
        x:400,
        scale: 0.8, // Scales down slightly
        duration:1,
        ease: "power3.inOut",
      });
    }
  };



  return (
    <section
      className={`flex flex-col justify-center items-center min-h-screen relative overflow-hidden ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
      role="region"
      aria-labelledby="whyChooseUsTitle"
    >
      <div
        className="w-[1193px] h-[273px]  gap-[10px] relative flex justify-center items-center"
        onMouseEnter={handleMouseEnter} // Trigger content display on hover
      >
        {/* Image */}
        <img
          ref={imgRef}
          src={isDarkTheme ? white : black}
          alt="Property"
          className="absolute inset-0 w-full h-full object-cover transition-opacity"
        />

        {/* Header */}
        <h2
          ref={headerRef}
          id="whyChooseUsTitle"
          className={`absolute top-[10px] left-0 bottom-0 w-[1062px] h-[63px] text-4xl font-bold size-[37px] text-left font-raleway leading-[43.44px] tracking-[0.1em] ${
            showContent ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isDarkTheme ? "text-white" : "text-black"}`}
        >
          Our Process
        </h2>

        {/* Content */}
        <div
          ref={contentRef}
          className={`absolute p-[10px] font-raleway left-0 w-[1062px] h-[190px] mt-8 font-normal items-center text-center gap-[10px]  transition-opacity duration-500 ${
            showContent ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isDarkTheme ? "text-white" : "text-black"}`}
        >
          <ul className="list-decimal text-left text-lg leading-7">
            <li> Discovery: We begin by understanding your business needs and challenges</li>
            <li> Strategy: We develop a comprehensive implementation plan aligned with your goals</li>
            <li> Implementation: Our experts execute the solution using industry best practices</li>
            <li> Testing: Rigorous quality assurance ensures optimal performance</li>
            <li> Training: We provide comprehensive training to your team</li>
            <li> Support: Ongoing maintenance and support to ensure continued success</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


// gsap.to(imgRef.current, {
//   x: "50%", // Moves the image to the right side
//   scale: 0.8, // Scales the image down slightly
//   duration: 1.5,
//   ease: "power3.inOut",
// });
//     }
//   };