import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="h-screen w-screen flex">
        <div className="w-[45vw] h-full bg-[#1d3362] flex flex-col justify-center items-center text-8xl font-bold pb-[5vh]">
            <h1 className="text-[#7A7A7A]">Register ON</h1>
            <h1 className="text-[#F5F5F5]">CareerClarify</h1>
        </div>
        <div className="w-[55vw] h-full flex bg-[#F5F5F5] p-2 pb-[10vh]">
            <div className=" flex-1 flex flex-col justify-center gap-3 px-5">
                <h1 className="text-2xl">CareerClarify</h1>
                <h1 className="text-5xl">SET UP NOW</h1>
                <div className="flex flex-col gap-6 text-black">
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" placeholder="Name" type="text"/>
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" placeholder="Email" type="email"/>
                    <input className="w-[95%] p-3 bg-[#E0E0E0] rounded-3xl placeholder:text-black cursor-pointer" placeholder="Mobile Number" type="phone"/>
                </div>
                <div className="bg-green-400 w-[95%] rounded-3xl text-xl p-2 mt-3 flex justify-center cursor-pointer">Next</div>
                <div className="w-[95%] flex justify-center gap-1 cursor-pointer"> <Link to='/'> <button className="">Skip</button> </Link></div>
            </div>
        </div>
    </div>
  )
}

export default SignUp