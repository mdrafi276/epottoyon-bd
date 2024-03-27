import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Input, Spinner } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { checkIfUserExists, comparePassword, getUser } from "../../api/certificates";

const LoginModal = () => {
    const { openLoginModal, setOpenLoginModal, signIn, createUser, updateUser } =
        useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            // Check if the user exists in Firebase
            await signIn(email, password);

            // If sign-in succeeds, proceed with the login process
            alert("লগইন সফল হয়েছে");
            setLoading(false);
            navigate("/dashboard");
            setOpenLoginModal(false);
        } catch (signInError) {
            // If user does not exist in Firebase or incorrect password
            if (signInError.code === "auth/invalid-credential") {
                try {
                    // Compare the entered password with the hashed password from the database
                    const passwordMatches = await comparePassword(email, password);

                    if (passwordMatches?.success) {
                        // Passwords match, proceed with creating user in Firebase
                        await createUser(email, password);
                        const response = await getUser(email);
                        await updateUser(response?.name);

                        // Proceed with login process
                        alert("লগইন সফল হয়েছে");
                        setLoading(false);
                        navigate("/dashboard");
                        setOpenLoginModal(false);
                    } else {
                        // Incorrect password
                        alert("পাসওয়ার্ড ভুল");
                        setLoading(false);
                    }
                } catch (error) {
                    console.error("Sign-in error:", error);
                    alert(error.message);
                    setLoading(false);
                }
            } else {
                // Other sign-in errors
                console.error("Sign-in error:", signInError);
                alert(signInError.message);
                setLoading(false);
            }
        }
    };

    return (
        <div className="w-[99%] mx-auto flex items-center justify-end">
            <button
                onClick={() => setOpenLoginModal(true)}
                className="bg-transparent text-white p-2 rounded-lg"
            >
                লগইন
            </button>
            <div
                onClick={() => setOpenLoginModal(false)}
                className={`fixed flex justify-center items-center z-[100] ${
                    openLoginModal ? "visible opacity-1" : "invisible opacity-0"
                } inset-0 w-full h-full backdrop-blur-sm  bg-black/20 duration-100`}
            >
                <div
                    onClick={(e_) => e_.stopPropagation()}
                    className={`absolute w-full lg:w-[600px] bg-[#e8e8e8] drop-shadow-2xl rounded-lg ${
                        openLoginModal
                            ? "opacity-1 duration-300 translate-y-0"
                            : "-translate-y-20 opacity-0 duration-150"
                    }`}
                >
                    <form
                        onSubmit={handleLogin}
                        className="p-12 border-[6px] h-[600px] rounded-lg border-blue-700"
                    >
                        <svg
                            onClick={() => setOpenLoginModal(false)}
                            className="w-10 mx-auto mr-0 "
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                    fill="#000000"
                                ></path>
                            </g>
                        </svg>
                        <h1 className="text-black text-xl text-center pb-5">লগইন</h1>

                        <div className="space-y-1 mt-2">
                            <label htmlFor="email" className="block text-black">
                                ইমেল
                            </label>
                            <div className="relative text-ellipsis">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="ইমেল"
                                    className="p-3 mb-3 block w-full bg-[#9ef9ff] text-black pl-10 drop-shadow-lg rounded-lg outline-none"
                                />
                                <span className="absolute text-black top-1/4 left-2">
                                    <AiOutlineMail />
                                </span>
                            </div>
                            <label htmlFor="password" className=" mt-2 block text-black">
                                পাসওয়ার্ড
                            </label>
                            <div className="relative mt-2">
                                <Input
                                    icon={
                                        showPassword ? (
                                            <FaEye
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                className="text-lg cursor-pointer"
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                className="text-lg cursor-pointer"
                                            />
                                        )
                                    }
                                    required
                                    id="pass"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="p-3 !bg-[#9ef9ff] pl-10 shadow-lg"
                                />
                                <span className="absolute  text-black top-1/4 left-2">
                                    <RiLockPasswordFill />
                                </span>
                            </div>
                        </div>
                        {/* button type will be submit for handling form submission*/}
                        <div className="flex gap-20 justify-center items-center">
                            <button
                                type="submit"
                                className="py-2 text-black before:text-black after:text-black px-6 mb-4 mt-6  rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40  bg-white  relative inline-block font-bold  shadow-2xl shadow-[#141414]"
                            >
                                {loading ? <Spinner /> : "লগইন"}
                            </button>
                            <div className="flex  flex-col justify-start gap-1  items-center  ">
                                <Link
                                    onClick={() => setOpenLoginModal(false)}
                                    to={"/reset-password"}
                                    className="lg:text-[13px] hover:text-[#466320] text-black"
                                >
                                    পাসওয়ার্ড ভুলে গেছেন ?
                                </Link>
                                <Link
                                    onClick={() => setOpenLoginModal(false)}
                                    to="/register"
                                >
                                    {" "}
                                    <h1
                                        onClick={() => setOpenLoginModal(false)}
                                        className="lg:text-[13px] text-black hover:text-[#466320]"
                                    >
                                        একাউন্ট নেই? ফ্রি একাউন্ট খুলুন।
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-[14px] animate-pulse text-[#ab2828]">
                                বি:দ্রঃ সনদ প্রাপ্তির জন্য নিবন্ধিত নাগরিক হিসেবে আপনার
                                ঠিকানা সহ সাধারণ তথ্য দিয়ে প্রোফাইল ১০০% সম্পন্ন করার
                                প্রয়োজনীয়তা রয়েছে।
                            </h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
