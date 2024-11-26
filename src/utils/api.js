import axios from 'axios';


export const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const apiStatusConstants = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    IN_PROGRESS: 'IN_PROGRESS',
};

export const apiClientJson = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});


const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiClient;
