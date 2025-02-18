import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AppexchangeAppDevelopmentServices from "./SalesForceServices/AppexchangeAppDevelopmentServices";
import SalesCloudSolutions from "./SalesForceServices/SalesCloudSolutions";
import SalesForceCPQ from "./SalesForceServices/SalesForceCPQ";
import SalesForceConsultingService from "./SalesForceServices/SalesForceConsultingService";
import SalesForceManagedServices from "./SalesForceServices/SalesForceManagedServices";
import SalesForceMarketingCloud from "./SalesForceServices/SalesForceMarketingCloud";
import SalesCloudSolutionServices from "./SalesForceServices/SalesCloudSolutionServices";
import SalesFroceImplementionServices from "./SalesForceServices/SalesFroceImplementionServices";
import SalesforceExperienceCloud from "./SalesForceServices/SalesforceExperienceCloud";
import SalesforceIntegrationServices from "./SalesForceServices/SalesforceIntegrationServices";
import SalesForceDevlopmentServices from "./SalesForceServices/SalesForceDevlopmentService";
import lines from "./images/2x lines.png";
import SalesForce from "./images/SalesForceIn Services.png";
import NavBar from '../NavBar';
import { useTheme } from '../../Context/ThemeContext';

const SalesForceServices = () => {

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraph2Ref = useRef(null);
  const spanRef = useRef(null);
  const { isDarkTheme } = useTheme();


  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 400, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: 'power3.out' },
    )// End position (top) and opacity
    gsap.fromTo(imageRef.current,
      {opacity:0,scale:0},
      {opacity:1,duration: 4,scale:1,ease:'power3.out'}
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 100, opacity: 0 }, // Start position (bottom) and opacity
      { y: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 1 } // End position (top) and opacity with delay
    );
    gsap.fromTo(
      paragraph2Ref.current,
      { x: -200, opacity: 0 }, // Start position (left) and opacity
      { x: 0, opacity: 1, duration: 3.5, ease: 'power3.out', delay: 1 } // End position (center) and opacity with delay
    );
   
    gsap.fromTo(
      spanRef.current,
      { x: 200, opacity: 0 }, // Start position (right) and opacity
      { x: 0, opacity: 1, duration: 3.5, ease: 'power3.out', delay: 1.5 } // End position (center) and opacity with delay
    );
  }, []);

  return (
    <div className={`w-full font-raleway salesforceservice min-h-screen  grid grid-row-5 gap-44 ${isDarkTheme ? "bg-black text-white" : "bg-white text-black "}`}>
<NavBar/>

    <div className="flex flex-col items-center justify-center text-center uppercase pt-20 ">
       <div ref={textRef} className="leading-[4rem] tracking-[0.4em] text-[2.25rem] font-bold">
           <span> Empower Your Business with The</span><br/>
           <span> #1 CRM Solution</span>
       </div>
      <img ref={imageRef} src={SalesForce} className="w-[26rem]  left-[20px]   p-[0.625rem] gap-[0.625rem]" alt="SalesForce"/>
         <div ref={paragraphRef} className="text-[1rem]  leading-[1.125rem] tracking-[0.26em] p-[0.625rem]">
         <div className='flex flex-row justify-center items-center'>
         <p ref={paragraph2Ref}>Transform customer experiences,</p><span ref={spanRef}>AUTOMATE WORKFLOWS</span>

         </div>  
           <p> and drive business growth with our expert Salesforce solutions</p>
       </div>
    </div>


{/* <NavBar/> */}


<SalesForceConsultingService/><img src={lines}/>
<SalesForceDevlopmentServices/><img src={lines}/>
<SalesFroceImplementionServices/><img src={lines}/>
<SalesCloudSolutions/><img src={lines}/>
<AppexchangeAppDevelopmentServices/><img src={lines}/>
<SalesForceCPQ/><img src={lines}/>
<SalesforceExperienceCloud/><img src={lines}/>
<SalesforceIntegrationServices/><img src={lines}/>
<SalesForceManagedServices/><img src={lines}/>
<SalesForceMarketingCloud/><img src={lines}/>
<SalesCloudSolutionServices/>

    </div>
  )
}

export default SalesForceServices