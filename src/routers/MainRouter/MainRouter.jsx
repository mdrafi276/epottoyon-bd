import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import LoyalRegister from "../../pages/Register/LoyalRegister";
import Dashboard from "../../Dashboard/Dashboard";

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
                path: '/register',
                element:<Register/>
            },
            {
                path:"/loRegister",
                element:<LoyalRegister/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:""
                    }
                ]
            }
        ],
    },
]);

export default MainRouter;
