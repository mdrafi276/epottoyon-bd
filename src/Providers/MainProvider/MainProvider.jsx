import { createContext } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext(null);

const MainProvider = ({ children }) => {
    const mainMenuItems = [
        {
            label: "প্রথম পাতা",
            link: "/",
        },
        {
            label: "সেবাসমূহ",
            link: "/services",
        },
        {
            label: "আবেদনের অবস্থা জানুন",
            link: "/application-status",
        },
        {
            label: "সনদ যাচাইকরণ",
            link: "/certificate-verification",
        },
        {
            label: "ফর্মস",
            link: "/forms",
        },
        {
            label: "ব্যবহার নির্দেশিকা",
            link: "/usage-guidelines",
        },
        {
            label: "সচরাচর জিজ্ঞাসা",
            link: "/faq",
        },
        {
            label: "ডিজিটাল বাংলাদেশ",
            link: "/digital-bangladesh",
        },
    ];

    const topMenuItems = [
        {
            label: "যোগাযোগ",
            link: "/contact",
        },
        {
            label: "প্রাইভেসি এন্ড পলিসি",
            link: "/privacy-policy",
        },
        {
            label: "টার্মস এন্ড কন্ডিশনস",
            link: "/terms-and-conditions",
        },
    ];

    const values = { mainMenuItems, topMenuItems };
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

MainProvider.propTypes = {
    children: PropTypes.node,
};
export default MainProvider;
