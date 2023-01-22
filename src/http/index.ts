import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL
})

api.interceptors.request.use((config: AxiosRequestConfig<any>): AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default api;