import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FLIGHT_DATA } from "../Home/interface";
import { COLUMNS } from "../../constants";
import FlightService from "../../service/flight.service";

import "./flightDetail.css";
import Helper from "../../helper";

const FlightDetail: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { flightData: flightParam = {} } = location?.state || {};
  const [flightData, setFlightData] = useState<FLIGHT_DATA>(
    Helper.isObject(flightParam) ? flightParam : {}
  );

  useEffect(() => {
    const getFlightDetailsById = (flightId: string | number) => {
      FlightService.getFlightDetailsById(
        flightId,
        getFlightDetailsByIdSuccessHandler,
        getFlightDetailsByIdFaultHandler
      );
    };
    if (!flightData?.id) {
      getFlightDetailsById(String(id));
    }
  }, [id, flightData.id]);

  const getFlightDetailsByIdSuccessHandler = (res: FLIGHT_DATA) => {
    setFlightData(res);
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
