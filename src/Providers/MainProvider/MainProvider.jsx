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

    const importantLinks = [
        {
            id: 1,
            label: "প্রধানমন্ত্রী কার্যালয়",
            link: "#",
        },
        {
            id: 2,
            label: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
            link: "#",
        },
        {
            id: 3,
            label: "মন্ত্রিপরিষদ বিভাগ",
            link: "#",
        },
        {
            id: 17,
            label: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
            link: "#",
        },
        {
            id: 4,
            label: "শিক্ষা মন্ত্রণালয়",
            link: "#",
        },
        {
            id: 5,
            label: "তথ্য মন্ত্রণালয়",
            link: "#",
        },
        {
            id: 6,
            label: "সমাজকল্যাণ মন্ত্রণালয়",
            link: "#",
        },
        {
            id: 7,
            label: "বাংলাদেশ ফরম",
            link: "#",
        },
        {
            id: 8,
            label: "বাংলাদেশ সংসদ",
            link: "#",
        },
        {
            id: 9,
            label: "অলিভিন লিমিটেড",
            link: "#",
        },
        {
            id: 10,
            label: "ই-নামজারি সিস্টেমে উত্তরাধিকার সনদ",
            link: "#",
        },
        {
            id: 11,
            label: "জন্ম নিবন্ধন তথ্য যাচাই",
            link: "#",
        },
        {
            id: 12,
            label: "জাতীয় পরিচয় পত্রের তথ্য যাচাই ",
            link: "#",
        },
    ];

    const values = { mainMenuItems, topMenuItems, importantLinks };
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

MainProvider.propTypes = {
    children: PropTypes.node,
};
export default MainProvider;
