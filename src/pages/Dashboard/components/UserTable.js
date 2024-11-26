import React from "react";

function UserTable({ users, onEdit, onDelete, isLoadingDelete }) {
    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Users</h2>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto hidden lg:block">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b py-2 px-4 text-left">ID</th>
                            <th className="border-b py-2 px-4 text-left">Name</th>
                            <th className="border-b py-2 px-4 text-left">Email</th>
                            <th className="border-b py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="border-b py-2 px-4">{user.id}</td>
                                <td className="border-b py-2 px-4">{user.name}</td>
                                <td className="border-b py-2 px-4">{user.email}</td>
                                <td className="border-b py-2 px-4 flex gap-2">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        onClick={() => onEdit(user)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={`bg-red-500 text-white px-3 py-1 rounded ${isLoadingDelete === user.id
                                                ? "cursor-not-allowed bg-red-300"
                                                : "hover:bg-red-600"
                                            }`}
                                        onClick={() => !isLoadingDelete && onDelete(user.id)}
                                        disabled={isLoadingDelete === user.id}
                                    >
                                        {isLoadingDelete === user.id ? "Deleting..." : "Delete"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Responsive Card View for Small Screens */}
            <div className="block lg:hidden">
                {users.map((user) => (
                    <div key={user.id} className="bg-gray-50 shadow rounded-lg p-4 mb-4">
                        <p className="text-sm font-medium text-gray-700">
                            <span className="font-semibold">ID:</span> {user.id}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                            <span className="font-semibold">Name:</span> {user.name}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                            <span className="font-semibold">Email:</span> {user.email}
                        </p>
                        <div className="mt-2 flex gap-2">
                            <button
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                onClick={() => onEdit(user)}
                            >
                                Edit
                            </button>
                            <button
                                className={`bg-red-500 text-white px-3 py-1 rounded ${isLoadingDelete === user.id
                                        ? "cursor-not-allowed bg-red-300"
                                        : "hover:bg-red-600"
                                    }`}
                                onClick={() => !isLoadingDelete && onDelete(user.id)}
                                disabled={isLoadingDelete === user.id}
                            >
                                {isLoadingDelete === user.id ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserTable;
