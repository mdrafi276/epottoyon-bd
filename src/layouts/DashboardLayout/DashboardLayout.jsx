import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex">
                <Sidebar />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
