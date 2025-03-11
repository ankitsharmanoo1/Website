import  {  useRef, useState } from "react";
import { gsap } from "gsap";
import Lines from "../images/lines.png";


const RotatingWheel = () => {
  const wheelRef = useRef(null);
  const [selectedService, setSelectedService] = useState("Regulations Compliance");
  let rotationAngle = 0;
  const services = [
    "Mobile Responsive", "Regulations Compliance", "Data Security","Profile Badges",   "Access Management", "Customizable Component", "Enhanced Collaboration", 
    "Centralized Data Sources", "Adaptable UI", "Resource Sharing", "Customizable Reports"
  ];

  const serviceDescriptions = {
    "Mobile Responsive": "Ensures a seamless user experience across different devices, making portals and websites  accessible on mobile, tablets, and desktops.",
    "Data Security": "Ensures that sensitive business and customer information is well-protected with Salesforce’s  advanced security features.",
    "Profile Badges": "Encourages engagement by recognizing and rewarding users with profile badges, making  interactions more interactive and rewarding.",
    "Access Management": "Controls user permissions and access levels to ensure that the right people have the right  information at the right time.",
    "Customizable Component": "Offers flexibility by allowing businesses to tailor their digital experiences using customizable  UI components.",
    "Enhanced Collaboration": "Facilitates better communication and teamwork between customers, employees, and  partners within the Experience Cloud ecosystem.",
    "Centralized Data Sources": "Integrates various data sources into a single platform, ensuring that all users have access to  accurate, up-to-date information.",

    "Adaptable UI": "Provides a highly flexible user interface that can be customized based on business needs  and branding requirements.",
    "Resource Sharing": "Allows businesses to share important resources, documents, and information securely within  their digital communities.",
    "Customizable Reports": "Enables businesses to generate and customize reports to track engagement, user activity,  and other key metrics.",
    "Regulations Compliance": "Helps businesses adhere to industry regulations and compliance standards, ensuring data  privacy and security.",
    // "Customer Insights": "Helps understand customer behavior trends."
  };

  const handleClick = (service, index) => {
    rotationAngle = index * -30;
    gsap.to(wheelRef.current, {
      rotation: rotationAngle,
      duration: 0.5,
      ease: "power2.out",
    });
    setSelectedService(service);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen  text-white">
      {/* <div className="text-center text-2xl font-extrabold mb-6 text-purple-400 drop-shadow-md uppercase tracking-wider">
        {selectedService}
      </div> */}
      <div className="w-[800px] h-[800px] flex justify-center items-center relative">
        <div
          ref={wheelRef}
          className="w-[750px] h-[750px] bg-white gap-10 border-gray-700 rounded-full flex justify-center items-center relative shadow-2xl"
        >
          

          {services.map((service, i) => (
            <div
              key={i}
              className="absolute   w-[130px] h-[90.97px]  text-black flex justify-center  items-center text-center text-[15px] font-bold pl-[9px] rounded-md   cursor-pointer  duration-300 hover:scale-305"
              style={{
                transform: `rotate(${i * 33.28}deg) translate(300px) rotate(80deg)`,
              }}
              onClick={() => handleClick(service, i)}
            >
              {service  }
          <img src={services ? Lines : ''} className="w-[100px] h-[170px]  flex justify-center items-center"   
                style={{
                transform: ` rotate(-10deg)`,
              }}
            />

              
            
            </div>
          ))}
        </div>
        <div className="absolute w-[450px] h-[450px] bg-black text-white text-center flex justify-center items-center rounded-full p-[3px] shadow-lg border-2 border-gray-600">
          {serviceDescriptions[selectedService]}
        </div>
      </div>
    </div>
  );
};

export default RotatingWheel;
