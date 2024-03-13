import { useQuery } from "@tanstack/react-query";
import { getAllCertificates } from "../../../api/certificates";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, Spinner } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ApplyForCertificate = () => {
    const [searchInputValue, setSearchInputValue] = useState("");

    const {
        data: certificates,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["certificate"],
        queryFn: getAllCertificates,
    });

    return (
        <div className="p-8 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <h2 className="text-3xl font-bold">সনদ বেছে নিন</h2>
                <span className="w-60">
                    <Input
                        icon={<FaMagnifyingGlass />}
                        label="সেবাসমুহ সার্চ করুন"
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                </span>
            </div>

            {isLoading ? (
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
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {certificates
                        ?.filter((certificate) =>
                            certificate.description
                                .toLowerCase()
                                .includes(searchInputValue.toLowerCase())
                        )
                        ?.map((certificate) => (
                            <Link
                                to={`/dashboard/apply-for-certificate/${certificate?.description}`}
                                className="text-center cursor-pointer shadow-md bg-[#2b5b2e] text-white hover:text-black hover:shadow-lg hover:bg-yellow-50 transition-all rounded h-40 flex flex-col gap-2 items-center justify-center"
                                key={certificate.id}
                            >
                                <img
                                    className="w-20 mx-auto rounded-full"
                                    src={`https://www.udcbd.net/setting/banner/${certificate.image}`}
                                    alt={certificate.description}
                                />
                                <p className="font-bold">{certificate.description}</p>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ApplyForCertificate;
