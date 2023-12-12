import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { CountriesProvider } from "./Contexts/CountriesContext";
import "./index.css";
import Country from "./pages/Country";
export const CountriesContext = createContext([]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country/:country",
    element: <Country />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountriesProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CountriesProvider>
);
