import { Input, Spinner } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import Table from "../../../components/Table/Table";
import { useQuery } from "@tanstack/react-query";
import {
    addCertificate,
    addOarishes,
    getUser,
    getUsersUnion,
    uploadImage,
} from "../../../api/certificates";
import { AuthContext } from "../../../Provider/AuthProvider";

const FamilyCertificate = () => {
    const [isEngOpen, setIsEngOpen] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [guardian, setGuardian] = useState("");
    const [identity, setIdentity] = useState("");
    const { user } = useContext(AuthContext);

    const [banglaRows, setBanglaRows] = useState([
        {
            ক্রমিক: 1,
            নাম: "",
            সম্পর্ক: "",
            "আইডি নম্বর": "",
            "জন্ম সনদ নম্বর": "",
            মন্তব্য: "",
        },
    ]);
    const [englishRows, setEnglishRows] = useState([
        {
            Serial: 1,
            Name: "",
            Relation: "",
            "Voter / Birth Certificate": "",
            Birthday: "",
            Comment: "",
        },
    ]);

    //TODO: create a column about profile picture in the database in users table. and set a default dummy profile picture for each user. and also update the picture in firebase
    //FIXME:https://www.udcbd.net/setting/unioninfo/1694876087union17.jpg
    // Assuming you have 'loading', 'user', and 'getUser' properly defined elsewhere

    //fetch user's data
    const { data: userInfo, isLoading: isUserLoading } = useQuery({
        queryKey: ["userInfo", user],
        queryFn: async () => {
            if (user.email) {
                return await getUser(user.email);
            }
            return null;
        },
    });

    //fetch the user's union's info
    const { data: unionInfo, isLoading: isUnionLoading } = useQuery({
        queryKey: ["unionInfo", user, userInfo],
        queryFn: async () => {
            if (userInfo && userInfo.id) {
                return await getUsersUnion(userInfo.id);
            }
            return null;
        },
    });

    const handleBanglaSubmit = async (e) => {
        setSpinner(true);
        e.preventDefault();

        const name = e.target.name.value;
        const voterId = identity === "voterId" ? e.target.voterId.value : null;
        const birthCertificate =
            identity === "birthCertificate" ? e.target.birthCertificate.value : null;
        const father = guardian === "father" ? e.target.father.value : null;
        const husband = guardian === "husband" ? e.target.father.value : null;
        const mother = e.target.mother.value;
        const village = e.target.village.value;
        const word = e.target.word.value;
        const postOffice = e.target.postOffice.value;
        const photo = e.target.photo.files[0];
        const attachment = e.target.attachment.files[0];
        // Get current date
        const currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        const date = day + "-" + month + "-" + year;

        try {
            const photoData = photo && (await uploadImage(photo));
            const attachmentData = attachment && (await uploadImage(attachment));

            const application = {
                union_id: unionInfo?.id,
                applied_union_no: unionInfo?.id,
                union_logo: unionInfo?.logo,
                applied_upazilla_name: unionInfo?.upazilla_id,
                applied_zilla_name: unionInfo?.district_id,
                applied_chairman_name: unionInfo?.chairman,
                applicant: name,
                user_id: userInfo?.id,
                user_info_id: null,
                //TODO: user info form
                status: "approved",
                sanad_file: attachmentData?.data?.url,
                sanad_id: 1,
                application: userInfo?.name,
                form_date: date,
                nid_birth: birthCertificate,
                nid: voterId,
                father_husband_name: father,
                husband: husband,
                mother_name: mother,
                village_name: village,
                union_name: unionInfo?.name,
                upazilla_name: unionInfo?.id,
                zilla_name: unionInfo?.district_id,
                ward_no: word,
                name: name,
                mrgram: village,
                mrdak: postOffice,
                mrword: word,
                date: date,
                photo: photoData?.data?.url,
            };
            const res = await addCertificate(application);

            const oarishes = {
                application_id: res?.id,
                sanad_id: 1,
                chairman_name: unionInfo?.chairman,
                no: banglaRows.map((item) => item?.ক্রমিক).join(","),
                o_name: banglaRows?.map((item) => item.নাম).join(","),
                o_relation: banglaRows?.map((item) => item.সম্পর্ক).join(","),
                rnid: banglaRows?.map((item) => item["আইডি নম্বর"]).join(","),
                rbirth: banglaRows?.map((item) => item["জন্ম সনদ নম্বর"]).join(","),
                rcom: banglaRows?.map((item) => item.মন্তব্য).join(","),
            };
            await addOarishes(oarishes);

            setSpinner(false);
        } catch (error) {
            setSpinner(false);
            console.error(error);
        }
    };

    const handleEnglishSubmit = async (e) => {
        setSpinner(true);
        e.preventDefault();

        const name = e.target.name.value;
        const voterId = identity === "voterId" ? e.target.voterId.value : null;
        const birthCertificate =
            identity === "birthCertificate" ? e.target.birthCertificate.value : null;
        const father = guardian === "father" ? e.target.father.value : null;
        const husband = guardian === "husband" ? e.target.father.value : null;
        const mother = e.target.mother.value;
        const village = e.target.village.value;
        const word = e.target.word.value;
        const postOffice = e.target.postOffice.value;
        const photo = e.target.photo.files[0];
        const attachment = e.target.attachment.files[0];
        // Get current date
        const currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        const date = day + "-" + month + "-" + year;

        try {
            const photoData = photo && (await uploadImage(photo));
            const attachmentData = attachment && (await uploadImage(attachment));

            const application = {
                union_id: unionInfo?.id,
                applied_union_no: unionInfo?.id,
                union_logo: unionInfo?.logo,
                applied_upazilla_name: unionInfo?.upazilla_id,
                applied_zilla_name: unionInfo?.district_id,
                applied_chairman_name: unionInfo?.chairman,
                applicant: name,
                user_id: userInfo?.id,
                user_info_id: null,
                //TODO: user info form
                status: "approved",
                sanad_file: attachmentData?.data?.url,
                sanad_id: 1,
                application: userInfo?.name,
                form_date: date,
                nid_birth: birthCertificate,
                nid: voterId,
                father_husband_name: father,
                husband: husband,
                mother_name: mother,
                village_name: village,
                union_name: unionInfo?.name,
                upazilla_name: unionInfo?.id,
                zilla_name: unionInfo?.district_id,
                ward_no: word,
                name: name,
                mrgram: village,
                mrdak: postOffice,
                mrword: word,
                date: date,
                photo: photoData?.data?.url,
            };
            const res = await addCertificate(application);

            const oarishes = {
                application_id: res?.id,
                sanad_id: 1,
                chairman_name: unionInfo?.chairman,
                no: banglaRows.map((item) => item?.ক্রমিক).join(","),
                o_name: banglaRows?.map((item) => item.নাম).join(","),
                o_relation: banglaRows?.map((item) => item.সম্পর্ক).join(","),
                rnid: banglaRows?.map((item) => item["আইডি নম্বর"]).join(","),
                rbirth: banglaRows?.map((item) => item["জন্ম সনদ নম্বর"]).join(","),
                rcom: banglaRows?.map((item) => item.মন্তব্য).join(","),
            };
            await addOarishes(oarishes);

            setSpinner(false);
        } catch (error) {
            setSpinner(false);
            console.error(error);
        }
    };

    return (
        <div className="bg-[#dce4ea] pb-10  lg:pt-10 lg:min-h-screen">
            <div className="  bg-white  w-full md:w-[90%] lg:w-[98%] mx-auto lg:pb-10">
                <div>
                    <h1 className="text-xl  font-bold   text-white md:text-2xl lg:text-xl   text-start lg:pl-2 bg-[#8BC34A] py-2">
                        {" "}
                        আবেদন &gt; নাগরিক সনদ
                    </h1>
                </div>{" "}
                <div className="flex justify-center gap-12 items-center text-xl  text-center  text-white md:text-2xl lg:text-xl lg:mt-5 mt-3  lg:pl-2 bg-[#aa2ec3] py-2">
                    <h1
                        onClick={() => setIsEngOpen(false)}
                        className="cursor-pointer flex items-start gap-2"
                    >
                        {" "}
                        {isEngOpen ? (
                            <MdCheckBoxOutlineBlank className="text-2xl" />
                        ) : (
                            <MdCheckBox className="text-2xl" />
                        )}
                        বাংলায় আবেদন করুন
                    </h1>
                    <h1
                        onClick={() => setIsEngOpen(true)}
                        className="cursor-pointer flex items-start gap-2"
                    >
                        {isEngOpen ? (
                            <MdCheckBox className="text-2xl" />
                        ) : (
                            <MdCheckBoxOutlineBlank className="text-2xl" />
                        )}{" "}
                        ইংরেজিতে আবেদন করুন{" "}
                    </h1>
                </div>
                {isEngOpen ? (
                    <form onSubmit={handleEnglishSubmit}>
                        {/* table one */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Name</h1>
                                <Input
                                    name="name"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <select
                                    required
                                    value={identity}
                                    onChange={(e) => setIdentity(e.target.value)}
                                    className="focus:outline-none"
                                    name="identity"
                                >
                                    <option value="">
                                        Select NID or Birth Certificate
                                    </option>
                                    <option value="voterId">NID</option>
                                    <option value="birthCertificate">
                                        Birth Certificate
                                    </option>
                                </select>
                                <Input
                                    name={identity}
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <select
                                    required
                                    value={guardian}
                                    onChange={(e) => setGuardian(e.target.value)}
                                    className="focus:outline-none"
                                    name="guardian"
                                >
                                    <option value="">Select Father or Husband</option>
                                    <option value="father">Father</option>
                                    <option value="husband">Husband</option>
                                </select>
                                <Input
                                    name={guardian}
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* table two */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Mother</h1>
                                <Input
                                    name="mother"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Loacation</h1>
                                <Input
                                    name="village"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>{" "}
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Word Number</h1>
                                <Input
                                    name="word"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* tabel three */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Post Office</h1>
                                <Input
                                    name="postOffice"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>

                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">
                                    Photo (Recently taken 5*5cm)
                                </h1>
                                <Input
                                    name="photo"
                                    type="file"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">Attachment</h1>
                                <Input
                                    name="attachment"
                                    type="file"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* tabel 4 */}
                        <Table rows={englishRows} setRows={setEnglishRows} />
                        <div>
                            <div className="flex justify-center items-start p-2 md:mx-16 mx-5 mt-5  lg:pt-3 lg:mx-4 lg:px-2 gap-2  lg:mt-10 lg:h-[70px] bg-[#F8DDCC]">
                                <input
                                    className="mt-1"
                                    type="checkbox"
                                    required
                                    id="bangla-terms"
                                />
                                <label
                                    htmlFor="bangla-terms"
                                    className="text-black  text-[12px] lg:text-[14px]"
                                >
                                    I hereby declare that the information stated above
                                    totally true At any time the information provided by
                                    me is false If proved the certificate shall be deemed
                                    to be void and Legal action will be taken.
                                </label>
                            </div>
                        </div>
                        {!isUserLoading && !isUnionLoading && (
                            <div className="flex justify-center mt-9 gap-2 md:gap-2 items-center pb-3 md:pb-5 lg:pb-1 lg:gap-2">
                                <button
                                    type="submit"
                                    className="bg-[#84BC46] text-white md:py-2 md:px-5 px-4 py-2 lg:py-2 lg:px-5 rounded-md"
                                >
                                    {spinner ? <Spinner /> : "Save"}
                                </button>
                                <button
                                    type="reset"
                                    className="bg-[#ea542a] text-white md:py-2 md:px-5 px-4 py-2 lg:py-2 lg:px-5 rounded-md"
                                >
                                    Reset Form
                                </button>
                            </div>
                        )}
                    </form>
                ) : (
                    <form onSubmit={handleBanglaSubmit}>
                        {/* table one */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">নাম</h1>
                                <Input
                                    name="name"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <select
                                    required
                                    value={identity}
                                    onChange={(e) => setIdentity(e.target.value)}
                                    className="focus:outline-none"
                                    name="identity"
                                >
                                    <option value="">
                                        পরিচয়পত্র / জন্ম সনদ বেছে নিন
                                    </option>
                                    <option value="voterId">জাতীয় পরিচয়পত্র</option>
                                    <option value="birthCertificate">জন্ম সনদ</option>
                                </select>
                                <Input
                                    name={identity}
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <select
                                    required
                                    value={guardian}
                                    onChange={(e) => setGuardian(e.target.value)}
                                    className="focus:outline-none"
                                    name="guardian"
                                >
                                    <option value="">পিতা / স্বামী বেছে নিন</option>
                                    <option value="father">পিতা</option>
                                    <option value="husband">স্বামী</option>
                                </select>
                                <Input
                                    name={guardian}
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* table two */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">মাতাঃ</h1>
                                <Input
                                    name="mother"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">গ্রাম/মহল্লা</h1>
                                <Input
                                    name="village"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>{" "}
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">ওয়ার্ড</h1>
                                <Input
                                    name="word"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* tabel three */}
                        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">ডাকঘরঃ</h1>
                                <Input
                                    name="postOffice"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>

                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">
                                    ছবি (সম্প্রতি তোলা ৫*৫ সে.মি )
                                </h1>
                                <Input
                                    name="photo"
                                    type="file"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                            <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                                <h1 className="text-black">সংযুক্তি</h1>
                                <Input
                                    name="attachment"
                                    type="file"
                                    color="blue"
                                    className="!bg-[#c1fffc]  focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* tabel 4 */}
                        <Table rows={banglaRows} setRows={setBanglaRows} />
                        <div>
                            <div className="flex justify-center items-start p-2 md:mx-16 mx-5 mt-5  lg:pt-3 lg:mx-4 lg:px-2 gap-2  lg:mt-10 lg:h-[70px] bg-[#F8DDCC]">
                                <input
                                    className="mt-1"
                                    type="checkbox"
                                    required
                                    id="bangla-terms"
                                />
                                <label
                                    htmlFor="bangla-terms"
                                    className="text-black  text-[12px] lg:text-[14px]"
                                >
                                    আমি এই মর্মে অঙ্গীকার করছি যে, উপরে বর্ণিত তথ্যাবলী
                                    সম্পূর্ণ সত্য। যেকোন সময় আমার প্রদত্ত তথ্য অসত্য
                                    প্রমাণিত হলে সনদ/প্রত্যয়ন বাতিল বলে গণ্য হবে এবং
                                    আইনানুগ ব্যবস্থা গ্রহণ করা হবে।
                                </label>
                            </div>
                        </div>
                        {!isUserLoading && !isUnionLoading && (
                            <div className="flex justify-center mt-9 gap-2 md:gap-2 items-center pb-3 md:pb-5 lg:pb-1 lg:gap-2">
                                <button
                                    type="submit"
                                    className="bg-[#84BC46] text-white md:py-2 md:px-5 px-4 py-2 lg:py-2 lg:px-5 rounded-md"
                                >
                                    {spinner ? <Spinner /> : "সংরক্ষণ করুন"}
                                </button>
                                <button
                                    type="reset"
                                    className="bg-[#ea542a] text-white md:py-2 md:px-5 px-4 py-2 lg:py-2 lg:px-5 rounded-md"
                                >
                                    রিসেট করুন
                                </button>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default FamilyCertificate;
