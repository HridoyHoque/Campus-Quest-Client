import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src="https://i.ibb.co/WnmpcdC/errorcampus.png" // Replace with your error image URL
          alt="Error"
          className="max-w-full h-auto"
        />
        <h1 className="text-3xl font-bold text-gray-800 my-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600">We apologize for the inconvenience. Please try again later.</p>
        <Link to="/" className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300">
          Go Back to Home
        </Link>
      </div>
    );
};

export default ErrorPage;