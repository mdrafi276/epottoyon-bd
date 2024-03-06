import { useEffect, useState } from "react";
import { FaCalendarWeek } from "react-icons/fa6";

const NewUnionAd = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch("/new-union-ad.json")
            .then((res) => res.json())
            .then((data) => setAds(data));
    }, []);

    const formatDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <section className="container mx-auto py-3 space-y-6 px-4 xl:px-0">
            <h2 className="text-2xl font-semibold text-center p-4 shadow-lg rounded mx-auto text-white bg-[#8e53a2]">
                আমাদের সাথে ইউনিয়ন পরিষদ
            </h2>

            <div className="space-y-3 h-96 overflow-y-scroll">
                {ads?.map((ad) => (
                    <div
                        key={ad?.id}
                        className="flex flex-col sm:flex-row items-center gap-4 border-2 border-1-[#] shadow p-2 rounded group"
                    >
                        <div className="flex justify-between items-center bg-[#8e53a2] rounded text-white px-3 py-4 box-content w-full sm:w-80 xl:w-40">
                            <FaCalendarWeek className="text-white" />
                            <p>{formatDate(ad?.time)}</p>
                        </div>
                        <span className="text-xl font-semibold group-hover:text-[#8e53a2] transition-colors">
                            {ad?.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewUnionAd;
