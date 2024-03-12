import { Drawer } from "@material-tailwind/react";

import Bar from "./Bar";

const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
    return (
        <>
            <div className="hidden lg:block">
                <Bar />
            </div>
            <Drawer
                className="block lg:hidden"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Bar setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </>
    );
};

export default Sidebar;
