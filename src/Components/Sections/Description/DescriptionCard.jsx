import "./DescriptionCard.scss";

const DescriptionCard = (props) => {
  return (
    <div
      style={{
        width: "40%",
        height: "250px",
        display: "grid",
        justifySelf: "center",
        backgroundColor: props.backgroundColor,
        textAlign: "center",
        padding: "5px",
        borderRadius: props.border,
      }}
    >
      <img src={props.icon} alt="" className="card-img" />
      <p style={{ alignSelf: "center" }}>{props.descriptionText}</p>
    </div>
  );
};

export default DescriptionCard;
