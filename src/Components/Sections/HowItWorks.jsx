import HowCard from "./HowCard";
import img1 from "../images/hiw1.png";
import img2 from "../images/hiw2.png";
import img3 from "../images/hiw3.png";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="main-container">
      <p className="works-title">How It Works</p>
      <p className="works-subtitle">
        Becoming a member is super easy and affordable
      </p>
      <div className="works-container">
        <HowCard
          img={img1}
          text="Simply visit our registration page and provide us with some basic information or you can just ask one of our field executives."
        />
        <HowCard
          img={img2}
          text="After submitting the details, you will receive your 7R Arogym Health Card on WhatsApp, you can print it out later. Once you have a health card either digital or physically, you can start using it immediately."
        />
        <HowCard
          img={img3}
          text="When you visit a registered hospital or healthcare provider, simply present your health card at the time of service to receive the discounted rate. You can use your health card as often as you need to access healthcare services. NO RESTRICTIONS!!"
        />
      </div>
      <button className="works-button">Register Here</button>
    </div>
  );
};

export default HowItWorks;
