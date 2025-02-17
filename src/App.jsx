import { ThemeProvider } from './Context/ThemeContext'; // Import the ThemeProvider
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/About-Us';
import Services from './Components/OurServices/Services';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import { WhyChooseUs } from './Components/ServicesHover/WhyChooseUs';
import { Process } from './Components/ServicesHover/Process';
// import BackgroundAnimation from './Components/BackgroundAnimation/BackgroundAnimation';
import SalesForceServices from './Components/AllServices/SalesForceServices';
import ServiceNow from './Components/AllServices/ServiceNowServices/ServiceNow';
import WebDEvelopment from './Components/AllServices/WebDevelopmentServices/WebDEvelopment';
import AnimationVideo from './Components/BackgroundAnimation/AnimationVideo';

const App = () => {
  return (
    <ThemeProvider>
      {/* Root container */}
      <div className="relative overflow-hidden">
        {/* Background Animation */}

        {/* Content */}
        <div className=' relative z-50'>
          <NavBar />

        </div>
        <div className="relative z-5">
        <div className="absolute inset-0 z-0"> {/* Covers the entire viewport */}
          {/* <BackgroundAnimation /> */}
          <AnimationVideo/>
        </div>
          <Home />
          <AboutUs />
        </div>

        {/* Remaining content */}
        <div className="relative z-10 bg-[#000000]">
          <Services />
          <WhyChooseUs />
          <Process />
          <GetInTouch />
          <SalesForceServices/>
          <ServiceNow/>
          <WebDEvelopment/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;



