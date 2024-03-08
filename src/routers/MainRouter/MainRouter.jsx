import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import LoyalRegister from "../../pages/Register/LoyalRegister";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/loRegister",
                element: <LoyalRegister />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default MainRouter;
