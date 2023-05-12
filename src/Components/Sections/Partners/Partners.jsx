import { useNavigate } from "react-router-dom";
import CardSlider from "./CardSlider";
import "./Partners.scss";

const Partners = () => {
  const navigate = useNavigate();
  return (
    <div id="hospitals" className="main-container">
      <p className="partners-title">Our Partners</p>
      <p className="partners-subtitle">
        We have partnered with some of the best hospitals and clinics across the
        country to provide quality healthcare services to our members. Our
        partners hospitals and clinics are carefully selected based on their
        reputatuion for quality care, advanced technology, and experienced
        medical staff.
      </p>
      <CardSlider />

      <button
        className="partners-button"
        onClick={() => navigate("/hospitals")}
      >
        Show More
      </button>
    </div>
  );
};

export default Partners;
