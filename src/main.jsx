import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import MainProvider from "./Providers/MainProvider/MainProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainProvider>
            <RouterProvider router={MainRouter} />
        </MainProvider>
    </React.StrictMode>
);
