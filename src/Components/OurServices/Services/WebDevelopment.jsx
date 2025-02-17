import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import webDevelopment from "../../../../public/images/WebDev.png";


gsap.registerPlugin(ScrollTrigger);


const WebDevelopment = () => {

  const imageRef = useRef(null);  // Reference to the image
  const containerRef = useRef(null);  // Reference to the container
  const headingRef  = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);



const [hasAnimated, setHasAnimated] = useState(false); 
  

  useEffect(() => {
    // Initial state for all elements
    gsap.set(imageRef.current,{opacity:1})
    gsap.set([ headingRef.current, paragraphRef.current, listRef.current], {
      opacity: 0,
    });
  }, []);

  const handleMouseEnter = () => {
    if (hasAnimated) return; // Prevent animation if already triggered
  
    // Trigger animations
    gsap.fromTo(
      imageRef.current,
      {
        x: "0%",
        y: "0%",
        scale: 1,
        opacity: 1,
      },
      {
        x: "-60%", // Moves to the right 60% of the container width
        y: "-45%", // Moves upward a little
        scale: 0.5, // Shrinks the image
        opacity: 1, // Keeps the image visible
        duration: 1,
        ease: "power3.inOut",
        marginLeft: "120px",
      }
    );
    gsap.fromTo(
      headingRef.current,
      { x: 900, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.9,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.9,
        stagger: 0.9,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      listRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.9,
        ease: "power3.out",
      }
    );
  
    setHasAnimated(true); // Mark the animation as triggered
  };




  return (
     <div className="w-[1055px] h-[544.81px] gap-[20px] left-[20px] mt-14" ref={containerRef}
      onMouseEnter={handleMouseEnter} // Trigger animation on mouse enter
     >
              <img
                
                ref={imageRef}
                src={webDevelopment}
                alt="WebDevelopment"
                className="service-img absolute" // Position image absolutely inside the container
              />
              <h1 className="w-[388px] h-[31px] font-raleway font-thin text-3xl p-[10px] gap-[10px] ml-28 mb-24" ref={headingRef}>
              Web Devlopment Services
              </h1>
    
              <p className="w-[1035px] h-[225px] font-raleway text-[20px] text-justify leading-[24.6px] p-[10px] gap-[10px] mb-9" ref={paragraphRef}>
              At Softshala Technologies, we specialize in providing end-to-end Full Stack Web Development solutions that empower businesses to thrive in today’s digital landscape. From front-end design to back-end architecture, our expert developers combine the best technologies and practices to create scalable, efficient, and high-performance web applications.<br/>
              With a deep understanding of both the technical and creative aspects of web development, we craft custom solutions that bring your ideas to life while ensuring seamless functionality, user experience, and business alignment. Whether you’re building a new website, enhancing an existing platform, or integrating web-based solutions, we provide comprehensive development services designed to meet your unique needs.
              </p>
    
              <div className="flex justify-between mx-auto w-[1055px] h-[170px] p-[10px] ml-16" ref={listRef}>
                <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6 ">
                  <li>Front-End Development</li>
                  <li>Back-End Development</li>
                  <li>API Development & Integration</li>
                  <li>Custom Web Application Development</li>
                </ul>
    
                <ul className="list-disc flex flex-col w-1/2 space-y-2 pl-6">
                  <li>E-Commerce Solutions</li>
                  <li>Web App Security</li>
                  <li>Web Application Maintenance & Support</li>
                </ul>
              </div>
            </div>
  )
}

export default WebDevelopment