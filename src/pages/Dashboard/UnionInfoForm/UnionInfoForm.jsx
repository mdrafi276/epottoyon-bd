import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    getDistricts,
    getDivisions,
    getUnions,
    getUpazillas,
} from "../../../api/certificates";

const UnionInfoForm = () => {
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [selectedUnion, setSelectedUnion] = useState("");
    const [selectedEnglishDivision, setSelectedEnglishDivision] = useState("");
    const [selectedEnglishDistrict, setSelectedEnglishDistrict] = useState("");
    const [selectedEnglishUpazilla, setSelectedEnglishUpazilla] = useState("");
    const [selectedEnglishUnion, setSelectedEnglishUnion] = useState("");
    const [selectedRole5, setSelectedRole5] = useState("");
    const [selectedRole6, setSelectedRole6] = useState("");

    const handleChangeSelectedDivision = (event) => {
        setSelectedDivision(event);
    };
    const handleChangeDistrict = (event) => {
        setSelectedDistrict(event);
    };
    const handleChangeUpazilla = (event) => {
        setSelectedUpazilla(event);
    };
    const handleChangeUnion = (event) => {
        setSelectedUnion(event);
    };
    const handleChangeSelectedEnglishDivision = (event) => {
        setSelectedEnglishDivision(event);
    };
    const handleChangeEnglishDistrict = (event) => {
        setSelectedEnglishDistrict(event);
    };
    const handleChangeEnglishUpazilla = (event) => {
        setSelectedEnglishUpazilla(event);
    };
    const handleChangeEnglishUnion = (event) => {
        setSelectedEnglishUnion(event);
    };
    const handleChange5 = (event) => {
        setSelectedRole5(event.target.value);
    };
    const handleChange6 = (event) => {
        setSelectedRole6(event.target.value);
    };

    //loading the divisions
    const { data: divisions, isLoading: isDivisionsLoading } = useQuery({
        queryKey: ["division"],
        queryFn: () => getDivisions(),
    });

    //loading the districts
    const { data: districts, isLoading: isDistrictsLoading } = useQuery({
        queryKey: ["district", selectedDivision],
        queryFn: () => getDistricts(selectedDivision),
    });

    //loading the upazillas
    const { data: upazillas, isLoading: isUpazillasLoading } = useQuery({
        queryKey: ["upazilla", selectedDistrict, selectedDivision],
        queryFn: () => getUpazillas(selectedDistrict),
    });

    // loading the unions
    const { data: unions, isLoading: isUnionsLoading } = useQuery({
        queryKey: ["union", selectedUpazilla, selectedDistrict, selectedDivision],
        queryFn: () => getUnions(selectedUpazilla),
    });

    //loading the English divisions
    const { data: englishDivisions, isLoading: isEnglishDivisionsLoading } = useQuery({
        queryKey: ["englishDivision"],
        queryFn: () => getDivisions(),
    });

    //loading the English districts
    const { data: englishDistricts, isLoading: isEnglishDistrictsLoading } = useQuery({
        queryKey: ["englishDistrict", selectedEnglishDivision],
        queryFn: () => getDistricts(selectedEnglishDivision),
    });

    //loading the English upazillas
    const { data: englishUpazillas, isLoading: isEnglishUpazillasLoading } = useQuery({
        queryKey: ["englishUpazilla", selectedEnglishDistrict, selectedEnglishDivision],
        queryFn: () => getUpazillas(selectedEnglishDistrict),
    });

    // loading the English unions
    const { data: englishUnions, isLoading: isEnglishUnionsLoading } = useQuery({
        queryKey: [
            "englishUnion",
            selectedEnglishUpazilla,
            selectedEnglishDistrict,
            selectedEnglishDivision,
        ],
        queryFn: () => getUnions(selectedEnglishUpazilla),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const ইউনিয়নপরিষদেরনাম = form.ইউনিয়নপরিষদেরনাম.value;
        const VoterIDNumber = form.VoterIDNumber.value;
        const PatisthanaName = form.PatisthanaName.value;
        const ChairmanMobileNumber = form.ChairmanMobileNumber.value;
        const ChairmanName = form.ChairmanName.value;
        const ছবিআপলোড = form.ছবিআপলোড.value;
        const ইউনিয়নপরিষদলোগো = form.ইউনিয়নপরিষদলোগো.value;
        const ফেসবুকআইডিলিংক = form.ফেসবুকআইডিলিংক.value;
        const পতিস্থানেরনাম = form.পতিস্থানেরনাম.value;
        const ভোটারআইডিকার্ডআপলোড = form.ভোটারআইডিকার্ডআপলোড.value;
        const ভোটারআইডিনম্বার = form.ভোটারআইডিনম্বার.value;
        const মোবাইলনাম্বার = form.মোবাইলনাম্বার.value;
        const চেয়ারম্যানেরমোবাইলনম্বার = form.চেয়ারম্যানেরমোবাইলনম্বার.value;
        const UnionParishadName = form.UnionParishadName.value;
        const ইমেল = form.ইমেল.value;
        const চেয়ারম্যানেরনাম = form.চেয়ারম্যানেরনাম.value;

        console.log(selectedDivision, selectedDistrict, selectedUpazilla, selectedUnion);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[96%] rounded-md md:pb-10 pb-5 lg:px-0 md:px-10   px-3 mb-3 mt-3  md:mt-8 md:w-[95%] lg:w-[95%] lg:mt-10 lg:py-8  mx-auto border-4 bg-gray-100 border-[#8A569B]"
        >
            {" "}
            <div>
                <h1 className="text-xl text-center border-2 mt-2 bg-[#8A569B]  text-white rounded-xl font-bold file: md:text-2xl lg::mt-5 lg:mt-0 lg:text-3xl  py-2">
                    Create union Information
                </h1>
            </div>
            <div className=" w-full  justify-center  gap-3 ">
                <div>
                    {/* first table */}
                    <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
                        <div>
                            <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                                বাংলায়
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2 ">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        বিভাগ *
                                    </h1>
                                    {isDivisionsLoading ? (
                                        <div>বিভাগসমূহ লোড হচ্ছে...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedDivision}
                                            onChange={handleChangeSelectedDivision}
                                            label="নির্বাচন করুন"
                                            className="bg-blue-50"
                                        >
                                            {divisions?.map((division) => (
                                                <Option
                                                    className="blue-50"
                                                    value={division?.id.toString()}
                                                    key={division?.id}
                                                >
                                                    {division?.bn_name}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                </div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        থানা / জেলা *
                                    </h1>
                                    {isUpazillasLoading ? (
                                        <div>উপজেলাসমূহ লোড হচ্ছে...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedUpazilla}
                                            onChange={handleChangeUpazilla}
                                            label="নির্বাচন করুন"
                                            className="bg-blue-50"
                                        >
                                            {selectedDistrict && selectedDivision ? (
                                                upazillas?.map((upazilla) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={upazilla?.id?.toString()}
                                                        key={upazilla?.id}
                                                    >
                                                        {upazilla?.bn_name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">
                                                    জেলা নির্বাচন করুন
                                                </Option>
                                            )}
                                        </Select>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        জেলা *
                                    </h1>
                                    {isDistrictsLoading ? (
                                        <div>জেলাসমূহ লোড হচ্ছে...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedDistrict}
                                            onChange={handleChangeDistrict}
                                            label="নির্বাচন করুন"
                                            className="bg-blue-50"
                                        >
                                            {selectedDivision ? (
                                                districts?.map((district) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={district?.id?.toString()}
                                                        key={district?.id}
                                                    >
                                                        {district?.bn_name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">
                                                    বিভাগ নির্বাচন করুন
                                                </Option>
                                            )}
                                        </Select>
                                    )}
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ইউনিয়ন পরিষদ *
                                    </h1>
                                    {isUnionsLoading ? (
                                        <div>ইউনিয়নসমূহ লোড হচ্ছে...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedUnion}
                                            onChange={handleChangeUnion}
                                            label="নির্বাচন করুন"
                                            className="bg-blue-50"
                                        >
                                            {selectedDivision &&
                                            selectedDistrict &&
                                            selectedUpazilla ? (
                                                unions?.map((union) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={union?.id?.toString()}
                                                        key={union?.id}
                                                    >
                                                        {union?.bn_name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">
                                                    উপজেলা নির্বাচন করুন
                                                </Option>
                                            )}
                                        </Select>
                                    )}
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    {/* second table */}
                    <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
                        <div>
                            <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                                ইংরেজি
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2 ">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Division *
                                    </h1>
                                    {isEnglishDivisionsLoading ? (
                                        <div>Loading Divisions...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedEnglishDivision}
                                            onChange={handleChangeSelectedEnglishDivision}
                                            label="Select Division"
                                            className="bg-blue-50"
                                        >
                                            {englishDivisions?.map((division) => (
                                                <Option
                                                    className="blue-50"
                                                    value={division?.id.toString()}
                                                    key={division?.id}
                                                >
                                                    {division?.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                </div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Upazilla *
                                    </h1>
                                    {isEnglishUpazillasLoading ? (
                                        <div>Loading Upazillas...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedEnglishUpazilla}
                                            onChange={handleChangeEnglishUpazilla}
                                            label="Select Upazilla"
                                            className="bg-blue-50"
                                        >
                                            {selectedEnglishDistrict &&
                                            selectedEnglishDivision ? (
                                                englishUpazillas?.map((upazilla) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={upazilla?.id?.toString()}
                                                        key={upazilla?.id}
                                                    >
                                                        {upazilla?.name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">Select District</Option>
                                            )}
                                        </Select>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        District *
                                    </h1>
                                    {isEnglishDistrictsLoading ? (
                                        <div>Loading Districts...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedEnglishDistrict}
                                            onChange={handleChangeEnglishDistrict}
                                            label="Select District"
                                            className="bg-blue-50"
                                        >
                                            {selectedEnglishDivision ? (
                                                englishDistricts?.map((district) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={district?.id?.toString()}
                                                        key={district?.id}
                                                    >
                                                        {district?.name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">Select Division</Option>
                                            )}
                                        </Select>
                                    )}
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Union *
                                    </h1>
                                    {isEnglishUnionsLoading ? (
                                        <div>Loading Unions...</div>
                                    ) : (
                                        <Select
                                            required
                                            value={selectedEnglishUnion}
                                            onChange={handleChangeEnglishUnion}
                                            label="Select Union"
                                            className="bg-blue-50"
                                        >
                                            {selectedEnglishDivision &&
                                            selectedEnglishDistrict &&
                                            selectedEnglishUpazilla ? (
                                                englishUnions?.map((union) => (
                                                    <Option
                                                        className="blue-50"
                                                        value={union?.id?.toString()}
                                                        key={union?.id}
                                                    >
                                                        {union?.name}
                                                    </Option>
                                                ))
                                            ) : (
                                                <Option value="">Select Upazilla</Option>
                                            )}
                                        </Select>
                                    )}
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    {/* table three */}
                    <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
                        <div>
                            <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                                বাংলা
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        চেয়ারম্যানের নাম *
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="chairman"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        চেয়ারম্যানের মোবাইল নম্বার
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="চেয়ারম্যানেরমোবাইলনম্বার"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        মোবাইল নাম্বার
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="মোবাইলনাম্বার"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ভোটার আইডি নম্বার
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ভোটারআইডিনম্বার"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ভোটার আইডি কার্ড আপলোড
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ভোটারআইডিকার্ডআপলোড"
                                        type="file"
                                    />
                                </div>{" "}
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ইমেল
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ইমেল"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        পতিস্থানের নাম
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="পতিস্থানেরনাম"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ফেসবুক আইডি লিংক
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ফেসবুকআইডিলিংক"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ইউনিয়ন পরিষদ লোগো *
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ইউনিয়নপরিষদলোগো"
                                        type="file"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ছবি আপলোড
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ছবিআপলোড"
                                        type="text"
                                    />
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    {/* table four */}
                    <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
                        <div>
                            <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                                ইংরেজি
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Chairman Name
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ChairmanName"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Chairman mobile number
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="ChairmanMobileNumber"
                                        type="text"
                                    />
                                </div>{" "}
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Patisthana name
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="PatisthanaName"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        Voter ID Number
                                    </h1>
                                    <Input required
                                        className="bg-cyan-50"
                                        name="VoterIDNumber"
                                        type="text"
                                    />
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* second section */}
                <div>
                    <div className="w-full flex justify-center gap-1 md:gap-8  mt-3 lg:mt-14 itmes-center ">
                        <div>
                            <h1 className="text-[11px] md:text-[14px] lg:text-[15px] mt-1 text-black text-center ">
                                আনুমোদনের জন্য অপেক্ষা করুন । প্রয়োজনে এডমিনের সাথে কথা
                                বলুনঃ 01734327110
                            </h1>
                        </div>
                        <Button type="submit" color="amber">Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UnionInfoForm;
