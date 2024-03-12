import { Link } from "react-router-dom";
import Select from "../../Select/Select";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import useMainContext from "../../../hooks/useMainContext/useMainContext";
import LoginModal from "../../../pages/Login/LoginModal";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const TopNav = () => {
    const { topMenuItems } = useMainContext();
    const { user } = useContext(AuthContext);

    return (
        <nav className="bg-[#327a62] p-3 text-white">
            <div className="container mx-auto flex justify-center sm:justify-between items-center">
                <ul className="hidden sm:flex gap-4">
                    {topMenuItems?.map((item) => (
                        <Link to={item?.link} key={item?.label}>
                            {item?.label}
                        </Link>
                    ))}
                </ul>

                <ul className="flex items-center gap-4">
                    {user ? (
                        <Link to="/dashboard">ড্যাশবোর্ড</Link>
                    ) : (
                        <div className="flex gap-1 items-center">
                            <span className="cursor-pointer">
                                <LoginModal />
                            </span>
                            <span>/</span>

                            <Link to="/register">
                                <span className="cursor-pointer">রেজিস্টার</span>
                            </Link>
                        </div>
                    )}

                    <Select>
                        <option>বাংলা</option>
                        <option>English</option>
                    </Select>
                    <span>
                        <ThemeToggle />
                    </span>
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;
