import { Input } from "@material-tailwind/react";

const UserInfoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const ইমেল = form.ইমেল.value;
    const InstitutionName = form.InstitutionName.value;
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const name = form.name.value;
    const ছবি = form.ছবি.value;
    const পতিস্থানেরলোগোআপলোড = form.পতিস্থানেরলোগোআপলোড.value;
    const ব্যাবহারকারীরঠিকানা = form.ব্যাবহারকারীরঠিকানা.value;
    const মোবাইলনাম্বার = form.মোবাইলনাম্বার.value;
    const আইডিকার্আপলোড = form.আইডিকার্আপলোড.value;
    const পতিস্থানেরনাম = form.পতিস্থানেরনাম.value;
    const নাম = form.নাম.value;

    console.log(
      ইমেল,
      InstitutionName,
      address,
      phoneNumber,
      name,
      পতিস্থানেরলোগোআপলোড,
      ব্যাবহারকারীরঠিকানা,
      মোবাইলনাম্বার,
      আইডিকার্আপলোড,
      পতিস্থানেরনাম,
      নাম,
      ছবি
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[96%] rounded-md md:pb-10 pb-5 lg:px-0 md:px-10   px-3 mb-3 mt-3  md:mt-8 md:w-[95%] lg:w-[90%] lg:mt-10 lg:py-8  mx-auto border-4 bg-gray-100 border-[#8A569B]"
      >
        {" "}
        <div>
          <h1 className="text-xl text-center border-2 mt-2 bg-[#8A569B]  text-white rounded-xl font-bold file: md:text-2xl lg::mt-5 lg:mt-0 lg:text-3xl  py-2">
            Create User Information
          </h1>
        </div>
        <div className=" w-full  justify-center  gap-3 ">
          <div>
            {/* first table */}
            <div className="border-2 md:pb-5 md:p-4 mt-4 pb-4 p-3 border-[#494949] md:mt-5  lg:m-3 py-2 ">
              <div>
                <h1 className="text-center bg-[#569b76] py-2  md:py-2 lg:py-2 rounded-lg lg:mx-[360px] md:mx-[250px] text-white font-bold text-[14px] md:text-[17px] lg:text-[25px]  lg:mt-3 ">
                  বাংলা
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <div>
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      নাম
                    </h1>
                    <Input className="bg-cyan-50" name="নাম" type="text" />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ইমেল
                    </h1>
                    <Input className="bg-cyan-50" name="ইমেল" type="email" />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      প্রতিষ্ঠানের নাম
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="পতিস্থানেরনাম"
                      type="text"
                    />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      আইডি কার্ড আপলোড
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="আইডিকার্আপলোড"
                      type="file"
                    />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      মোবাইল নাম্বার
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="মোবাইলনাম্বার"
                      type="text"
                    />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ব্যাবহারকারীর ঠিকানা
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="ব্যাবহারকারীরঠিকানা"
                      type="text"
                    />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      প্রতিষ্ঠানের লোগো আপলোড
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="পতিস্থানেরলোগোআপলোড"
                      type="file"
                    />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      ছবি আপলোড
                    </h1>
                    <Input className="bg-cyan-50" name="ছবি" type="file" />
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
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Name
                    </h1>
                    <Input className="bg-cyan-50" name="name" type="text" />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Phone Number
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="phoneNumber"
                      type="text"
                    />
                  </div>{" "}
                </div>
                <div>
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Address
                    </h1>
                    <Input className="bg-cyan-50" name="address" type="text" />
                  </div>{" "}
                  <div className="lg:w-[420px] mt-2">
                    <h1 className="text-sm pt-5 lg:text-[16px]  text-black  pl-4 mb-2">
                      Institution Name
                    </h1>
                    <Input
                      className="bg-cyan-50"
                      name="InstitutionName"
                      type="text"
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* table three */}
          </div>
          {/* second section */}
          <div>
            <div className="w-full flex justify-center gap-1 md:gap-8  mt-3 lg:mt-14 itmes-center ">
              <div>
                <h1 className="text-[11px] md:text-[14px] lg:text-[15px] mt-1 text-black text-center ">
                  উপরোক্ত তথ্য দিয়ে আমাদেরকে সহযোগিতা করুন । প্রয়োজনে এডমিনের
                  সাথে কথা বলুনঃ 01734327110
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

export default UserInfoForm;
