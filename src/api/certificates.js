import axiosSecure from ".";

export const getAllCertificates = async () => {
    const { data } = await axiosSecure.get("/blogs");
    return data;
};

export const getUnions = async (upazillaId) => {
    const { data } = await axiosSecure.get(`/unions?upazillaId=${upazillaId}`);
    return data;
};

export const getUpazillas = async (districtId) => {
    const { data } = await axiosSecure.get(`/upazillas?districtId=${districtId}`);
    return data;
};

export const getDistricts = async (divisionId) => {
    const { data } = await axiosSecure.get(`/districts?divisionId=${divisionId}`);
    return data;
};

export const getDivisions = async () => {
    const { data } = await axiosSecure.get("/divisions");
    return data;
};

export const uploadImage = async (image) => {
    //will take the full image variable as an argument
    const formData = new FormData();
    formData.append("image", image);

    const { data } = await axiosSecure.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBbApiKey}`,
        formData
    );

    return data;
};

export const addUser = async (newUser) => {
    const { data } = await axiosSecure.post("/users", newUser);
    return data;
};

export const makeUserVerified = async (email) => {
    const { data } = await axiosSecure.patch(`/users/make-user-verified?email=${email}`);
    return data;
};

export const checkIfUserExists = async (email) => {
    const { data } = await axiosSecure.get(`/users/check-email?email=${email}`);
    return data;
};

export const getUser = async (email) => {
    const { data } = await axiosSecure.get(`/users/get-user?email=${email}`);
    return data;
};

export const comparePassword = async (email, password) => {
    const { data } = await axiosSecure.post("/users/compare-password", {
        email,
        password,
    });
    return data;
};
