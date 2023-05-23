import "./HowCard.scss";

const HowCard = (props) => {
  return (
    <div className="hiw-card" style={{ flexDirection: props.flexDirection }}>
      <img src={props.img} alt="" className="hiw-icon" />
      <p className="hiw-text" >
        {props.text}
      </p>
    </div>
  );
};

export default HowCard;
