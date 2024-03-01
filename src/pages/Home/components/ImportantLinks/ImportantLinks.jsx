import { Link } from "react-router-dom";
import useMainContext from "../../../../hooks/useMainContext/useMainContext";
import { FaLink } from "react-icons/fa6";

const ImportantLinks = () => {
    const { importantLinks } = useMainContext();

    return (
        <div className="w-full lg:w-1/3">
            <div className="w-full border-l-4 border-l-[#8a569b] shadow-md py-6 px-3 text-xl text-[#8a569b] font-bold">
                গুরুত্বপূর্ণ লিংক
            </div>

            <div className="h-96 overflow-y-scroll flex flex-col gap-2 py-6">
                {importantLinks?.map((item) => (
                    <Link className="flex items-center gap-3" to={item?.link} key={item?.id}>
                        <FaLink className="text-[#8a569b] text-2xl " />
                        <p className="text-xl font-semibold hover:text-[#8a569b] transition-colors">{item?.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ImportantLinks;
