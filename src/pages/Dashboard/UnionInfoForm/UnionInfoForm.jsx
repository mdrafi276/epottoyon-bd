import { Button, Input, Option, Select, Spinner } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    addUnion,
    getDistricts,
    getDivisions,
    getUnions,
    getUpazillas,
    getUser,
    uploadImage,
} from "../../../api/certificates";
import { AuthContext } from "../../../Provider/AuthProvider";

const UnionInfoForm = () => {
    const [loading, setLoading] = useState(false);
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");
    const [selectedUnion, setSelectedUnion] = useState("");
    const [selectedEnglishDivision, setSelectedEnglishDivision] = useState("");
    const [selectedEnglishDistrict, setSelectedEnglishDistrict] = useState("");
    const [selectedEnglishUpazilla, setSelectedEnglishUpazilla] = useState("");
    const [selectedEnglishUnion, setSelectedEnglishUnion] = useState("");
    const { user } = useContext(AuthContext);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const chairmanName = e.target.chairmanName.value;
        const chairmanPhone = e.target.chairmanPhone.value;
        const phone = e.target.phone.value;
        const voterId = e.target.voterId.value;
        const idCard = e.target.idCard.files[0];
        const email = e.target.email.value;
        const institutionName = e.target.institutionName.value;
        const facebookLink = e.target.facebookLink.value;
        const unionLogo = e.target.unionLogo.files[0];
        const photo = e.target.photo.files[0];
        const chairmanEng = e.target.chairmanEng.value;
        const chairmanPhoneEng = e.target.chairmanPhoneEng.value;
        const institutionNameEng = e.target.institutionNameEng.value;
        const normalUserNameBn = e.target.normalUserNameBn.value;
        const normalUserNameEn = e.target.normalUserNameEn.value;

        if (
            !selectedUnion ||
            !selectedUpazilla ||
            !selectedDistrict ||
            !selectedDivision ||
            !selectedEnglishUnion ||
            !selectedEnglishUpazilla ||
            !selectedEnglishDistrict ||
            !selectedEnglishDivision
        ) {
            alert("লোকেশন সিলেক্ট করুন");
        } else if (
            selectedUnion !== selectedEnglishUnion ||
            selectedUpazilla !== selectedEnglishUpazilla ||
            selectedDistrict !== selectedEnglishDistrict ||
            selectedDivision !== selectedEnglishDivision
        ) {
            alert("বাংলা এবং ইংরেজি লোকেশন এক নয়");
        } else {
            try {
                const idCardData = await uploadImage(idCard);
                const unionLogoData = await uploadImage(unionLogo);
                const photoData = await uploadImage(photo);
                const response = await getUser(user?.email);

                //FIXME: ei idcard ar photo ta kar?

                const unionInfos = {
                    division_id: selectedDivision,
                    district_id: selectedDistrict,
                    upazilla_id: selectedUpazilla,
                    union_id: selectedUnion,
                    user_id: response?.id,
                    chairman: chairmanName,
                    logo: unionLogoData?.data?.url,
                    vie: divisions?.find((division) => division?.id === selectedDivision)
                        ?.name,
                    zee: districts?.find((district) => district?.id === selectedDistrict)
                        ?.name,
                    upe: upazillas?.find((upazilla) => upazilla?.id === selectedUpazilla)
                        ?.name,
                    che: chairmanEng,
                    che_mobile: chairmanPhoneEng,
                    nid_no: voterId,
                    facebook_page: facebookLink,
                };

                await addUnion(unionInfos);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
                setLoading(false);
            }
        }
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
                            {/* <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                              ঠিকানা  বাংলায়f
                            </h1> */}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
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
                        {/* <div>
                            <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                                ইংরেজি
                            </h1>
                        </div> */}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
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
                            <h1 className="text-center font-extrabold py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[100px] md:mx-[250px] text-black  text-[14px] md:text-[17px] lg:text-[27px]  lg:mt-3 ">
                                প্রতিষ্ঠানের তথ্য
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        প্রতিষ্ঠানের নাম (বাংলায়)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="institutionName"
                                        type="text"
                                    />
                                </div>{" "}
                                {/* edit */}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        চেয়ারম্যান/মেয়রের নাম (বাংলায়)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="chairmanName"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        মোবাইল নাম্বার
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="phone"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        প্রতিষ্ঠানের লোগো (বাংলা)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="unionLogoBn"
                                        type="file"
                                    />
                                </div>{" "}
                                {/* <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি নম্বার
                    </h1>
                    <Input
                      color="blue"
                      required={true}
                      className="!bg-blue-50"
                      name="voterId"
                      type="text"
                    />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি কার্ড আপলোড
                    </h1>
                    <Input
                      color="blue"
                      required={true}
                      className="!bg-blue-50"
                      name="idCard"
                      type="file"
                    />
                  </div>{" "} */}
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        প্রতিষ্ঠানের নাম (ইংরেজিতে)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="institutionNameEng"
                                        type="text"
                                    />
                                </div>{" "}
                                {/* edit */}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        চেয়ারম্যান/মেয়রের নাম (ইংরেজি)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="chairmanEng"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ইমেল
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="email"
                                        type="text"
                                    />
                                </div>{" "}
                                {/* <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        চেয়ারম্যানের মোবাইল নম্বার
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="chairmanPhone"
                                        type="text"
                                    />
                                </div>{" "} */}
                                {/* <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ফেসবুক আইডি লিংক
                    </h1>
                    <Input
                      color="blue"
                      required={true}
                      className="!bg-blue-50"
                      name="facebookLink"
                      type="text"
                    />
                  </div>{" "} */}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        পতিস্থানের লোগো (ইংরেজি)
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="unionLogo"
                                        type="file"
                                    />
                                </div>{" "}
                                {/* <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ছবি আপলোড
                    </h1>
                    <Input
                      color="blue"
                      required={true}
                      className="!bg-blue-50"
                      name="photo"
                      type="file"
                    />
                  </div>{" "} */}
                            </div>
                        </div>
                    </div>
                    {/* table four */}
                    <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
                        <div>
                            <h1 className="text-center  py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[100px] md:mx-[250px] text-black font-extrabold text-[14px] md:text-[17px] lg:text-[27px]  lg:mt-3 ">
                                রেজিস্ট্রেশন কারীর তথ্য
                            </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-center">
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        রেজিস্ট্রেশন কারীর নাম
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="normalUserNameBn"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        রেজিস্ট্রেশন কারীর মোবাইল নাম্বার
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="facebookLink"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ছবি আপলোড
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="photo"
                                        type="file"
                                    />
                                </div>{" "}
                            </div>
                            <div>
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        রেজিস্ট্রেশন কারীর পদবী
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="normalUserNameEn"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ভোটার আইডি নম্বার
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="voterId"
                                        type="text"
                                    />
                                </div>{" "}
                                <div className="lg:w-[450px] mt-2">
                                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                                        ভোটার আইডি কার্ড আপলোড
                                    </h1>
                                    <Input
                                        color="blue"
                                        required={true}
                                        className="!bg-blue-50"
                                        name="idCard"
                                        type="file"
                                    />
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* second section */}
                <div>
                    <div className="w-full flex justify-center gap-1 md:gap-8  mt-3 lg:mt-14 itmes-center ">
                     
                        <Button size="lg" type="submit" color="blue" className="!hover:bg-blue-500">
                            {loading ? <Spinner /> : "Submit"}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UnionInfoForm;
