export interface FLIGHT_DATA {
  id: number;
  airline: string;
  departureTime: string;
  destination: string;
  flightNumber: string;
  origin: string;
  status: string;
}

export interface ERROR_RESPONSE {
  error: string;
}
