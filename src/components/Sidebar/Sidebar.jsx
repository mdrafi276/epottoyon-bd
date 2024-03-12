import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Fa42Group, FaBars } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdReportGmailerrorred } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { TbReceiptTax } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Bar from "./Bar";

const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <>
            <div className="hidden lg:block">
                <Bar />
            </div>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <FaBars className="text-2xl" />
            </IconButton>
            <Drawer
                className="block lg:hidden"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Bar />
            </Drawer>
        </>
    );
};

export default Sidebar;
