import { useContext, useEffect, useState } from "react"
import mainContext from "../../Contexts/MainContext/MainContext";

const Account = () => {
  const [hvr, setHvr] = useState(false);
  const {setIsMouseOnAccount,setAccountOverLayVisibility} = useContext(mainContext);
  const {isMouseOnAccount, isMouseOnAccountOverLay} = useContext(mainContext);
  const handleMouseLeave = () =>{
    setIsMouseOnAccount(false);
  };
  const handleMouseEnter=()=>{
    setIsMouseOnAccount(true);
    setAccountOverLayVisibility(true);
  }
  useEffect(()=>{
    // setTimeout(()=>{
    //   setAccountOverLayVisibility(isMouseOnAccount||isMouseOnAccountOverLay)
    // },1000);
    setAccountOverLayVisibility(isMouseOnAccount||isMouseOnAccountOverLay)
  },[isMouseOnAccount,isMouseOnAccountOverLay,setAccountOverLayVisibility])
  return (
    <div className={`w-12 h-12 rounded-full duration-150 hover:w-20 ${hvr?'bg-green-500 cursor-pointer':'bg-white'}`} 
      onMouseOver={()=>{setHvr(true);handleMouseEnter()}} 
      onMouseOut={()=>{setHvr(false);handleMouseLeave();}}
    >
      <div className={`w-full h-full flex items-center ${hvr?' justify-center':'justify-center'}`}>
        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      </div>
    </div>
  )
}

export default Account