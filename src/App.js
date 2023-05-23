import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { add_info } from "./Redux/hospitalInfo";
import "./App.css";
import { getHospitalInfo } from "./core/Api.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getHospitalInfo();
        let hospitalInfo = [];
        for (const key in data.data) {
          hospitalInfo.push(data.data[key]);
        }
        dispatch(add_info(hospitalInfo));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
