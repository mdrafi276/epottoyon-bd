import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CertificateVerification = () => {
    return (
      <div className="bg-[#E9E9E9]   min-h-[60vh]">
        <div className="flex flex-col w-[95%] md:w-[90%] mx-auto lg:w-full lg:flex-row justify-center gap-4  ">
          <div className="lg:w-[900px] bg-white">
            <div>
              {" "}
              <h1 className="bg-[#8CC63F] border-l-4 border-[#665474] text-[#665474] text-xl lg:text-[18px] font-semibold text-center lg:py-2 ">
                সনদ যাচাই করুন
              </h1>
            </div>
            <div className="flex mx-auto lg:mt-8 mt-5 mb-5 md:mb-8  mb-2  md:mt-6  justify-center items-end ">
              <div className=" md:w-[500px] lg:w-[600px]">
                <h1 className="text-[14px] lg:text-[16px] font-bold">
                  আবেদন আইডি নং / সনদ নং *
                </h1>
                <Input
                  color="purple"
                  className="rounded-r-none focus:rounded-r-none"
                />
              </div>
              <div className="flex items-center bg-[#8E53A1] py-2 md:px-5  rounded-r-md justify-center text-white ">
                <FaSearch />
                <button className="">যাচাই করুন</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[400px] bg-white ">
            <div>
              <h1 className="bg-[#8CC63F] border-l-4 border-[#665474] text-[#665474] text-xl lg:text-[18px] font-semibold text-center lg:py-2 ">
                জরুরী প্রয়োজনে
              </h1>
              <p className="text-[15px] lg:text-[15px] p-6 ">
                যদি আপনি কোনো সমস্যার সম্মুখীন হোন অথবা আপনার কোনো জিজ্ঞাসা
                থাকলে আমাদের সাথে যোগাযোগ করতে পারেন। যোগাযোগ করতে{" "}
                <span>
                  <Link
                    to="/contact"
                    className="text-[#3f3349] font-extrabold  text-[16px] hover:text-blue-700 ml-1"
                  >
                    এখানে ক্লিক করুন
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CertificateVerification;