import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://api.udcbd.net/old_server/v1",
    // baseURL: "http://localhost:5000",
    // timeout: 200,
});

export default axiosSecure;