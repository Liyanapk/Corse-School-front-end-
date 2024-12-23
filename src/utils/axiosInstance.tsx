import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL:'http://localhost:5000'
});

export default AxiosInstance