const Profile = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto lg:my-20 my-10 md:my-14   ">
        <div className=" border  border-gray-500  lg:pb-5 ">
          {" "}
          <div className="text-start text-black  lg:p-3     border-b  border-gray-300 ">
            My Account
          </div>
          <div className="flex justify-start w-[97%] lg:px-1 py-2  lg:py-3 mx-auto items-center gap-2 md:gap-5 text-black       border-b  border-gray-300 ">
            <ul>
              <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">My Profile</li>
            </ul>
            <ul>
              <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">Edit Information</li>
            </ul>
            <ul>
              <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">Password</li>
            </ul>
            <ul>
              <li className="text-[11px] md:text-[14px] lg:text-[16px] cursor-pointer">Two Factor Authentication</li>
            </ul>
          </div>
          <div className="lg:m-3 border border-gray-500 ">
            {/* row one */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center bg-[#F2F2F2]">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Type
              </div>
              <div className="lg:w-[600px]  w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  User
                </h1>
              </div>
            </div>
            {/* row two */}
            <div className="flex    hover:bg-[#ECECEC] justify-center ">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Avater
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <img
                  className="lg:h-[90px] h-[70px]"
                  src="https://i.ibb.co/sJYr5mr/images-2.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center bg-[#F2F2F2]">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Name
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  Rafi
                </h1>
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center ">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Phone Number
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  01734327110
                </h1>
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center bg-[#F2F2F2]">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                E-mail Address
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  admin@admin.com
                </h1>
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center ">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Timezone
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  Asia/Dhaka
                </h1>
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center bg-[#F2F2F2]">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Account Created
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="text-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  Sunday, July 9th 2023, 10:11 AM +06 (8 months ago)
                </h1>
              </div>
            </div>
            {/* row three */}
            <div className="flex    hover:bg-[#ECECEC] justify-center items-center ">
              <div className="text-start font-bold  lg:text-[16px] text-[11px] md:text-[15px]  lg:w-[300px] w-[150px] md:w-[200px] text-black  p-3 md:p-3  ">
                Last Updated{" "}
              </div>
              <div className="lg:w-[600px] w-full md:w-full border-l  p-3 md:p-3  border-gray-500  ">
                <h1 className="ttext-black  lg:text-[16px] md:text-[15px] text-[12px]">
                  Monday, March 18th 2024, 2:35 PM +06 (1 hour ago)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
