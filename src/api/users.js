import axiosNew from "./axios";

export const getAllUsers = async () => {
    const { data } = await axiosNew.get("/users");
    return data;
};
