import useMainContext from "../../hooks/useMainContext/useMainContext";

const Menu = () => {
    const { mainMenuItems } = useMainContext();
    console.log(mainMenuItems)

    return (
        <nav className="bg-[#efefef]">
            <div className="container mx-auto"></div>
        </nav>
    );
};

export default Menu;
