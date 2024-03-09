import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
      <div className="max-w-full  mx-auto">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:ml-64 lg:ml-52 ml-2 p-10">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;
