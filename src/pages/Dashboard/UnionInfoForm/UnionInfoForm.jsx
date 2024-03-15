import { Input } from "@material-tailwind/react";
import { useState } from "react";

const UnionInfoForm = () => {

  const [selectedRole1, setSelectedRole1] = useState("")
  const [selectedRole2, setSelectedRole2] = useState("")
  const [selectedRole3, setSelectedRole3] = useState("")
  const [selectedRole4, setSelectedRole4] = useState("")
  const [selectedRole5, setSelectedRole5] = useState("")
  const [selectedRole6, setSelectedRole6] = useState("")

    const handleChange1 = (event) => {
      setSelectedRole1(event.target.value);
    };
    const handleChange2 = (event) => {
      setSelectedRole2(event.target.value);
    };
    const handleChange3 = (event) => {
      setSelectedRole3(event.target.value);
    };
    const handleChange4 = (event) => {
      setSelectedRole4(event.target.value);
    };
    const handleChange5 = (event) => {
      setSelectedRole5(event.target.value);
    };
    const handleChange6 = (event) => {
      setSelectedRole6(event.target.value);
    };
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    const ইউনিয়নপরিষদেরনাম = form.ইউনিয়নপরিষদেরনাম.value;
    const VoterIDNumber = form.VoterIDNumber.value;
    const PatisthanaName = form.PatisthanaName.value;
    const ChairmanMobileNumber = form.ChairmanMobileNumber.value;
    const ChairmanName = form.ChairmanName.value;
    const ছবিআপলোড = form.ছবিআপলোড.value;
    const ইউনিয়নপরিষদলোগো = form.ইউনিয়নপরিষদলোগো.value;
    const ফেসবুকআইডিলিংক = form.ফেসবুকআইডিলিংক.value;
    const পতিস্থানেরনাম = form.পতিস্থানেরনাম.value;
    const ভোটারআইডিকার্ডআপলোড = form.ভোটারআইডিকার্ডআপলোড.value;
    const ভোটারআইডিনম্বার = form.ভোটারআইডিনম্বার.value;
    const মোবাইলনাম্বার = form.মোবাইলনাম্বার.value;
    const চেয়ারম্যানেরমোবাইলনম্বার = form.চেয়ারম্যানেরমোবাইলনম্বার.value;
    const UnionParishadName = form.UnionParishadName.value;
    const ইমেল = form.ইমেল.value;
    const চেয়ারম্যানেরনাম = form.চেয়ারম্যানেরনাম.value;
    

console.log(
  selectedRole1,
  selectedRole2,
  selectedRole3,
  selectedRole4,
  selectedRole5,
  selectedRole6,
  ইউনিয়নপরিষদেরনাম,
  ইমেল,
  UnionParishadName,
  VoterIDNumber,
  PatisthanaName,
  ChairmanMobileNumber,
  ChairmanName,
  ছবিআপলোড,
  ইউনিয়নপরিষদলোগো,
  ফেসবুকআইডিলিংক,
  পতিস্থানেরনাম,
  ভোটারআইডিনম্বার,
  মোবাইলনাম্বার,
  চেয়ারম্যানেরমোবাইলনম্বার,
  চেয়ারম্যানেরনাম,
  ভোটারআইডিকার্ডআপলোড
);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[96%] rounded-md md:pb-10 pb-5 lg:px-0 md:px-10   px-3 mb-3 mt-3  md:mt-8 md:w-[95%] lg:w-[95%] lg:mt-10 lg:py-8  mx-auto border-4 bg-gray-100 border-[#8A569B]"
      >
        {" "}
        <div>
          <h1 className="text-xl text-center border-2 mt-2 bg-[#8A569B]  text-white rounded-xl font-bold file: md:text-2xl lg::mt-5 lg:mt-0 lg:text-3xl  py-2">
            Create union Information
          </h1>
        </div>
        <div className=" w-full  justify-center  gap-3 ">
          <div>
            {/* first table */}
            <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                  বাংলায়
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2 ">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      বিভাগ *
                    </h1>
                    <div className="relative h-10 lg:w-[450px] ">
                      <select
                        onChange={handleChange1}
                        className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      >
                        <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                        <option value="রাজশাহী">রাজশাহী</option>
                        <option value="খুলনা">খুলনা</option>
                        <option value="বরিশাল">বরিশাল</option>
                        <option value="সিলেট">সিলেট</option>
                        <option value="ঢাকা">ঢাকা</option>
                        <option value="রংপুর">রংপুর</option>
                        <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        নির্বাচন করুন
                      </label>
                    </div>
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      থানা / উপজেলা *
                    </h1>
                    <div className="relative h-10 lg:w-[450px] ">
                      <select
                        onChange={handleChange2}
                        className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      >
                        <option value="brazil">Brazil</option>
                        <option value="bucharest">Bucharest</option>
                        <option value="london">London</option>
                        <option value="washington">Washington</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        নির্বাচন করুন
                      </label>
                    </div>
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      জেলা *
                    </h1>
                    <div className="relative h-10 lg:w-[450px] ">
                      <select
                        onChange={handleChange3}
                        className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      >
                        <option value="brazil">Brazil</option>
                        <option value="bucharest">Bucharest</option>
                        <option value="london">London</option>
                        <option value="washington">Washington</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        নির্বাচন করুন
                      </label>
                    </div>
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইউনিয়ন পরিষদের নাম *
                    </h1>
                    <Input className="bg-cyan-50" name="ইউনিয়নপরিষদেরনাম" type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* second table */}
            <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                  ইংরেজি
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2 ">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Divition
                    </h1>
                    <div className="relative h-10 lg:w-[450px] ">
                      <select
                        onChange={handleChange4}
                        className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      >
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Mymensingh">Mymensingh</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        select
                      </label>
                    </div>
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Thana / Upazila
                    </h1>
                    <div className="relative h-10 lg:w-[450px] ">
                      <select
                        onChange={handleChange5}
                        className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      >
                        <option value="brazil">Brazil</option>
                        <option value="bucharest">Bucharest</option>
                        <option value="london">London</option>
                        <option value="washington">Washington</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        নির্বাচন করুন
                      </label>
                    </div>
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Zila
                    </h1>
                    <div
                      onChange={handleChange6}
                      className="relative h-10 lg:w-[450px] "
                    >
                      <select className="peer h-full bg-cyan-50 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option value="brazil">Brazil</option>
                        <option value="bucharest">Bucharest</option>
                        <option value="london">London</option>
                        <option value="washington">Washington</option>
                      </select>
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Seclet
                      </label>
                    </div>
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Union Parishad Name
                    </h1>
                    <Input className="bg-cyan-50" name="UnionParishadName" type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* table three */}
            <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                  বাংলা
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      চেয়ারম্যানের নাম *
                    </h1>
                    <Input className="bg-cyan-50" name="চেয়ারম্যানেরনাম" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      চেয়ারম্যানের মোবাইল নম্বার
                    </h1>
                    <Input className="bg-cyan-50" name="চেয়ারম্যানেরমোবাইলনম্বার" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      মোবাইল নাম্বার
                    </h1>
                    <Input className="bg-cyan-50" name="মোবাইলনাম্বার" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি নম্বার
                    </h1>
                    <Input className="bg-cyan-50" name="ভোটারআইডিনম্বার" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি কার্ড আপলোড
                    </h1>
                    <Input className="bg-cyan-50" name="ভোটারআইডিকার্ডআপলোড" type="file" />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইমেল
                    </h1>
                    <Input className="bg-cyan-50" name="ইমেল" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      পতিস্থানের নাম
                    </h1>
                    <Input className="bg-cyan-50" name="পতিস্থানেরনাম" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ফেসবুক আইডি লিংক
                    </h1>
                    <Input className="bg-cyan-50" name="ফেসবুকআইডিলিংক" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইউনিয়ন পরিষদ লোগো *
                    </h1>
                    <Input className="bg-cyan-50" name="ইউনিয়নপরিষদলোগো" type="file" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ছবি আপলোড
                    </h1>
                    <Input className="bg-cyan-50" name="ছবিআপলোড" type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* table four */}
            <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                  ইংরেজি
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Chairman's Name
                    </h1>
                    <Input className="bg-cyan-50" name="ChairmanName" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Chairman's mobile number
                    </h1>
                    <Input className="bg-cyan-50" name="ChairmanMobileNumber" type="text" />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Patisthana name
                    </h1>
                    <Input className="bg-cyan-50" name="PatisthanaName" type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Voter ID Number
                    </h1>
                    <Input className="bg-cyan-50" name="VoterIDNumber" type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* second section */}
          <div>
            <div className="w-full flex justify-center gap-1 md:gap-8  mt-3 lg:mt-14 itmes-center ">
              <div>
                <h1 className="text-[11px] md:text-[14px] lg:text-[15px] mt-1 text-black text-center ">
                  আনুমোদনের জন্য অপেক্ষা করুন । প্রয়োজনে এডমিনের সাথে কথা বলুনঃ
                  01734327110
                </h1>
              </div>
              <button className=" md:py-2 md:px-4 px-4 rounded-xl bg-black text-white ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UnionInfoForm;
