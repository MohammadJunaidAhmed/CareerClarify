import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [clientName, setclientName] = useState("");
    const [clientEmail, setclientEmail] = useState("");
    const [clientMobile, setclientMobile] = useState("");
    const [clientPassword, setclientPassword] = useState("");
    const navigate = useNavigate();
    const handleSignUp = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/v1/user/register/',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name:clientName,
                    email:clientEmail,
                    password:clientPassword,
                    phone:clientMobile,
                }),
            })
            if(response.ok){
                console.log("Account created successfully!")
                navigate('/login')
            }
            else{
                console.log("Signup Failed")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="h-screen w-screen flex">
            <div className="w-[45vw] h-full bg-[#1d3362] flex flex-col justify-center items-center text-8xl font-bold pb-[5vh]">
                <h1 className="text-[#7A7A7A]">CareerClarify</h1>
                <h1 className="text-[#F5F5F5]">Register Now</h1>
            </div>
            <div className="w-[55vw] h-full flex bg-[#F5F5F5] p-2 pb-[10vh]">
                <form className=" flex-1 flex flex-col justify-center gap-3 px-5" onSubmit={handleSignUp}>
                    <h1 className="text-2xl">CareerClarify</h1>
                    <h1 className="text-5xl">SET UP NOW</h1>
                    <div className="flex flex-col gap-6 text-black">
                        <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                        placeholder="Name" 
                        type="text" 
                        onChange={(e)=> setclientName(e.target.value)}
                        />
                        <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                        placeholder="Email" 
                        type="email"
                        onChange={(e)=> setclientEmail(e.target.value)}
                        />
                        <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                        placeholder="Mobile Number" 
                        type="phone"
                        onChange={(e)=> setclientMobile(e.target.value)}
                        />
                        <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                        placeholder="Password" 
                        type="password"
                        onChange={(e)=>{setclientPassword(e.target.value)}}
                        />
                    </div>
                    <button className="bg-green-400 w-[95%] rounded-3xl text-xl p-2 mt-3 flex justify-center cursor-pointer" type="submit">Register</button>
                    <div className="w-[95%] flex justify-center gap-1 cursor-pointer"> <Link to='/'> <button className="">Skip</button> </Link></div>
                </form>
            </div>
        </div>
      )
}

export default SignUp