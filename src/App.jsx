import { ThemeProvider } from "./Context/ThemeContext"; // Import the ThemeProvider
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUs from "./Components/About-Us";
import Services from "./Components/OurServices/Services";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import { WhyChooseUs } from "./Components/ServicesHover/WhyChooseUs";
import { Process } from "./Components/ServicesHover/Process";
// import { useTheme } from "../src/Context/ThemeContext"
// import BackgroundAnimation from './Components/BackgroundAnimation/BackgroundAnimation';
// import SalesForceServices from "./Components/AllServices/SalesForceServices";
import ServiceNow from "./Components/AllServices/ServiceNowServices/ServiceNow";
import WebDEvelopment from "./Components/AllServices/WebDevelopmentServices/WebDEvelopment";
import AnimationVideo from "./Components/BackgroundAnimation/AnimationVideo";
import { BrowserRouter, Routes, Route } from "react-router";
import SalesForceConsultingService from "./Components/AllServices/SalesForceServices/SalesForceConsultingService";
import SalesForceDevlopmentServices from "./Components/AllServices/SalesForceServices/SalesForceDevlopmentService";
import SalesFroceImplementionServices from "./Components/AllServices/SalesForceServices/SalesFroceImplementionServices";
import SalesCloudSolutions from "./Components/AllServices/SalesForceServices/SalesCloudSolutions";
import AppexchangeAppDevelopmentServices from "./Components/AllServices/SalesForceServices/AppexchangeAppDevelopmentServices";
import SalesForceCPQ from "./Components/AllServices/SalesForceServices/SalesForceCPQ";
import SalesforceExperienceCloud from "./Components/AllServices/SalesForceServices/SalesforceExperienceCloud";
import SalesforceIntegrationServices from "./Components/AllServices/SalesForceServices/SalesforceIntegrationServices";
import SalesForceManagedServices from "./Components/AllServices/SalesForceServices/SalesForceManagedServices";
import SalesForceMarketingCloud from "./Components/AllServices/SalesForceServices/SalesForceMarketingCloud";
import SalesCloudSolutionServices from "./Components/AllServices/SalesForceServices/SalesCloudSolutionServices"
import SalesForceServices from "./Components/AllServices/SalesForceServices";
import Footer from "./Components/Footer";


const App = () => {
    // const { isDarkTheme } = useTheme();
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <div className="relative overflow-hidden">
                {/* Background Animation */}

                {/* Content */}
                <div className=" relative z-50">
                  <NavBar />
                </div>
                <div className="relative z-5">
                  <div className="absolute inset-0 z-0">
                    {" "}
                    {/* Covers the entire viewport */}
                    {/* <BackgroundAnimation /> */}
                    <AnimationVideo />
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
                  <Footer/>
                  
               
                </div>
              </div>
            }
          />
      
      <Route path="/get-in-touch" element={<GetInTouch/>}/>
          <Route path="salesforce-services" element={<SalesForceServices/>}>
          {/* <Route path="/get-in-touch" element={<GetInTouch/>}/> */}

                <Route path="sales-force-ConsultingService" element={<SalesForceConsultingService/>} />
                <Route path="salesforce-development" element={<SalesForceDevlopmentServices/>} />
 
                <Route path="salesforce-Implementation" element={<SalesFroceImplementionServices />} />
                <Route path="salescloudsolution" element={<SalesCloudSolutions />}/>
                <Route path="appexchangeApp" element={<AppexchangeAppDevelopmentServices />}/>
                <Route path="salesforcecpq" element={<SalesForceCPQ />}/>
                <Route path="expreancecloud" element={<SalesforceExperienceCloud />}/>
                <Route path="IntegrationServices" element={ <SalesforceIntegrationServices />}/>

                <Route path="SalesForceManagedServices" element={ <SalesForceManagedServices />}/>
                
                <Route path="SalesForceMarketingCloud" element={  <SalesForceMarketingCloud />}/>
                 
                <Route path="SalesCloudSolutionServices" element={ <SalesCloudSolutionServices />}/>

               

          </Route>
          <Route path="service-now" element={<ServiceNow />} />
          <Route path="web-development" element={   <WebDEvelopment />} />

          {/* Root container */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;



     
      