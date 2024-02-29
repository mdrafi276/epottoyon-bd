import Marquee from "react-fast-marquee";
import logo from "../../../assets/short-logo.png";
import { Link } from "react-router-dom";

const NoticeBar = () => {
    return (
        <nav className="container mx-auto flex items-center gap-3 py-3 -4 xl:px-0">
            <Link to="/">
                <img className="w-32 hidden lg:block" src={logo} alt="UDCBD Logo" />
            </Link>
            <b className="text-2xl sm:text-3xl">নোটিশ:</b>
            <Marquee className="text-xl sm:text-2xl" pauseOnHover>
                <h3>আমার প্রথম বাংলা শিরোনাম</h3>
                <h3>বাংলা ভাষায় একটি মহান শিরোনাম</h3>
                <h3>বাংলা ভাষায় একটি শিল্প</h3>
            </Marquee>
        </nav>
    );
};

export default NoticeBar;
