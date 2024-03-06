import { Link } from "react-router-dom";

const ComputerLearn = () => {
    return (
        <div>
            <div className=" w-full lg:w-[400px] lg:h-[600px] py-8 border-2  border-black  flex  flex-col gap-5  ">
                <div className="">
                    <h1 className="text-[16px]  bg-[#a41a88] text-white py-2 w-10/12 rounded mx-auto md:text-[20px]  font-extrabold lg:text-[22px] text-center">
                        কম্পিউটার প্রশিক্ষণ আবেদন
                    </h1>
                </div>
                <div className="p-1 lg:px-2 md:p-5">
                    <Link to="/video">
                        <li className="text-[14px] py-1 bg-[#a41a88] mt-1 pt-4 p-5 rounded-md cursor-pointer h-[50px]    md:text-[15px] lg:text-[15px] font-bold text-white ">
                            লাইভ ক্লাসের জন্য আবেদন করুন
                        </li>
                    </Link>
                    <Link to="/vide">
                        <li className="text-[14px] py-1 bg-[#1b9e35] mt-1 p-5 rounded-md cursor-pointer h-[50px]    md:text-[15px] lg:text-[15px] font-bold text-white">
                            ইউনিয়ন ডিজিটাল সেন্টার থেকে ক্লাসের জন্য আবেদন করুন
                        </li>
                    </Link>
                    <Link to="/video">
                        <li className="text-[14px] py-1 bg-[#1cc5ca] mt-1 pt-4 p-5 rounded-md cursor-pointer h-[50px]    md:text-[15px] lg:text-[15px] font-bold text-white ">
                            {" "}
                            রেকডিং ক্লাস ক্রয় করার জন্য আবেদন করুন
                        </li>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComputerLearn;
