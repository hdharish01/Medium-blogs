import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="mx-10 mt-10 font-serif max-w-screen-lg">
                <input type="text" placeholder="Title" className="text-5xl p-5 w-full focus:outline-none" onChange={(e)=>{setTitle(e.target.value)}}/>
                <textarea placeholder="Tell your story..." className="text-xl w-full focus:outline-none p-5 h-96" onChange={(e)=>{setContent(e.target.value)}}/>
                <button className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg px-10 py-4 text-white hover:bg-gradient-to-bl" onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title:title,
                        content:content
                    },{
                        headers:{
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }}>Publish</button>
            </div>
        </div>
    </div>
}

