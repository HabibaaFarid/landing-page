
import NavBar from "./NavBar/NavBar";
import HealthCard from "./Sections/HealthCard/HealthCard";
import Description from "./Sections/Description/Description";
import Services from "./Sections/Services/Services";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import Partners from "./Sections/Partners/Partners";
import HospitalsForm from "./Sections/Partners/HospitalsFrom";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Faqs from "./Sections/Faqs/Faqs";
import Footer from "./Footer/Footer";

const Home = () => {

  return (
    <div style={{display:"grid"}}>
      <NavBar />
      <HealthCard />
      <Description />
      <Services />
      <HowItWorks />
      <Partners />
      <HospitalsForm />
      <AboutUs />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
