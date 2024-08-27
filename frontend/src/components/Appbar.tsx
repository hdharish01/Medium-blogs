import { Link } from "react-router-dom"


export const Appbar = () => {
    return <div className="border-b px-10 flex justify-between py-2">
        <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer text-cyan-900 text-2xl font-bold border-cyan-700 border-2 rounded-lg p-2">
            Medium
        </Link>
        <div className="flex">
            <div className="flex flex-col justify-center">
                <Link to={"/publish"}>
                    <button type="button" className=" text-white bg-gradient-to-bl from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-tr shadow-sm shadow-black focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-8">Write blog</button>
                </Link>
            </div>
            <div className="flex flex-col justify-center">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    </div>
} 