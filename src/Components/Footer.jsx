import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Blacklogo from "../../public/images/BlackLogo.png";
import Whitelogo from "../../public/images/WhiteLogo.png";
import { useTheme } from "../Context/ThemeContext";
 // Import the logo imag

const Footer = () => {

  const { isDarkTheme } = useTheme();


  return (
    <footer className={isDarkTheme ? "bg-black text-white" : "bg-white text-black "}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Logo */}
        <div>
          <img src={isDarkTheme ? Whitelogo : Blacklogo} alt="Softshala Technology Logo" className="h-12" />
          <p className="mt-2">Innovating the future with cutting-edge IT solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Social Links */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3 ">Email: info@softshala.com</p>
          <p className="">Phone: +91 9876543210</p>
          
          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="#" className=" hover:text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="#" className=" hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="#" className=" hover:text-blue-500 text-xl"><FaLinkedinIn /></a>
            <a href="#" className=" hover:text-blue-500 text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t pt-4">
        <p className="">&copy; {new Date().getFullYear()} Softshala Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
