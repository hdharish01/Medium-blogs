import { Link } from "react-router-dom";
import myImage from "../images/medium logo.svg";

export const Welcome = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-900">
            {/* Bouncing Medium Image */}
            <div className="animate-bounce">
                <img src={myImage} alt="Medium Logo" className="h-48 w-48" />
            </div>

            {/* Centered "Medium" Text */}
            <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 shadow-black shadow-2xl mb-10 p-5 rounded-3xl text-white">
                    Medium
                </div>
                <div className="space-x-12">
                    <Link to="/signin">
                        <button className="px-6 py-3 bg-gradient-to-br from-blue-700 to-blue-400 hover:bg-gradient-to-r text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="px-6 py-3 bg-gradient-to-tl from-slate-200 to bg-slate-50 hover:bg-gradient-to-r text-gray-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

import './WelcomePage.css';
