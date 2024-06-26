import { useContext } from "react"
import loginContext from "../Contexts/Login/LoginContext";
import Account from "./Account/Account";
import { Link } from "react-router-dom";
import mainContext from "../Contexts/MainContext/MainContext";
import SearchBar from "./SearchBar/SearchBar";
import HomeSearch from "../Home/HomeSearch/HomeSearch";

// THIS IS FOR NOT SIGNED IN!

const NavBarTest = ({isSearchBarVisible = true}) => {
    const {isLogin, isClick, setIsClick} = useContext(loginContext);
    const {scW} = useContext(mainContext);
    const active = true;
    return (
        <div className={`w-full h-16 flex justify-center z-50 fixed duration-500 ${active ?  'bg-[#1d3362]' : 'bg-black' }`}>
        <div className="w-3/4 h-full px-1">
            {/* CONTENT HERE */}
            <div className="w-full h-full flex items-center">
                <div className=" font-serif text-xl">
                <Link as={Link} to='/'>
                    <h1 className="text-2xl font-serif cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">CareerClarify</h1>
                </Link>
                </div>
                <div className="flex-1 flex justify-end gap-3 items-center text-white">
                    {
                        active ? 
                        <div className="flex-1 flex justify-center">
                            <HomeSearch isClick={isClick} setIsClick={setIsClick}/>
                        </div> 
                        : 
                        <div> </div>
                    }
                    <div className="">Professional?</div>
                    <div className="">Sign In</div>
                    <div className={`p-2 px-3 hover:bg-emerald-500 border-[2px] cursor-pointer ${active ? 'border-black' : 'border-white'}`}>Join</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBarTest