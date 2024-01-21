import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FLIGHT_DATA } from "../Home/interface";
import { COLUMNS } from "../Home/constants";

const FlightDetail: React.FC = () => {
  const { id } = useParams();
  const [flightData, setFlightData] = useState<FLIGHT_DATA>();

  useEffect(() => {
    callApi(String(id));
  }, [id]);

  const callApi = (flightId: string) => {
    fetch(
      `https://flight-status-mock.core.travelopia.cloud/flights/${flightId}`
    )
      .then((res) => res.json())
      .then((res: FLIGHT_DATA) => {
        setFlightData(res);
      });
  };

  return (
    <div>
      <div>
        <span>Flight Details</span>
        <div>
          {COLUMNS.map((columnData) => (
            <div>
              {" "}
              {columnData.name} = {flightData && flightData[columnData.key]}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
