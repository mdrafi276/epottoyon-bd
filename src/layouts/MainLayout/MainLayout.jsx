import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <div className='dark:bg-[#303030]'>
                <Header />
            <div className="min-h-[calc(100vh-355px)]">
                <Outlet />
            </div>
            <Footer />
            </div>
        </>
    );
};

export default MainLayout;
