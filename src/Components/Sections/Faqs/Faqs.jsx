import faqs from "../../images/faqs.png";
import "./Faqs.scss";

const Faqs = () => {
  return (
    <div className="faqs-container">
      <p className="faqs-title">FAQS</p>
      <p className="faqs-para">
        We understand that you may have questions about our health card program.
        We have compiled a list of frequently asked questions to help you
        understand our program better. If you have any other questions, please
        feel free to contact us.
      </p>
      <img src={faqs} alt="faqs" className="faqs-img" />
    </div>
  );
};

export default Faqs;
