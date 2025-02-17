import CloudSolution from "../images/SalesCloudSolutionServices.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CaseManagement from "../images/case management.png";
import OmniChannel from "../images/omniChannel.png";
import Messaging from "../images/Messagingforweb.png";
import KnowledgeBase from "../images/KnowledgeBaseImplementation.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";


const SalesCloudSolutions = () => {
  const { isDarkTheme } = useTheme();

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
    if (!inView) return; 
    const timeline = gsap.timeline();

    if (paraRef.current) {
      const paraItems = paraRef.current.querySelectorAll("p");
      const paraItems2 = para2Ref.current.querySelectorAll("p");

      gsap.fromTo(
        paraItems,
        { x: 430, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        paraItems2,
        { y: 130, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(btnRef.current, { opacity: 0 }, { opacity: 1, x: 300, duration: 1.3, ease: "power3.inOut" });
      gsap.fromTo(
        imgRef.current,
        { y: -400, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
      );

      const salesforceLetters = salesforceRef.current.innerText.split("");
      salesforceRef.current.innerHTML = salesforceLetters.map((char) => `<span class="letter">${char}</span>`).join("");

      timeline
        .fromTo(
          salesforceRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power3.out",
          }
        )
        .fromTo(
          line1Ref.current,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left", duration: 2, ease: "power3.out" },
          "<"
        );

      const consultingLetters = consultingRef.current.innerText.split("");
      consultingRef.current.innerHTML = consultingLetters.map((char) => `<span class="letter">${char}</span>`).join("");

      timeline
        .fromTo(
          consultingRef.current.querySelectorAll(".letter"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power3.out",
          },
          "+=0.2"
        )
        .fromTo(
          line2Ref.current,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left", duration: 3.2, ease: "power3.out" },
          "<"
        );
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="w-full h-auto font-raleway grid grid-cols-2 relative min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10">
          <div className="text-white text-left">
            <h5 className="text-[30px] font-medium tracking-[4.8px]" ref={salesforceRef}>
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2 border-white my-2 w-[255px]"
                style={{
                  backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)" }}
              ></div>
            </div>

            <h5 className="uppercase text-[30px] font-medium tracking-[4.8px]" ref={consultingRef}>
            Service cloud Solutions SERVICE
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2 border-white my-2 w-[747px]"
                style={{
                  backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)" }}
              ></div>
            </div>
          </div>

          <div className="uppercase text-[43px] font-medium mt-5 text-white tracking-[3.02px] leading-normal text-left" ref={paraRef}>
            <p>Deliver Exceptional</p>
            <p>Customer Service with</p>
            <p>Salesforce Service Cloud</p>
          </div>

          <div className=" text-base uppercase mt-5 font-medium text-white tracking-[2.4px] h-[38px] text-[16px] leading-[18.78px] w-[700px] text-left" ref={para2Ref}>
            <p>AI-driven, omni-channel solutions to enhance customer experience and boost agent productivity</p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-[210px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
                ${isDarkTheme ? "bg-white text-black hover:bg-gray-500" : "bg-black text-white hover:bg-[#525252]"}
                form-item`}
              ref={btnRef}
            >
              Talk to Our Experts
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full">
          <img
            src={CloudSolution}
            alt="salesforce"
            className="h-[472px] w-auto max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-10 object-contain"
            ref={imgRef}
          />
        </div>

        {/* Additional Content Section */}
      </div>
      <div className="min-h-screen text-white mx-auto items-center justify-center">
  <div className="flex justify-center">
    <p className="w-[1118px] h-[75px] text-base font-raleway font-bold text-white text-[22px] leading-[21.59px] tracking-[0.1em] text-center">
   {`"Our implementation process ensures that Service Cloud is not only set up to meet your current requirements but also aligned with your future growth plans."`}
    </p>
  </div>

  <div className="flex justify-center items-center mt-8 p-[10px]">
    <h6 className="font-bold text-[37px] leading-[45.49px] tracking-[0.1em] text-center">
      What We Do
    </h6>
  </div>
  <div className="flex justify-center items-center mt-0.5">
    <hr
      className="w-[250px] h-[1px] border-none"
      style={{
        backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
        height: "px",
        border: "none",
      }}
    />
  </div>
  <div className="">

  <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
    <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px] ml-8">
  <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
  Case Management
  </h6>   
  
  <div className="flex justify-left items-center mt-0.5">
    <hr
      className="w-[306px] h-[1px] border-none"
      style={{
        backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
        height: "px",
        border: "none",
      }}
    />
  </div>  
      <p className="font-raleway font-medium   text-white p-[10px] text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
      <ul className="list-disc pl-5 font-raleway font-medium text-white text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
    <li>We automated case creation from multiple channels, including email, web forms, and social media, using Email-to-Case and Web-to-Case functionalities.</li>
    <li>Using Salesforce Flows, we implemented escalation rules to ensure urgent cases were addressed within SLA timelines.</li>
    
  </ul>
      </p>
    </div>

    <div className="flex justify-center items-center mr-10">
      <img
        src={CaseManagement}
        alt="Discovery & Analysis"
        className="max-w-[300px]  max-h-[298.39px] object-contain"
      />
    </div>
  </div>

  <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
  <div className="flex justify-center items-center md:order-1 ml-10">
    <img
      src={OmniChannel}
      alt="Solution Design"
      className="max-w-[300px] max-h-[298.39px] object-contain"
    />
  </div>

  <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px] md:order-2">
    <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
    Omni-Channel Implementation
    </h6>

    <div className="flex justify-left items-center mt-0.5">
      <hr
        className="w-[540px] h-[1px] border-none"
        style={{
          backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
          height: "px",
          border: "none",
        }}
      />
    </div>
    
    <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px]">
  <ul className="list-disc pl-5 font-raleway font-medium text-white text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
    <li>Our developers configured Omni-Channel routing to distribute work based on agent skills, availability, and workload. </li>
    <li>We implemented Presence Status to let agents manage their availability dynamically.</li>
    <li>Routing logic was customized using Flow, ensuring priority cases were always routed first.</li>
  </ul>
</div>
  </div>
</div>


<div className="thirddiv flex flex-col md:flex-row justify-between items-center mt-28 gap-8">
    <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px] ml-8">
  <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
  Messaging for In-App and Web
  </h6>   
  
  <div className="flex justify-left items-center mt-0.5">
    <hr
      className="w-[515px] h-[1px] border-none"
      style={{
        backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
        height: "px",
        border: "none",
      }}
    />
  </div>  
      <p className="font-raleway font-medium   text-white p-[10px] text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
      <ul className="list-disc pl-5 font-raleway font-medium text-white text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
    <li>Deployed Messaging channels integrated with Einstein Bots to handle FAQs and route complex queries to agents.</li>
    <li>Customized the chatbot experience with contextual greetings and proactive engagement using Einstein AI.</li>
    
  </ul>
      </p>
    </div>

    <div className="flex justify-center items-center mr-10">
      <img
        src={Messaging}
        alt="Discovery & Analysis"
        className="max-w-[300px] f item-center max-h-[298.39px] object-contain"
      />
    </div>
  </div>

  <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
  <div className="flex justify-center items-center md:order-1 ml-10">
    <img
      src={KnowledgeBase}
      alt="Solution Design"
      className="max-w-[300px] max-h-[298.39px] object-contain"
    />
  </div>

  <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px] md:order-2">
    <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
    Knowledge Base Implementation
    </h6>

    <div className="flex justify-left items-center mt-0.5">
      <hr
        className="w-[540px] h-[1px] border-none"
        style={{
          backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
          height: "px",
          border: "none",
        }}
      />
    </div>
    
    <div className="text-left max-w-[920px] max-h-[190px] p-[10px] gap-[10px]">
  <ul className="list-disc pl-5 font-raleway font-medium text-white text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
    <li> We created a robust Knowledge Base by developing custom article categories, ensuring customers and agents could quickly find solutions.</li>
    <li>Integrated the Knowledge Base into the Self-Service Portal and Service Console for seamless access.</li>
    <li>Enabled multilingual support to serve a global customer base.</li>
  </ul>
</div>
  </div>
</div>




</div>

</div>
    </div>
  );
};

export default SalesCloudSolutions;
