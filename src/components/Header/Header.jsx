import Menu from "../Menu/Menu";
import NoticeBar from "./components/NoticeBar";
import TopNav from "./components/TopNav";

const Header = () => {
    return (
        <header>
            <TopNav />
            <NoticeBar />
            <Menu />
        </header>
    );
};

export default Header;
