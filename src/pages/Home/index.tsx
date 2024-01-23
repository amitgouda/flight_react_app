import React, { useEffect, useState } from "react";
import CustomGrid from "../../Components/CustomGrid";
import { useNavigate } from "react-router-dom";
//const CustomGrid = Helper.CustomLazyLoad("../../Components/CustomGrid");
import { ERROR_RESPONSE, FLIGHT_DATA } from "./interface";
import { COLUMNS } from "../../constants";
import FlightService from "../../service/flight.service";

import "./home.css";

type FLIGHT_DATA_LIST = FLIGHT_DATA[];
const MILLI_SECONDS = 1000;
const UPDATE_DATA_IN_SECS = 10 * MILLI_SECONDS;

const Home: React.FC = () => {
  const [flightData, setFlightData] = useState<FLIGHT_DATA_LIST>([]);
  const navigate = useNavigate();

  const handleOnClickRow = (id: number) => {
    navigate(`/flight/${id}`);
  };

  useEffect(() => {
    const getAllFlightData = () => {
      FlightService.getAllFlightDetails(
        getAllFlightDetailsSuccessHandler,
        getAllFlightDetailsFaultHandler
      );
    };

    getAllFlightData();
    const intervalRef = setInterval(getAllFlightData, UPDATE_DATA_IN_SECS);

    return () => {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
    };
  }, []);

  const getAllFlightDetailsSuccessHandler = (
    res: FLIGHT_DATA_LIST | ERROR_RESPONSE
  ) => {
    if ("error" in res) {
      window.showSnackbar(res.error);
    } else {
      setFlightData(res);
    }
  };

  const getAllFlightDetailsFaultHandler = (err: any) => {
    console.error(err);
  };

  return (
    <div className="home-container">
      {Array.isArray(flightData) && flightData.length ? (
        <CustomGrid
          columns={COLUMNS}
          dataProvider={flightData}
          rowKey={"id"}
          handleOnClickRow={handleOnClickRow}
        />
      ) : null}
    </div>
  );
};

export default Home;
