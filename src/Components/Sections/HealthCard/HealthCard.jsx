import img from "../../images/healthCard.png";
import "./HealthCard.scss";
const HealthCard = () => {
  return (
    <div className="div-container">
      <div className="content-container">
        <img src={img} alt="" className="card-img"/>
        <h3 className="card-title">Healthcare Made Affordable</h3>
      </div>
    </div>
  );
};

export default HealthCard;
