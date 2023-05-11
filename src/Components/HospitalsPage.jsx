import { useEffect, useState } from "react";
import axios from "axios";
import HospitalsCard from "./HospitalsCard";

const HospitalsPage = () => {
  const [hospitals, setHospitals] = useState();
  useEffect(() => {
    axios
      .get(
        "https://asia-south1-arogyam-super.cloudfunctions.net/app/hospitals?lat=0.0&lon=0.0&token=arogyam"
      )
      .then((res) => setHospitals(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
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
      <HospitalsCard hospitals={hospitals} />
    </div>
  );
};

export default HospitalsPage;
