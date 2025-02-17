const services = [
  "Salesforce Consulting",
  "Salesforce Development",
  "Salesforce Implementation",
  "Salesforce Integration",
  "Appexchange App Development",
  "Salesforce Managed Services",
  "Salesforce CPQ (Configure, Price, Quote)",
  "Salesforce Marketing Cloud Solutions",
  "Salesforce Sales Cloud Solutions",
  "Salesforce Services Cloud Solutions",
  "Salesforce Experience Cloud",
];

function SalesForceServices() {
  return (
    <nav
      className="absolute left-[300px] top-0 flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-80 w-[501px] h-auto rounded-[0px_21px_21px_21px] shadow-lg"
      role="navigation"
      aria-label="Salesforce services navigation"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Centered Salesforce Title */}
      <h2 className="text-center font-bold text-white text-2xl mb-4">SalesForce</h2>

      {services.map((service, index) => (
        <div
          key={index}
          className="p-[20px] w-[434px] h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-white hover:text-black cursor-pointer"
        >
          {service}
        </div>
      ))}
    </nav>
  );
}

export default SalesForceServices;
