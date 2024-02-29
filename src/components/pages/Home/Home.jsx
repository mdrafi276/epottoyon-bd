import useMainContext from "../../../hooks/useMainContext/useMainContext";

const Home = () => {
    const { value } = useMainContext();
    console.log(value);

    return <div>homepage</div>;
};

export default Home;
