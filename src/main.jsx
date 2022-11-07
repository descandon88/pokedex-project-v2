import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/Parent";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./routes/root";
import Root from "./components/Parent";
import PokemonProfile from "./components/profiles/Pokemonprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> /*aqui colocó la App*/,
  },
  {
    path: "PokemonProfile/:nombre",
    element: <PokemonProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ColorModeScript /> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
