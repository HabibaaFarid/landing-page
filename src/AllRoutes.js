import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HospitalsPage from "./Components/Hospitals/HospitalsPage";

const routes = {
  home: {
    path: "/",
    component: Home
  },
  hospitals: {
    path: "/hospitals",
    component: HospitalsPage
  },
};

const AllRoutes = () => {
  return (
    <Routes>
      {Object.values(routes).map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};
export default AllRoutes;

