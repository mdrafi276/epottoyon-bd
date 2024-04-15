import { useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";
import PdfCertificate from "../PdfCertificate/PdfCertificate";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCertificateById } from "../../../api/certificates";
import { Spinner, Typography } from "@material-tailwind/react";
import DetailsTable from "./DetailsTable";

const CertificateDetails = () => {
    const { id } = useParams();
    const printRef = useRef();

    const dynamicContents = [
        "word-number",
        "union-name",
        "union-logo",
        "upazilla",
        "zilla",
        "chairman-name",
        "id",
        "sanad-type",
        "date",
        "applicant",
        "identity",
        "guardian",
        "post-office",
    ];

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

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

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

                <div className="w-full flex justify-center items-center mt-5">
                    <button
                        onClick={handlePrint}
                        className="lg:py-2 items-center gap-2 flex lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[16px] rounded-md bg-[#0069D9] text-white"
                    >
                        প্রিন্ট সার্টিফিকেট <FaDownload className="mb-1 text-xl" />
                    </button>
                </div>

                <DetailsTable certificate={certificate} />
                <div ref={printRef} className="lg:mt-5">
                    <div>
                        <PdfCertificate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateDetails;
