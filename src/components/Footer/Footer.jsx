import logoset from "../../assets/a2i_logoset.png";
import googlePlayImage from "../../assets/google-play.png";
import maynaHostImage from "../../assets/maynahost.png";
import {
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaCircleInfo,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" container  mx-auto bg-gray-200 border-t-4 border-t-[#8a569b] py-6 px-4 xl:px-0">
            <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
                <div>
                     <h4 className="font-bold text-xl">পরিকল্পনা ও বাস্তবায়নে</h4>
                    <img className="w-10/12" src={logoset} alt="Footer logoset" />
                </div>
                <div className="space-y-3">
                     <h4 className="font-bold text-xl">সামাজিক যোগাযোগ</h4>
                    <div className="flex text-xl gap-2 text-white">
                        <FaFacebookF className="bg-[#8a569b] p-1 box-content rounded " />
                        <FaXTwitter className="bg-[#8a569b] p-1 box-content rounded " />
                        <FaYoutube className="bg-[#8a569b] p-1 box-content rounded " />
                    </div>
                </div>
                <div>
                     <h4 className="font-bold text-xl">উদ্যোক্তা অ্যাপ</h4>
                    <img className="w-36" src={googlePlayImage} alt="Footer logoset" />
                </div>
                <div>
                     <h4 className="font-bold text-xl">কারিগরি সহায়তায়</h4>
                    <img className="w-9/12" src={maynaHostImage} alt="Footer logoset" />
                </div>
                <div className="space-y-3">
                     <h4 className="font-bold text-xl">জরুরী প্রয়োজনে</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <FaPhone className="bg-[#8a569b] p-1 box-content rounded text-white" />
                            <a href="+8801619152852">+৮৮০ ১৬১৯ ১৫২৮৫২</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="bg-[#8a569b] p-1 box-content rounded text-white" />
                            <a href="+8801619152852">asdf@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCircleInfo className=" bg-[#8a569b] p-1 box-content rounded h-fit text-white" />
                            <a href="mailto:asdf@gmail.com">
                                সকাল ৯টা থেকে বিকেল ৫টা
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
