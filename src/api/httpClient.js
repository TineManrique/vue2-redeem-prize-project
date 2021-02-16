import axios from 'axios';
import { getLocalStorageData } from '../utils/common';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 5000
});

const getAuthToken = () => getLocalStorageData('token');

const authInterceptor = (config) => {
    if (getAuthToken()) {
        config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
    }
    return config;
}

httpClient.interceptors.request.use(authInterceptor);
    
export default httpClient;