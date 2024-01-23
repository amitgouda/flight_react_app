import React from "react";
import Router from "./router";

import "./App.css";
import CustomSnackbar from "./Components/CustomSnackbar";

const App: React.FC = () => {
  return (
    <div className="root-container">
      <CustomSnackbar />
      <Router />
    </div>
  );
};

export default App;
