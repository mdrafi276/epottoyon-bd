import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { resetPassword, setOpenLoginModal, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target.email.value;

        try {
            await resetPassword(email);
            setLoading(false);
            alert("পাসওয়ার্ড রিসেট ইমেল পাঠানো হয়েছে। দয়া করে ইমেইল চেক করুন");
            await logOut();
            await navigate("/");
            setOpenLoginModal(true);
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-[calc(100vh-355px)]">
            <form onSubmit={handleResetPassword} className="w-10/12 sm:w-2/3 lg:w-1/2">
                <h3 className="text-lg sm:text-2xl xl:text-3xl text-center pb-4 font-bold">
                    পাসওয়ার্ড রিসেটের জন্য আপনার একাউন্ট এর ইমেইলটি লিখুন।
                </h3>
                <div className="flex flex-col gap-2">
                    <input
                        required
                        name="email"
                        id="email"
                        type="email"
                        placeholder="ইমেল"
                        className="p-3 bg-[#9ef9ff] text-black drop-shadow-lg rounded-lg outline-none"
                    />

                    <Button type="submit" color="blue">
                        {loading ? <Spinner className="mx-auto" /> : "রিসেট ইমেইল পাঠান"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
