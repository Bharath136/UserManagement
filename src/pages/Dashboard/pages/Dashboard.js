import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import { createUser, getUsers, removeUser, updateUser } from "../../../services/userServices";
import { getErrorHandler, postErrorHandler } from "../../../ui/errorHandler";
import { apiStatusConstants } from "../../../utils/api";
import Loader from "../../../ui/Loader";
import Failure from "../../../ui/Failure";

const Dashboard = () => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL);
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    // Fetch Users
    const fetchUsers = async () => {
        setApiStatus(apiStatusConstants.IN_PROGRESS);
        try {
            const response = await getUsers();
            setUsers(response.data);
            setApiStatus(apiStatusConstants.SUCCESS);
        } catch (error) {
            setApiStatus(apiStatusConstants.FAILURE);
            getErrorHandler(error)
            setError(error);
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Add User
    const addUser = async (user) => {
        setIsLoading(true)
        try {
            const response = await createUser(user);
            setUsers([...users, response.data]);
            setIsLoading(false)
        } catch (error) {
            postErrorHandler(error);
            console.error("Error adding user:", error);
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    };

    // Edit User
    const editUser = async (updatedUser) => {
        setIsLoading(true)
        try {
            await updateUser(updatedUser.id, updatedUser);
            setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
            setEditingUser(null);
            setIsLoading(false)
        } catch (error) {
            postErrorHandler(error);
            console.error("Error editing user:", error);
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    };

    // Delete User
    const deleteUser = async (id) => {
        try {
            await removeUser(id);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            postErrorHandler(error);
            console.error("Error deleting user:", error);
        }
    };

    // Render User Components
    const usersComponents = () => (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Management Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UserTable users={users} onEdit={setEditingUser} onDelete={deleteUser} />
                <UserForm
                    onSubmit={editingUser ? editUser : addUser}
                    editingUser={editingUser}
                    isLoading={isLoading}
                    onCancel={() => setEditingUser(null)}
                />
            </div>
        </div>
    );

    // Conditional Rendering
    const renderComponents = () => {
        switch (apiStatus) {
            case apiStatusConstants.IN_PROGRESS:
                return <Loader />;
            case apiStatusConstants.SUCCESS:
                return usersComponents();
            case apiStatusConstants.FAILURE:
                return <Failure error={error} />;
            default:
                return <Loader />;
        }
    };

    return renderComponents();
};

export default Dashboard;
