import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Services = () => {
    const [services, setServices] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        const filteredServices = services?.filter((service) =>
            service?.label?.includes(value)
        );
        setServices(filteredServices);
    };

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="w-2/3 flex-col lg:flex-row shadow-xl">
            <div className="flex justify-center gap-9 items-center py-3">
                <h3 className="text-[#8e53a2] text-2xl font-semibold">সনদের সেবাসমুহ</h3>
                <div className="w-64">
                    <Input
                        icon={<FaMagnifyingGlass />}
                        label="সেবাসমুহ সার্চ করুন"
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className="h-96 overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {services?.map((service) => (
                    <div
                        className="text-center cursor-pointer shadow rounded p-2 flex flex-col gap-2"
                        key={service?.id}
                    >
                        <img
                            className="w-20 mx-auto"
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
