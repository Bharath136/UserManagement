import apiClient from "../utils/api";

// Function to fetch a single user by ID
export const getUserById = async (userId) => {
    return await apiClient.get(`/${userId}`);
};

// Function to get users
export const getUsers = async () => {
    return await apiClient.get('/');
};


export const createUser = async (user) => {
    return await apiClient.post('/', user);
};


export const updateUser = async (id, data) => {
    return await apiClient.put(`/${id}`, data);
};


export const removeUser = async (id) => {
    return await apiClient.delete(`/${id}`);
};
