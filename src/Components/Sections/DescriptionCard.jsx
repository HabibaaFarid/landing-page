import "./DescriptionCard.scss";

const DescriptionCard = (props) => {
  return (
    <div
      style={{
        width: "40%",
        display: "grid",
        justifySelf: "center",
        backgroundColor: props.backgroundColor,
        textAlign: "center",
        padding: "5px",
        borderRadius: props.border,
      }}
    >
      <img src={props.icon} alt="" className="card-img" />
      <p>{props.descriptionText}</p>
    </div>
  );
};

export default DescriptionCard;
