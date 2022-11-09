import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/Parent";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./routes/root";
import Root from "./components/Parent";
import Home from "../src/components/Home/Home"
import PokemonProfile from "./components/profiles/Pokemonprofile";

import ErrorPage from "../src/routes/ErrorPage";
import ErrorPokemon from "../src/components/profiles/ErrorPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> /*aqui colocó la App*/,
    errorElement: <ErrorPage />,

  },
  {
    path: "Pokedex/",
    element: <Parent/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "Pokedex/PokemonProfile/:nombre",
    element: <PokemonProfile />,
    errorElement: <ErrorPokemon/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ColorModeScript /> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
