import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
      <>
        <div className="dark:bg-[#323232]  ">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
    );
};

export default MainLayout;
