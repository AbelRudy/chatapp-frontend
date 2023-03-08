import axios from "axios";
import ShowToast from "./ShowToast";

const http = axios.create({
    baseURL: "http://172.20.10.4:5000/api/v1/",
});

http.interceptors.request.use(
    function (config) {
        if (!config.url.includes("login") && !config.url.includes("signup")) {
            //add headers
        }
        return config;
    },
    (error) => {
        return error;
    }
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        ShowToast(error.response?.data);
        return error;
    }
);

export default http;
