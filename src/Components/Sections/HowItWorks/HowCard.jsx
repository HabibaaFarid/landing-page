import "./HowCard.scss";

const HowCard = (props) => {
  return (
    <div className="hiw-card">
      <img src={props.img} alt="" />
      <p className="hiw-text">{props.text}</p>
    </div>
  );
};

export default HowCard;
