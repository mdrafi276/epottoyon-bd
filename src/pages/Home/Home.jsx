import ChetegoryList from "./components/ChetegoryList/ChetegoryList";
import Hero from "./components/Hero/Hero";
import ImportantLinks from "./components/ImportantLinks/ImportantLinks";
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
        </>
    );
};

export default Home;
