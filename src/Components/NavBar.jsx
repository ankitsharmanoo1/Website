import { useState } from "react";
import SkillsMenu from "../Components/ServicesDropdown/SkillsMenu";
import lightThemeImage from "../../public/images/themeChnager/sun.png";
import darkThemeImage from "../../public/images/themeChnager/Moon.png";
import { useTheme } from "../Context/ThemeContext";
import BlackLogo from "../../public/images/BlackLogo.png";
import WhiteLogo from "../../public/images/WhiteLogo.png";


const NavBar = () => {
  const [isSkillsMenuVisible, setSkillsMenuVisible] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();
 
  const handleServicesClick = () => {
    setSkillsMenuVisible((prev) => !prev);
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactUs = document.getElementById("contact-us");
    if (contactUs) {
      contactUs.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${isDarkTheme ? "bg-[#000000]" : "bg-white"}`}>
      <div className=" z-20 flex flex-col w-full items-start gap-2.5 px-[70px] text-base py-2.5 cursor-pointer font-raleway">
        <div className="flex items-center relative self-stretch w-full">
          {/* Logo */}
          <div className="inline-flex items-center gap-2.5 p-2.5">
            <img className="w-[74px] h-[74px]" alt="logo" src={isDarkTheme ? WhiteLogo : BlackLogo} />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-[39px] pl-5 pr-2.5 py-2.5 flex-1">
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap cursor-pointer`}
              onClick={handleAboutClick}
            >
              ABOUT
            </div>

            {/* Services Button */}
            <div
              className={`relative flex items-center ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap cursor-pointer`}
              onClick={handleServicesClick}
            >
              <span>SERVICES</span>
              <span className="ml-2">{isSkillsMenuVisible ? "▼" : "▶"}</span>
            </div>

            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
            >
              CAREERS
            </div>
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
              onClick={handleContactClick}
            >
              CONTACT US
            </div>
            <div
              className={`relative ${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-medium tracking-[0.80px] whitespace-nowrap`}
            >
              LWS
            </div>
          </div>

          {/* Theme Toggle Button */}
          <div className="ml-auto flex items-center cursor-pointer w-[81px] h-[31px]">
            <button
              className={`relative w-[80px] h-[30px] flex items-center justify-between rounded-full`}
              style={{
                background: isDarkTheme
                  ? "linear-gradient(to right, #1E1E1E, #A5AAAD)"
                  : "linear-gradient(to right, #1E1E1E, #A5AAAD)",
                borderRadius: "100px",
                border: "2px solid #A5AAAD",
              }}
              onClick={toggleTheme}
            >
              <div
                className={`absolute w-[26.5px] h-[26.5px] rounded-full transition-transform duration-500 ${
                  isDarkTheme ? "translate-x-[1px]" : "translate-x-[50px]"
                }`}
                style={{
                  background: isDarkTheme
                    ? "linear-gradient(to right, #000000, #1F4B55)"
                    : "#87CEEB",
                }}
              ></div>
              <img
                src={darkThemeImage}
                alt="Dark Theme"
                className={`w-[21.08px] h-[20.08px] z-10 ml-1 rounded-full object-cover transition-opacity duration-300 ${
                  isDarkTheme ? "opacity-100" : "opacity-30"
                }`}
              />
              <img
                src={lightThemeImage}
                alt="Light Theme"
                className={`w-[27px] h-[27px] z-10 rounded-full object-cover transition-opacity duration-300 ${
                  isDarkTheme ? "opacity-50" : "opacity-100"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Skills Menu */}
        <div
          className={`absolute top-[70px] left-[250px] z-10 rounded-[0px_45px_45px_0px] transition-all duration-500 ${
            isSkillsMenuVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          onMouseLeave={() => setSkillsMenuVisible(false)}
        >
          {isSkillsMenuVisible && <SkillsMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
