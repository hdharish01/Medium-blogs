import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

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
                <Avatar size={"big"} name="harish"></Avatar>
            </div>
        </div>
    </div>
} 