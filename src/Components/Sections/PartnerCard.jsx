import { GrLocation } from "react-icons/gr";
import icon from "../images/hospital_icon.jpg";

const PartnerCard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "70%",
        justifySelf: "center",
      }}
    >
      <div
        style={{
          display: "grid",

          justifySelf: "center",
          border: "1px solid grey",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
          boxShadow: "2px 2px lightgrey",
        }}
      >
        <img src={icon} alt="" style={{ width: "30%" }} />
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
            Hospital
          </p>
          <p
            style={{
              justifySelf: "end",
              alignSelf: "center",
              marginRight: "2%",
              marginBottom: "0  ",
            }}
          >
            H9866
          </p>
        </div>
        <p style={{ fontWeight: "bold" }}>Aadhaar Multi Speciality Hospital</p>
        <a href="https://maps.app.goo.gl/1yeVQrY7GNtzBJaK9" style={{color: "black", textDecoration: "none"}}>
          <GrLocation />
          {"  "} Plot No. 32, Radha Krishna Colony Near Karond Chouraha Bhopal
        </a>
        <p>Bhopal, Bhopal, MP, 462038</p>
        <hr style={{ color: "grey" }} />
        <div style={{ display: "grid" }}>
          <p style={{ justifySelf: "center" }}>Discount%</p>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>IPD : 20%</p>
            <p style={{ justifySelf: "center" }}>Medicine : 10%</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>OPD : 10%</p>
            <p style={{ justifySelf: "center" }}>Diagnostic : 0%</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",

          justifySelf: "center",
          border: "1px solid grey",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
          boxShadow: "2px 2px lightgrey",
        }}
      >
        <img src={icon} alt="" style={{ width: "30%" }} />
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
            Hospital
          </p>
          <p
            style={{
              justifySelf: "end",
              alignSelf: "center",
              marginRight: "2%",
              marginBottom: "0  ",
            }}
          >
            H2907
          </p>
        </div>
        <p style={{ fontWeight: "bold" }}>Srijan General Hospital</p>
        <a href="https://maps.app.goo.gl/fv8ckwzwjVSWzaYB6" style={{color: "black", textDecoration: "none"}}>
          <GrLocation />
          {"  "}G-sector Near Sant. Thomas School Ayodhya Bhopal
        </a>
        <p>Bhopal, Bhopal, MP, 462041</p>
        <hr style={{ color: "grey" }} />
        <div style={{ display: "grid" }}>
          <p style={{ justifySelf: "center" }}>Discount%</p>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>IPD : 20%</p>
            <p style={{ justifySelf: "center" }}>Medicine : 10%</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>OPD : 10%</p>
            <p style={{ justifySelf: "center" }}>Diagnostic : 0%</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",

          justifySelf: "center",
          border: "1px solid grey",
          borderRadius: "5px",
          margin: "10px",
          padding: "10px",
          boxShadow: "2px 2px lightgrey",
        }}
      >
        <img src={icon} alt="" style={{ width: "30%" }} />
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
            Hospital
          </p>
          <p
            style={{
              justifySelf: "end",
              alignSelf: "center",
              marginRight: "2%",
              marginBottom: "0  ",
            }}
          >
            H9866
          </p>
        </div>
        <p style={{ fontWeight: "bold" }}>Maruti Multispeciality Hospital</p>
        <a
          href="marutimultispecilityhospital@gmail.com"
          style={{ color: "black", textDecoration: "none" }}
        >
          <GrLocation />
          B-21 Patel Nagar Near Dada Ji Ka Dham Bardhman Colony Raisen Road
          Bhopal
        </a>
        <p>Bhopal, Bhopal, MP, 462022</p>
        <hr style={{ color: "grey" }} />
        <div style={{ display: "grid" }}>
          <p style={{ justifySelf: "center" }}>Discount%</p>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>IPD : 20%</p>
            <p style={{ justifySelf: "center" }}>Medicine : 5%</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <p style={{ justifySelf: "center" }}>OPD : 10%</p>
            <p style={{ justifySelf: "center" }}>Diagnostic : 0%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
