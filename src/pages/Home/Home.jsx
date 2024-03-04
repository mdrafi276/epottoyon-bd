import LossInformation from "../../components/Header/components/LossInformation/LossInformation";
import OurPathner from "../../components/OurPathner/OurPathner";
import ChetegoryList from "./components/ChetegoryList/ChetegoryList";
import Hero from "./components/Hero/Hero";
import ImportantLinks from "./components/ImportantLinks/ImportantLinks";
import NewUnionAd from "./components/NewUnionAd/NewUnionAd";
import Riview from "./components/Riview/Riview";
import Services from "./components/Services/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <ChetegoryList />
            <div className="container mx-auto mt-9 flex flex-col lg:flex-row gap-4 px-4 xl:px-0">
            <Services />
            <ImportantLinks />
            </div>
            <NewUnionAd />
            <LossInformation/>
            <OurPathner/>
            <Riview/>
            
        </>
    );
};

export default Home;
