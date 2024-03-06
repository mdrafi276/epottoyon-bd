import { useEffect, useState } from "react";
import ComputerLearn from "../../../ComputerLearn/ComputerLearn";

const LossInformation = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
      <div className=" lg:my-0 align-top container mx-auto lg:py-1  flex flex-col gap-5 lg:flex-row  ">
        <div className="w-full border-2 border-black py-5  flex-col lg:flex-row shadow-xl">
          <div className="flex justify-center md:flex-row flex-col gap-5 md:gap-14 lg:mb-5 items-center py-3">
            <h3 className="bg-[#8e53a2] text-white py-4 rounded w-10/12 text-center text-3xl  md:text-3xl lg:text-[36px] font-semibold">
              হারানো বিজ্ঞপ্তি
            </h3>
          </div>

          <div className="h-96 overflow-y-scroll  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {services.map((service) => (
              <div
                className="text-center bg-[#2B5B2E] cursor-pointer shadow-md text-white hover:text-black hover:shadow-lg hover:bg-gray-100 transition-all rounded p-2 h-auto sm:h-fit flex flex-col gap-2"
                key={service?.id}
              >
                <img
                  className="w-[70px] mx-auto rounded-full"
                  src={service?.image}
                  alt={service?.label}
                />
                <p className="font-bold ">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ComputerLearn />
        </div>
      </div>
    );
};

export default LossInformation;
