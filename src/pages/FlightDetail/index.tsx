import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ERROR_RESPONSE, FLIGHT_DATA } from "../Home/interface";
import { COLUMNS } from "../../constants";
import FlightService from "../../service/flight.service";

import "./flightDetail.css";

const FlightDetail: React.FC = () => {
  const { id } = useParams();
  const [flightData, setFlightData] = useState<FLIGHT_DATA>();

  useEffect(() => {
    const getFlightDetailsById = (flightId: string | number) => {
      FlightService.getFlightDetailsById(
        flightId,
        getFlightDetailsByIdSuccessHandler,
        getFlightDetailsByIdFaultHandler
      );
    };
    if (typeof id === "string") getFlightDetailsById(String(id));
  }, [id]);

  const getFlightDetailsByIdSuccessHandler = (
    res: FLIGHT_DATA | ERROR_RESPONSE
  ) => {
    if (!("error" in res)) {
      setFlightData(res);
    } else {
      window.showSnackbar(res.error);
    }
  };

  const getFlightDetailsByIdFaultHandler = (err: any) => {
    console.error(err);
  };

  return (
    <div className="flight-detail-container">
      <div className="detail-container">
        <div className="detail-header">Flight Details</div>

        <div>
          {COLUMNS.map((columnData, index) => (
            <div
              key={columnData.name}
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
