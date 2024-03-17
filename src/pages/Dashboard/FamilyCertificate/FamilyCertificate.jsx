import { Input } from "@material-tailwind/react";

const FamilyCertificate = () => {
  return (
    <div className="bg-[#dce4ea] pb-10  lg:pt-10 lg:min-h-screen">
      <div className="  bg-white  w-full md:w-[90%] lg:w-[98%] mx-auto lg:pb-10">
        <div>
          <h1 className="text-xl  font-bold   text-white md:text-2xl lg:text-xl   text-start lg:pl-2 bg-[#8BC34A] py-2">
            {" "}
            আবেদন > নাগরিক সনদ
          </h1>
        </div>
        <div>
          <h1 className="text-xl  text-center  text-white md:text-2xl lg:text-xl   lg:mt-5 mt-3  lg:pl-2 bg-[#aa2ec3] py-2">
            {" "}
            বাংলায় আবেদন করুন
          </h1>
        </div>
        {/* table one */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">নাম</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">পরিচয়পত্র/জন্ম সনদঃ</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">পিতা/স্বামীঃ</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* table two */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">মাতাঃ</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">গ্রাম/মহল্লা</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">হোল্ডিং নম্বর</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* tabel three */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-[14px] ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">ওয়ার্ড</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">ডাকঘরঃ</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">ইউনিয়ন</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">উপজেলাঃ </h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* tabel three */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">জেলা</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">ছবি (সম্প্রতি তোলা ৫*৫ সে.মি )</h1>
            <Input
              type="file"
              color="blue"
              className="bg-[#c1fffc]  focus:bg-white"
            />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">সংযুক্তি</h1>
            <Input
              type="file"
              color="blue"
              className="bg-[#c1fffc]  focus:bg-white"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-start p-2 md:mx-16 mx-5 mt-5  lg:pt-3 lg:mx-4 lg:px-2 gap-2  lg:mt-10 lg:h-[70px] bg-[#F8DDCC]">
            <input className="mt-1" type="checkbox" name="" id="" />
            <h1 className="text-black  text-[12px] lg:text-[14px]">
              {" "}
              আমি এই মর্মে অঙ্গীকার করছি যে, উপরে বর্ণিত তথ্যাবলী সম্পূর্ণ সত্য।
              যেকোন সময় আমার প্রদত্ত তথ্য অসত্য প্রমাণিত হলে সনদ/প্রত্যয়ন বাতিল
              বলে গণ্য হবে এবং আইনানুগ ব্যবস্থা গ্রহণ করা হবে।
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-9 gap-2 md:gap-2 items-center pb-3 md:pb-5 lg:pb-1  lg:gap-2">
          <button className="bg-[#84BC46] text-white md:py-2 md:px-5 px-4 py-2  lg:py-2 lg:px-5 rounded-md">
            সংরক্ষণ করুন
          </button>
          <button className="bg-[#ea542a] text-white md:py-2 md:px-5 px-4 py-2  lg:py-2 lg:px-5 rounded-md">
            প্রিন্ট করুন
          </button>
        </div>
      </div>
      {/* english form */}
      <div className="  bg-white lg:mt-26 md:mt-20 mt-10  w-full md:w-[90%] lg:w-[98%] mx-auto lg:pb-10">
        <div>
          <h1 className="text-xl    text-white md:text-2xl lg:text-xl   text-start lg:pl-2 bg-[#8BC34A] py-2">
            {" "}
            আবেদন > নাগরিক সনদ
          </h1>
        </div>
        <div>
          <h1 className="text-xl  text-center  text-white md:text-2xl lg:text-xl   lg:mt-5 mt-3  lg:pl-2 bg-[#aa2ec3] py-2">
            {" "}
            ইংরেজিতে আবেদন করুন
          </h1>
        </div>
        {/* table one */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">নাম</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Identity Card/Birth Certificate:</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Father/Husband:</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* table two */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Mother:</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Mahalla</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">District</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* tabel three */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-[14px] ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">Village</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">Upazila</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">Holding no</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
            <h1 className="text-black">Union </h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
        </div>
        {/* tabel three */}
        <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Post office:</h1>
            <Input color="blue" className="bg-[#c1fffc]  focus:bg-white" />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Photograph (Recently taken 5*5 cm)</h1>
            <Input
              type="file"
              color="blue"
              className="bg-[#c1fffc]  focus:bg-white"
            />
          </div>
          <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
            <h1 className="text-black">Attachment</h1>
            <Input
              type="file"
              color="blue"
              className="bg-[#c1fffc]  focus:bg-white"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-start p-2 md:mx-16 mx-5 mt-5  lg:pt-3 lg:mx-4 lg:px-2 gap-2  lg:mt-10 lg:h-[70px] bg-[#F8DDCC]">
            <input className="mt-1" type="checkbox" name="" id="" />
            <h1 className="text-black  text-[12px] lg:text-[14px]">
              {" "}
              I hereby declare that the above information is completely true.
              Certificate/certificate shall be void whenever the information
              provided by me is found to be false will be considered and legal
              action will be taken.
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-9 gap-2 md:gap-2 items-center pb-3 md:pb-5 lg:pb-1  lg:gap-2">
          <button className="bg-[#84BC46] text-white md:py-2 md:px-5 px-4 py-2  lg:py-2 lg:px-5 rounded-md">
            Save
          </button>
          <button className="bg-[#ea542a] text-white md:py-2 md:px-5 px-4 py-2  lg:py-2 lg:px-5 rounded-md">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyCertificate;
