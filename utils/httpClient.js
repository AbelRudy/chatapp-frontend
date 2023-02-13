import axios from "axios";

const http = axios.create({
	baseURL: "192.168.0.47:5000/api/v1/",
});

http.interceptors.request.use(
	(config) => {
		if (!config.url.includes("login") && !config.url.includes("signup")) {
			//add headers
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }

)
