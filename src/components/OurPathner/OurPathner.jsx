import { Carousel, IconButton } from "@material-tailwind/react";
import PathnarSlideOne from "./PathnarSlideOne";
import PathnarSlideTwo from "./PathnerSlidetwo";

const OurPathner = () => {
    return (
        <div className="my-10 container mx-auto mb-20">
            <div className="flex justify-center md:flex-row flex-col gap-5 md:gap-9 items-center py-3 ">
                <h3 className="bg-[#8e53a2] text-white w-10/12 mx-auto rounded py-4 text-3xl mb-20 text-center md:text-[36px] font-semibold">
                    আমাদের পাঠনার
                </h3>
            </div>
            <Carousel
                autoplay
                loop
                className="rounded-xl  shadow-2xl"
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="black"
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
                        color="black"
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
                <PathnarSlideOne />
                <PathnarSlideTwo />
            </Carousel>
        </div>
    );
};

export default OurPathner;
