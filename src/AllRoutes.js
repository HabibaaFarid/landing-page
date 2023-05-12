import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HospitalsPage from "./Components/HospitalsPage";
import Services from "./Components/Sections/Services";

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
