import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import MainProvider from "./Providers/MainProvider/MainProvider";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MainProvider>
        <RouterProvider router={MainRouter} />
      </MainProvider>
    </AuthProvider>
  </React.StrictMode>
);
