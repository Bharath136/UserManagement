import axios from "axios";

// Enhanced error handling function
const getErrorText = (error) => {
    if (!error) return 'An unknown error occurred. Please try again later.';

    // Check if it's an axios error
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // Server responded with an error status
            const statusCode = error.response.status;
            if (statusCode === 404) {
                return 'The requested resource was not found.';
            } else if (statusCode === 500) {
                return 'Server error. Please try again later.';
            } else {
                return `Error: ${error.response.data?.message || 'Something went wrong.'}`;
            }
        } else if (error.request) {
            // No response received from the server
            return 'Network error. Please check your internet connection or try again later.';
        } else {
            // Other axios-related errors
            return `Request error: ${error.message}`;
        }
    }

    // Handle network errors
    if (error.message && error.message.includes('Network Error')) {
        return 'Network error. Please check your internet connection.';
    }

    // Handle validation or other errors
    if (typeof error === 'string') {
        return error;  // If the error is a string, return it directly
    }

    // Fallback for unknown error types
    return 'An unexpected error occurred. Please try again later.';
};

// eslint-disable-next-line react/prop-types
const Failure = ({ error }) => {
    return (
        <div className="text-center h-[80vh] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-lg text-gray-600 mb-4">{getErrorText(error)}</p>
            <p className="text-md text-gray-600 mb-4">Please try refreshing the page, or contact our support team if the problem persists.</p>
            <button
                className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-primary-600 transition duration-200"
                onClick={() => window.location.reload()}
            >
                Refresh Page
            </button>
        </div>
    );
};

export default Failure;
