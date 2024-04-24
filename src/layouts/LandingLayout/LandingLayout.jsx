import { Outlet } from "react-router-dom";

const LandingLayout = () => {
    return (
        <section>
            <Outlet />
        </section>
    );
};

export default LandingLayout;
