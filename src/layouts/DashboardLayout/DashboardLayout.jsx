import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
