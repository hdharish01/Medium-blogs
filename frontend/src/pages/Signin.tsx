import { useState } from "react"
import { AuthHeader } from "../components/AuthHeader"
import { InputBox } from "../components/InputBox"
import { Quote } from "../components/Quote"
import { SigninInput } from "@harish-kumar/medium-common"
import { AuthButton } from "../components/AuthButton"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SigninInput>({
        username:"",
        password:""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            alert("couldn't fetch the backend request, please try again later")
        }
    }

    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center bg-gradient-to-br from-white to-slate-200 h-screen animate-slideIn lg:animate-none">
            <AuthHeader heading="Login" phrase="Don't have an account?" linkName="signup" link="/signup"></AuthHeader>
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
            <AuthButton onClick={sendRequest} label="Signin"></AuthButton>

        </div>
        <div className="hidden lg:block animate-fadeIn">
            <Quote></Quote>
        </div>
    </div>
}