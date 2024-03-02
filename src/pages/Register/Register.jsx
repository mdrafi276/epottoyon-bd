import RedioInput from "../Login/RedioInpot/RedioInput";
import "./InputFild.css"
import "./Button.css"
const Register = () => {
  return (
    <div className="flex w-[85%] my-5 min:h-[500px]  rounded-2xl  py-20 mx-auto  flex-col lg:flex-row">
      <div className="w-[930px] bg-gray-200 lg:pb-20  rounded-l-2xl border-2">
        <h1 className=" text-[15px]  mt-10 lg:text-[26px] font-extrabold  text-center ">
          নাগরিক একাউন্ট তৈরি করুণ{" "}
        </h1>
        <hr />

        <div className=" flex justify-center items-center mt-5">
          <RedioInput />
        </div>
        {/* input one************ */}
        <div className="flex flex-col  justify-center">
          <label
            htmlFor="password"
            className="  lg:ml-[118px] mb-2 block text-black text-[15px] lg:text-[18px] font-bold "
          >
            নাম
          </label>
          <div className="containerss">
            <input
              type="text"
              placeholder="নাম"
              className="inputs lg:w-[70%] mx-auto"
              name="text"
            />
          </div>
        </div>
        {/* input two************ */}

        <div className="flex flex-col  lg:mt-3 justify-center">
          <label
            htmlFor="password"
            className="  lg:ml-[118px]  mb-5 block text-black text-[15px] lg:text-[18px] font-bold "
          >
            ইমেল
          </label>
          <div className="containerss">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="inputs lg:w-[70%] mx-auto"
              name="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:mb-2  mt-5 justify-center">
          <label
            htmlFor="password"
            className="  lg:ml-[118px]  lg:mb-2 block text-black text-[15px] lg:text-[18px] font-bold "
          >
            মোবাইল নাম্বার
          </label>
          <div className="containerss">
            <input
              type="text"
              placeholder="01880384564"
              className="inputs lg:w-[70%] mx-auto"
              name="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:mb-1  mt-5 justify-center">
          <label
            htmlFor="password"
            className="  lg:ml-[118px]  lg:mb-1 block text-black text-[15px] lg:text-[18px] font-bold "
          >
            পাসওয়ার্ড
          </label>
          <div className="containerss">
            <input
              type="password"
              placeholder="পাসওয়ার্ড "
              className="inputs lg:w-[70%] mx-auto"
              name="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:mb-2  mt-5 justify-center">
          <label
            htmlFor="password"
            className="  lg:ml-[118px]  lg:mb-1 block text-black text-[15px] lg:text-[18px] font-bold "
          >
            কনফার্ম পাসওয়ার্ড
          </label>
          <div className="containerss">
            <input
              type="password"
              placeholder="  কনফার্ম পাসওয়ার্ড "
              className="inputs lg:w-[70%] mx-auto"
              name="text"
            />
          </div>
        </div>
        <div className="flex mt-5 justify-center items-center">
          <a href="##" className="btn ">
            {" "}
            নিবন্ধন করুন{" "}
          </a>
        </div>
      </div>

      <div className="w-[500px]  rounded-r-md border-2">
        <h1 className="text-center text-[14px] lg:text-[22px] ">নির্দেশনা</h1>{" "}
        <hr />
      </div>
    </div>
  );
};

export default Register;
