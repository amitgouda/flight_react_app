import React, { useEffect, useState } from "react";
import "./customSnackbar.css";
interface CustomSnackbarProps extends React.PropsWithChildren {}

declare global {
  interface Window {
    showSnackbar: (msg: string) => void;
  }
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = () => {
  const [snackBarDetail, setShowSnackbar] = useState({ show: false, msg: "" });

  useEffect(() => {
    window.showSnackbar = showSnackbar;
  }, []);

  const showSnackbar = (msg: string) => {
    setShowSnackbar({ show: true, msg });
    setTimeout(() => {
      setShowSnackbar({ show: false, msg: "" });
    }, 3000);
  };

  return snackBarDetail.show ? (
    <div className="snackbar-container">
      <div>
        <span> {snackBarDetail.msg || ""} </span>
      </div>
    </div>
  ) : null;
};

export default CustomSnackbar;
