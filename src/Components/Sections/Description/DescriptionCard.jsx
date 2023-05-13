import "./DescriptionCard.scss";

const DescriptionCard = (props) => {
  return (
    <div
      className="des-main-container"
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: props.border,
      }}
    >
      <img src={props.icon} alt="" className="card-img" />
      <p style={{ alignSelf: "center" }}>{props.descriptionText}</p>
    </div>
  );
};

export default DescriptionCard;
