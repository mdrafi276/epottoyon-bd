import { Link } from "react-router-dom";

const TwoFactorAuthenthication = () => {
    return (
        <div>
      <div className="w-[90%] mx-auto lg:my-20 my-10 md:my-14   ">
        <div className=" border  border-gray-500  lg:pb-5 ">
          {" "}
          <div className="text-start text-black p-3     border-b  border-gray-300 ">
            My Account
          </div>
            <div className="flex justify-start w-[97%] lg:px-1 py-2  lg:py-3 mx-auto items-center gap-2 md:gap-5 text-black       border-b  border-gray-300 ">
        <ul>
          <Link to="/dashboard/profile">
            {" "}
            <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">
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
          <div className="lg:m-3 mb-5">
           
          <h1 className='text-[14px] text-black font-bold  md:text-[16px] lg:text-[24px]'>Two Factor Authentication is Disabled</h1>
            <div><button className="bg-green-500 text-white cursor-pointer mt-2 rounded-md py-2 w-full">Enable Two Factor Authentacation</button></div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TwoFactorAuthenthication;