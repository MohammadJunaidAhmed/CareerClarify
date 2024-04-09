import ChatCard from "./Cards/ChatCard"
import PendingOrders from "./Cards/PendingOrders"
import ReviewCard from "./Cards/ReviewCard"
import SalesTotal from "./Cards/SalesTotal"
import calender from "../../assets/calendar.png"
import downArrow from "../../assets/down-arrow.png"
import TotalOrders from "./Cards/ChartCards/TotalOrders"
import { useState } from "react"
import email from "../../assets/email.png"
import notification from "../../assets/notification.png"
import upArrow from "../../assets/arrow-up.png"
import TopServices from "./Cards/ChartCards/TopServices"
import SearchBar from "./SearchBar/SearchBar"
import NavElements from "./NavElements/NavElements"

const Home = () => {
  const [dataFormat, setDataFormat] = useState('m');
  const [isDataFormatOpen, setIsDataFormatOpen] = useState(false);
  const pageHeader="HOME";
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 bg-[#E0E0E0] flex flex-col">
        <div className=" h-[90px] w-full bg-[#F5F5F5] shadow-sm flex justify-between px-7 py-2">
          <div className=" flex items-center text-xl font-serif">
            {/* TODO: MAKE THIS FONT APPEALING!  */}
            <h1>{pageHeader}</h1>
          </div>
          <SearchBar/>
          <NavElements/>
        </div>
        <div className="flex-1 px-7 pt-3 pb-2 flex flex-col">
          <div className=" w-full h-20 flex justify-between">
            <h1 className="text-3xl flex items-center justify-center">Overview</h1>

            <div className="h-full w-56 items-center justify-center p-2 flex flex-col relative cursor-pointer"  onClick={()=>{setIsDataFormatOpen(!isDataFormatOpen)}}> {/*TODO: UPDATE UI HERE*/}
              <div className="h-1/2 w-full text-lg bg-[#F5F5F5] text-[#7A7A7A] flex justify-center items-center gap-4 rounded-lg border-2 border-black">
                <img src={calender} className={`h-2/3 `}/>
                <div>
                  {
                    dataFormat === 'w' && <h1> Last 7 Days</h1>
                    ||
                    dataFormat === 'm' && <h1> Last 30 Days</h1>
                    || 
                    dataFormat === 'y' && <h1> Last 365 Days</h1>
                  }
                </div>
                <img src={downArrow} className={`h-2/3  duration-500 ${isDataFormatOpen ? '-rotate-180' : ''}`}/>
              </div>
              {
                isDataFormatOpen &&
                <div className="w-full absolute text-lg text-[#7A7A7A] top-12 mt-1 p-2 flex">
                  <div className="bg-slate-400 flex-1 flex flex-col rounded-xl">
                    <div className=" px-2 hover:bg-[#F5F5F5]" onClick={()=>{setDataFormat('w')}}>Weekly</div>
                    <div className=" px-2 hover:bg-[#F5F5F5]" onClick={()=>{setDataFormat('m')}}>Monthly</div>
                    <div className=" px-2 hover:bg-[#F5F5F5]" onClick={()=>{setDataFormat('y')}}>Yearly</div>
                  </div>
                </div>

              }
            </div>
          </div>
          {/* MAIN CONTENT BELOW */}
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-full flex gap-4 flex-wrap justify-between ">
                <ChatCard/>
                <ReviewCard/>
                <SalesTotal/>
                <ChatCard/>
                <PendingOrders/>
                <SalesTotal/>
              </div>
              <div className="w-full flex-1 pt-2 gap-5 flex justify-between">
                <TotalOrders/>
                <TotalOrders/>
                <TopServices/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home