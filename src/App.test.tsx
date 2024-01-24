/* eslint-disable @typescript-eslint/no-unused-expressions */
import { prettyDOM, render, renderWithRouter, screen } from "./test-utils";
import Home from "./pages/Home";
import CustomSnackbar from "./Components/CustomSnackbar";
import { server } from "./mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import FlightDetail from "./pages/FlightDetail";
import { COLUMNS } from "./constants";
import { FLIGHT_DATA, FLIGHT_NO2_DATA } from "./mocks/mock_data";

describe("Home Screen", () => {
  test("On successfull flight data, Table should be present", async () => {
    render(<CustomSnackbar />);

    renderWithRouter(<Home />);

    const tableElement = await screen.findByRole("table");

    expect(tableElement).toBeInTheDocument();
  });

  test("On error of flight data, Table should not be present", async () => {
    server.use(
      rest.get(
        "https://flight-status-mock.core.travelopia.cloud/flights",
        (req, res, ctx) => {
          return res(ctx.json([]));
        }
      )
    );

    render(<CustomSnackbar />);

    renderWithRouter(<Home />);

    const tableElement = screen.queryByRole("table");

    expect(tableElement).toBeNull();
  });

  test("On successfull flight data, Table should be present... Check the no of rows in he table", async () => {
    render(<CustomSnackbar />);

    renderWithRouter(<Home />);

    const tableBodyElement = await screen.findByTestId("table-body");

    expect(tableBodyElement.childElementCount).toBe(FLIGHT_DATA.length);
  });

  test("On successfull flight data, Table should be present... On Click of a row", async () => {
    render(<CustomSnackbar />);

    renderWithRouter(<Home />);

    const tableBodyElement = await screen.findByTestId("table-body");

    await userEvent.click(tableBodyElement.children[0]);

    expect(window.location.pathname).toBe("/");
  });
});

describe("Flight Detail Screen", () => {
  test("On successfull flight data, All data should be present", async () => {
    render(<CustomSnackbar />);

    renderWithRouter(<FlightDetail />, {
      route: "flight/2",
    });

    const headerElement = await screen.findByText("Flight Details");

    expect(headerElement).toBeInTheDocument();

    COLUMNS.forEach((columnData, index) => {
      const elementField = screen.getByText(columnData.name);
      expect(elementField).toBeInTheDocument();
    });
  });
});
