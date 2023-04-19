import NavBar from "./NavBar";
import HealthCard from "./Sections/HealthCard";
import Description from "./Sections/Description";
import Services from "./Sections/Services";
import HowItWorks from "./Sections/HowItWorks";
import Partners from "./Sections/Partners";
import HospitalsForm from "./Sections/HospitalsFrom";
import AboutUs from "./Sections/AboutUs";
import Faqs from "./Sections/Faqs";

const Home = () => {
  return (
    <>
      <NavBar />
      <HealthCard />
      <Description />
      <Services />
      <HowItWorks />
      <Partners />
      <HospitalsForm />
      <AboutUs />
      <Faqs />
    </>
  );
};

export default Home;
