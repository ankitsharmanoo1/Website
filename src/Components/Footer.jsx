import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Blacklogo from "../../public/images/SoftshalaBlackFooter.png";
import Whitelogo from "../../public/images/SoftshalaWhiteFooter.png";
import AgentForceBlack from "../../public/images/AgentForce/AgentForceRoboBlack.mov";
import AgentForceWhite from "../../public/images/AgentForce/AgentForceRoboWhite.mov";
import { useTheme } from "../Context/ThemeContext";
import SalesForcePartnerBlack from "../../public/images/SalesForcePartnersFooter.png";
import { useNavigate } from "react-router-dom";

 // Import the logo imag

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
    navigate("/get-in-touch", { state: { scrollToContact: true } }); // Ensure state is passed
  };

  return (
    <div className="relative w-full">
    {/* Video positioned at the top */}
    <video
      key={isDarkTheme ? "black" : "white"}
      loop
      autoPlay
      muted
      className="absolute top-0 left-1/2 ml-72 transform -translate-x-1/2 w-[600px] h-auto z-0"
    >
      <source
        src={isDarkTheme ? AgentForceBlack : AgentForceWhite}
        type="video/mp4"
      />
    </video>
  
    {/* Footer Content */}
    <footer className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}>
      <div className="container mx-auto px-6 gap-20 flex flex-row justify-between items-start font-raleway pt-[250px]">
        {/* Company Logo & Links */}
        <div className="ml-24">
          <img
            src={isDarkTheme ? Whitelogo : Blacklogo}
            alt="Softshala Technology Logo"
            className="w-[187px] h-[63px] ml-3"
          />
          <ul className="space-y-2 cursor-pointer mt-24 ml-10 text-[20px] leading-[1.23rem] tracking-[0.15em] text-justify font-semibold flex flex-col gap-2">
            <li><div  onClick={handleAboutClick} className="hover:text-blue-500">About</div></li>
            <li><a href="#" className="hover:text-blue-500">Career</a></li>
            <li><div  onClick={handleNavigation} className="hover:text-blue-500">Contact Us</div></li>
          </ul>
        </div>
  
        {/* Services */}
        <div className="w-[230px] h-[110px] mr-96">
          <h3 className="font-bold mt-24 text-[23px]">Services</h3>
          <hr
          className="w-[105px] h-[1px] border-none"
          style={{
            backgroundImage: isDarkTheme ? 'linear-gradient(to right, #000000, #FFFFFF ,#000000)' : 'linear-gradient(to right, #FFFFFF, #000000, #FFFFFF)',
            border: "none",
          }}
        />
          <ul className="space-y-2 mt-7 text-[20px] leading-[1.23rem] tracking-[0.15em] text-justify font-semibold flex flex-col gap-2">
              
              <li><a href=""    className="hover:text-blue-500">Salesforce</a></li>
            <li><a href="#" className="hover:text-blue-500">Servicenow</a></li>
            <li><a href="#" className="hover:text-blue-500">Web Development</a></li>
          </ul>
        </div>
  
        {/* Partner Logo */}
        <div className="self-start flex flex-row">
          <img
            src={isDarkTheme ? SalesForcePartnerBlack : SalesForcePartnerBlack}
            alt="Salesforce Partner"
            className="w-[190.9px] h-[200px] mr-10 mt-16 z-20"
          />
        </div>
      </div>
  
      {/* Copyright Section */}
      <div className="text-center mt-10 flex flex-col">
  {/* Social Media Icons */}
  <div className="flex flex-row gap-6 ml-32">
    <a href="#" className="hover:text-blue-500 text-xl"><FaFacebookF /></a>
    <a href="#" className="hover:text-blue-500 text-xl"><FaTwitter /></a>
    <a href="https://www.instagram.com/softshala/" className="hover:text-[#E4405F] text-xl"><FaInstagram /></a>
    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A98962040&keywords=softshala%20technologies&origin=RICH_QUERY_SUGGESTION&position=0&searchId=f71155d8-4fa9-461f-be90-6913f04f3d3b&sid=OUo&spellCorrectionEnabled=false " className="hover:text-blue-500 text-xl"><FaLinkedinIn /></a>
    <a href="#" className="hover:text-red-700 text-xl"><FaYoutube /></a>
  </div>

  {/* Copyright Section with Border */}
  <div className=" m-7  pt-4 flex flex-row gap-28 ml-32 text-[14px]">
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
