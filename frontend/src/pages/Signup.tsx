import { useState } from "react"
import { AuthHeader } from "../components/AuthHeader"
import { InputBox } from "../components/InputBox"
import { Quote } from "../components/Quote"
import { SignupInput } from "@harish-kumar/medium-common"
import { AuthButton } from "../components/AuthButton"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            alert("couldn't fetch the backend request, please try again later")
        }
    }

    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center bg-gradient-to-br from-cyan-300 to-sky-700 h-screen animate-slideIn lg:animate-none">
            <div className="shadow-black  shadow-lg rounded-xl p-10 py-20 max-w-md mx-auto bg-gradient-to-br from-sky-100 to-cyan-100">
                <AuthHeader heading="Create an account" phrase="Already have an account?" linkName="login" link="/signin"></AuthHeader>
                <InputBox label="Name" placeholder="Enter your name" onChange={(e)=>{
                    setPostInputs(c => ({
                        ...c,
                        name:e.target.value
                    }))
                }}></InputBox>
                <InputBox label="Username" placeholder="Enter your email" onChange={(e)=>{
                    setPostInputs(c => ({
                        ...c,
                        username: e.target.value
                    }))
                }}></InputBox>
                <InputBox label="Password" placeholder="Enter your password" type="password" onChange={(e)=>{
                    setPostInputs(c=>({
                        ...c,
                        password:e.target.value
                    }))
                }}></InputBox>
                <AuthButton onClick={sendRequest} label="Signup"></AuthButton>
            </div>
        </div>
        <div className="hidden lg:block lg:animate-fadeIn">
            <Quote></Quote>
        </div>
    </div>
}