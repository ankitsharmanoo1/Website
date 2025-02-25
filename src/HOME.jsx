import NavBar from "./Components/NavBar";
import AnimationVideo from "./Components/BackgroundAnimation/AnimationVideo";
import Home from "./Components/Home";
import AboutUs from "./Components/About-Us";
import Services from "./Components/OurServices/Services";
import { WhyChooseUs } from "./Components/ServicesHover/WhyChooseUs";
import { Process } from "./Components/ServicesHover/Process";
import Footer from "./Components/Footer";

const HOME = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="relative z-50">
        <NavBar />
      </div>
      <div className="relative z-5">
        <div className="absolute inset-0 z-0">
          <AnimationVideo />
        </div>
        <Home />
        <AboutUs />
      </div>
      <div className="relative z-10 bg-[#000000]">
        <Services />
        <WhyChooseUs />
        <Process />
        <Footer />
      </div>
    </div>
  );
};

export default HOME;
