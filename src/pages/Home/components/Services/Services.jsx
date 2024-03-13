import { Input, Spinner } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getAllCertificates } from "../../../../api/certificates";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Services = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const { user } = useContext(AuthContext);

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
        <div className="w-full lg:w-2/3 flex-col border-2 border-black lg:flex-row shadow-xl">
            <div className="flex justify-center md:flex-row flex-col gap-5 md:gap-9 items-center py-3">
                <h3 className="text-[#8e53a2] text-3xl  md:text-2xl font-bold">
                    সনদের সেবাসমুহ
                </h3>
                <div className="w-64">
                    <Input
                        icon={<FaMagnifyingGlass />}
                        label="সেবাসমুহ সার্চ করুন"
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                </div>
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
                <div className="h-96 overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    {certificates
                        ?.filter((certificate) =>
                            certificate.description
                                .toLowerCase()
                                .includes(searchInputValue.toLowerCase())
                        )
                        ?.map((certificate) => (
                            <Link
                                to={
                                    user && user.emailVerified
                                        ? "/dashboard/apply-for-certificate"
                                        : "register"
                                }
                                className="text-center cursor-pointer shadow-md bg-[#2b5b2e] text-white hover:text-black hover:shadow-lg hover:bg-gray-100 transition-all rounded h-40 flex flex-col gap-2 items-center justify-center"
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

export default Services;
