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
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Fa42Group, FaX } from "react-icons/fa6";
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

const Bar = ({ setDrawerOpen }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

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
        <List>
          <Accordion
            open={open === 1}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 border-none transition-transform ${
                  open === 1 ? "rotate-90" : ""
                }`}
              />
            }
          >
            {/* dashobrdroute */}
            <Link to="/dashboard/dashboardHome">
              {" "}
              <ListItem>
                <ListItemPrefix>
                  <RxDashboard className="h-5 w-5" />
                </ListItemPrefix>
                ড্যাশবোর্ড
                {/* <ListItemSuffix></ListItemSuffix> */}
              </ListItem>
            </Link>
            <Link to="/dashboard/union-info-form">
              {" "}
              <ListItem>
                <ListItemPrefix>
                  <MdPostAdd className="h-5 w-5" />
                </ListItemPrefix>
                ইউনিয়ন তথ্য
                {/* <ListItemSuffix></ListItemSuffix> */}
              </ListItem>
            </Link>
            <ListItem>
              <ListItemPrefix>
                <MdPostAdd className="h-5 w-5" />
              </ListItemPrefix>
              সনদের জন্য আবেদন
              {/* <ListItemSuffix></ListItemSuffix> */}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <LiaCertificateSolid className="h-5 w-5" />
              </ListItemPrefix>
              সকল সনদ
              {/* <ListItemSuffix></ListItemSuffix> */}
            </ListItem>
            {/* dashobrdroute */}
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
          <Accordion
            open={open === 2}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 transition-transform ${
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
          <Accordion
            open={open === 3}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 transition-transform ${
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
                    <Fa42Group strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  সকল প্রতিবেদন
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 transition-transform ${
                  open === 4 ? "rotate-90" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <TbReceiptTax className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  ট্যাক্স আদায়
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <Fa42Group strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  ট্যাক্স আদায়
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Fa42Group strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  সকল ট্যাক্স আদায় লিস্ট
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 transition-transform ${
                  open === 5 ? "rotate-90" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 5}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <MdReportGmailerrorred className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  রিপোর্ট
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <MdReportGmailerrorred className="h-3 w-5" />
                  </ListItemPrefix>
                  রিপোর্ট
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <MdReportGmailerrorred className="h-3 w-5" />
                  </ListItemPrefix>
                  রিপোর্ট
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            icon={
              <MdOutlineArrowForwardIos
                className={`mx-auto h-4  w-4 transition-transform ${
                  open === 6 ? "rotate-90" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 6}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <IoSettingsOutline className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  সেটিং
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <Accordion
                    open={open === 7}
                    icon={
                      <MdOutlineArrowForwardIos
                        className={`mx-auto h-4  w-4 transition-transform ${
                          open === 7 ? "rotate-90" : ""
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === 7}>
                      <AccordionHeader
                        onClick={() => handleOpen(7)}
                        className="border-b-0 p-3"
                      >
                        <ListItemPrefix>
                          <Fa42Group className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          ইউজার সেটিং
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        <ListItem>
                          <ListItemPrefix>
                            <Fa42Group className="h-3 w-5" />
                          </ListItemPrefix>
                          এড ইউজার
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <Fa42Group className="h-3 w-5" />
                          </ListItemPrefix>
                          ইউজার পারমিশন
                        </ListItem>
                      </List>
                    </AccordionBody>
                  </Accordion>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <PiCertificate className="h-5 w-5" />
            </ListItemPrefix>
            সনদ সেটিং
            {/* <ListItemSuffix></ListItemSuffix> */}
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BsCurrencyDollar className="h-5 w-5" />
            </ListItemPrefix>
            পেমেন্ট সেটিং
            {/* <ListItemSuffix></ListItemSuffix> */}
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BsCurrencyDollar className="h-5 w-5" />
            </ListItemPrefix>
            এড ব্যালেন্স
            {/* <ListItemSuffix></ListItemSuffix> */}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <CgProfile className="h-5 w-5" />
            </ListItemPrefix>
            ইউজার প্রফাইল
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
      </Card>
    );
};

export default Bar;
