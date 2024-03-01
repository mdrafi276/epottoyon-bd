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
        <section className="container mx-auto py-20 space-y-6">
            <h2 className="text-2xl font-semibold text-center text-[#8e53a2]">
                আমাদের সাথে ইউনিয়ন পরিষদ
            </h2>

            <div className="space-y-3">
                {ads?.map((ad) => (
                    <div key={ad?.id} className="flex">
                        <span
                            style={{ borderRadius: "0px 5px 5px 0px" }}
                            className="flex justify-between items-center bg-[#8e53a2] text-white px-8 box-content w-32"
                        >
                            <FaCalendarWeek className="text-white" />
                            {formatDate(ad?.time)}
                        </span>
                        <span className="text-xl font-semibold">{ad?.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewUnionAd;
