import { useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import ReactToPrint from "react-to-print";

import { useReactToPrint } from "react-to-print";
import PdfCertificate from "../PdfCertificate/PdfCertificate";

const CertificateDetails = () => {
    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });
    return (
        <div className=" bg-[#F4F6F9] min-h-screen ">
            <div className="w-[99%] mx-auto  lg:py-8  ">
                <div className="flex justify-end gap-5 lg:px-5  items-center rounded-t-md  bg-white border-b border-gray-300 lg:py-5  ">
                    <div>
                        <h1 className="lg:py-2 lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[15px] rounded-md bg-[#28A745] text-white">
                            Status: approved
                        </h1>
                    </div>
                    <div className="">
                        <button className="lg:py-2 lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[15px] rounded-md text-[#DC3545]  hover:bg-[#DC3545] border border-[#DC3545] hover:text-white ">
                            reject
                        </button>
                    </div>
                </div>
                {/* <div className="bg-white rounded-b-md">
                    <div className="flex flex-col lg:pt-5  lg:pb-5  justify-center mx-auto  lg:w-[98%] lg:flex-row gap-5 ">
                        <div className="lg:w-[400px] border border-gray-300">
                            <h1 className="text-black border-b border-gray-300  dark:text-white lg:py-4 text-center  lg:text-[21px]">
                                মৃত জুলহাস মিয়া
                            </h1>
                            <div className="flex lg:mt-4 justify-around border-b-white border border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[100px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-start border-gray-300  lg:py-5 lg:text-[15px]">
                                        NID/Birth Certificate{" "}
                                    </h1>
                                </div>
                                <div>
                                    {" "}
                                    <h1 className="text-black text-center   lg:text-[15px]">
                                        ১৯৫৭৮৩৯১৩৫
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-around border border-b-white border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[100px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-start border-gray-300  lg:py-5 lg:text-[15px]">
                                        সনদ
                                    </h1>
                                </div>
                                <div>
                                    {" "}
                                    <h1 className="text-red-500 text-center   lg:text-[15px]">
                                        উত্তরাধিকার সনদ
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-around border border-gray-300  items-center border-b-white  w-[97%] mx-auto  ">
                                <div className="lg:w-[100px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-start border-gray-300  lg:py-5 lg:text-[15px]">
                                        আবেদনের তারিখ
                                    </h1>
                                </div>
                                <div>
                                    {" "}
                                    <h1 className="text-black text-center   lg:text-[15px]">
                                        ২৮-০৩-২০২৪
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-around border border-gray-300  items-center w-[97%] mx-auto  ">
                                <div className="lg:w-[100px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-start border-gray-300  lg:py-5 lg:text-[15px]">
                                        ট্র্যাকিং নাম্বার
                                    </h1>
                                </div>
                                <div>
                                    {" "}
                                    <h1 className="text-black text-center   lg:text-[15px]">
                                        220003723040
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[600px] border border-gray-300">
                            <div className="  border-b  ">
                                {" "}
                                <h1 className="text-black  lg:py-2 lg:mt-6 rounded-t-md  lg:text-[15px] border border-gray-300 lg:mx-5 border-b-white  text-center before: lg:w-[200px] hover:cursor-pointer">
                                    পেমেন্ট ইনফর্মেশন
                                </h1>
                            </div>
                            <div className="flex justify-between lg:mt-4 border-b-white border border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[400px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-center border-gray-300  lg:py-5 lg:text-[15px]">
                                        পেমেন্টের ধরন
                                    </h1>
                                </div>
                                <div className="">
                                    {" "}
                                    <h1 className="text-black text-start lg:pr-20  lg:text-[15px]">
                                        N/A
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-between  border-b-white border border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[400px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-center border-gray-300  lg:py-5 lg:text-[15px]">
                                        মোবাইল নম্বর{" "}
                                    </h1>
                                </div>
                                <div className="">
                                    {" "}
                                    <h1 className="text-black text-start lg:pr-20  lg:text-[15px]">
                                        N/A
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-between  border-b-white border border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[400px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-center border-gray-300  lg:py-5 lg:text-[15px]">
                                        ট্রানজেকশন নম্বর{" "}
                                    </h1>
                                </div>
                                <div className="">
                                    {" "}
                                    <h1 className="text-black text-start lg:pr-20  lg:text-[15px]">
                                        N/A
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-between border-b  border border-gray-300  items-center  w-[97%] mx-auto  ">
                                <div className="lg:w-[400px]">
                                    {" "}
                                    <h1 className="text-black  border-r text-center border-gray-300  lg:py-5 lg:text-[15px]">
                                        এমাউন্ট{" "}
                                    </h1>
                                </div>
                                <div className="">
                                    {" "}
                                    <h1 className="text-black text-start lg:pr-20  lg:text-[15px]">
                                        N/A
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="w-full flex justify-center items-center mt-5">
                    <button
                        onClick={handlePrint}
                        className="lg:py-2 items-center gap-2 flex lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[16px] rounded-md bg-[#0069D9] text-white"
                    >
                        প্রিন্ট সার্টিফিকেট <FaDownload className="mb-1 text-xl" />
                    </button>
                </div>
                <div ref={printRef} className="lg:mt-5 ">
                    <div>
                        <PdfCertificate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateDetails;
