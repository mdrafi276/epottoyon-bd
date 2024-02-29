import { Link } from "react-router-dom";
import Select from "../../Select/Select";
import ThemeToggle from "./ThemeToggle";

const TopNav = () => {
    return (
        <nav className="bg-[#327a62] p-3 text-white">
            <div className="container mx-auto flex justify-center sm:justify-between items-center">
                <ul className="hidden sm:flex gap-4">
                    <Link to="/contact">যোগাযোগ</Link>
                    <Link to="/privacy-policy">প্রাইভেসি এন্ড পলিসি </Link>
                    <Link to="/terms-and-conditions">টার্মস এন্ড কন্ডিশনস </Link>
                </ul>

                <ul className="flex items-center gap-4">
                    <p className="flex gap-1">
                        <span className="cursor-pointer">লগইন</span>
                        <span>/</span>
                        <span className="cursor-pointer">রেজিস্টার</span>
                    </p>

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
