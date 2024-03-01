import { useEffect } from "react";

const NewUnionAd = () => {
    useEffect(() => {
        fetch("/");
    }, []);

    return (
        <section className="container mx-auto py-20">
            <h2 className="text-3xl font-bold text-center">আমাদের সাথে ইউনিয়ন পরিষদ</h2>
        </section>
    );
};

export default NewUnionAd;
