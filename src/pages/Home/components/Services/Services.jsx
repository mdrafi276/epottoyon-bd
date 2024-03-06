import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Services = () => {
    const [services, setServices] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="w-full lg:w-2/3 flex-col border-2 border-black lg:flex-row shadow-xl">
            <div className="flex justify-center md:flex-row flex-col gap-5 md:gap-9 items-center py-3">
                <h3 className="text-[#8e53a2] text-3xl  md:text-2xl font-bold">
                    সনদের সেবাসমুহ
                </h3>
                <div className="w-64">
                    <Input
                        icon={<FaMagnifyingGlass />}
                        label="সেবাসমুহ সার্চ করুন"
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                </div>
            </div>

            <div className="h-96 overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {services
                    ?.filter((service) =>
                        service?.label
                            .toLowerCase()
                            .includes(searchInputValue.toLowerCase())
                    )
                    ?.map((service) => (
                        <div
                            className="text-center cursor-pointer shadow-md bg-[#2b5b2e] text-white hover:text-black hover:shadow-lg hover:bg-gray-100 transition-all rounded py-2 h-44 sm:h-fit flex flex-col gap-2 items-center justify-center"
                            key={service?.id}
                        >
                            <img
                                className="w-20 mx-auto rounded-full"
                                src={service?.image}
                                alt={service?.label}
                            />
                            <p className="font-bold">{service.label}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Services;
