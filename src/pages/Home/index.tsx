import React, { useEffect, useState } from "react";
//import Helper from "../../helper";
import CustomGrid from "../../Components/CustomGrid";
import { useNavigate } from "react-router-dom";
//const CustomGrid = Helper.CustomLazyLoad("../../Components/CustomGrid");
import { FLIGHT_DATA } from "./interface";
import { COLUMNS } from "./constants";
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
    callApi();
    const intervalRef = setInterval(callApi, UPDATE_DATA_IN_SECS);

    return () => {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
    };
  }, []);

  const callApi = () => {
    fetch("https://flight-status-mock.core.travelopia.cloud/flights")
      .then((res) => res.json())
      .then((res: FLIGHT_DATA_LIST) => {
        setFlightData(res);
      });
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
