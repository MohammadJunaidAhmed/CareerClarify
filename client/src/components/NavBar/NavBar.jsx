import { useContext } from "react"
import loginContext from "../Contexts/Login/LoginContext";
import Account from "./Account/Account";
import { Link } from "react-router-dom";
import mainContext from "../Contexts/MainContext/MainContext";
import SearchBar from "./SearchBar/SearchBar";


const NavBar = ({isSearchBarVisible = true}) => {
  const {isLogin, isClick, setIsClick} = useContext(loginContext);
  const {scW} = useContext(mainContext);
  return (
    <div className="w-screen bg-[#1d3362] font-bold border-b-2 border-black sticky top-0 z-50 pt-1 pb-1">
      <div className="w-full pt-1"></div>
      <div className={`w-full h-full flex ${scW < 540 ? 'flex-col':''}`}>
        {/* LOGO Section */}
        <div className="flex-[2_2_0%] flex items-center justify-center">
          <Link as={Link} to='/'>
            <h1 className="text-2xl font-serif cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">CareerClarify</h1>
          </Link>
        </div>
        {/* SEARCH BAR */}
        { 
          <div className={`flex-[4_4_0%] flex flex-col justify-center items-center pb-1`}>
          <SearchBar isSearchBarVisible={isSearchBarVisible}/>
          {
            isClick &&
            <div className="w-full bg-neutral-500 z-50">
              <div className="w-[707px] fixed bg-yellow-500">
                <h1>Query 1</h1>
                <h1>Query 2</h1>
                <h1>Query 3</h1>
              </div>
            </div>
          }
          </div>
        }
        
        {/* Account Section */}
        <div className={`flex-[3_3_0%] px-5 ${scW < 540 ? 'flex items-center justify-center':''}`}>
          <div className="w-full h-full flex">
            {
              isLogin ? 
              <div className={`h-full ml-auto flex items-center mr-4`}><Account/></div>
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