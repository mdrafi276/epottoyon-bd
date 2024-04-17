/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { FaPhone } from "react-icons/fa";
import QRCode from "react-qr-code";

const PdfCertificate = ({
    certificate,
    unionName,
    upazillaName,
    districtName,
    sanadType,
}) => {
    return (
        <div className="bg-white md:pt-16 lg:pt-5">
            {" "}
            <div className=" md:w-[680px] w-[97%] lg:w-[900px] bg-[#F2EEEB]  mx-auto border-4  border-[#7030A0] lg:mt-2">
                <div className="flex justify-between md:w-[90%] lg:w-[90%] mx-auto mt-8  md:mt-5 lg:mt-8 items center ">
                    <figure>
                        <img
                            className=" w-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] "
                            src="https://i.ibb.co/xYGCHWW/1693790199blog-removebg-preview.png"
                            alt=""
                        />
                    </figure>
                    <div>
                        <h1 className="text-[12px] text-center lg:text-[22px] md:text-[16px] text-[#A85BB4]"></h1>
                        <h1 className="text-[13px] text-center lg:text-[20px] md:text-[15px] text-[#A85BB4]">
                            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                        </h1>
                        <h1 className="text-[14px] text-center font-semibold lg:text-[28px] md:text-[19px] text-[#7030A0]">
                            {(!!certificate?.word_no || !!certificate?.mrword) &&
                                `${certificate?.word_no || certificate?.mrword} নং `}
                            {certificate?.language === "en" || !!certificate?.language
                                ? unionName?.name
                                : unionName?.bn_name}{" "}
                            ইউনিয়ন পরিষদ
                        </h1>

                        <h1 className="text-[14px] text-center text-black md:text-[15px] lg:text-[18px]">
                            উপজেলা :{" "}
                            {certificate?.language === "en" || !!certificate?.language
                                ? upazillaName?.name
                                : upazillaName?.bn_name}
                            , জেলা :{" "}
                            {certificate?.language === "en" || !!certificate?.language
                                ? districtName?.name
                                : districtName?.bn_name}
                            ।
                        </h1>
                        <h1 className="text-[12px] text-center font-semibold text-[#3cd1d3] md:text-[14px] lg:text-[18px]">
                            চেয়ারম্যান: মোঃ আবু বকর সিদ্দিক,
                        </h1>
                        <h1 className="text-[12px] text-center text-black md:text-[13px] lg:text-[16px]">
                            <span className="flex justify-center items-center gap-2">
                                {" "}
                                chairman@gmail.com,{" "}
                                <span className="lg:ml-2">
                                    <FaPhone />
                                </span>{" "}
                                <span>+880 1880384564</span>
                            </span>
                        </h1>
                    </div>
                    <figure>
                        <img
                            className=" w-[70px] md:w-[100px] md:h-[100px]  lg:w-[100px] lg:h-[100px] "
                            src="https://www.udcbd.net/setting/application/application-logo/1711611596union102.jpg"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="lg:w-[90%] md:w-[90%] w-[85%] mx-auto">
                    <h1 className="md:border border border-b border-black"></h1>
                    <h1 className="md:border border border-b mt-[3px] border-black"></h1>
                </div>
                <div className=" bg-opa lg:pb-16 md:pb-14 lg:pt-5 lg:mt-1 md:mt-1   bg-center  bg-no-repeat">
                    {" "}
                    <div className="flex lg:w-[90%] md:w-[90%] w-[85%] mx-auto  items-start justify-between   ">
                        <div>
                            <h1 className="text-[12px] lg:text-[18px] md:text-[15px] text-center ">
                                স্মারক নং - 0037
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-[12px] lg:mt-8 md:mt-8 md:text-[20px] lg:text-[26px] bg-[#B4D5FF] rounded-t-full rounded-b-full rounded-s-full rounded-r-full md:py-4  md:px-[30px] lg:px-[68px] text-black font-normal text-center ">
                                উত্তরাধিকার সনদপত্র
                            </h1>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <h1 className="text-[12px] md:text-[15px] lg:text-[18px] text-center ">
                                তারিখঃ 28/03/2024
                            </h1>
                            <figure>
                                <img
                                    className=" w-[70px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] "
                                    src="https://i.ibb.co/xYGCHWW/1693790199blog-removebg-preview.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto md:mt-4 lg:mt-8  ">
                            {" "}
                            <h1 className="text-[12px] text-justify lg:mt-3 md:leading-7 lg:leading-8 md:text-[14px] lg:text-[17px]  ">
                                এই মর্মে আর্থিক ভূমিহীন সনদ প্রদান করা যাইতেছে যে,{" "}
                                <span>মোঃ খোকন মিয়া </span>জাতীয় পরিচয়পত্র / জন্ম সনদ নং:
                                <span>২৮৩৫৭১৪১৫১</span> পিতা/স্বামীঃ{" "}
                                <span> সামচুল হক মালংগি</span>, মাতাঃ{" "}
                                <span>আমেনা বেগম</span>, গ্রামঃ
                                <span>উকুমালী সরদার কান্দি</span>, ওয়ার্ডঃ <span>০৯</span>
                                , ডাকঘরঃ<span>পালেরচর হাট-৮০১০</span>, ইউনিয়নেঃ{" "}
                                <span>পালেরচর</span>, উপজেলাঃ <span>জাজিরা</span>, জেলাঃ
                                <span> শরীয়তপুর</span> তিনি আমার ইউনিয়নের <span>০৯ </span>
                                নং ওয়ার্ডের একজন স্থায়ী বাসিন্দা। আমি তাকে ব্যক্তি গত ভাবে
                                চিনি ও জানি। সে সমাজ বা রাষ্ট্র বিরোধী কোন প্রকার কাজের
                                সহিত জড়িত নাই। সে অত্র ইউনিয়নের একজন স্থায়ী বাসিন্দা ও
                                নাগরিক। আমার জানা মতে সে একজন ভূমিহীন।
                            </h1>
                            <h1 className="text-[12px] md:mt-2 lg:mt-3 lg:leading-9 md:text-[16px] lg:text-[21px]">
                                আমি তার জীবনের সার্বিক উন্নতি অ মঙ্গল কামনা করি ।{" "}
                            </h1>
                        </div>
                    </div>
                    {/* table  */}
                    <div className="overflow-x-auto md:w-[90%] lg:mt-3 md:mt-3 w-full lg:w-[90%] mx-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className=" text-[10px]  md:text-[16px] lg:px-4 py-2">
                                        ক্রমিক
                                    </th>
                                    <th className=" text-[10px]  md:text-[16px] lg:px-4 py-2">
                                        hello
                                    </th>
                                    <th className=" text-[10px]  md:text-[16px] lg:px-4 py-2">
                                        hello
                                    </th>
                                    <th className=" text-[10px]  md:text-[16px] lg:px-4 py-2">
                                        hello
                                    </th>

                                    <th className="text-[10px] md:text-[16px]  px-3 md:px-4 py-2">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100 text-gray-700">
                                <tr>
                                    <td className="md:px-4 py-2 border border-gray-600">
                                        <input
                                            type="text"
                                            className="w-full bg-transparent focus:outline-none text-center"
                                        />
                                    </td>

                                    <td className="  md:px-4 py-2 border border-black">
                                        <Button color="red">Remove</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between w-full md:w-[90%] lg:w-[90%] mx-auto  items-center  ">
                    <div className="lg:w-[120px] md:w-[100px] border-gray-400 flex rounded-full justify-center items-center md:h-[100px] lg:h-[120px] border-2">
                        {" "}
                        <h1 className="text-[12px] lg:text-[15px]  text-gray-400 text-center">
                            কার্যালয়ের সীল
                        </h1>
                    </div>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        প্রস্তুত কারীর সীল ও স্বাক্ষর
                    </h1>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        ইউপি সদস্যর সীল ও স্বাক্ষর
                    </h1>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        অনুমোদন কারীর সীল ও স্বাক্ষর
                    </h1>
                </div>
                <div className=" flex justify-between mx-auto w-full lg:w-[90%] md:w-[80%] items-center lg:mt-5 lg:mb-14 md:mb-10 md:mt-4">
                    <QRCode
                        size={90}
                        bgColor="white"
                        fgColor="black"
                        value="https://www.udcbd.net/"
                    />
                    <div>
                        <h1 className="text-[12px] lg:text-[16px] text-center">
                            সনদটি যাচাই করতে আপনার মোবাইলে থাকা QR CODE অ্যাপ দিয়ে
                            স্ক্যান করুন
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfCertificate;
