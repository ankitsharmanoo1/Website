import salesFroceImg from "../images/SalesForce Services.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import daimg from "../images/salesforce ds1.png";
import solutionDesign from "../images/solutionDesign.png";
import bestPractice from "../images/Best Practice.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";


const SalesForceCPQ = () => {
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
    if (!inView) return; // Only trigger animations when component is in view
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
        { y: -400, opacity: 0, scale:0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out", scale:1 }
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
    <div ref={ref} className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>
      <div className="w-full h-auto font-raleway grid grid-cols-2 relative min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10">
          <div className=" text-left">
            <h5 className="text-[32px] font-medium tracking-[4.8px]" ref={salesforceRef}>
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2  my-2 w-[255px]"
                style={{
                  backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "2px",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)" }}
              ></div>
            </div>

            <h5 className="text-[32px] uppercase font-medium tracking-[4.8px]" ref={consultingRef}>
            SalesForce CPQ
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2  my-2 w-[350px]"
                style={{
                  backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
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

          <div className="text-[46px] font-medium mt-5  tracking-[3.02px] leading-normal text-left" ref={paraRef}>
            <p>REVOLUTIONIZE</p>
            <p>YOUR BUSINESS WITH</p>
            <p>SALESFORCE CONSULTING</p>
          </div>

          <div className="uppercase text-base mt-5 font-medium  tracking-[2.4px] h-[38px] text-[16px] leading-[18.78px] w-[700px] text-left" ref={para2Ref}>
            <p>Maximizing Salesforce capabilities to streamline your operations and drive growth.</p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-[210px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
                ${isDarkTheme ? "bg-white text-black hover:bg-gray-500" : "bg-black text-white hover:bg-[#525252]"}
                form-item`}
              ref={btnRef}
            >
              Get a Free Consultation
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full">
          <img
            src={salesFroceImg}
            alt="salesforce"
            className="h-[472px] w-auto max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-10 object-contain"
            ref={imgRef}
          />
        </div>

        {/* Additional Content Section */}
      </div>
      <div className="min-h-screen  mx-auto items-center justify-center">
  <div className="flex justify-center">
    <p className="w-[1118px] h-[75px] text-base font-raleway font-bold  text-[22px] leading-[23.59px] tracking-[0.1em] text-center">
      {`"At the core of every successful Salesforce Service Cloud project is a thorough understanding  of the client&apos;s  unique business needs. Our consulting approach ensures that every solution aligns  with your customer service goals."`}
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
        backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
        height: "px",
        border: "none",
      }}
    />
  </div>
  <div className="">

  <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
    <div className="text-left max-w-[720px] max-h-[190px] p-[10px] gap-[10px] ml-8">
  <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
    Discovery & Analysis
  </h6>   
  
  <div className="flex justify-left items-center mt-0.5">
    <hr
      className="w-[350px] h-[1px] border-none"
      style={{
        backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
        height: "px",
        border: "none",
      }}
    />
  </div>  
      <p className="font-raleway font-medium    p-[10px] text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
        We collaborate with your team to assess your existing customer service processes, pain points, and KPIs. Whether you need to improve case
        resolution times, implement automation, or enhance self-service options, we
        define a roadmap tailored to your goals. 
      </p>
    </div>

    <div className="flex justify-center items-center mr-10">
      <img
        src={daimg}
        alt="Discovery & Analysis"
        className="max-w-[300px]  max-h-[298.39px] object-contain"
      />
    </div>
  </div>

  <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
  <div className="flex justify-center items-center md:order-1 ml-10">
    <img
      src={solutionDesign}
      alt="Solution Design"
      className="max-w-[300px] max-h-[298.39px] object-contain"
    />
  </div>

  <div className="text-left max-w-[720px] max-h-[190px] p-[10px] gap-[10px] md:order-2">
    <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">
    Solution Design:
    </h6>

    <div className="flex justify-left items-center mt-0.5">
      <hr
        className="w-[273px] h-[1px] border-none"
        style={{
          backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
          height: "px",
          border: "none",
        }}
      />
    </div>
    
    <p className="font-raleway font-medium  p-[10px] text-[20px] text-justify mr-10 leading-[24.59px] tracking-[0.1em]">
    We design a scalable and future-proof Service Cloud architecture that aligns
 with your workflows and customer needs. This includes feature
 recommendations such as Omni-Channel routing, Knowledge Base, or
 Einstein Al for automation.
    </p>
  </div>
</div>

<div className="mt-8">

  <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-center">
  Best Practice We Follow
  </h6>   
  
  <div className="flex justify-center items-center mt-0.5">
    <hr
      className="w-[400px] h-[1px] border-none"
      style={{
        backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
        height: "px",
        border: "none",
      }}
    />
  </div>  
</div>


<div className="thirddiv flex flex-col md:flex-row justify-between items-center mt-4 gap-8">
<div className="text-left max-w-[720px] max-h-[190px] p-[10px] gap-[10px] ml-8">
  <ul className="list-disc pl-5 font-raleway font-medium  text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
    <li>Define clear use cases for Service Cloud features and align them with business objectives.</li>
    <li>Ensure scalability by designing a system that accommodates future growth and additional channels (social media, chat, etc).</li>
    <li>Conduct a gap analysis to identify customizations needed beyond out-of-the-box features.</li>
  </ul>
</div>


    <div className="flex justify-center items-center mr-10">
      <img
        src={bestPractice}
        alt="Discovery & Analysis"
        className="max-w-[300px]  max-h-[298.39px] object-contain"
      />
    </div>
  </div>


</div>

</div>
    </div>
  );
};

export default SalesForceCPQ;
