import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { add_info } from "./Redux/hospitalInfo";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://asia-south1-arogyam-super.cloudfunctions.net/app/hospitals?lat=0.0&lon=0.0&token=arogyam"
      )
      .then((res) => {
        let hospitalInfo = [];
        for (const key in res.data.data) {
          hospitalInfo.push(res.data.data[key]);
        }
        console.log("alooo",hospitalInfo);
        dispatch(add_info(hospitalInfo));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
