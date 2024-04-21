import email from "../../../assets/email.png";
import notification from "../../../assets/notification.png";
import upArrow from "../../../assets/arrow-up.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginContext from "../../Contexts/LoginContext";

const NavElements = () => {

    const [isOpen, setIsOpen] = useState(false);

    const {setIsLoggedIn} = useContext(loginContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false)
        navigate('/signin')
    }
    
  return (
    <div className=" flex items-center min-w-[200px]">
      <div className="flex px-4 py-2 items-center gap-6">
        <button className="">
          <img src={notification} className="w-8 h-8" />
        </button>
        <button className="relative">
          <img src={email} className="w-8 h-8" />
          {/* TODO: MAKE IT VISIBLE IF ANY NOTIFICATIONS ARE PRESENT! */}
          <div className="bg-red-600 rounded-full w-3 h-3 top-[1px] right-[-4px] absolute"></div>
        </button>
        <div className="flex flex-col items-center gap-2 relative">
            <div className="flex items-center gap-2">
                <div className="bg-blue-400 rounded-full w-11 h-11 flex items-center justify-center">
                    H
                    {/* TODO: ADD IMAGE HERE */}
                </div>
                <img src={upArrow} className={`w-4 h-4 cursor-pointer duration-500 ${isOpen ?'':'rotate-180'}`} onClick={()=>setIsOpen(!isOpen)}/>
            </div>
          {
            isOpen &&
            <div className="w-[150px] absolute text-lg text-[#F5F5F5] top-[110%] p-2 flex z-50 cursor-pointer">
                <div className="bg-slate-400 flex-1 flex flex-col rounded-xl border-2 border-black">
                <button className=" px-2 hover:bg-[#F5F5F5] hover:text-black rounded-xl flex justify-center">Profile</button>
                <button className=" px-2 hover:bg-[#F5F5F5] hover:text-black rounded-xl flex justify-center">Help Center</button>
                <button className=" px-2 hover:bg-red-400  hover:text-black rounded-xl flex justify-center" onClick={handleLogout}>Logout?</button>
                </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NavElements;
