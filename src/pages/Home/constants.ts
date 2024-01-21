import Helper from "../../helper";

export const COLUMNS = [
  { name: "Flight Number", key: "flightNumber" },
  { name: "Airline", key: "airline" },
  { name: "Origin", key: "origin" },
  { name: "Destination", key: "destination" },
  {
    name: "Departure Time",
    key: "departureTime",
    helperFunc: Helper.formattedDate,
  },
  { name: "Status", key: "status" },
];
