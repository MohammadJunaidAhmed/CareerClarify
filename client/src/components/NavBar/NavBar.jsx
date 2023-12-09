import { useContext } from "react"
import loginContext from "../Contexts/Login/LoginContext";


const NavBar = () => {
  const {isLogin, setLogin} = useContext(loginContext);
  return (
    <div className="w-screen h-16 bg-[#7D7B7E] font-bold border-b-2 border-black">
      <div className="w-full h-full flex">
        <div className="flex-[2_2_0%]"></div>
        <div className="flex-[4_4_0%] flex justify-center items-center">
          <div className="flex-1 bg-white h-10 rounded-md flex">
            <div className=" w-10 bg-yellow-300 h-10 ml-auto rounded-e-md"></div>
          </div>
        </div>
        <div className="flex-[3_3_0%] bg-green-600">
          {
            isLogin ? 
            <div>Account</div>
            :
            <div>Log In</div>
          }
          <button onClick={()=>{setLogin(!isLogin)}}>Click</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar