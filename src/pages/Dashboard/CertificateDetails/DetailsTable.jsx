/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { convertToBengaliNumber } from "../../../utils/utils";

const DetailsTable = ({ certificate, unionName, sanadType }) => {
    const Row = ({ bnKey, enKey, value }) => {
        return (
            <tr className="even:bg-blue-gray-50/50 bg-white">
                <td className="py-4 px-12">
                    <Typography variant="small" color="blue-gray">
                        {certificate?.language === "en" ? enKey : bnKey}
                    </Typography>
                </td>

                <td className="py-4 px-12">
                    <Typography variant="small" color="blue-gray">
                        {value || "N/A"}
                    </Typography>
                </td>
            </tr>
        );
    };

    return (
        <div className="rounded-lg shadow-lg max-w-[800px] border-4 border-cyan-600 mx-auto mt-20">
            <table className="w-full">
                <tbody>
                    <Row
                        className="text-center "
                        bnKey="সনদের ধরণ            ঃ "
                        enKey="Certificate Type"
                        value={
                            certificate?.language === "en"
                                ? sanadType?.eng_description
                                : sanadType?.description
                        }
                    />
                    <Row
                        className="text-center"
                        bnKey="নাম "
                        enKey="Name"
                        value={certificate?.applicant}
                    />
                    <Row
                        bnKey={certificate?.husband ? "স্বামী" : "পিতা"}
                        enKey={certificate?.husband ? "Husband" : "Father"}
                        value={certificate?.father_husband_name || certificate?.husband}
                    />
                    <Row
                        className="text-center"
                        bnKey="মাতার নাম"
                        enKey="Mother's name"
                        value={certificate?.mother_name}
                    />
                    <Row
                        className="text-center"
                        bnKey="ঠিকানা"
                        enKey="Address"
                        value={certificate?.village_name || certificate?.mrgram}
                    />
                    <Row
                        className="text-center"
                        bnKey="ইউনিয়ন"
                        enKey="Union"
                        value={
                            certificate?.language === "en"
                                ? unionName?.name
                                : unionName?.bn_name
                        }
                    />
                    <Row
                        bnKey="ওয়ার্ড নম্বর"
                        enKey="Ward Number"
                        value={certificate?.ward_no || certificate?.mrword}
                    />
                    <Row
                        bnKey={
                            certificate?.nid ? "জাতীয় পরিচয়পত্র নম্বর" : "জন্ম সনদ নম্বর "
                        }
                        enKey={
                            certificate?.nid
                                ? "National Nid Number"
                                : "Birth Certificate Number"
                        }
                        value={certificate?.nid_birth || certificate?.nid}
                    />
                    <Row
                        bnKey="ট্রাককিং নম্বর"
                        enKey="Tracking Number"
                        value={
                            certificate?.language === "en"
                                ? certificate?.id
                                : convertToBengaliNumber(certificate?.id)
                        }
                    />
                    <Row
                        bnKey="আবেদনের তারিখ"
                        enKey="Applied Date"
                        value={certificate?.date}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default DetailsTable;
