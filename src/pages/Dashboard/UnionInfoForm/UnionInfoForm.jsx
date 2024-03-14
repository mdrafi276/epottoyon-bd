import { Input } from "@material-tailwind/react";

const UnionInfoForm = () => {
  return (
    <div>
      <form className="w-[95%] rounded-md  lg:px-0 md:px-24 px-5 mb-3 mt-3  md:mt-8 md:w-[85%] lg:w-[95%] lg:mt-10 lg:py-8  mx-auto border-4 bg-gray-100 border-[#8A569B]">
        {" "}
        <div>
          <h1 className="text-xl text-center border-2 mt-2 bg-[#8A569B]  text-white rounded-xl font-bold file: md:text-2xl md:mt-5 lg:mt-0 lg:text-3xl  py-2">
            Create union Information
          </h1>
        </div>
        <div className=" w-full  justify-center  gap-3 ">
          <div>
            {/* first table */}
            <div className="border-2 border-[#494949] lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#8A569B] lg:py-2 rounded-lg lg:mx-72 text-white font-bold text-[14px] lg:text-[25px]  lg:mt-3 ">
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
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option value="brazil">চট্টগ্রাম</option>
                        <option value="bucharest">রাজশাহী</option>
                        <option value="london">খুলনা</option>
                        <option value="washington">বরিশাল</option>
                        <option value="washington">সিলেট</option>
                        <option value="washington">ঢাকা</option>
                        <option value="washington">রংপুর</option>
                        <option value="washington">ময়মনসিংহ</option>
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
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
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
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
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
                    <Input type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* second table */}
            <div className="border-2 lg:mt-14 border-[#494949] lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#8A569B] lg:py-2 rounded-lg lg:mx-72 text-white font-bold text-[14px] lg:text-[25px] lg:mt-3 ">
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
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option value="brazil">Chittagong</option>
                        <option value="bucharest">Rajshahi</option>
                        <option value="london">Khulna</option>
                        <option value="washington">Barisal</option>
                        <option value="washington">Sylhet</option>
                        <option value="washington">Dhaka</option>
                        <option value="washington">Rangpur</option>
                        <option value="washington">Mymensingh</option>
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
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
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
                    <div className="relative h-10 lg:w-[450px] ">
                      <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
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
                    <Input type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* table three */}
            <div className="border-2 lg:mt-14 border-[#494949] lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#8A569B] lg:py-2 rounded-lg lg:mx-72 text-white font-bold text-[14px] lg:text-[25px] lg:mt-3 ">
                  বাংলা
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      চেয়ারম্যানের নাম *
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      চেয়ারম্যানের মোবাইল নম্বার
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      মোবাইল নাম্বার
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি নম্বার
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ভোটার আইডি কার্ড আপলোড
                    </h1>
                    <Input type="file" />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইমেল
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      পতিস্থানের নাম
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ফেসবুক আইডি লিংক
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইউনিয়ন পরিষদ লোগো *
                    </h1>
                    <Input type="file" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ছবি আপলোড
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* table four */}
            <div className="border-2 lg:mt-14 border-[#494949] lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#8A569B] lg:py-2 rounded-lg lg:mx-72 text-white font-bold text-[14px] lg:text-[25px] lg:mt-3 ">
                  ইংরেজি
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Chairman's Name
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Chairman's mobile number
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Patisthana name
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                  <div className="lg:w-[450px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Voter ID Number
                    </h1>
                    <Input type="text" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* second section */}
          <div>
            <div className="w-full flex justify-center gap-8  mt-3 lg:mt-14 itmes-center ">
              <div>
                <h1 className="text-sm lg:text-[15px] mt-4 text-black text-center ">
                  আনুমোদনের জন্য অপেক্ষা করুন । প্রয়োজনে এডমিনের সাথে কথা বলুনঃ
                  01734327110
                </h1>
              </div>
              <button className="btn  ">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UnionInfoForm;
