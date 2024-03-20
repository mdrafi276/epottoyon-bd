import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import LoyalRegister from "../../pages/Register/LoyalRegister";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import ContactUs from "../../pages/ContactUs/contactUs";
import Trams from "../../pages/Trams/Trams";
import UserInfoForm from "../../pages/Dashboard/UserInfoForm/UserInfoForm";
import UnionInfoForm from "../../pages/Dashboard/UnionInfoForm/UnionInfoForm";
import ApplyForCertificate from "../../pages/Dashboard/ApplyForCertificate/ApplyForCertificate";
import FamilyCertificate from "../../pages/Dashboard/FamilyCertificate/FamilyCertificate";
import EditInformation from "../../pages/Profile/EditInformation";
import ChangePassword from "../../pages/Profile/ChangePassword";
import TwoFactorAuthenthication from "../../pages/Profile/TwoFactorAuthenthication";
import AllCertificate from "../../pages/Dashboard/AllCertificate/AllCertificate";

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

      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms-and-conditions",
        element: <Trams />,
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
        path: "/dashboard/edit-information",
        element: <EditInformation />,
      },
      {
        path: "/dashboard/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/dashboard/twofactor",
        element: <TwoFactorAuthenthication />,
      },
      {
        path: "/dashboard/user-info-form",
        element: <UserInfoForm />,
      },
      {
        path: "/dashboard/union-info-form",
        element: <UnionInfoForm />,
        
      },
      {
        path: "/dashboard/all-certificate",
        element: <AllCertificate />,
        
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
