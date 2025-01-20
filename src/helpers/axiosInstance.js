import axios from "axios";
import { COINGEKO_API_URL } from "./constant";

const axiosInstance = axios.create({

    //starting part of the url
    baseURL: COINGEKO_API_URL,
});
export default axiosInstance;