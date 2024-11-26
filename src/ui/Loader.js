// Loader.jsx

const Loader = () => {
    return (
        <div className="text-center h-[80vh] flex flex-col items-center justify-center">
            <div className="relative">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
                <p className="text-xl mt-4 text-gray-600">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
