import  { useEffect, useState } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6';

const PathnarSlideTwo = () => {
   const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/OurPathnerTwo.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
      <div className="w-full lg:w-[98%] mx-auto flex-col lg:flex-row shadow-xl">
        <div className="lg:min-h-[450px]  grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-5">
          {services?.map((service) => (
            <div
              className="text-center flex flex-col justify-center items-center cursor-pointer shadow-md hover:shadow-lg hover:bg-gray-100  rounded p-2 h-fit flex flex-col gap-2"
              key={service?.id}
            >
              <figure className="h-20 w-20 overflow-hidden">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src={service?.image}
                  alt={service?.label}
                />
              </figure>
              <p className="font-bold text-[14px] text-center">
                {service.label}
              </p>
              <p className="font-bold text-[14px] text-center"> Coo, </p>

              <div className="flex justify-center items-center gap-3 ">
                <div>
                  {" "}
                  <FaFacebook className=" text-3xl " />
                </div>
                <div>
                  {" "}
                  <FaWhatsapp className=" text-3xl " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PathnarSlideTwo;