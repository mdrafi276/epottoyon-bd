import { Link } from "react-router-dom";

const ComputerLearn = () => {
    return (
      <div>
        <div className=" w-full lg:w-[400px] lg:h-[600px] pt-8 border-2 overflow-y-scroll border-black  flex  flex-col gap-5  ">
          <div className="">
            <h1 className="text-[16px]  bg-[#a41a88] text-white py-2 w-10/12 rounded mx-auto md:text-[20px]  font-extrabold lg:text-[22px] text-center">
              কম্পিউটার প্রশিক্ষণ আবেদন
            </h1>
          </div>
          <div className="p-1 lg:px-2 md:pt-5 pl-4 pr-4">
            <Link to="/video">
              <li className="text-[14px] py-1 bg-[#a41a88] mt-1 pt-4 p-5 rounded-md cursor-pointer h-[50px]    md:text-[15px] lg:text-[15px] font-bold text-white ">
                লাইভ ক্লাসের জন্য আবেদন করুন
              </li>
            </Link>
            <Link to="/vide">
              <li className="text-[14px] py-1 bg-[#1b9e35] mt-1 p-5 rounded-md cursor-pointer h-[50px]    md:text-[14px] lg:text-[14px] font-bold text-white">
                ইউনিয়ন ডিজিটাল সেন্টার থেকে ক্লাসের জন্য আবেদন করুন
              </li>
            </Link>
            <Link to="/video">
              <li className="text-[14px] pt-1 bg-[#1cc5ca] mt-1  pl-5 pr-5  rounded-md cursor-pointer h-[50px]    md:text-[15px] lg:text-[15px] font-bold text-white ">
                {" "}
                রেকডিং ক্লাস ক্রয় করার জন্য আবেদন করুন
              </li>
            </Link>
          </div>
          <div className="w-[95%] mx-auto">
            <hr />
          </div>
          <div>
            <h1 className="text-white py-2 mx-3 lg:mx-8 text-2xl md:text-2xl bg-[#a41a88]  rounded-md  font-bold text-center">
              সামাজিক যোগাযোগ
            </h1>
          </div>
          <div className="w-[95%] flex flex-col justify-center items-center mx-auto">
            <a  href="https://web.facebook.com/udcbd.2023/?_rdc=1&_rdr">
              {" "}
              <img
                className="w-ful hover:cursor-pointer "
                src="https://prottoyon.gov.bd/frontend/images/facebook.PNG"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
};

export default ComputerLearn;
