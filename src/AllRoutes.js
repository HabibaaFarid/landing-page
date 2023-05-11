import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HospitalsPage from "./Components/HospitalsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hospitals" element={<HospitalsPage />} />
    </Routes>
  );
};
export default AllRoutes;
