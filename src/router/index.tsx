import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FlightDetail = lazy(() => import("../pages/FlightDetail"));
const Home = lazy(() => import("../pages/Home"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
