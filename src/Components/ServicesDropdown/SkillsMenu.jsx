import { useReducer } from "react";
import SalesForceServices from "./SalesForceServices";
import ServiceNow from "./ServiceNOw";
import WebDevelopment from "./WebDevelopment";

const skills = ["Salesforce Services", "ServiceNow", "Web Development"];

// Reducer function to manage dropdown states
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SALESFORCE":
      return { salesforce: !state.salesforce, servicenow: false, webdevelopment: false };
    case "TOGGLE_SERVICENOW":
      return { salesforce: false, servicenow: !state.servicenow, webdevelopment: false };
    case "TOGGLE_WEBDEVELOPMENT":
      return { salesforce: false, servicenow: false, webdevelopment: !state.webdevelopment };
    case "CLOSE_ALL":
      return { salesforce: false, servicenow: false, webdevelopment: false };
    default:
      return state;
  }
};

function SkillsMenu() {
  const [state, dispatch] = useReducer(reducer, {
    salesforce: false,
    servicenow: false,
    webdevelopment: false,
  });

  // Close dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      dispatch({ type: "CLOSE_ALL" });
    }
  };

  // Add event listener for outside clicks
  document.addEventListener("click", handleOutsideClick);

  return (
    <div className="relative flex gap-4 dropdown-container">
      {/* Skills Menu */}
      <nav
        className="flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-80 w-[274px] h-auto rounded-[0px_21px_21px_21px]"
        role="navigation"
        aria-label="Skills navigation"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-[20px] w-[234px] h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-slate-300 hover:text-black cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking inside
              if (skill === "Salesforce Services") {
                dispatch({ type: "TOGGLE_SALESFORCE" });
              } else if (skill === "ServiceNow") {
                dispatch({ type: "TOGGLE_SERVICENOW" });
              } else if (skill === "Web Development") {
                dispatch({ type: "TOGGLE_WEBDEVELOPMENT" });
              }
            }}
          >
            {skill}
          </div>
        ))}
      </nav>

      {/* Dropdowns */}
      {state.salesforce && <SalesForceServices />}
      {state.servicenow && <ServiceNow />}
      {state.webdevelopment && <WebDevelopment />}
    </div>
  );
}

export default SkillsMenu;
