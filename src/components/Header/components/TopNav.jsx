import { Link } from "react-router-dom";
import Select from "../../Select/Select";
import useMainContext from "../../../hooks/useMainContext/useMainContext";
import LoginModal from "../../../pages/Login/LoginModal";
import { useContext, useEffect, useState } from "react";
import "./theme-toggle.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const TopNav = () => {
    const { topMenuItems } = useMainContext();
    const { user } = useContext(AuthContext);
    const [mode, setMode] = useState("light");

    const handleTheme = () => {
        const html = document.documentElement;
        if (mode == "light") {
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark");
            localStorage.setItem("mode", "dark");
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode", "light");
        }
    };

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light";
        setMode(currentMode);
        const html = document.documentElement;
        html.classList.add(currentMode);
    }, []);

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
                    {user && user.emailVerified ? (
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
                        <label className="switch">
                            <span className="sun">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="#ffd43b">
                                        <circle r="5" cy="12" cx="12"></circle>
                                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="moon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                                </svg>
                            </span>
                            <input
                                onChange={handleTheme}
                                checked={mode === "light" ? false : true}
                                type="checkbox"
                                className="input"
                            />
                            <span className="slider"></span>
                        </label>
                    </span>
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;
