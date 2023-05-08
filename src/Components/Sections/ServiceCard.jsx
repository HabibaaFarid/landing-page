import "./ServiceCard.scss";
const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <img src={props.img} alt="" className="services-img" />
      <p className="service-text" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
};

export default ServiceCard;
