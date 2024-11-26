import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, editingUser, onCancel, isLoading }) {
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        } else {
            setFormData({ name: "", email: "" });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {editingUser ? "Edit User" : "Add User"}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        {isLoading ? 'Loading...' : editingUser ? "Update" : "Add"}
                    </button>
                    {editingUser && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default UserForm;
