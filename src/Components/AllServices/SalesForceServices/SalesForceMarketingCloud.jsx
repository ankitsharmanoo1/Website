import Implementation from "../images/MarketingCloud.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustumDev from "../images/B2BMarketing.png";
import CustumDev2 from "../images/B2CMarketing.png";
import { useTheme } from "../../../Context/ThemeContext";
import { useInView } from "react-intersection-observer";
import '../../../App.css';
// import AllFeatures from "../FeaturesOfMarketingColud/AllFeatures";
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const SalesForceMarketingCloud = () => {
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

  <>

    <div ref={ref} className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>
      <div className="w-full h-auto font-raleway grid grid-cols-1 md:grid-cols-2 relative min-h-screen px-4 ">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6 ml-10 md:ml-0">
          <div className=" text-left">                    
            <h5 className="text-[32px] md:text-[40px] font-medium tracking-[4.8px]" ref={salesforceRef}>
              SALESFORCE
            </h5>
            <div className="flex items-center" ref={line1Ref}>
              <hr
                className="border-t-2  my-2 w-[310px]"
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

            <h5 className="text-[31px]  uppercase font-medium tracking-[4.8px]" ref={consultingRef}>
              Marketing Cloud Solutions
            </h5>
            <div className="flex items-center" ref={line2Ref}>
              <hr
                className="border-t-2 my-2 w-[600px]"
                style={{
                  backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
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

          <div
  className="text-[48px] uppercase font-medium mt-5 tracking-[3.02px] leading-normal text-left responsive-heading"
  ref={paraRef}
>
  <p className="break-words md:whitespace-nowrap">Revolutionize Your</p>
  <p className="break-words md:whitespace-nowrap">
    Marketing with <span className="inline-block">Salesforce</span>
  </p>
  <p className="break-words md:whitespace-nowrap">Marketing Cloud</p>
</div>


          <div className="text-base md:text-lg uppercase font-medium tracking-[2.4px] h-[38px] text-[16px] leading-[18.78px] w-[700px] sm:w-[800px] text-left" ref={para2Ref}>
            <p>Personalized, data-driven marketing solutions to engage your customers anywhere</p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`w-[180px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] 
                ${isDarkTheme ? "bg-white text-black hover:bg-gray-500" : "bg-black text-white hover:bg-[#525252]"}
                form-item`}
              ref={btnRef}
               onClick={handleNavigation}
            >
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-end w-full h-full mt-6 md:mt-0">
          <img
            src={Implementation}
            alt="salesforce"
            className="h-[472px] w-auto max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mr-10 object-contain"
            ref={imgRef}
          />
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="min-h-screen  mx-auto items-center justify-center">
        <div className="flex justify-center">
          <p className="w-[1118px] h-[75px] text-base font-raleway font-bold  text-[20px] leading-[21.59px] tracking-[0.1em] text-center">
            {`"Our implementation process ensures that Service Cloud is not only set up to meet your current requirements but also aligned with your future growth plans."`}
          </p>
        </div>

        <div className="firstdiv flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          <div className="text-center max-w-[790px] p-4 gap-[10px] ml-8">
            <h6 className="font-bold text-[30px] leading-[45.49px] tracking-[0.1em] text-left">B2B Marketing</h6>
            <div className="flex justify-left items-center mt-0.5">
              <hr
                className="w-[250px] h-[1px] border-none"
                style={{
                  backgroundImage: isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "px",
                  border: "none",
                }}
              />
            </div>
            <p className="font-raleway font-medium  p-[20px] text-[20px] text-justify leading-7 tracking-[0.1em]">
              Building relationships in the B2B world takes time, and we’ve got the perfect solutions to help you do it right. With Salesforce Marketing Cloud and Account Engagement (formerly Pardot), we make lead generation and nurturing simple while ensuring your sales funnel runs like a well-oiled machine.<br />
              <ul className="mt-2 list-disc pl-5 font-raleway font-medium text-[20px] text-justify leading-[24.59px] tracking-[0.1em]">
                <li>Score and grade leads to focus on the hottest prospects</li>
                <li>Implement smart Account-Based Marketing (ABM) strategies</li>
                <li>Send personalized email campaigns that truly resonate</li>
                <li>Track every interaction with multi-touch attribution</li>
                <li>Align your sales and marketing teams for seamless collaboration</li>
              </ul>
            </p>
          </div>

          <div className="flex justify-center items-center mr-10">
            <img
              src={CustumDev}
              alt="Discovery & Analysis"
              className="max-w-[300px] max-h-[298.39px] object-contain"
            />
          </div>
        </div>
      </div>

       <div className="seconddiv flex flex-col md:flex-row justify-between items-center mt-2 gap-8">
        <div className="flex justify-center items-center md:order-1 ml-10">
          <img
            src={CustumDev2}
            alt="Solution Design"
            className="max-w-[300px] max-h-[298.39px] object-contain"
          />
        </div>
      
        <div className="text-left max-w-[790px]  p-[10px] gap-[10px] md:order-2">
          <h6 className="font-bold text-[30px] ml-7 leading-[45.49px] tracking-[0.1em] text-left">
             B2C Marketing
          </h6>
      
          <div className="flex justify-left items-center ml-7 mt-0.5">
            <hr
              className="w-[250px] h-[1px] border-none"
              style={{
                backgroundImage:  isDarkTheme ? "linear-gradient(to right, #9CFF00, #00D1FF)" : "linear-gradient(to right, #000000, #1F4B55)",
                height: "px",
                border: "none",
              }}
            />
          </div>
          
          <div className="text-left w-full p-[10px] gap-[10px]">
          <p className="font-raleway font-medium  p-[20px] text-[20px] text-justify leading-7 tracking-[0.1em]">
              Building relationships in the B2B world takes time, and we’ve got the perfect solutions to help you do it right. With Salesforce Marketing Cloud and Account Engagement (formerly Pardot), we make lead generation and nurturing simple while ensuring your sales funnel runs like a well-oiled machine.<br />
              <ul className="mt-2 list-disc pl-5 font-raleway font-medium  text-[20px] text-justify leading-[23.59px] tracking-[0.1em]">
                <li>Score and grade leads to focus on the hottest prospects</li>
                <li>Implement smart Account-Based Marketing (ABM) strategies</li>
                <li>Send personalized email campaigns that truly resonate</li>
                <li>Track every interaction with multi-touch attribution</li>
                <li>Align your sales and marketing teams for seamless collaboration</li>
              </ul>
            </p>
      </div>
        </div>


      </div>
      
    </div>


       {/* <AllFeatures/> */}
  </>
  );
}; 


export default SalesForceMarketingCloud;
