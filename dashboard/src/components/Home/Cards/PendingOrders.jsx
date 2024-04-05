import box from "../../../assets/box.png"
import info from "../../../assets/info.png"

const PendingOrders = () => {
  return (
    <div className="w-[400px] h-[150px] bg-[#F5F5F5] rounded-xl px-7 py-3 flex flex-col">
        <div className="flex-1">
            <div className="w-full h-full flex gap-1 py-2 items-center text-lg">
                <img src={box} className="w-[35px]"/>
                <div>Orders</div>
                <img src={info} className="w-[15px]"/>
            </div>
        </div>
        <div className="flex-1 flex justify-between py-2">
            <div className="flex h-full items-center">
                <div className="h-full flex gap-1 items-end">
                    <h1 className="text-4xl font-bold">12</h1>
                    <h1 className="text-lg  text-[#7A7A7A]">Unfulfilled</h1>
                </div>
            </div>
            <div className="flex items-end">
                <div className="p-1 bg-[#E0E0E0] rounded-lg">See All </div>
            </div>
        </div>
    </div>
  )
}

export default PendingOrders