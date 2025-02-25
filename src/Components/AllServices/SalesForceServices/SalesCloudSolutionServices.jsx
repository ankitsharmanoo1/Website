import SolutionServices from "../images/salesfroce.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import OurExperties from "../images/OurExperties.png";
import ResultDeliver from "../images/ResultDeliver.png";
import OurSolutions from "../images/OurSolution.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
import whyChooseWhite from "../images/WhyChooseUs.png";
import whyChooseBlack from "../images/WhyChooseBlack.png";
import { useNavigate } from "react-router-dom";


const SalesCloudSolutionServices = () => {
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
  const img2Ref = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);
  const listRef3 = useRef(null);
  const listRef4 = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Runs animation only once
    threshold: 0.2, // Starts when 20% of the component is visible
  });


  const handleImageClick = () => {
    gsap.to(imgRef.current, {
      x: -200, // Move the image to the left
      opacity: 0, // Fade out the image
      duration: 2,
      ease: "power3.out",
    });
    listRef.current.classList.remove("hidden");
    // listRef.current.classList.remove("hidden");
    gsap.fromTo(
      listRef.current.querySelectorAll("ul"),
      { x: 800, opacity: 0 , scale:0}, // Start position (right)
      {
        x: 0, // End position (left)
        opacity: 1, // Fade in
        duration: 3,
        scale:1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  };

  const handleClick2 = (index) => {
    const refs = [listRef2, listRef3, listRef4];
    const spans = document.querySelectorAll('.option-span');
    spans.forEach((span, i) => {
      if (i === index) {
        span.classList.add('active');
      } else {
        span.classList.remove('active');
      }
    });
    refs.forEach((ref, i) => {
      if (i === index) {
        gsap.fromTo(
          ref.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 1, ease: "power3.out" }
        );
        ref.current.classList.remove("hidden");
      } else {
        gsap.to(ref.current, { height: 0, opacity: 0, duration: 1, ease: "power3.out" });
        ref.current.classList.add("hidden");
      }
    });
  };

  // const handleRemoveClick = (index) =>{
  //   const refs = [listRef2, listRef3, listRef4];
  //   refs.forEach((ref, i) => {
  //     if (i === index) {
  //       gsap.fromTo(
  //         ref.current,
  //         { height: 0, opacity: 0 },
  //         { height: "auto", opacity: 0, duration: 0, ease: "power3.out" }
  //       );
  //       ref.current.classList.add("hidden");
  //     } else {
  //       gsap.to(ref.current, { height: 0, opacity: 0, duration: 1, ease: "power3.out" });
  //       ref.current.classList.remove("hidden");
  //     }
  //   });
  // }

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
  }, [inView]); 

  
  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } }); // Ensure state is passed
  };

  return (
    <div ref={ref} className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>
      <div className="w-full h-auto font-raleway grid grid-cols-2 relative min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10">
          <div className=" text-left">
            <h5 className="text-[2rem] font-medium tracking-[0.3rem]" ref={salesforceRef}>
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2  my-2 w-[15.9375rem]"
                style={{
                  backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "0.125rem",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)" }}
              ></div>
            </div>

            <h5 className="text-[2rem] uppercase font-medium tracking-[0.3rem]" ref={consultingRef}>
              Sales Cloud Solution Service
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2  my-2 w-[42.125rem]"
                style={{
                  backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "0.125rem",
                  border: "none",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)" }}
              ></div>
            </div>
          </div>

          <div className="text-[2.875rem] uppercase font-medium mt-5 tracking-[0.18875rem] leading-normal text-left" ref={paraRef}>
            <p>Elevate Your Sales</p>
            <p>With Salesforce Sales</p>
            <p>Cloud Solutions</p>
          </div>

          <div className="text-base uppercase mt-5 font-medium  tracking-[0.15rem] h-[2.375rem] text-[1rem] leading-[1.17375rem] w-[43.75rem] text-left" ref={para2Ref}>
            <p>Empowering sales teams with cutting-edge tools to close deals faster</p>
          </div>

          <div className="flex justify-left mt-14">
            <button
              type="submit"
              className={`w-[13.125rem] h-[2.625rem] font-raleway leading-[1.17375rem] text-[1rem] font-bold rounded-[0.8125rem] p-[0.625rem] gap-[0.625rem] 
                ${isDarkTheme ? "bg-white text-black hover:bg-gray-500" : "bg-black text-white hover:bg-[#525252]"}
                form-item`}
              ref={btnRef}
              onClick={handleNavigation}

            >
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full right-0">
          <img
            src={SolutionServices}
            alt="salesforce"
            className="absolute right-0  h-[29.5rem] w-auto max-w-[31.25rem] lg:max-w-[43.75rem] xl:max-w-[56.25rem]  object-contain"
            ref={imgRef}
          />
        </div>

        {/* Additional Content Section */}
      </div>
      <div className="min-h-screen  mx-auto items-center justify-center">
        <div className="flex justify-center">
          <p className="w-[69.875rem] h-[4.6875rem] text-base font-raleway font-bold text-[1.25rem] leading-[1.349375rem] tracking-[0.1em] text-center">
            {`"Build strong customer relationships and grow revenue with a single source of truth.
Sales Cloud the #1 CRM for sales Let us help you sell faster, smarter, and more efficiently. With built-in automation, intelligence, and real-time data, we will help you boost productivity and growth.
"`}
          </p>
        </div>

        <div className="flex justify-center items-center mt-8 p-[0.625rem]">
          <h6 className="font-bold text-[2.3125rem] leading-[2.843125rem] tracking-[0.1em] text-center">
            What We Do
          </h6>
        </div>
        <div className="flex justify-center items-center mt-0.5">
          <hr
            className="w-[15.625rem] h-[0.0625rem] border-none"
            style={{
              backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
              height: "0.0625rem",
              border: "none",
            }}
          />
        </div>
        <div className="">

          <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
            <div className="text-left max-w-[45rem] p-[0.625rem] gap-[0.625rem] ml-8">
              <h6 className="font-bold text-[1.875rem] leading-[2.843125rem] tracking-[0.1em] text-left">
                Our Expertise:
              </h6>

              <div className="flex justify-left items-center mt-0.5">
                <hr
                  className="w-[14.375rem] h-[0.0625rem] border-none"
                  style={{
                    backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "0.0625rem",
                    border: "none",
                  }}
                />
              </div>
              <p className="font-raleway font-medium p-[0.625rem] text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
                <ul className="list-disc pl-5 font-raleway font-medium  text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
                  <li>Consulting: We analyze your unique business challenges and design a roadmap for success using Salesforce’s powerful suite of tools.</li>
                  <li>Development: From custom applications to tailored features, we develop solutions that align perfectly with your business goals.</li>
                  <li>Integration: Seamlessly connect Salesforce with your existing systems to create a unified and efficient workflow.</li>
                  <li>Implementation: Get up and running quickly with our proven implementation strategies, ensuring a smooth transition and measurable ROI.</li>
                </ul>
              </p>
            </div>

            <div className="flex justify-center items-center mr-10">
              <img
                src={OurExperties}
                alt="Discovery & Analysis"
                className="max-w-[25rem] max-h-[18.649375rem] object-contain"
              />
            </div>
          </div>

          <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
            <div className="flex justify-center items-center md:order-1 ml-10">
              <img
                src={OurSolutions}
                alt="Solution Design"
                className="max-w-[18.75rem] max-h-[18.649375rem] object-contain"
              />
            </div>

            <div className="text-left max-w-[45rem] p-[0.625rem] gap-[0.625rem] md:order-2">
              <h6 className="font-bold text-[1.875rem] leading-[2.843125rem] tracking-[0.1em] text-left">
                Our Solutions Empower You to:
              </h6>

              <div className="flex justify-left items-center mt-0.5">
                <hr
                  className="w-[33.75rem] h-[0.0625rem] border-none"
                  style={{
                    backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "0.0625rem",
                    border: "none",
                  }}
                />
              </div>

              <div className="text-left max-w-[45rem] p-[0.625rem] gap-[0.625rem]">
                <ul className="list-disc pl-5 font-raleway font-medium  text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
                  <li>Boost Sales Productivity with Salesforce Maps, Einstein AI, and Sales Cloud in Slack to accelerate deal cycles and optimize sales strategies.</li>
                  <li>Engage Buyers at Every Step by aligning marketing and sales with built-in CRM intelligence and revenue analytics.</li>
                  <li>Streamline Revenue Processes through Revenue Cloud and CPQ to automate quotes, contracts, and revenue lifecycle management.</li>
                  <li>Unlock Actionable Insights via Tableau, Sales Analytics, and Einstein Conversation Insights to drive informed decisions and optimize performance.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center font-raleway">
          <div className="font-bold text-[2rem] leading-[4rem] tracking-[10%] text-center mt-10">Transform Your Sales with Salesforce Sales Cloud
          
          </div>
          <div className="flex justify-center items-center w-full">
                <hr
                  className="w-[56.5rem] h-[0.0625rem] border-none"
                  style={{
                    backgroundImage: "linear-gradient(to right, #9CFF00, #00D1FF)",
                    height: "0.0625rem",
                    border: "none",
                  }}
                />
              </div>
          <p className="font-thin text-[1.5rem] text-justify leading-[2.1000rem] tracking-[10%] justify-center p-16">{`"At softshala, we specialize in helping businesses unlock the full potential of Salesforce Sales Cloud to drive growth, enhance productivity, and build lasting customer relationships. With our expertise in consulting, development, integration, and implementation, we deliver solutions tailored to your sales needs."`}</p>
                                
             <div className="flex flex-row  items-center mt-8 p-[0.625rem]">
               <img src={isDarkTheme ? whyChooseWhite : whyChooseBlack} className="w-[400px] mr-24 cursor-pointer" ref={img2Ref} onMouseEnter={handleImageClick}/>
                <div>
                  <ul className="hidden list-disc mt-16 font-raleway text-[1.4rem] leading-[1.9375rem]  tracking-[10%]" ref={listRef}>
                     <li>Certified Salesforce experts with a proven track record of success.</li>
                     <li>Tailored strategies to optimize your sales processes.</li>
                     <li>Seamless integration and stress-free implementation to ensure quick ROI.</li>
                  </ul>
                </div>
             </div>
               
             <div className="font-bold font-raleway text-[2rem] leading-[4rem] tracking-[10%] text-center mt-10">Key Solutions with Sales Cloud</div>
             <div className="flex justify-center items-center w-full">
                <hr
                  className="w-[36rem] h-[0.0625rem] border-none"
                  style={{
                    backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "0.0625rem",
                    border: "none",
                  }}
                />
              </div>

              <div className={` flex font-bold flex-row items-center mt-8 p-[0.625rem] gap-56  font-raleway text-[0.9rem] cursor-pointer `}>
                <span className={`${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} option-span  w-[10rem] gap-[2rem] p-[1rem] rounded-[0.5rem] text-center`} onClick={() => handleClick2(0)} >Enhance Sales Productivity</span>
                <span className={` ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"}  option-span w-[13rem] gap-[2rem] p-[1rem] rounded-[0.5rem] text-center`} onClick={() => handleClick2(1)}>Build Stronger Customer Relationships</span>
                <span className={` ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} option-span  w-[10rem] gap-[2rem] p-[1rem] rounded-[0.5rem] text-center`} onClick={() => handleClick2(2)}>Drive Data-Driven Decisions</span>
              </div>
               {/* 1sttext */}
             <div className="1text mt-8 font-raleway hidden" ref={listRef2}>
                   <ul className="font-[1rem]  text-justify leading-[1.837375rem] tracking-[0.1rem]">
                     <li className="font-thin"><strong className="font-bold opacity-100"> Workflow and Process Automation:</strong> Streamline tasks and eliminate manual work with custom workflows.</li>
                     <li className="font-thin"><strong className=" font-bold opacity-100"> Quoting and Contract Approvals:</strong> Speed up deal cycles with seamless approval processes and accurate quotes.</li>
                     <li className="font-thin"><strong className=" font-bold opacity-100">CRM Everywhere:</strong> Access and update your CRM anytime, anywhere with mobile apps and browser extensions.</li>
                   </ul>
                </div>
                    {/* 2ndText */}
                <div className="2nd text mt-8 font-raleway hidden" ref={listRef3}>
                   <ul className="font-[1rem] text-justify leading-[1.837375rem] tracking-[0.1rem]">
                     <li className="font-thin"><strong className=" font-bold opacity-100">Lead Management:</strong> Capture, nurture, and convert leads efficiently with smart tools</li>
                     <li className="font-thin"><strong className=" font-bold opacity-100">Account and Opportunity Management:</strong> Gain a 360-degree view of customer accounts to close deals faster.</li>
                     <li className="font-thin"><strong className=" font-bold opacity-100">Activity Management:</strong>Track interactions and ensure seamless collaboration across teams.</li>
                   </ul>
                </div>
                  {/* 3rdText */}
                  <div className="3nd text mt-8 font-raleway hidden" ref={listRef4}>
                   <ul className="font-[1rem]  text-justify leading-[1.837375rem] tracking-[0.1rem]">
                     <li className="font-thin"><strong className=" font-bold opacity-100">Sales AI:</strong>Use Einstein AI to guide your sales team at every step of the sales cycle.</li>
                     <li className="font-thin"><strong className=" font-bold opacity-100">Sales Analytics:</strong> Optimize revenue and grow your pipeline with insights from Tableau and Data Cloud.</li>
                   </ul>
                </div>
          </div>

          <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-11 gap-8">
            <div className="text-left max-w-[45rem] p-[0.625rem] gap-[0.625rem] ml-8">
              <h6 className="font-bold text-[1.875rem] leading-[2.843125rem] tracking-[0.1em] text-left">
              The Results We Deliver:
              </h6>

              <div className="flex justify-left items-center mt-0.5">
                <hr
                  className="w-[24.575rem] h-[0.0625rem] border-none"
                  style={{
                    backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                    height: "0.0625rem",
                    border: "none",
                  }}
                />
              </div>
              <p className="font-raleway font-medium p-[0.625rem] text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
                <ul className="list-disc pl-5 font-raleway font-medium  text-[1.25rem] text-justify leading-[1.537375rem] tracking-[0.1em]">
                  <li>Faster sales cycles and improved team productivity.</li>
                  <li>Strengthened customer relationships and increased deal win rates.</li>
                  <li>Actionable insights to make informed, data-driven decisions.</li>
                </ul>
              </p>
            </div>

            <div className="flex justify-center items-center mr-10">
              <img
                src={ResultDeliver}
                alt="Discovery & Analysis"
                className="max-w-[25rem] max-h-[18.649375rem] object-contain"
              />
            </div>
          </div>

        </div>

      </div>
      <style>
        {`
          .option-span.active {
            background-color: ${ isDarkTheme ? "black" : "white"};
            color: ${isDarkTheme ? "white" : "black" };
          }
        `}
      </style>
    </div>
  );
};

export default SalesCloudSolutionServices;
