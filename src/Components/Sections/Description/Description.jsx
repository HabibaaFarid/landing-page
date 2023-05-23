import DescriptionCard from "./DescriptionCard";
import img1 from "../../images/icon1.png";
import img2 from "../../images/icon2.png";
import img3 from "../../images/icon3.png";
import img4 from "../../images/doctors.jpg";
import "./Description.scss";

const Description = () => {
  return (
    <div className="desc-main-container">
      <div className="cards-container">
        <DescriptionCard
          icon={img1}
          descriptionText="Up to 30% discount on OPD/IPD"
          backgroundColor="#FE5722"
          border="10px 0px 0px 10px"
        />
        <DescriptionCard
          icon={img2}
          descriptionText="Up to 40% discount on Lab Tests & Diagnostic Centers"
          backgroundColor="#FEC107"
        />
        <DescriptionCard
          icon={img3}
          descriptionText="Up to 20% discount on Medicines"
          backgroundColor="#009788"
          border="0px 10px 10px 0px"
        />
      </div>
      <div className="text-container">
        <img src={img4} alt="doctor's photo" className="description-img" />
        <div>
          <p className="description-text">
            At 7Rogaym Healthcare (P) Ltd, we believe that everyone should have
            access to affordable healthcare services. We understand the
            challenge faced by individuals and families when it comes to
            healthcare costs. Our health card program is designed to help you
            save money on healthcare services without compromising on the
            quality of care. Whether you need basic healthcare services or
            specialized treatments, you can acces a range of healthcare service
            at participating hospitals, clinics, and healthcare providers across
            Madhya Oradesh with ### of members and growing, we are committed to
            making healthcare more accessible and affordable for everyone.
          </p>
          <p className="description-text">
            Explore our website to learn more about our health card programs and
            how they can benefit you and your loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
