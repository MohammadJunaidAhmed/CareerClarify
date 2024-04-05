import ChatCard from "./Cards/ChatCard"
import PendingOrders from "./Cards/PendingOrders"
import ReviewCard from "./Cards/ReviewCard"
import SalesTotal from "./Cards/SalesTotal"
import calender from "../../assets/calendar.png"
import downArrow from "../../assets/down-arrow.png"
import TotalOrders from "./Cards/ChartCards/TotalOrders"

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 bg-[#E0E0E0] flex flex-col">
        <div className=" h-24 w-full bg-[#F5F5F5] shadow-sm"></div>
        <div className="flex-1 p-7 flex flex-col">
          <div className=" w-full h-20 flex justify-between">
            <h1 className="text-3xl flex items-center justify-center">Overview</h1>

            <div className="h-full w-56 flex items-center justify-center p-2"> {/*TODO: UPDATE UI HERE*/}
              <div className="h-1/2 w-full text-lg bg-[#F5F5F5] text-[#7A7A7A] flex justify-center items-center gap-4 rounded-lg border-2 border-black">
                <img src={calender} className="h-2/3"/>
                <h1>Last 30 Days</h1>
                <img src={downArrow} className="h-2/3"/>
              </div>
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
              <div className="w-full flex-1 p-2">
                <TotalOrders/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home