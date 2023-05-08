import Benefits from "./Benefits";
import ServiceCard from "./ServiceCard";
import heart from "../images/heart.png";
import dental from "../images/dental.png";
import diag from "../images/diag.png";
import eye from "../images/eyeCare.png";
import general from "../images/generalSurgery.png";
import ortho from "../images/ortho.png";
import neuro from "../images/neuro.png";
import med from "../images/medicine.png";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services-container">
      <p className="services-title">The Services We Provide</p>
      <div className="services-cards-container">
        <ServiceCard img={heart} text="Heart Diseases" color="#000000" />
        <ServiceCard img={general} text="General Surgery" color="#000000" />
        <ServiceCard img={dental} text="Dental Problems" color="#000000" />
        <ServiceCard img={diag} text="Diagnostic" color="#000000" />
        <ServiceCard img={med} text="Medicine" color="#000000" />
        <ServiceCard img={neuro} text="Neurology" color="#2FB3B6" />
        <ServiceCard img={eye} text="Eye Care" color="#000000" />
        <ServiceCard img={ortho} text="Orthopaedics" color="#000000" />
      </div>
      <Benefits />
    </div>
  );
};

export default Services;
