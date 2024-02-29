import Marquee from "react-fast-marquee";

const NoticeBar = () => {
    return (
        <nav className="container mx-auto flex py-3 px-4 xl:px-0">
            <b className="text-2xl sm:text-3xl">নোটিশ:</b>
            <Marquee className="text-xl sm:text-2xl" pauseOnHover>
                <h3>আমার প্রথম বাংলা শিরোনাম</h3>
                <h3>বাংলা ভাষায় একটি মহান শিরোনাম</h3>
                <h3>বাংলা ভাষায় একটি শিল্প</h3>
            </Marquee>
        </nav>
    );
};

export default NoticeBar;
