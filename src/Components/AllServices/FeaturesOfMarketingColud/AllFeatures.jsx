import JournyBuilder from "./logos/journyBuilder.png";
import AudinceBuilder from "./logos/AudienceBuilder.png"
import Personalize  from "./logos/Personalize.png"
import ContentBuilder from "./logos/ContentBuilder.png";
import Analyse from "./logos/AnalysicBuilder.png"
import MarketingCloud from "./logos/MarketingCloud.png";
import AgentMarketingCloud from "./logos/AgentMarketing.png";

const AllFeatures = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
         <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={JournyBuilder} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">
        Journey Builder
      </h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Design automated, cross-channel customer journeys to create consistent and engaging experiences. From sending welcome emails to re-engaging inactive users, help your clients connect with their audience at every touchpoint.</p>
               </div>
                {/* 2nd feature */}
               <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={AudinceBuilder} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Audience Builder</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Segment customers based on behavior, demographics, or interests to deliver highly targeted campaigns. Ideal for personalized promotions, customer retention strategies, and upselling opportunities.</p>
               </div>
                {/* 3rd feature */}
                <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={Personalize} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Personalization Builder</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Use AI-driven recommendations to deliver personalized content, such as product suggestions or tailored offers, increasing engagement and conversions. Perfect for e-commerce, B2B, and service-oriented businesses.</p>
               </div>

               {/* 4th feature */}

               <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={ContentBuilder} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Content Builder</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Centralize content management for consistent branding and easy access. Enable your team to collaborate, approve, and deploy assets quickly across marketing campaigns.</p>
               </div>
                 
                {/* 5vth feature */}
 
                <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={Analyse} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Analytics Builder</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Monitor campaign performance and customer engagement with advanced reporting and predictive insights. Empower data-driven decisions to optimize ROI and marketing effectiveness.</p>
               </div>

               {/* 6th feature */}

               <div className="font-raleway FeaturesBox w-[26em] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={MarketingCloud} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Marketing Cloud Connect</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Use Case: Integrate marketing, sales, and service data for a unified view of the customer journey. Trigger personalized messages based on customer actions to ensure a seamless experience.</p>
               </div>
    
               <div className="font-raleway FeaturesBox w-[26rem] h-[225px] bg-white p-[0.625rem] text-[#000000] rounded-[0.9375rem] gap-[0.625rem] shadow-inner-custom flex flex-col items-center">
               <img src={AgentMarketingCloud} className="w-[34px] h-[34px] mt-1"/>
               <h3 className="font-bold text-[1rem] leading-[1.5rem] tracking-[0.1em] text-center">Agent Marketing Cloud</h3>
                
                 <p className="font-semibold text-[0.75rem] leading-[1.125rem] tracking-[0.1em] overflow-hidden text-ellipsis text-justify">Save time and scale 1:1 personalisation with trusted AI Agents to help analyse, generate, and continuously optimise campaigns based on your defined business goals.</p>
               </div> 
    </div>


  )
}

export default AllFeatures