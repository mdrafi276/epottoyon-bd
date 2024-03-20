import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EditInformation = () => {
    return (
      <div>
        <div className="w-[90%] mx-auto lg:my-20 my-10 md:my-8   ">
          <div className=" border  border-gray-500  lg:pb-5 ">
            {" "}
            <div className="text-start text-black  lg:p-3   p-3  border-b  border-gray-300 ">
              My Account
            </div>
            <div className="flex justify-start w-[97%] lg:px-1 py-2  lg:py-3 mx-auto items-center gap-2 md:gap-5 text-black       border-b  border-gray-300 ">
              <ul>
                <Link to="/dashboard/profile">
                  {" "}
                  <li className="text-[11px]  md:text-[14px] lg:text-[16px] cursor-pointer">
                    My Profile
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/dashboard/edit-information">
                  {" "}
                  <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">
                    Edit Information
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/dashboard/change-password">
                  {" "}
                  <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">
                    Password
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/dashboard/twofactor">
                  <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">
                    Two Factor Authentication
                  </li>
                </Link>
              </ul>
            </div>
            <div className="lg:m-3 py-5 md:py-10 lg:py-5   ">
              {/* row one */}
              <div className="flex w-[80%]  mt-5 mx-auto justify-center  lg:gap-5   lg:mt-8 items-center ">
                <h1 className="text-[12px] md:text-[15px] lg:text-[15px] font-medium  md:w-[150px] w-[80px]   ">
                  Name
                </h1>
                <div className="w-full">
                  <Input type="text" color="blue" />
                </div>
              </div>
              <div className="flex w-[80%]  mt-10 mx-auto justify-center lg:gap-5  lg:mt-14 items-center ">
                <h1 className="text-[12px] md:text-[15px] lg:text-[15px] font-medium  md:w-[150px] w-[80px]   ">
                  Phone Number
                </h1>
                <div className="w-full">
                  <Input type="text" color="blue" />
                </div>
              </div>
              <div className="flex w-[80%]  mt-10 mx-auto mb-10 justify-center  lg:gap-5   lg:mt-14 items-center ">
                <h1 className="text-[12px] md:text-[15px] lg:text-[15px] font-medium  md:w-[150px] w-[80px]   ">
                  E-mail Address
                </h1>
                <div className="w-full">
                  <Input type="text" color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EditInformation;