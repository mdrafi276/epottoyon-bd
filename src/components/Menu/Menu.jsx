import { Link, NavLink } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext/useMainContext";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import logo from "../../assets/short-logo.png";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

const Menu = () => {
    const { mainMenuItems, topMenuItems } = useMainContext();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <nav className="w-full">
            <div className="h-20 hidden lg:flex gap-3 xl:gap-6 items-center">
                {mainMenuItems?.map((item) => (
                    <NavLink
                        className={({ isActive }) =>
                            `${
                                isActive ? "bg-[#8a569b] px-3 text-white" : ""
                            } text-sm xl:text-xl h-full flex items-center`
                        }
                        key={item?.label}
                        to={item?.link}
                    >
                        <span>{item?.label}</span>
                    </NavLink>
                ))}
            </div>

            <div className="flex lg:hidden justify-between items-center px-4 py-2">
                <Link to="/">
                    <img className="w-20" src={logo} alt="UDCBD Logo" />
                </Link>
                
                <FaBarsStaggered
                    onClick={() => setOpenMobileMenu(true)}
                    className="text-3xl"
                />
            </div>

            <Drawer
                placement="right"
                open={openMobileMenu}
                onClose={setOpenMobileMenu}
                className="space-y-6 p-4 overflow-y-auto"
            >
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img className="w-20" src={logo} alt="UDCBD Logo" />
                    </Link>
                    <FaX className="text-2xl" onClick={() => setOpenMobileMenu(false)} />
                </div>

                <nav className="flex flex-col gap-2">
                    {mainMenuItems?.map((item) => (
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "font-bold" : "font-medium"} text-lg`
                            }
                            to={item?.link}
                            key={item?.label}
                        >
                            {item?.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex flex-col gap-1">
                    {topMenuItems?.map((item) => (
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "font-bold" : "font-medium"} text-xs`
                            }
                            to={item?.link}
                            key={item?.label}
                        >
                            {item?.label}
                        </NavLink>
                    ))}
                </div>
            </Drawer>
        </nav>
    );
};

export default Menu;
