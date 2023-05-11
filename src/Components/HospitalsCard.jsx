import icon from "./images/hospital_icon.jpg";

const HospitalsCard = (props) => {
  const hospitals = props.hospitals;
  console.log("henaaaaaaa", hospitals);
  console.log(typeof hospitals);
  let hospitalInfo = [];

  for (const key in hospitals) {
    hospitalInfo.push(hospitals[key]);
  }
  console.log(hospitalInfo);

  hospitalInfo.forEach((element) => {
    console.log(element.state);
  });

  return (
    <>
      {hospitalInfo.map((hos) => {
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                marginBottom: "2%",
              }}
            >
              <img src={icon} alt="" style={{ width: "30%" }} />

              <p
                style={{
                  justifySelf: "center",
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
            <p style={{}}>{hos.address}</p>
            <p>{`${hos.city}, ${hos.district}, ${hos.state}, ${hos.pincode}`}</p>
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
