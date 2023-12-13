import { useContext } from "react"
import loginContext from "../Contexts/Login/LoginContext";
import Account from "./Account/Account";


const NavBar = () => {
  const {isLogin, setLogin, isClick, setIsClick} = useContext(loginContext);
  return (
    <div className="w-screen h-16 bg-[#7D7B7E] font-bold border-b-2 border-black sticky top-0 z-50">
      <div className="w-full h-full flex">
        <div className="flex-[2_2_0%] flex items-center justify-center">
          {/* TODO: ADD ROUTE TO HOME HERE! */}
          <h1 className="text-2xl font-serif">CareerClarify</h1>
        </div>
        <div className={`flex-[4_4_0%] flex justify-center items-center`}>
          <div className={`flex-1 bg-white h-10 rounded-md flex ${isClick?' outline outline-orange-400':''}`}>
            <input type="text" className="flex-1 rounded-md px-5 focus:outline-none" placeholder={`Search for items`} onClick={()=>setIsClick(true)} onBlur={()=>setIsClick(false)}></input>
            <button className="w-10 bg-yellow-300 h-10 ml-auto rounded-e-md">
              {/* TODO: ADD SEARCH CLIP-ART HERE */}
            </button>
          </div>
        </div>
        <div className="flex-[3_3_0%]">
          <div className="w-full h-full flex">
            {
              isLogin ? 
              <div className="h-full ml-auto flex items-center mr-4"><Account/></div>
              :
              <div>Log In</div>
            }
          </div>
          {/* TODO: REMOVE THIS LOGOUT BUTTON AND PUT IT SOMEWHERE ACCORDINGLY! */}
          {/* <button onClick={()=>{setLogin(!isLogin)}}>Click</button> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar