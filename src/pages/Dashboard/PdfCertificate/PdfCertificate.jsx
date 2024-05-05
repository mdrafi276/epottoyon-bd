/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { FaPhone } from "react-icons/fa";
import QRCode from "react-qr-code";
import { getOarishesDetails, getUnionInfoForPdf } from "../../../api/certificates";
import { convertToBengaliNumber } from "../../../utils/utils";

const PdfCertificate = (props) => {
    const { certificate, unionName, upazillaName, districtName, sanadType } = props;

    const { data: unionInfo } = useQuery({
        queryKey: ["unionInfo", unionName],
        queryFn: async () => await getUnionInfoForPdf(unionName?.id),
    });

    const { data: oarishes } = useQuery({
        queryKey: ["oarishes", certificate],
        queryFn: async () => await getOarishesDetails(certificate?.id),
    });

    const serial = oarishes?.no?.split(",");
    const names = oarishes?.o_name?.split(",");
    const relations = oarishes?.o_relation?.split(",");
    const ids = oarishes?.rnid?.split(",");
    const birthdays = oarishes?.rbirth?.split(",");
    const comments = oarishes?.rcom?.split(",");

    //TODO: configure the english vertion of the sanadType

    return (
        <div className="bg-white md:pt-16 lg:pt-5">
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
                            {certificate?.language === "en"
                                ? "Government of the People's Republic of Bangladesh"
                                : "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার"}
                        </h1>

                        <h1 className="text-[14px] text-center font-semibold lg:text-[28px] md:text-[19px] text-[#7030A0]">
                            {certificate?.language === "en"
                                ? `Union Parishad No. ${
                                      (!!certificate?.word_no || !!certificate?.mrword) &&
                                      `${certificate?.word_no || certificate?.mrword} নং `
                                  },  ${
                                      certificate?.language === "en"
                                          ? unionName?.name
                                          : unionName?.bn_name
                                  } `
                                : `${
                                      (!!certificate?.word_no || !!certificate?.mrword) &&
                                      `${certificate?.word_no || certificate?.mrword} নং `
                                  }
                            ${
                                certificate?.language === "en"
                                    ? unionName?.name
                                    : unionName?.bn_name
                            } 
                            ইউনিয়ন পরিষদ`}
                        </h1>

                        <h1 className="text-[14px] text-center text-black md:text-[15px] lg:text-[18px]">
                            উপজেলা :{" "}
                            {certificate?.language === "en"
                                ? upazillaName?.name
                                : upazillaName?.bn_name}
                            , জেলা :{" "}
                            {certificate?.language === "en"
                                ? districtName?.name
                                : districtName?.bn_name}
                            ।
                        </h1>
                        <h1 className="text-[12px] text-center font-semibold text-[#3cd1d3] md:text-[14px] lg:text-[18px]">
                            {/*TODO: if the union doesn't have a row in unionInfo then it'll take a input about it. */}
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
                            className="w-[70px] md:w-[100px] md:h-[100px]  lg:w-[100px] lg:h-[100px]"
                            src="https://www.udcbd.net/setting/application/application-logo/1711611596union102.jpg"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="lg:w-[90%] md:w-[90%] w-[85%] mx-auto">
                    <h1 className="md:border border border-b border-black"></h1>
                    <h1 className="md:border border border-b mt-[3px] border-black"></h1>
                </div>
                <div className="bg-opa lg:pb-16 md:pb-2 lg:pt-5 lg:mt-1 md:mt-1   bg-center  bg-no-repeat">
                    {" "}
                    <div className="flex lg:w-[90%] md:w-[90%] w-[85%] mx-auto  items-start justify-between   ">
                        <div>
                            <h1 className="text-[12px] lg:text-[18px] md:text-[15px] text-center ">
                                {`  
                                ${
                                    certificate?.language === "en"
                                        ? "Tracking Number: "
                                        : "স্মারক নং: "
                                }
                               ${
                                   certificate?.language === "en"
                                       ? certificate?.id
                                       : convertToBengaliNumber(certificate?.id)
                               }`}
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-[12px] lg:mt-8 md:mt-6 md:text-[19px] lg:text-[26px] bg-[#B4D5FF] rounded-t-full rounded-b-full rounded-s-full rounded-r-full md:py-3  md:px-[30px] lg:px-[68px] text-black font-normal text-center">
                                {certificate?.language === "en"
                                    ? sanadType?.eng_description
                                    : sanadType?.description}
                            </h1>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <h1 className="text-[12px] md:text-[15px] lg:text-[18px] text-center">
                                {certificate?.language === "en" ? "Date:" : "তারিখ:"}{" "}
                                {certificate?.date || certificate?.form_date}
                            </h1>
                            <figure>
                                <img
                                    className="w-[70px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] "
                                    src="https://i.ibb.co/xYGCHWW/1693790199blog-removebg-preview.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="w-[90%] mx-auto md:mt-4 lg:mt-8  ">
                            <h1 className="text-[12px] text-justify lg:mt-3 md:leading-7 lg:leading-8 md:text-[14px] lg:text-[17px] ">
                                {certificate?.language === "en"
                                    ? `In this regard, an ${
                                          sanadType?.eng_description
                                      } is being provided for ${
                                          certificate?.applicant
                                      }, ${
                                          certificate?.nid
                                              ? "National Id Card No:"
                                              : "Birth Certificate No: "
                                      }
                                    :${
                                        certificate?.nid_birth || certificate?.nid
                                    }${" "},  ${
                                          certificate?.husband ? "Husband:" : "Father:"
                                      }
                                    ${
                                        certificate?.father_husband_name ||
                                        certificate?.husband
                                    }, Village: ${
                                          certificate?.village_name || certificate?.mrgram
                                      }, Ward: ${
                                          certificate?.ward_no || certificate?.mrword
                                      }, Post Office: ${certificate?.mrdak}, Union:  ${
                                          unionName?.name
                                      }, Upazila: ${upazillaName?.name}, District:  ${
                                          districtName?.name
                                      }. They are+ a permanent resident in Ward No. ${
                                          certificate?.ward_no || certificate?.mrword
                                      } of my union. I know them personally. they are not involved in any anti-social or anti-state activities. They are a permanent resident and citizen of this union.`
                                    : ` এই মর্মে আর্থিক ${
                                          sanadType?.description
                                      } প্রদান করা
                                যাইতেছে যে, ${certificate?.applicant}${" "}
                                ${
                                    certificate?.nid
                                        ? "জাতীয় পরিচয়পত্র নম্বর"
                                        : "জন্ম সনদ নম্বর "
                                }
                                :${certificate?.nid_birth || certificate?.nid}${" "}
                                ${certificate?.husband ? "স্বামী" : "পিতা"}:
                                ${
                                    certificate?.father_husband_name ||
                                    certificate?.husband
                                }
                                , গ্রাম:${" "}
                                ${certificate?.village_name || certificate?.mrgram},
                                ওয়ার্ডঃ ${certificate?.ward_no || certificate?.mrword},
                                ডাকঘর: ${certificate?.mrdak}, ইউনিয়ন:${" "}
                                ${unionName?.bn_name}
                                , উপজেলা: ${upazillaName?.bn_name}, জেলা:${" "}
                                ${districtName?.bn_name} তিনি আমার ইউনিয়নের${" "}
                                ${certificate?.ward_no || certificate?.mrword} নং ওয়ার্ডের
                                একজন স্থায়ী বাসিন্দা। আমি তাকে ব্যক্তি গত ভাবে চিনি ও
                                জানি। সে সমাজ বা রাষ্ট্র বিরোধী কোন প্রকার কাজের সহিত জড়িত
                                নাই। সে অত্র ইউনিয়নের একজন স্থায়ী বাসিন্দা ও নাগরিক।`}
                            </h1>
                            <h1 className="text-[12px] md:mt-2 lg:mt-3 lg:leading-9 md:text-[14px] lg:text-[21px]">
                                {certificate?.language === "en"
                                    ? " I wish them overall development and prosperity in life."
                                    : "আমি তার জীবনের সার্বিক উন্নতি ও মঙ্গল কামনা করি।"}
                            </h1>
                        </div>
                    </div>
                    {(sanadType?.id === 1 ||
                        sanadType?.id === 2 ||
                        sanadType?.id === 3) && (
                        <div className="overflow-x-auto md:w-[90%]  lg:mt-3 md:mt-3 w-full lg:w-[90%] mx-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-blue-500 text-white">
                                    <tr>
                                        <th className="text-[10px]  md:text-[14px] lg:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Serial"
                                                : "ক্রমিক"}
                                        </th>
                                        <th className="  text-[10px]  md:text-[14px] lg:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Name"
                                                : "নাম"}
                                        </th>
                                        <th className="  text-[10px]  md:text-[14px] lg:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Relation"
                                                : "সম্পর্ক"}
                                        </th>
                                        <th className="  text-[10px]  md:text-[14px] lg:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Voter/Birth Certificate Number"
                                                : "ভোটার/জম্ম নিবন্ধন"}
                                        </th>
                                        <th className="  text-[10px]  md:text-[14px] lg:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Birthday"
                                                : "জন্মতারিখ"}
                                        </th>
                                        <th className="text-[10px] md:text-[14px]  px-3 md:px-4 py-2">
                                            {certificate?.language === "en"
                                                ? "Comment"
                                                : "মন্তব্য"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent text-gray-900">
                                    {serial?.map((serial, index) => (
                                        <tr key={serial}>
                                            <td className="md:px-3 py-0 border  md:text-[14px] border-gray-600">
                                                {serial}
                                            </td>
                                            <td className=" md:px-4 py-0 border  md:text-[14px] border-black">
                                                {names[index]}
                                            </td>
                                            <td className="   md:px-4 py-0 border  md:text-[14px] border-black">
                                                {relations[index]}
                                            </td>
                                            <td className="  md:px-3 py-0 border  md:text-[14px] border-black">
                                                {ids[index]}
                                            </td>
                                            <td className="  md:px-4 py-0 border  md:text-[14px] border-black">
                                                {birthdays[index]}
                                            </td>
                                            <td className="   md:px-4 py-0 border  md:text-[14px] border-black">
                                                {comments[index]}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
                <div className="flex justify-between w-full md:w-[90%] lg:w-[90%] mx-auto  items-center  ">
                    <div className="lg:w-[120px] md:w-[90px] border-gray-400 flex rounded-full justify-center items-center md:h-[90px] lg:h-[120px] border-2">
                        <h1 className="text-[12px] lg:text-[15px] md:text-[10px]  text-gray-400 text-center">
                            {certificate?.language === "en"
                                ? "Office Seal"
                                : "কার্যালয়ের সীল"}
                        </h1>
                    </div>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        {certificate?.language === "en"
                            ? "Preparer's Signature"
                            : "প্রস্তুত কারীর সীল ও স্বাক্ষর"}
                    </h1>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        {certificate?.language === "en" ? "" : ""}
                    </h1>
                    <h1 className="text-[12px] lg:text-[15px] border-t-2 lg:pt-3 border-black  text-center">
                        {certificate?.language === "en"
                            ? "Approver's Signature"
                            : "অনুমোদন কারীর সীল ও স্বাক্ষর"}
                    </h1>
                </div>
                <div className="  flex justify-between mx-auto w-full lg:w-[90%] md:w-[80%] items-end lg:mt-5 lg:mb-10 md:mb-4 md:mt-2">
                    <QRCode
                        size={70}
                        bgColor="white"
                        fgColor="black"
                        value={`https://udcbd.web.app/landing/certificate-details/${certificate?.id}`}
                    />

                    <div>
                        <h1 className="text-[12px] lg:text-[16px] text-center">
                            {certificate?.language === "en"
                                ? "To verify the certificate, please scan the QR code provided."
                                : " সনদটি যাচাই করতে আপনার মোবাইলে থাকা QR CODE অ্যাপ দিয়ে স্ক্যান করুন"}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfCertificate;
