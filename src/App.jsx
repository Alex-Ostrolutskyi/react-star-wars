import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./router/Home";
import RootLayout from "./router/RootLayout";
import People from "./router/People";
import Films from "./router/Films";
import StarShips from "./router/StarShips";
import Planets from "./router/Planets";
import Error from "./Components/error/Error";
import Person from "./Components/PeoplePage/Person";
import Film from "./Components/Films/Film";
import FavouriteData from "./router/FavouriteData";
import SinglePlanet from "./Components/Planets/SinglePlanet";
import SingleStarShip from "./Components/StarShips/SingleStarShip";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "people/:id",
        element: <Person />,
      },
      {
        path: "films",
        element: <Films />,
      },
      {
        path: "films/:filmId",
        element: <Film />,
      },
      {
        path: "planets",
        element: <Planets />,
      },
      {
        path: "planets/:planetId",
        element: <SinglePlanet />,
      },
      {
        path: "starships",
        element: <StarShips />,
      },
      {
        path: "starships/:starShipId",
        element: <SingleStarShip />,
      },
      {
        path: "favourite",
        element: <FavouriteData />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
