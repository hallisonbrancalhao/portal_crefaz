import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        "Accept": "*/*",
        "Content-Type": "application/json;charset=UTF-8",
    },
});
