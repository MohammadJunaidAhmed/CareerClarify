import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import loginContext from "../../Contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const {profName, setProfName,
        profEmail, setProfEmail,
        profMobile, setProfMobile,
        profField, setProfField,
        profPassword, setProfPassword } = useContext(loginContext);
    const handleSignUp = async(e) => {
        e.preventDefault();
        try {
            console.log(profName,
                profEmail,
                profMobile,
                profField,
                profPassword
            )
            const response = await fetch('http://localhost:3000/api/v1/prof/register/',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name:profName,
                    email:profEmail,
                    password:profPassword,
                    phone:profMobile,
                    field:profField
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
    const fields = [
        "Software Engineer",
        "Mechanical Engineer",
        "Electrical Engineer",
        "Electronic Engineer",
        "Civil Engineer",
        "Computer Scientist",
        "Data Analyst",
        "Others",
      ]
    // eslint-disable-next-line no-unused-vars
    const [fieldString, setFieldString] = useState("");
  return (
    <div className="h-screen w-screen flex">
        <div className="w-[45vw] h-full bg-[#0D2C32] flex flex-col justify-center items-center text-8xl font-bold pb-[5vh]">
            <h1 className="text-[#7A7A7A]">SELL ON</h1>
            <h1 className="text-[#F5F5F5]">CareerClarify</h1>
        </div>
        <div className="w-[55vw] h-full flex bg-[#F5F5F5] p-2 pb-[10vh]">
            <form className=" flex-1 flex flex-col justify-center gap-3 px-5" onSubmit={handleSignUp}>
                <h1 className="text-2xl">CareerClarify</h1>
                <h1 className="text-5xl">SET UP NOW</h1>
                <div className="flex flex-col gap-6 text-black">
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                    placeholder="Name" 
                    type="text" 
                    onChange={(e)=> setProfName(e.target.value)}
                    />
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                    placeholder="Email" 
                    type="email"
                    onChange={(e)=> setProfEmail(e.target.value)}
                    />
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                    placeholder="Mobile Number" 
                    type="phone"
                    onChange={(e)=> setProfMobile(e.target.value)}
                    />
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                    placeholder="Field" 
                    type="search" 
                    list="queries"
                    onChange={(e)=>{setFieldString(e.target.value);setProfField(e.target.value)}}
                    />
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" 
                    placeholder="Password" 
                    type="password"
                    onChange={(e)=>{setFieldString(e.target.value);setProfPassword(e.target.value)}}
                    />
                </div>
                {
                    <datalist id="queries" className={`cursor-pointer `}>
                        {
                        fields.map((field, index)=>{
                            return <option value={field} className="hover:bg-white cursor-pointer" key={index}></option>
                        })
                        }
                    </datalist>
                }
                <button className="bg-green-400 w-[95%] rounded-3xl text-xl p-2 mt-3 flex justify-center cursor-pointer" type="submit">Register</button>
                <div className="w-[95%] flex justify-center gap-1 cursor-pointer"> <Link to='/'> <button className="">Skip</button> </Link></div>
            </form>
        </div>
    </div>
  )
}

export default SignUp