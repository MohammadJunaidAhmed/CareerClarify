import loginContext from "../../Contexts/Login/LoginContext";
import { useContext } from "react"

const SearchBar = () => {
    const {isClick, setIsClick} = useContext(loginContext);
  return (
    <div className="w-full">
        <div className={`flex flex-col justify-center items-center pb-1`}>
          <div className={`flex-1 w-full bg-white h-10 rounded-md flex ${isClick?' outline outline-orange-400':''}`}>
            <input type="text" className=" flex-1 rounded-md px-5 focus:outline-none" placeholder={`Search for items`} onClick={()=>setIsClick(true)} onBlur={()=>setIsClick(false)}></input>
            <button className="w-10 bg-yellow-300 h-10 ml-auto rounded-e-md flex justify-center items-center hover:fill-orange-500">
                <svg className="scale-125 duration-150 ease-linear" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
          </div>
          {/* TODO: SEARCH QUERIES */}
          {/* <div className="w-full h-64 bg-slate-600"></div> */}
        </div>
        {/* <div className="h-64 w-full bg-slate-600 fixed"></div> */}
    </div>
  )
}

export default SearchBar