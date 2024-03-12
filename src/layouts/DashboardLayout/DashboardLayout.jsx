import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/short-logo.png";
import { FaBars } from "react-icons/fa6";
import { IconButton } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className="flex">
                <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <div className="flex-1">
                    <header className="flex justify-between lg:justify-end items-center bg-green-50 px-6 py-3 w-full">
                        <img className="w-24 lg:hidden" src={logo} alt="UDCDB Logo" />
                        <div className="flex items-center gap-3">
                            <ProfileMenu />
                            <IconButton
                                className="lg:hidden"
                                color="green"
                                onClick={() => setDrawerOpen(true)}
                            >
                                <FaBars className="text-2xl" />
                            </IconButton>
                        </div>
                    </header>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
