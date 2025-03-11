import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Blacklogo from "../../public/images/SoftshalaBlackFooter.png";
import Whitelogo from "../../public/images/SoftshalaWhiteFooter.png";
import AgentForceBlack from "../../public/images/AgentForce/AgentForceRoboBlack.mov";
import AgentForceWhite from "../../public/images/AgentForce/AgentForceRoboWhite.mov";
import { useTheme } from "../Context/ThemeContext";
import SalesForcePartnerBlack from "../../public/images/SalesForcePartnersFooter.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } });
  };

  return (
    <div className="relative w-[430px] h:[292px] md:h-auto md:w-full">
      <video
        key={isDarkTheme ? "black" : "white"}
        loop
        autoPlay
        muted
        className="absolute top-0 left-1/2 ml-0 md:ml-72 transform -translate-x-1/2 w-[250px] md:w-[600px]  md:h-auto z-0"
      >   
        <source
          src={isDarkTheme ? AgentForceBlack : AgentForceWhite}
          type="video/mp4"
        />
      </video>
      <footer className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>
        <div className="container mx-auto px-6 gap-6 md:gap-20 flex flex-row justify-between items-start font-raleway pt-[250px] -ml-2 md:-ml-0">
          <div className="ml-0 md:ml-24 flex flex-col items-center md:items-start ">
            <img
              src={isDarkTheme ? Whitelogo : Blacklogo}
              alt="Softshala Technology Logo"
              className="w-[230px] md:w-[187px] h-auto"
            />
            <ul className="space-y-2 cursor-pointer mt-10 md:mt-24 text-[10px] md:text-[20px] font-semibold flex flex-col gap-2 ">
              <li><div onClick={handleAboutClick} className="hover:text-blue-500">About</div></li>
              <li><a href="#" className="hover:text-blue-500">Career</a></li>
              <li><div onClick={handleNavigation} className="hover:text-blue-500">Contact</div></li>
            </ul>
          </div>
          <div className="mr-0 md:mr-96">
            <h3 className="font-bold mt-10 md:mt-24 text-[10px] md:text-[23px] text-center md:text-center">Services</h3>
            <hr
              className="w-[105px] md:w-[215px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme ? 'linear-gradient(to right, #000000, #FFFFFF ,#000000)' : 'linear-gradient(to right, #FFFFFF, #000000, #FFFFFF)',
                border: "none",
              }}
            />
            <ul className="space-y-2 mt-6 md:mt-7 text-[10px] md:text-[20px] font-semibold flex flex-col gap-2 justify-center items-center">
              <li><a href="" className="hover:text-blue-500">Salesforce</a></li>
              <li><a href="#" className="hover:text-blue-500">Servicenow</a></li>
              <li><a href="#" className="hover:text-blue-500">Web Development</a></li>
            </ul>
          </div>
          <div className="self-start flex flex-col md:flex-row mr-10 md:mr-20">
            <img
              src={SalesForcePartnerBlack}
              alt="Salesforce Partner"
              className="w-[120px] md:w-[190.9px] h-auto mt-20 md:mt-16 z-20"
            />
          </div>
        </div>
        <div className="text-center mt-10 flex flex-col">
          <div className="flex flex-row gap-6 ml-24 md:ml-28">
            <a href="#" className="hover:text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="https://www.instagram.com/softshala/" className="hover:text-[#E4405F] text-xl"><FaInstagram /></a>
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A98962040" className="hover:text-blue-500 text-xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-700 text-xl"><FaYoutube /></a>
          </div>
          <div className=" mt-8 flex flex-col -ml-2 md:ml-28 md:flex-row gap-4 md:gap-28 p-4 md:p-0 text-[8px] md:text-[14px] mb-10 ">
            <p>@2025 Softshala Pvt. Ltd. All Rights Reserved</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
