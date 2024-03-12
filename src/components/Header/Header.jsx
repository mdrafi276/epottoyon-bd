import Menu from "../Menu/Menu";
import NoticeBar from "./components/NoticeBar";
import TopNav from "./components/TopNav";
import logo from "../../assets/short-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="">
        <TopNav />
        <div className="bg-gray-200  border-b-4 border-b-[#8a569b]">
          <div className="px-0 lg:px-8 block sm:flex justify-between items-center gap-3">
            <Link to="/">
              <img
                className="w-28 hidden lg:block"
                src={logo}
                alt="UDCBD Logo"
              />
            </Link>
            <div>
              <NoticeBar />
              <Menu />
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;
