import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlightDetail from "../pages/FlightDetail";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
