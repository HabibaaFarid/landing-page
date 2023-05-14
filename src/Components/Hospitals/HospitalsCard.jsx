import { FaDirections } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import icon from "../images/hospital_icon.jpg";
import "./HospitalCard.scss";

const HospitalsCard = (props) => {
  const hospitals = props.hospitals;

  return (
    <>
      {hospitals.map((hos) => {
        return (
          <div className="hospital-info-card">
            <img
              src={hos.images.length > 0 ? hos.images[0] : icon}
              alt=""
              className="hodpital-card-img"
            />
            <div className="hospital-card-srow">
              <p className="card-category">{hos.category}</p>
              <p className="card-uid">{hos.uid}</p>
            </div>
            <p className="card-title">{hos.entity_name}</p>
            <p>
              <GrLocation />
              {"  "}
              {hos.address}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "60% 40%",
              }}
            >
              <p
                style={{ alignItems: "center", marginBottom: "0" }}
              >{`${hos.city}, ${hos.district}, ${hos.state}, ${hos.pincode}`}</p>
              <FaDirections
                size={40}
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                  color: "#ff7f26",
                }}
                onClick={() => {
                  window.open(hos.map_link);
                }}
              />
            </div>
            <a
              href={`tel:${hos.mobile_no}`}
              style={{ color: "blue", textDecoration: "none" }}
            >
              <ImPhone style={{ color: "black" }} />
              {"  "}
              {hos.mobile_no}
            </a>
            <hr style={{ color: "grey" }} />
            <div style={{ display: "grid" }}>
              <p style={{ justifySelf: "center" }}>Discount%</p>
              <div className="discount-rows">
                <p className="discount-items">{`IPD : ${hos.discount_ipd}%`}</p>
                <p className="discount-items">{`Medicine : ${hos.discount_medicine}%`}</p>
              </div>
              <div className="discount-rows">
                <p className="discount-items">{`OPD : ${hos.discount_opd}%`}</p>
                <p className="discount-items">{`Diagnostic : ${hos.discount_diagnostic}%`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HospitalsCard;
