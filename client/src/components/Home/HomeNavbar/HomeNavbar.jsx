import { useEffect, useState } from "react"
import HomeSearch from "../HomeSearch/HomeSearch.jsx"
import { Link, Navigate, useNavigate } from "react-router-dom";

const HomeNavbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(true);  //TODO: CHANGE THIS STATE TO SOMEWHERE GLOBAL AND USE IT!
    const [isClick, setIsClick] = useState(false);
    const isActive = () => {
        window.scrollY > 150 ? setActive(false) : setActive(true);
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        console.log(window.scrollY)
    },[])
  return (
    <div className={`w-full h-16 flex justify-center z-50 fixed duration-500 ${active ?  'bg-[#1d3362]' : 'bg-black' }`}>
        <div className="w-3/4 h-full px-1">
            {/* CONTENT HERE */}
            <div className="w-full h-full flex items-center">
                <div className=" font-serif text-xl">
                <Link as={Link} to='/'>
                    <h1 className="text-2xl font-serif cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">CareerClarify</h1>
                </Link>
                </div>
                <div className="flex-1 flex justify-end gap-3 items-center">
                    {
                        !active ? 
                        <div className="flex-1 flex justify-center">
                            <HomeSearch isClick={isClick} setIsClick={setIsClick}/>
                        </div> 
                        : 
                        <div> </div>
                    }
                    {/* TODO: ROUTE TO DASHBOARD */}
                    <button className="">Professional?</button>
                    <button className="hover:text-slate-300" onClick={()=>{navigate('/login')}}>Sign In</button>
                    <button 
                        className={`p-2 px-3 hover:bg-emerald-500 border-[2px] cursor-pointer ${active ? 'border-black' : 'border-white'}`}
                        onClick={()=>{navigate('/signup')}}
                        >
                        Join
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNavbar