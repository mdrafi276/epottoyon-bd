import {
    Input,
    Select,
    Typography,
    Spinner,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { getAllApplications } from "../../../api/certificates";
import { useState } from "react";

const AllCertificate = () => {
    const [activePage, setActivePage] = useState(1);

    const TABLE_HEAD = [
        "Applicant",
        "Union",
        "Sanad Type",
        "Sanad Tracking No.",
        "Status",
        "Actions",
    ];

    const {
        data: applications,
        isLoading,
        refetch,
        isError,
        error,
    } = useQuery({
        queryFn: async () => await getAllApplications(activePage),
        queryKey: ["application", activePage],
    });

    const getItemProps = (index) => ({
        variant: activePage === index ? "filled" : "text",
        color: activePage === index ? "amber" : "gray",
        onClick: () => setActivePage(index),
    });

    const next = () => {
        if (activePage === applications?.totalPages) return;
        setActivePage(activePage + 1);
    };

    const prev = () => {
        if (activePage === 1) return;
        setActivePage(activePage - 1);
    };

    const MAX_PAGE_BUTTONS = 7;
    const renderPaginationButtons = () => {
        const totalPages = applications?.totalPages || 0;
        let startPage = Math.max(1, activePage - Math.floor(MAX_PAGE_BUTTONS / 2));
        let endPage = Math.min(totalPages, startPage + MAX_PAGE_BUTTONS - 1);

        // Adjust the start page if we're at the end of the page range
        if (endPage - startPage + 1 < MAX_PAGE_BUTTONS) {
            startPage = Math.max(1, endPage - MAX_PAGE_BUTTONS + 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <IconButton key={i} {...getItemProps(i)}>
                    {i}
                </IconButton>
            );
        }

        return (
            <>
                {startPage > 1 && (
                    <>
                        <IconButton {...getItemProps(1)}>1</IconButton>
                        {startPage > 2 && <span>...</span>}
                    </>
                )}
                {pages}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span>...</span>}
                        <IconButton {...getItemProps(totalPages)}>
                            {totalPages}
                        </IconButton>
                    </>
                )}
            </>
        );
    };

    return (
        <section className="bg-[#F4F6F9] lg:pt-5">
            <div className="bg-white pl-2 lg:pl-2 min-h-screen mx-auto pb-20">
                <div className="flex  md:py-4 py-3 lg:py-4 justify-start items-center gap-4 lg:gap-5">
                    <h1 className="text-black md:text-[21px] lg:text-4xl font-bold ">
                        Applications for Sanad
                    </h1>
                    <button className="lg:py-2 lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[15px] rounded-md bg-blue-900 text-white ">
                        Refresh
                    </button>
                </div>
                <h1 className="border-b border-gray-600 w-[98%] mx-auto"></h1>
                <div>
                    <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5 flex-wrap justify-center items-center sm:gap-3 ">
                        <div className="w-full sm:w-fit lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">Tracking Number</h1>
                            <Input
                                name=""
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>
                        <div className="w-full sm:w-fit lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">Start Date</h1>
                            <Input
                                type="date"
                                name="eng_village"
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>{" "}
                        <div className="w-full sm:w-fit lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">End Date</h1>
                            <Input
                                type="date"
                                name="eng_word"
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>
                        <div className="w-full sm:w-fit lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black ">Status</h1>
                            <Select className="cursor-pointer bg-[#C1FFFC]">
                                <option>Panding</option>
                                <option>Active</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="py-2 border-gray-600 border-t mt-8 pt-5   ">
                    <h1 className="font-bold text-black ">Total 5550</h1>
                </div>

                <table className="w-[960px] mx-auto shadow-lg overflow-x-scroll">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td>
                                    <Spinner
                                        color="green"
                                        className="mx-auto h-16 w-16 my-5"
                                    />
                                </td>
                            </tr>
                        ) : isError ? (
                            <>
                                {console.error(error)}
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        {error.message}
                                        {". "}
                                        <span
                                            onClick={refetch}
                                            className="text-blue-500 hover:underline cursor-pointer"
                                        >
                                            Try Again
                                        </span>
                                    </td>
                                </tr>
                            </>
                        ) : (
                            applications?.rows?.map((certificate, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0 ? "bg-blue-gray-50/50" : ""
                                    }
                                >
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {certificate?.applicant}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {certificate?.union_id}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {certificate?.sanad_id}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {certificate?.id}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {certificate?.status}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            edit
                                        </Typography>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <div className="flex items-center justify-center pt-8 gap-4">
                    <Button
                        variant="text"
                        color="amber"
                        className="flex items-center gap-2"
                        onClick={prev}
                        disabled={activePage === 1}
                    >
                        <FaArrowLeft /> Previous
                    </Button>
                    <div className="flex items-center gap-2 flex-wrap">
                        {renderPaginationButtons()}
                    </div>
                    <Button
                        variant="text"
                        color="amber"
                        className="flex items-center gap-2"
                        onClick={next}
                        disabled={activePage === applications?.totalPages}
                    >
                        Next
                        <FaArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AllCertificate;
