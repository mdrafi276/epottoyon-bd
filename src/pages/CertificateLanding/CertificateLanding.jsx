/* eslint-disable react/prop-types */
import { Spinner, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
    getCertificateById,
    getCertificateTypeById,
    getUnionNameById,
} from "../../api/certificates";
import { convertToBengaliNumber } from "../../utils/utils";

const CertificateLanding = () => {
    const { id } = useParams();

    const {
        data: certificate,
        isLoading,
        isError,
        refetch,
        error,
    } = useQuery({
        queryKey: ["application", id],
        queryFn: async () => await getCertificateById(id),
    });

    const { data: unionName } = useQuery({
        queryKey: ["unionName", certificate],
        queryFn: async () => getUnionNameById(certificate?.id),
    });

    const { data: sanadType } = useQuery({
        queryKey: ["sanad_type", certificate],
        queryFn: async () => await getCertificateTypeById(certificate?.sanad_id),
    });

    const Row = ({ bnKey, enKey, value }) => {
        return (
            <tr className="even:bg-blue-gray-50/50 bg-white">
                <td className="py-4 px-4 sm:px-12">
                    <Typography variant="small" color="blue-gray">
                        {certificate?.language === "en" ? enKey : bnKey}
                    </Typography>
                </td>

                <td className="py-4 px-4 sm:px-12">
                    <Typography variant="small" color="blue-gray">
                        {value || "N/A"}
                    </Typography>
                </td>
            </tr>
        );
    };

    return isLoading ? (
        <Spinner color="green" className="mx-auto h-16 w-16 my-5" />
    ) : isError ? (
        <>
            {console.error(error)}
            <p className="text-center">
                {error.message}
                {". "}
                <span
                    onClick={refetch}
                    className="text-blue-500 hover:underline cursor-pointer"
                >
                    Try Again
                </span>
            </p>
        </>
    ) : (
        <div className="rounded-lg shadow-lg max-w-screen-lg w-11/12 mx-auto my-4">
            <table className="w-full">
                <tbody>
                    <Row
                        bnKey="সনদের ধরণ"
                        enKey="Certificate Type"
                        value={sanadType?.description}
                    />
                    <Row bnKey="নাম" enKey="Name" value={certificate?.applicant} />
                    <Row
                        bnKey={certificate?.husband ? "স্বামী" : "পিতা"}
                        enKey={certificate?.husband ? "Husband" : "Father"}
                        value={certificate?.father_husband_name || certificate?.husband}
                    />
                    <Row
                        bnKey="মাতার নাম"
                        enKey="Mother's name"
                        value={certificate?.mother_name}
                    />
                    <Row
                        bnKey="ঠিকানা"
                        enKey="Address"
                        value={certificate?.village_name || certificate?.mrgram}
                    />
                    <Row
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

export default CertificateLanding;
