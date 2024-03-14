import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import LoyalRegister from "../../pages/Register/LoyalRegister";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import ApplyForCertificate from "../../pages/Dashboard/ApplyForCertificate/ApplyForCertificate";
import FamilyCertificate from "../../pages/Dashboard/FamilyCertificate/FamilyCertificate";

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
            {
                path: "/reset-password",
                element: <ResetPassword />,
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
            {
                path: "/dashboard/apply-for-certificate",
                element: <ApplyForCertificate />,
            },
            {
                path: "/dashboard/apply-for-certificate/পারিবারিক সনদ",
                element: <FamilyCertificate />,
            },
        ],
    },
]);

export default MainRouter;
