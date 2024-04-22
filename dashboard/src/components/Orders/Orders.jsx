import { useContext, useEffect } from "react";
import mainContext from "../Contexts/MainContext";

const Orders = () => {
  const {setActivePage} = useContext(mainContext);
  useEffect(()=>{
    setActivePage('2');
  })
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 bg-[#E0E0E0] flex flex-col">
        {/* <div className=" h-[90px] w-full bg-[#F5F5F5] shadow-sm"></div> */}
      </div>
    </div>
  )
}

export default Orders