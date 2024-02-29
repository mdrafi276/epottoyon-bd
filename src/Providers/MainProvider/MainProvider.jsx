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
            link: "/",
        },
        {
            label: "আবেদনের অবস্থা জানুন",
            link: "/",
        },
        {
            label: "সনদ যাচাইকরণ",
            link: "/",
        },
        {
            label: "ফর্মস",
            link: "/",
        },
        {
            label: "ব্যবহার নির্দেশিকা",
            link: "/",
        },
        {
            label: "সচরাচর জিজ্ঞাসা",
            link: "/",
        },
        {
            label: "ডিজিটাল বাংলাদেশ",
            link: "/",
        },
    ];

    const values = { mainMenuItems };
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

MainProvider.propTypes = {
    children: PropTypes.node,
};
export default MainProvider;
