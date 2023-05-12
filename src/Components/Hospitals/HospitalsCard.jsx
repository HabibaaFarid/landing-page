import { GrLocation } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import icon from "../images/hospital_icon.jpg";

const HospitalsCard = (props) => {
  const hospitals = props.hospitals;
  

  return (
    <>
      {hospitals.map((hos) => {
        return (
          <div
            style={{
              display: "grid",
              width: "30%",
              border: "1px solid grey",
              borderRadius: "5px",
              margin: "10px",
              padding: "10px",
              boxShadow: "2px 2px lightgrey",
            }}
          >
            <img
              src={hos.images.length > 0 ? hos.images[0] : icon}
              alt=""
              style={{ width: "250px", height: "200px", justifySelf: "center" }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                marginBottom: "2%",
              }}
            >
              <p
                style={{
                  justifySelf: "start",
                  alignSelf: "center",
                  marginBottom: "0  ",
                }}
              >
                {hos.category}
              </p>
              <p
                style={{
                  justifySelf: "end",
                  alignSelf: "center",
                  marginRight: "2%",
                  marginBottom: "0  ",
                }}
              >
                {hos.uid}
              </p>
            </div>
            <p style={{ fontWeight: "bold" }}>{hos.entity_name}</p>
            <a
              href={hos.map_link}
              style={{
                alignSelf: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <GrLocation style={{ alignSelf: "center" }} />
              {"  "}
              {hos.address}
            </a>
            <p>{`${hos.city}, ${hos.district}, ${hos.state}, ${hos.pincode}`}</p>
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
              <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                <p
                  style={{ justifySelf: "center" }}
                >{`IPD : ${hos.discount_ipd}%`}</p>
                <p
                  style={{ justifySelf: "center" }}
                >{`Medicine : ${hos.discount_medicine}%`}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                <p
                  style={{ justifySelf: "center" }}
                >{`OPD : ${hos.discount_opd}%`}</p>
                <p
                  style={{ justifySelf: "center" }}
                >{`Diagnostic : ${hos.discount_diagnostic}%`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HospitalsCard;
