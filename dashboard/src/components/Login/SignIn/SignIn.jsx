import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const handleSignIn = () =>{
        navigate('/')
    }
  return (
    <div className="h-screen w-screen flex">
        <div className="w-[45vw] h-full bg-[#0D2C32] flex flex-col justify-center items-center text-8xl font-bold pb-[5vh]">
            <h1 className="text-[#7A7A7A]">SELL ON</h1>
            <h1 className="text-[#F5F5F5]">CareerClarify</h1>
        </div>
        <form className="w-[55vw] h-full flex bg-[#F5F5F5] p-2 pb-[10vh]" onSubmit={handleSignIn}>
            <div className=" flex-1 flex flex-col justify-center gap-3 px-5">
                <h1 className="text-2xl">CareerClarify</h1>
                <h1 className="text-5xl">LETS GET STARTED</h1>
                <div className="flex flex-col gap-6 text-black">
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" placeholder="Email"/>
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" placeholder="Password"/>
                </div>
                <div className="px-3 py-1 flex w-[95%] justify-between">
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember" className="px-2">Remeber for 30 days</label>
                    </div>
                    <h1>Forgot Password</h1>
                </div>
                <button className="bg-green-400 w-[95%] rounded-3xl text-xl p-2 flex justify-center" type="submit"> Log In</button>
                <div className="w-[95%] flex justify-center gap-1">Don't have an account? <Link to='/signup'> <button className="font-bold cursor-pointer">Register</button> </Link></div>
            </div>
        </form>
    </div>
  )
}

export default SignIn