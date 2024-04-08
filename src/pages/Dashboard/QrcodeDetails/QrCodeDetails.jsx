import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const QrCodeDetails = () => {
    return (
      <div className="bg-[#E9E9E9] min-h-[60vh]">
        <div className="flex justify-center gap-4  ">
          <div className="lg:w-[900px] bg-white">
            <div>
              {" "}
              <h1 className="bg-[#8CC63F] border-l-4 border-[#665474] text-[#665474] text-xl lg:text-[18px] font-semibold text-center lg:py-2 ">
                সনদ যাচাই করুন
              </h1>
            </div>
            <div className="flex mx-auto gap-5 justify-center ">
              <div className="lg:w-[300px]">
                <h1 className="text-[14px] lg:text-[16px] fontt-bold">আবেদন আইডি নং / সনদ নং *</h1>
                <Input label="search" />
              </div>
              <div className="flex items-center justify-center ">
                <FaSearch />
                <button className="py-2 lg:px-5 border border-black rounded-md">
                  যাচাই করুন
                </button>
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
                  {" "}
                  <Link className="text-[#3f3349] font-extrabold  text-[16px] hover:text-blue-700 ml-1">
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

export default QrCodeDetails;