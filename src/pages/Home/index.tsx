import React, { useEffect, useState } from "react";
//import Helper from "../../helper";
import CustomGrid from "../../Components/CustomGrid";
import { useNavigate } from "react-router-dom";
//const CustomGrid = Helper.CustomLazyLoad("../../Components/CustomGrid");

import "./home.css";

interface FLIGHT_DATA {
  id: number;
  airline: string;
  departureTime: string;
  destination: string;
  flightNumber: string;
  origin: string;
  status: string;
}

type FLIGHT_DATA_LIST = FLIGHT_DATA[];
const MILLI_SECONDS = 1000;
const UPDATE_DATA_IN_SECS = 10 * MILLI_SECONDS;
const COLUMNS = [
  { name: "Flight Number", key: "flightNumber" },
  { name: "Airline", key: "airline" },
  { name: "Origin", key: "flightNumber" },
  { name: "Origin", key: "origin" },
  { name: "Destination", key: "destination" },
  { name: "Departue Time", key: "departureTime" },
  { name: "Status", key: "status" },
];

const Home: React.FC = () => {
  const [flightData, setFlightData] = useState<FLIGHT_DATA_LIST>([]);
  const navigate = useNavigate();

  const handleOnClick = (id: string) => {
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
      <button onClick={() => handleOnClick("1")}>Press me</button>
      {Array.isArray(flightData) && flightData.length ? (
        <CustomGrid columns={COLUMNS} dataProvider={flightData} rowKey={"id"} />
      ) : null}
    </div>
  );
};

export default Home;
