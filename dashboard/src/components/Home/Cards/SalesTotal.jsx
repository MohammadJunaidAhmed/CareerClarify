import signal from "../../../assets/signal.png"
import info from "../../../assets/info.png"
import upArrow from "../../../assets/arrow-up.png"

const SalesTotal = () => {
  return (
    <div className="w-[400px] h-[150px] bg-[#F5F5F5] rounded-xl px-7 py-3 flex flex-col">
        <div className="w-full h-full  flex">
            <div className="flex-1  flex">
                <div className=" flex items-center p-2">
                    <img src={signal} className="w-[60px]"/>
                </div>
                <div className="flex-1  p-2 flex flex-col">
                    <div className="flex-1  flex items-center gap-1">
                        <h1 className="text-xl">Sales total</h1>
                        <img src={info} className="w-[15px]"/>
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                        <h1 className="text-3xl font-bold">$1500</h1>
                        <div className="p-1 bg-blue-100 rounded-lg flex">
                            <img src={upArrow} className="w-[15px]"/>
                            <h1> +10%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalesTotal