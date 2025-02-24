import { NavLink } from "react-router-dom";

const services = [
  "Frontend Services",
  "Backend Services",
 
];

const WebDevelopment = () => {
  return (
 <nav
    className="absolute left-[300px] top-0 flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-80 w-[384px] h-auto rounded-[0px_21px_21px_21px] shadow-lg mt-24"
    role="navigation"
    aria-label="Salesforce services navigation"
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
  >
    {/* Centered Salesforce Title */}
    <h2 className="text-center font-bold text-white text-2xl mb-4">Web Development Services</h2>

    {services.map((service, index) => (
      <NavLink
        to="/web-development"
        key={index}
        className="p-[20px] w-[310px] h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-white hover:text-black cursor-pointer"
      >
        {service}
      </NavLink>
    ))}
  </nav>
  )
}

export default WebDevelopment