import { NavLink } from "react-router-dom";

const services = [
  { name: "Salesforce Consulting", path:"/sales-force-consulting"},
  { name: "Salesforce Development", path:"/salesforce-development"},
  { name: "Salesforce Implementation", path:"/salesforce-implementation"},
  { name: "Salesforce Sales Cloud Solutions", path:"/sales-cloud-solutions"},
  { name: "Salesforce AppexChange", path:"/appexchange-app"},
  { name: "Salesforce CPQ (Configure, Price, Quote)", path:"/salesforce-cpq"},
  { name: "Salesforce Experience Cloud", path:"/experience-cloud"},
  { name: "Salesforce Integration", path:"/integration-services"},
  { name: "Salesforce Managed Services", path:"/managed-services"},
  { name: "Salesforce Marketing Cloud Solutions", path:"/marketing-cloud"},
  { name: "Salesforce Services Cloud Solutions", path:"/sales-solution-services"},
];

function SalesForceServices() {
  return (
    <nav
      className="absolute left-[300px] -ml-7 top-0 flex flex-col p-[20px] gap-[10px] text-xl font-raleway text-white bg-[#343434] bg-opacity-100 w-[480px] h-auto rounded-[0px_21px_21px_21px]  shadow-lg z-50 mt-6"
      role="navigation"
      aria-label="Salesforce services navigation"
      onClick={(e) => e.stopPropagation()}
    >
      <NavLink
        className="text-center font-bold text-white text-2xl mb-4"
        to={`/salesForce`}
      >
        SalesForce
      </NavLink>

      {services.map((service, index) => (
        <NavLink
          to={service.path} // Updated dynamic path
          key={index}
          className="p-[20px] w-[434px] h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-white hover:text-black cursor-pointer"
        > 
          {service.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default SalesForceServices;
