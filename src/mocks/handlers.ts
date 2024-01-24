/* eslint-disable import/first */
import { TextEncoder } from "node:util";
global.TextEncoder = TextEncoder;

import { rest } from "msw";
import { FLIGHT_DATA, FLIGHT_NO2_DATA } from "./mock_data";

export const handlers = [
  rest.get(
    "https://flight-status-mock.core.travelopia.cloud/flights",
    (req, res, ctx) => {
      return res(ctx.json(FLIGHT_DATA));
    }
  ),
  rest.get(
    "https://flight-status-mock.core.travelopia.cloud/flights/2",
    (req, res, ctx) => {
      console.log("trigger");
      return res(ctx.json(FLIGHT_NO2_DATA));
    }
  ),
];

module.exports = { handlers };
