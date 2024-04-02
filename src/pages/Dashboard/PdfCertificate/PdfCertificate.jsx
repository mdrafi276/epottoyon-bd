import { useRef } from "react";
import QRCode from "react-qr-code";

const PdfCertificate = () => {
    const qrRef = useRef();
    return (
        <div className="bg-white lg:pt-5">
            {" "}
            <div className=" md:w-[700px] w-[97%] lg:w-[800px] bg-[#F2EEEB]  mx-auto border-4  border-[#7030A0] lg:mt-5">
                <div className="flex justify-around mt-8 md:mt-10 lg:mt-14 items center ">
                    <figure>
                        <img
                            className=" w-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] "
                            src="https://i.ibb.co/xYGCHWW/1693790199blog-removebg-preview.png"
                            alt=""
                        />
                    </figure>
                    <div>
                        <h1 className="text-[12px] text-center lg:text-[22px] md:text-[16px] text-[#A85BB4]">
                            786
                        </h1>
                        <h1 className="text-[13px] text-center lg:text-[20px] md:text-[20px] text-[#A85BB4]">
                            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                        </h1>
                        <h1 className="text-[14px] text-center lg:text-[30px] md:text-[26px] text-[#7030A0]">
                            ১নং নং কিশোরগাড়ী ইউনিয়ন পরিষদ
                        </h1>
                        <h1 className="text-[12px] text-center text-black md:text-[18px] lg:text-[18px]">
                            চেয়ারম্যানের নাম: মোঃ আবু বকর সিদ্দিক,
                        </h1>
                        <h1 className="text-[14px] text-center text-black md:text-[21px] lg:text-[22px]">
                            উপজেলা : পলাশবাড়ী, জেলা : গাইবান্ধা।
                        </h1>
                    </div>
                    <figure>
                        <img
                            className=" w-[70px] md:w-[100px] md:h-[100px]  lg:w-[130px] lg:h-[130px] "
                            src="https://www.udcbd.net/setting/application/application-logo/1711611596union102.jpg"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="lg:w-[90%] w-[85%] mx-auto">
                    <h1 className="md:border border border-b border-black"></h1>
                    <h1 className="md:border border border-b mt-[3px] border-black"></h1>
                </div>
                <div className="lg:pb-16 lg:pt-5 lg:mt-10 bg-opacity-[2000px]  bg-contain bg-center bg-[url('https://i.ibb.co/pLSQ92Y/1693790199blog.jpg')] bg-no-repeat">
                    {" "}
                    <div className="flex lg:w-[94%] w-[85%] mx-auto justify-around   ">
                        <div>
                            <h1 className="text-[12px] lg:text-[18px] text-center ">
                                স্মারক নং - 0037
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-[12px] lg:text-[26px] bg-[#B4D5FF] rounded-full py-1 lg:px-16 text-center ">
                                উত্তরাধিকার সনদপত্র
                            </h1>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <h1 className="text-[12px] lg:text-[18px] text-center ">
                                তারিখঃ 28/03/2024
                            </h1>
                            <figure>
                                <img
                                    className=" w-[70px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] "
                                    src="https://i.ibb.co/xYGCHWW/1693790199blog-removebg-preview.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto  lg:mt-8  ">
                            {" "}
                            <h1 className="text-[12px] lg:mt-3 lg:leading-9 lg:text-[19px]  ">
                                এই মর্মে আর্থিক ভূমিহীন সনদ প্রদান করা যাইতেছে যে, মোঃ
                                খোকন মিয়া জাতীয় পরিচয়পত্র / জন্ম সনদ নং: ২৮৩৫৭১৪১৫১
                                পিতা/স্বামীঃ সামচুল হক মালংগি, গ্রামঃউকুমালী সরদার কান্দি,
                                ওয়ার্ডঃ ০৯, ডাকঘরঃপালেরচর হাট-৮০১০, ইউনিয়নেঃ পালেরচর,
                                উপজেলাঃ জাজিরা, জেলাঃ শরীয়তপুর তিনি আমার ইউনিয়নের ০৯ নং
                                ওয়ার্ডের একজন স্থায়ী বাসিন্দা। আমি তাকে ব্যক্তি গত ভাবে
                                চিনি ও জানি। সে সমাজ বা রাষ্ট্র বিরোধী কোন প্রকার কাজের
                                সহিত জড়িত নাই। সে অত্র ইউনিয়নের একজন স্থায়ী বাসিন্দা ও
                                নাগরিক। আমার জানা মতে সে একজন ভূমিহীন।
                            </h1>
                            <h1 className="text-[12px] lg:mt-3 lg:leading-9 lg:text-[21px]">
                                আমি তার জীবনের সার্বিক উন্নতি অ মঙ্গল কামনা করি ।{" "}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around items-center  ">
                    <div className="lg:w-[120px] border-gray-300 flex rounded-full justify-center items-center lg:h-[120px] border-2">
                        {" "}
                        <h1 className="text-[12px] lg:text-[15px]  text-center">
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
                <div className=" flex justify-around items-center lg:mt-5 lg:mb-14">
                    <QRCode
                        size={110}
                        bgColor="white"
                        fgColor="black"
                        value="https://www.npmjs.com/package/react-qr-barcode-scanner"
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
