import { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import logo from "../../assets/logo.png";
import { FaX, Fa42Group } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdReportGmailerrorred } from "react-icons/md";
import { TbMessageReport, TbLayoutDashboard } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Bar = ({ setDrawerOpen }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const renderListItem = (to, text, icon) => (
        <Link to={to}>
            <ListItem>
                <ListItemPrefix>{icon}</ListItemPrefix>
                {text}
            </ListItem>
        </Link>
    );

    return (
        <Card className="h-screen relative lg:sticky top-0 left-0 overflow-y-auto bg-blue-50 p-4 shadow-xl shadow-blue-gray-900/5">
            <IconButton
                color="green"
                onClick={() => setDrawerOpen(false)}
                className="!absolute block lg:hidden top-4 right-4 z-20"
            >
                <FaX className="text-lg" />
            </IconButton>
            <Link to="/" className="mb-2 flex items-center gap-4 p-4">
                <img className="w-44 mx-auto" src={logo} alt="UDCBD Logo" />
            </Link>
            {renderListItem(
                "/dashboard",
                "ড্যাশবোর্ড",
                <TbLayoutDashboard className="h-5 w-5" />
            )}
            {renderListItem(
                "/dashboard/user-info-form",
                "ব্যাবহারকারীর তথ্য",
                <MdPostAdd className="h-5 w-5" />
            )}
            {renderListItem(
                "/dashboard/user-info-form",
                "ব্যাবহারকারীর তথ্য",
                <MdPostAdd className="h-5 w-5" />
            )}
            {renderListItem(
                "/dashboard/union-info-form",
                "ইউনিয়ন তথ্য",
                <MdPostAdd className="h-5 w-5" />
            )}
            <Link to="/dashboard/apply-for-certificate">
                <ListItem>
                    <ListItemPrefix>
                        <MdPostAdd className="h-5 w-5" />
                    </ListItemPrefix>
                    সনদের জন্য আবেদন
                </ListItem>
            </Link>
            <ListItem>
                <ListItemPrefix>
                    <LiaCertificateSolid className="h-5 w-5" />
                </ListItemPrefix>
                সকল সনদ
            </ListItem>
            {/* dashobrdroute */}
            <Accordion open={open === 1}>
                <ListItem className="p-0" selected={open === 1}>
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="border-b-0 p-3"
                    >
                        <ListItemPrefix>
                            <Fa42Group className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            গ্রাম আদালত নোটিশ
                        </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    <List className="p-0">
                        <ListItem>
                            <ListItemPrefix>
                                <Fa42Group strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            নোটিশ তৈরি করুন
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Fa42Group strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            সকল নোটিশ
                        </ListItem>
                    </List>
                </AccordionBody>
            </Accordion>
            {/* Accordion 2 */}
            <Accordion
                open={open === 2}
                icon={
                    <MdOutlineArrowForwardIos
                        className={`mx-auto h-4 w-4 transition-transform ${
                            open === 2 ? "rotate-90" : ""
                        }`}
                    />
                }
            >
                <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className="border-b-0 p-3"
                    >
                        <ListItemPrefix>
                            <Fa42Group className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            বিচারের রায়
                        </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    <List className="p-0">
                        <ListItem>
                            <ListItemPrefix>
                                <Fa42Group strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            বিচারের রায় তৈরি করুন
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Fa42Group strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            সকল বিচারের রায়
                        </ListItem>
                    </List>
                </AccordionBody>
            </Accordion>
            {/* Accordion 3 */}
            <Accordion
                open={open === 3}
                icon={
                    <MdOutlineArrowForwardIos
                        className={`mx-auto h-4 w-4 transition-transform ${
                            open === 3 ? "rotate-90" : ""
                        }`}
                    />
                }
            >
                <ListItem className="p-0" selected={open === 3}>
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className="border-b-0 p-3"
                    >
                        <ListItemPrefix>
                            <TbMessageReport className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            প্রতিবেদন
                        </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    <List className="p-0">
                        <ListItem>
                            <ListItemPrefix>
                                <Fa42Group strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            প্রতিবেদন তৈরি করুন
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PiCertificate className="h-5 w-5" />
                            </ListItemPrefix>
                            সনদ সেটিং
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <BsCurrencyDollar className="h-5 w-5" />
                            </ListItemPrefix>
                            পেমেন্ট সেটিং
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <BsCurrencyDollar className="h-5 w-5" />
                            </ListItemPrefix>
                            এড ব্যালেন্স
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <CgProfile className="h-5 w-5" />
                            </ListItemPrefix>
                            ইউজার প্রফাইল
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <MdLogout className="h-5 w-5" />
                            </ListItemPrefix>
                            লগ আউট
                        </ListItem>
                    </List>
                </AccordionBody>
            </Accordion>
        </Card>
    );
};

export default Bar;
