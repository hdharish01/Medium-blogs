import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b px-10 flex justify-between py-4">
        <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div className="flex">
            <Link to={"/publish"}>
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-8 mb-2">Write blog</button>
            </Link>
            
            <Avatar size={"big"} name="harish"></Avatar>
        </div>
    </div>
} 