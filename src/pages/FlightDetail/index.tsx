import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FLIGHT_DATA } from "../Home/interface";
import { COLUMNS } from "../Home/constants";
import "./flightDetail.css";
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
    <div className="flight-detail-container">
      <div className="detail-container">
        <div className="detail-header">Flight Details</div>

        <div>
          {COLUMNS.map((columnData, index) => (
            <div
              className={`detail-row ${index % 2 === 0 ? "detail-row-1" : ""}`}
            >
              <div className="detail-column ">{columnData.name} </div>
              <div className="detail-column">
                {flightData
                  ? typeof columnData.helperFunc === "function"
                    ? columnData.helperFunc(flightData[columnData.key])
                    : flightData[columnData.key]
                  : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
