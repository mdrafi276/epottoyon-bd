import ChetegoryList from "./components/ChetegoryList/ChetegoryList";
import Hero from "./components/Hero/Hero";
import ImportantLinks from "./components/ImportantLinks/ImportantLinks";
import NewUnionAd from "./components/NewUnionAd/NewUnionAd";
import Services from "./components/Services/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <ChetegoryList />
            <div className="container mx-auto mt-9 flex gap-4">
                <Services />
                <ImportantLinks />
            </div>
            <NewUnionAd />
        </>
    );
};

export default Home;
