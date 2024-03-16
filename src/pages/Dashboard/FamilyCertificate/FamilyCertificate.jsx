import { Input } from "@material-tailwind/react";

const FamilyCertificate = () => {
      return (
        <div className="bg-[#dce4ea] mb-10  lg:pt-10 lg:min-h-screen">
          <div className="  bg-white  w-full md:w-[90%] lg:w-[98%] mx-auto lg:pb-10">
            <div>
              <h1 className="text-xl    text-white md:text-2xl lg:text-xl   text-start lg:pl-2 bg-[#8BC34A] py-2">
                {" "}
                আবেদন > নাগরিক সনদ
              </h1>
            </div>
            {/* table one */}
            <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">নাম</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">পরিচয়পত্র/জন্ম সনদঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">পিতা/স্বামীঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
            </div>
            {/* table two */}
            <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">মাতাঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">মহল্লা</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">জেলা</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
            </div>
            {/* tabel three */}
            <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-[14px] ">
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
                <h1 className="text-black">গ্রামঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
                <h1 className="text-black">উপজেলাঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
                <h1 className="text-black">হোল্ডিং নম্বর</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[230px]">
                <h1 className="text-black">ইউনিয়ন </h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
            </div>
            {/* tabel three */}
            <div className="flex flex-col lg:flex-row  md:px-16 lg:px-0 px-5  lg:mt-5  justify-center lg:gap-8 ">
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">ডাকঘরঃ</h1>
                <Input color="blue" className="bg-cyan-100  focus:bg-white" />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">ছবি (সম্প্রতি তোলা ৫*৫ সে.মি )</h1>
                <Input
                  type="file"
                  color="blue"
                  className="bg-cyan-100  focus:bg-white"
                />
              </div>
              <div className="w-full lg:mt-0 md:mt-4 mt-3 lg:w-[300px]">
                <h1 className="text-black">সংযুক্তি</h1>
                <Input
                  type="file"
                  color="blue"
                  className="bg-cyan-100  focus:bg-white"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-start p-2 md:mx-16 mx-5 mt-5  lg:pt-3 lg:mx-4 lg:px-2 gap-2  lg:mt-10 lg:h-[70px] bg-[#F8DDCC]">
                <input type="checkbox" name="" id="" />
                <h1 className="text-black text-[12px] lg:text-[14px]">
                  {" "}
                  আমি এই মর্মে অঙ্গীকার করছি যে, উপরে বর্ণিত তথ্যাবলী সম্পূর্ণ
                  সত্য। যেকোন সময় আমার প্রদত্ত তথ্য অসত্য প্রমাণিত হলে
                  সনদ/প্রত্যয়ন বাতিল বলে গণ্য হবে এবং আইনানুগ ব্যবস্থা গ্রহণ করা
                  হবে।
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
};

export default FamilyCertificate;