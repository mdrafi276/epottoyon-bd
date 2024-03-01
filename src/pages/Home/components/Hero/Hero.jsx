import { Carousel, IconButton } from "@material-tailwind/react";
import Slide from "./Slide";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 container mx-auto my-9 px-8 sm:px-0">
            <Carousel
                autoplay
                loop
                className="rounded-xl  shadow-2xl"
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <Slide />
                <Slide />
                <Slide />
                <Slide />
            </Carousel>

                <Link to="/login">
                    <div className="flex flex-col md:py-0 py-5 justify-center shadow-2xl rounded-xl shadow-[#898989] cursor-pointer items-center  h-full md:h-[270px] lg:h-[380px] w-full lg:w-[350px] xl:w-400 bg-[#8E53A2]">
                        <figure className="md:w-[70px]  w-[50px] lg:w-[80px]">
                            <img
                                className=" w-full lg:mb-6 rounded-full"
                                src="https://prottoyon.gov.bd/upload/backend/certificate_image/CRT20231227112845OL.svg"
                                alt=""
                            />
                        </figure>
                        <h1 className=" md:text-[25px]  text-[28px]  mt-2 lg:text-[38px] text-white font-semibold">
                            উত্তরাধিকার সনদ{" "}
                        </h1>
                        <h1 className=" md:-text-[15px] text-[15px] mt-1 lg:text-[24px] lg:mt-8 py-1 px-5 rounded-xl lg:mb-11 bg-[#8CC63F] text-white font-semibold">
                            আবেদন করুণ{" "}
                        </h1>
                    </div>
                </Link>
        </div>
    );
};

export default Hero;
