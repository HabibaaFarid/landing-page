import img from "../images/healthCard.png";
import "./HealthCard.scss";
const HealthCard = () => {
  return (
    <div className="div-container">
      <div className="content-container">
        <img src={img} alt="" />
        <h3>Healthcare Made Affordable</h3>
      </div>
    </div>
  );
};

export default HealthCard;
