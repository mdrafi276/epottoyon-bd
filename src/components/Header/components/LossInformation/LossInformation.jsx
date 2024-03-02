
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
      <div className=" lg:my-5 align-top  lg:py-14  flex flex-col gap-5 lg:flex-row  ">
        <div className="w-full border border-gray-300 py-5  lg:min-w-[850px] lg:w-[55%] flex-col lg:flex-row shadow-xl">
        <div className="flex justify-center md:flex-row flex-col gap-5 md:gap-14 lg:mb-5 items-center py-3">
          <h3 className="text-[#8e53a2] text-3xl  md:text-3xl lg:text-[36px] font-semibold">
            হারানো বিজ্ঞপ্তি 
          </h3>
        </div>

        <div className="h-96 overflow-y-scroll  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {services.map((service) => (
            <div
              className="text-center cursor-pointer shadow-md hover:shadow-lg hover:bg-gray-100 transition-all rounded p-2 h-fit flex flex-col gap-2"
              key={service?.id}
            >
              <img
                className="w-[70px] mx-auto rounded-full"
                src={service?.image}
                alt={service?.label}
              />
              <p className="font-bold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ComputerLearn/>
      </div>
      </div>
    );
};

export default LossInformation;