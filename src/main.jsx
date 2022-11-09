import React from "react";
import ReactDOM from "react-dom/client";
// import Parent from "./components/Parent";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./routes/root";
import PageNotFound from "./routes/pageNoFound";
import Pokedex from "./components/Parent";
import PokemonProfile from "./components/profiles/Pokemonprofile";
import Home from "./components/Home/Home";
// import ErrorPage from "../src/routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/Pokedex",
    element: <Pokedex /> /*aqui colocó la App*/,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "Pokedex/PokemonProfile/:nombre",
    element: <PokemonProfile />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
