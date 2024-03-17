import axios from "axios";

const axiosNew = axios.create({
    baseURL: "https://api.udcbd.net/new_server/v1",
    // baseURL: "http://localhost:5000/new_server/v1",
    // timeout: 200,
});

export default axiosNew;