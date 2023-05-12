import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HospitalsPage from "./Components/Hospitals/HospitalsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hospitals" element={<HospitalsPage />} />
      <Route exact path="/#services" element={<Home />} />
    </Routes>
  );
};
export default AllRoutes;
