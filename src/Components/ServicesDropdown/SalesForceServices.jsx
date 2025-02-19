import { NavLink } from "react-router-dom";

const services = [
  { name: "Salesforce Consulting", path: "sales-force-ConsultingService" },
  { name: "Salesforce Development", path: "salesforce-development" },
  { name: "Salesforce Implementation", path: "salesforce-Implementation" },
  { name: "Salesforce Sales Cloud Solutions", path: "salescloudsolution" },
  {name:"Salesforce AppexChange", path: "appexchangeApp "},
  {name:"Salesforce CPQ (Configure, Price, Quote)", path: "salesforcecpq"},
  {name:"Salesforce Experience Cloud", path: "expreancecloud"},
  {name:"Salesforce Integration", path: "IntegrationServices"},
  {name:"Salesforce Managed Services", path: "SalesForceManagedServices"},
  {name:"Salesforce Marketing Cloud Solutions", path: "SalesForceMarketingCloud"},
  {name:"Salesforce Services Cloud Solutions", path: "SalesCloudSolutionServices"},
];


function SalesForceServices() {
  return (
    <nav
      className="absolute left-[300px] top-0 flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-80 w-[480px] h-auto rounded-[0px_21px_21px_21px] shadow-lg"
      role="navigation"
      aria-label="Salesforce services navigation"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <h2 className="text-center font-bold text-white text-2xl mb-4">
        SalesForce
      </h2>


      {services.map((service, index) => (
        <NavLink
          to={`/salesforce-services/${service.path}`} // Updated dynamic path
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
