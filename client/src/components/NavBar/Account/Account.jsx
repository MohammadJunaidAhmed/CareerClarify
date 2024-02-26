import { useContext, useEffect, useState } from "react"
import mainContext from "../../Contexts/MainContext/MainContext";

const Account = () => {
  const {setIsMouseOnAccount,setAccountOverLayVisibility} = useContext(mainContext);
  const {isAccountOverLayComponentVisible} = useContext(mainContext);
  const {isMouseOnAccount, isMouseOnAccountOverLay} = useContext(mainContext);
  const [isAccountClicked, setIsAccountClicked] = useState(false);
  const {scW} = useContext(mainContext);
  let timeOut;
  const handleMouseLeave = () =>{
    if(scW < 560){
      return;
    }
    timeOut = setTimeout(()=>{ // 1seconds waiting time; 
      if(!isAccountClicked){
        setIsMouseOnAccount(false);
      }
    },scW < 560 ? 0 : 600);
    // setIsMouseOnAccount(false);
  };
  const handleMouseEnter=()=>{
    if(scW < 560){
      return;
    } 
    setIsMouseOnAccount(true);
    setAccountOverLayVisibility(true);
  }
  const handleMouseClick = () => {
    if(isAccountClicked){
      clearTimeout(timeOut);
    }
    setIsAccountClicked(!isAccountClicked);
  }
  useEffect(()=>{
    setAccountOverLayVisibility(isMouseOnAccount||isMouseOnAccountOverLay || isAccountClicked)
  },[isMouseOnAccount,isMouseOnAccountOverLay,setAccountOverLayVisibility, isAccountClicked])
  return (
    <div className={`w-12 h-12 rounded-full duration-300 ${isAccountOverLayComponentVisible || isAccountClicked?'bg-green-500 cursor-pointer w-20':'bg-white'}`} 
      onMouseOver={()=>{handleMouseEnter()}} 
      onMouseOut={()=>{handleMouseLeave()}}
      onClick={()=>{handleMouseClick()}}
    >
      <div className={`w-full h-full flex items-center duration-300 ${isAccountOverLayComponentVisible || isAccountClicked?' justify-center':'justify-center'} ${isMouseOnAccountOverLay?'':''}`}>
        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24" width="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg> */}
      </div>
    </div>
  )
}

export default Account