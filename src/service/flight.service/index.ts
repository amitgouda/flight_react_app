import FetchService from "../fetch";

const FlightService = {
  getAllFlightDetails: (
    successHandler: ((value: any) => void) | null | undefined,
    faultFandler: ((reason: any) => void) | null | undefined
  ) => {
    FetchService.get("flights", successHandler, faultFandler);
  },
  getFlightDetailsById: (
    id: string | number,
    successHandler: ((value: any) => void) | null | undefined,
    faultFandler: ((reason: any) => void) | null | undefined
  ) => {
    FetchService.get(`flights/${id}`, successHandler, faultFandler);
  },
};

export default FlightService;
