import Implementation from "../images/ExpreanceCloud.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import RotatingWheel from "../Animations/RotatingWheel";
import NavBar from "../../NavBar";





const SalesforceExperienceCloud = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();


  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  const salesforceRef = useRef(null);
  const consultingRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  

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
            duration: 5.2,
            ease: "power3.out",
          },
          "<"
        );
    }
  }, [inView]); 

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } }); // Ensure state is passed
  };
  

  return (

  <>
    <NavBar/>
    <div ref={ref} className={isDarkTheme ? "bg-black text-white" : "bg-white : text-black"}>
      <div className="w-full h-auto font-raleway grid grid-cols-2 relative min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10 mt-28">
          <div className=" text-left">
            <h5 className="text-[32px] font-medium tracking-[4.8px]" ref={salesforceRef}>
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2  my-2 w-[255px]"
                style={{
                  backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)" }}
              ></div>
            </div>

            <h5 className="text-[32px] uppercase font-medium tracking-[4.8px]" ref={consultingRef}>
           Experience Cloud Service
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2  my-2 w-[587px]"
                style={{
                  backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)" }}
              ></div>
            </div>
          </div>

          <div className="text-[2.875rem] uppercase font-medium mt-5  tracking-[3.02px] leading-normal text-left" ref={paraRef}>
            <p>Transform Engagement</p>
            <p>with Salesforce</p>
            <p>Experience Cloud</p>
          </div>

          <div className="text-base uppercase mt-5 font-medium  tracking-[2.4px] h-[38px] text-[16px] leading-[18.78px] w-[700px] text-left" ref={para2Ref}>
            <p>Create personalized digital experiences for customers, partners, and employees—powered by Salesforce.</p>
          </div>

          <div className="flex justify-left mt-14">
            <button
              type="submit"
              className={`w-[150px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
                ${isDarkTheme ? "bg-white text-black hover:bg-gray-500" : "bg-black text-white hover:bg-[#525252]"}
                form-item`}
              ref={btnRef}
              onClick={handleNavigation}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full mt-28">
          <img
            src={Implementation}
            alt="salesforce"
            className="h-[472px] w-auto max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-10 object-contain"
            ref={imgRef}
          />
        </div>

        {/* Additional Content Section */}
      </div>
      <div className="min-h-screen  mx-auto items-center justify-center">
  <div className="flex justify-center">
    <p className="w-[1418px] h-[75px] text-base font-raleway font-bold  text-[20px] leading-[21.59px] tracking-[0.1em] text-center">
    {`"Salesforce Experience Cloud makes it easy to create websites, portals, and apps that  connect with your CRM. With tools like Experience Builder, Salesforce CMS, and Mobile  Publisher, you can quickly build customized digital experiences for different needs."`}
    </p>
  </div>

  <div className="flex justify-center items-center mt-8 p-[10px]">
    <h6 className="font-bold text-[37px] leading-[45.49px] tracking-[0.1em] text-center">
      Why Choose Experience Cloud?
    </h6>
  </div>
  <div className="flex justify-center items-center">
    <hr
      className="w-[650px] h-[1px] border-none"
      style={{
        backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
        height: "px",
        border: "none",
      }}
    />
  </div>
  <div className="flex justify-center mt-4">
    <p className="w-[1418px] h-[75px] text-base font-raleway font-bold  text-[20px] leading-[21.59px] tracking-[0.1em]">
    {`Salesforce Experience Cloud is a powerful platform that allows businesses to build engaging  digital experiences for customers, partners, and employees. It provides a seamless way to  integrate CRM data with websites, portals, and applications, enabling enhanced  collaboration and personalized interactions. Below are the key benefits of Experience Cloud:`}
    </p>
  </div>


   <RotatingWheel/>



</div>
    </div>
  </>
  );
};

export default SalesforceExperienceCloud;
