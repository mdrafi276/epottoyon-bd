import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <nav className="bg-[#327a62] p-2 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex gap-4">
                    <Link to="/contact">যোগাযোগ</Link>
                    <Link to="/privacy-policy">প্রাইভেসি এন্ড পলিসি </Link>
                    <Link to="/terms-and-conditions">টার্মস এন্ড কন্ডিশনস </Link>
                </ul>

                <ul className="flex gap-4">
                    <p>
                        <span className="cursor-pointer">লগইন</span>
                        <span> / </span>
                        <span className="cursor-pointer">রেজিস্টার</span>
                    </p>

                    <Link to="/terms-and-conditions">টার্মস এন্ড কন্ডিশনস </Link>
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;
