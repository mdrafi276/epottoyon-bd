import "./InputFild.css";
import { Checkbox, Typography } from "@material-tailwind/react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const LoyalRegister = () => {
    const [loading, setLoading] = useState(false);
    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = async (e) => {
        setLoading(true);
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phoneNumber.value;
        const user = {
            name,
            phone,
            email,
            password,
            type: "user",
            register_for: "প্রশাসনিক",
        };

        try {
            const res = await createUser(email, password);
            await updateUser(name, phone);
            await axios.post("http://localhost:5000/api/v1/users", user);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="bg-[#327A62]">
                {" "}
                <div className="flex items-center justify-between md:mx-20  lg:mx-80 mx-4 h-[50px]">
                    <Link to="/register">
                        <h1 className="  md:border-4 md:border-red-900 px-4 py-0.5 rounded text-[11px] md:text-[15px] lg:text-[22px] hover:text-[#71ff4a] cursor-pointer text-white">
                            নাগরিক একাউন্ট তৈরি করুণ
                        </h1>
                    </Link>
                    <Link to="/loRegister">
                        <h1 className="  md:border-4 md:border-red-900 px-4 py-0.5 rounded text-[11px] md:text-[15px] lg:text-[22px] hover:text-[#71ff4a] cursor-pointer text-white">
                            প্রশাসনিক একাউন্ট তৈরী করুন
                        </h1>
                    </Link>
                </div>
            </div>
            <div className="flex w-[95%] md:w-[85%]  min:h-[500px]  gap-5  rounded-2xl  py-2 mx-auto  flex-col lg:flex-row">
                <form onSubmit={handleRegister} className="lg:w-[930px] w-full px-4 sm:px-0 lg:h-[866px] border-4 border-blue-400 bg-gray-200 lg:pb-20  rounded-2xl">
                    <h1 className="text-[15px] md:text-[22px] mt-8 mb-4 md:mt-5 lg:mt-14 lg:text-[26px] font-extrabold text-center bg-[#8e53a2] rounded-lg w-10/12 p-4 mx-auto text-white">
                        প্রশাসনিক একাউন্ট তৈরি করুণ
                    </h1>
                    <hr />

                    <div className=" flex justify-center items-center lg:mt-5"></div>
                    {/* input one************ */}
                    <div className="flex flex-col  justify-center">
                        <label
                            htmlFor="password"
                            className="  lg:ml-[118px] md:ml-[75px] mb-2 block text-black text-[15px] lg:text-[18px] font-bold "
                        >
                            প্রতিষ্ঠানের নাম (*)
                        </label>
                        <div className="containerss">
                            <input
                            required
                                type="text"
                                placeholder="নাম"
                                className="inputs w-full md:w-[80%] lg:w-[70%] mx-auto"
                                name="name"
                            />
                        </div>
                    </div>
                    {/* input two************ */}

                    <div className="flex flex-col  lg:mt-3 justify-center">
                        <label
                            htmlFor="password"
                            className="  lg:ml-[118px] md:mt-2 md:ml-[75px]  mb-2 block text-black text-[15px] lg:text-[18px] font-bold "
                        >
                            ইমেল(*)
                        </label>
                        <div className="containerss">
                            <input
                            required
                                type="email"
                                placeholder="example@gmail.com"
                                className="inputs w-full md:w-[80%] lg:w-[70%] mx-auto"
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:mb-2  mt-5 justify-center">
                        <label
                            htmlFor="password"
                            className="  lg:ml-[118px] md:ml-[75px]  lg:mb-2 block text-black text-[15px] lg:text-[18px] font-bold "
                        >
                            মোবাইল নাম্বার(*)
                        </label>
                        <div className="containerss">
                            <input
                            required
                                type="text"
                                placeholder="০১৮৮০৩৮৪৫৬৪"
                                className="inputs w-full md:w-[80%] lg:w-[70%] mx-auto"
                                name="phoneNumber"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:mb-1  mt-5 justify-center">
                        <label
                            htmlFor="password"
                            className="  lg:ml-[118px] md:ml-[75px]  lg:mb-1 block text-black text-[15px] lg:text-[18px] font-bold "
                        >
                            পাসওয়ার্ড(*)
                        </label>
                        <div className="containerss">
                            <input
                            required
                                type="password"
                                placeholder="পাসওয়ার্ড "
                                className="inputs w-full md:w-[80%] lg:w-[70%] mx-auto"
                                name="password"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:mb-2  mt-5 justify-center">
                        <label
                            htmlFor="password"
                            className="  lg:ml-[118px] md:ml-[75px]  lg:mb-1 block text-black text-[15px] lg:text-[18px] font-bold "
                        >
                            কনফার্ম পাসওয়ার্ড(*)
                        </label>
                        <div className="containerss">
                            <input
                            required
                                type="password"
                                placeholder="  কনফার্ম পাসওয়ার্ড "
                                className="inputs w-full md:w-[80%] lg:w-[70%] mx-auto"
                                name="password"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-5 mt-6 md:flex-row lg:mt-10 md:mb-8 md:mt-8 gap-5 justify-center items-center">
                        <Checkbox
                            label={
                                <Typography
                                    color="blue-gray"
                                    className="flex text-[13px]  font-medium"
                                >
                                    আমি প্রত্যয়ন সিস্টেমের
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="blue"
                                        className="font-medium transition-colors  text-[13px] hover:text-blue-700"
                                    >
                                        &nbsp;তথ্য অ্যাক্সেস নীতিমালা সাথে একমত
                                    </Typography>
                                    .
                                </Typography>
                            }
                        />

                        <button type="submit" className="btn lg:mt-1">
                            {" "}
                            নিবন্ধন করুন{" "}
                        </button>
                    </div>
                    <div></div>
                </form>

                <div className="space-y-4 lg:space-y-1 xl:space-y-1.5">
                    <div className="lg:w-[500px] w-full border-4 border-blue-400 lg:h-fit bg-gray-200 md:p-3 rounded-2xl">
                        <h1 className="text-center lg:mt-10 md:mt-10 md:mb-5 bg-[#8e53a2] rounded text-white py-3 lg:mb-5 text-[18px] mt-4 mb-2 md:text-[23px]  lg:text-[26px] font-extrabold   ">
                            নির্দেশনা
                        </h1>{" "}
                        <hr />
                        <div className="flex flex-col justify-center  lg:p-3 gap-3 p-2 md:gap-4 ">
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-2 px-2  md:h-[65px] lg:h-[65px] bg-white rounded-md ">
                                (*) চিহ্নিত ক্ষেত্রগুলি পূরণ করা বাধ্যতামূলক। অন্যগুলো
                                ঐচ্ছিক।{" "}
                            </li>
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-2 px-2 md:h-[65px] lg:h-[65px] bg-white rounded-md ">
                                আপনার ১০ অথবা ১৭ ডিজিটের জন্ম নিবন্ধন নম্বর পূরণ করুন।
                            </li>
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-5 px-2 md:h-[65px] lg:h-[65px] bg-white rounded-md ">
                                আপনার সঠিক জন্ম তারিখ প্রদান করুন।
                            </li>
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-1 px-2 md:h-[65px] lg:h-[65px] bg-white rounded-md ">
                                আপনার ১১ ডিজিটের মোবাইল নম্বর পূরণ করুন অথবা ইমেইল এড্রেস
                                লিখুন।
                            </li>
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-2 px-2 lg:h-[75px] bg-white rounded-md ">
                                তথ্য জমা দেওয়ার পর একটি যাচাইকরণ কোড প্রদানকৃত মোবাইল
                                নম্বর অথবা ইমেইল এড্রেসে পাঠানো হবে।
                            </li>
                            <li className="text-[14px] lg:text-[15px] text-black font-semibold pt-5 px-2 md:h-[65px] lg:h-[65px] bg-white rounded-md ">
                                অনুগ্রহ করে সঠিক তথ্য প্রদান করুন।
                            </li>
                        </div>
                    </div>
                    <div className="bg-gray-200 border-4 lg:w-[500px] w-full border-blue-400 lg:h-[200px] rounded-2xl lg:mt-2">
                        {" "}
                        <div className="  lg:pt-5">
                            <h1 className="text-[14px] md:mt-0 mt-3  lg:text-[20px] bg-[#8e53a2] rounded py-3 text-white mx-auto w-10/12 mx- text-center  font-extrabold  ">
                                জরুরী প্রয়োজনে
                            </h1>
                        </div>
                        <div className="lg:mx-3 mx-2 md:mx-0 rounded-md  bg-white mt-5 ">
                            <h1 className="text-[14px] lg:text-[14px] font-semibold pt-3 px-2 text-black ">
                                যদি আপনি কোনো সমস্যার সম্মুখীন হোন অথবা আপনার কোনো
                                জিজ্ঞাসা থাকলে আমাদের সাথে যোগাযোগ করতে পারেন।
                            </h1>
                            <h1 className="text-[14px] mt-2 lg:text-[14px] font-samibold px-2 pb-3 lg:mb-5 text-black ">
                                যোগাযোগ করতে এখানে{" "}
                                <Link className="text-[#427bff]">ক্লিক করুন</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoyalRegister;
