import img from "../../images/healthCard.png";
import "./HealthCard.scss";
const HealthCard = () => {
  return (
    <div className="div-container">
      <div className="content-container">
        <img src={img} alt="" className="card-img" />
      </div>
      <h3 className="card-title">
        <span style={{ color: "#ED1C4D", margin:"0 6px" }}> Healthcare{"  "}</span>
        <span style={{ color: "#FFFFFF",margin:"0 6px" }}> Made{"  "}</span>
        <span style={{ color: "#22B168",margin:"0 6px" }}> Affordable</span>
      </h3>
    </div>
  );
};

export default HealthCard;
