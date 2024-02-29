import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const useMainContext = () => {
    const values = useContext(MainContext);

    return values;
};

export default useMainContext;
