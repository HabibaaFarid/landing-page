import { useSelector } from "react-redux";
import HospitalsCard from "./HospitalsCard";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const HospitalsPage = () => {
  const { info } = useSelector((state) => state.hospitalInfo);
  return (
    <>
      {info ? (
        <div>
          <NavBar />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              margin: "auto",
              justifyContent: "center",
            
            }}
          >
            <HospitalsCard hospitals={info} />
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HospitalsPage;
