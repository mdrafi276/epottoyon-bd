import Marquee from "react-fast-marquee";

const NoticeBar = () => {
    return (
        <nav className="flex items-center gap-3 py-3 -4 xl:px-0">
            <b className="text-2xl sm:text-2xl">নোটিশ:</b>
            <Marquee className="text-xl sm:text-xl" pauseOnHover>
                <h3 className="pl-6">আমার প্রথম বাংলা শিরোনাম</h3>
                <h3 className="pl-6">বাংলা ভাষায় একটি মহান শিরোনাম</h3>
                <h3 className="pl-6">বাংলা ভাষায় একটি শিল্প</h3>
            </Marquee>
        </nav>
    );
};

export default NoticeBar;
