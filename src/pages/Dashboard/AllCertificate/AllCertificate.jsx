import { Input, Select, Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { getAllApplications } from "../../../api/certificates";

const AllCertificate = () => {
    let page = 1;
    const {
        data: applications,
        loading,
        isError,
        error,
    } = useQuery({
        queryFn: async () => await getAllApplications(page),
        queryKey: ["applications"],
    });
    console.log(applications);

    const TABLE_HEAD = [
        "Applicant",
        "Union",
        "Sanad Type",
        "Sanad Tracking No.",
        "Status",
        "Actions",
    ];

    const TABLE_ROWS = [
        {
            Applicant: "মোঃ শহিদুল ইসলাম",
            occupation: "গয়হাটা",
            startDate: "মৃত্যু সনদ",
            previousJob: "33007043047",
            previousEmployment: "ABC Technologies",
            educationLevel: "Bachelor's Degree",
            yearsOfExperience: "6",
            certifications: "AWS Certified Developer",
            skills: "JavaScript, React, Node.js",
        },
        {
            Applicant: "মোঃ শহিদুল ইসলাম",
            occupation: "গয়হাটা",
            startDate: "মৃত্যু সনদ",
            previousJob: "33007043047",
            previousEmployment: "ABC Technologies",
            educationLevel: "Bachelor's Degree",
            yearsOfExperience: "6",
            certifications: "AWS Certified Developer",
            skills: "JavaScript, React, Node.js",
        },
        {
            Applicant: "মোঃ শহিদুল ইসলাম",
            occupation: "গয়হাটা",
            startDate: "মৃত্যু সনদ",
            previousJob: "33007043047",
            previousEmployment: "ABC Technologies",
            educationLevel: "Bachelor's Degree",
            yearsOfExperience: "6",
            certifications: "AWS Certified Developer",
            skills: "JavaScript, React, Node.js",
        },
    ];

    return (
        <div className="bg-[#F4F6F9] lg:pt-5">
            <div className="bg-white pl-2 lg:pl-2 min-h-screen mx-auto">
                <div className="flex md:py-4 py-3 lg:py-4 justify-start items-center gap-4 lg:gap-5">
                    <h1 className="text-black md:text-[21px] lg:text-4xl font-bold ">
                        Applications for Sanad
                    </h1>
                    <button className="lg:py-2 lg:px-5 md:px-5 py-1 px-4  md:py-2 text-[14px] md:text-[15px] lg:text-[15px] rounded-md bg-blue-900 text-white ">
                        Refresh
                    </button>
                </div>
                <h1 className="border-b border-gray-600 w-[98%] mx-auto"></h1>
                <div>
                    <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center items-center lg:gap-8 ">
                        <div className=" lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">Tracking Number</h1>
                            <Input
                                name=""
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>
                        <div className=" lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">Start Date</h1>
                            <Input
                                type="date"
                                name="eng_village"
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>{" "}
                        <div className=" lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black">End Date</h1>
                            <Input
                                type="date"
                                name="eng_word"
                                color="blue"
                                className="!bg-[#c1fffc]  focus:bg-white"
                            />
                        </div>
                        <div className=" lg:mt-0 md:mt-4 mt-3">
                            <h1 className="text-black ">Status</h1>
                            <Select className="cursor-pointer bg-[#C1FFFC]">
                                <option>Panding</option>
                                <option>Active</option>
                            </Select>
                        </div>
                    </div>
                </div>
                {/* cololm first  */}
                <div className="py-2 border-gray-600 border-t mt-8 pt-5   ">
                    <h1 className="font-bold text-black ">Total 5550</h1>
                </div>
                <Card className="max-w-[980px] mx-auto">
                    <div className="overflow-auto text-left">
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
                            {TABLE_ROWS.map(
                                (
                                    {
                                        Applicant,
                                        occupation,
                                        startDate,
                                        previousJob,
                                        previousEmployment,
                                        educationLevel,
                                        yearsOfExperience,
                                        certifications,
                                        skills,
                                        languagesSpoken,
                                        location,
                                        company,
                                    },
                                    index
                                ) => (
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
                                                className="font-normal"
                                            >
                                                {Applicant}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {occupation}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {startDate}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {previousJob}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {previousEmployment}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {educationLevel}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {yearsOfExperience}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {certifications}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {skills}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {languagesSpoken}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            ></Typography>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </div>
                </Card>
                {/* <div className=" overflow-x- max-w-screen-xl mx-auto ">
                    {" "}
                    <div className="flex justify-center    items-center  ">
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[130px]">
                            Applicant
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[130px]">
                            Union
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[130px]">
                            Sanad Type{" "}
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[130px]">
                            Sanad Tracking No.
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[100px]">
                            Transaction Phone{" "}
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[90px]">
                            Amount
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[100px]">
                            Payment Method
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[100px]">
                            Transaction No.
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[80px]">
                            Status
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[50px] text-center py-3 lg:w-[280px]">
                            Actions
                        </h1>
                    </div>
                    <div className="flex justify-center    items-center  ">
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[130px]">
                            মৃত মগরব আলী ভূইয়া
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[130px]">
                            ধলাপাড়া
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[130px]">
                            ওয়ারিশ সনদ{" "}
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[130px]">
                            25144733017{" "}
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[100px]">
                            Transaction Phone{" "}
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[90px]">
                            Amount
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[100px]">
                            Payment Method
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[100px]">
                            Transaction No.
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[80px]">
                            Status
                        </h1>
                        <h1 className="border-black border text-black lg:text-[13px] font-semibold lg:h-[80px] text-center py-3 lg:w-[280px]">
                            Actions
                        </h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AllCertificate;
