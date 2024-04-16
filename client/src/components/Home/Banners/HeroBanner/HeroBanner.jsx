import HomeSearch from "../../HomeSearch/HomeSearch"
import TrustedByUs from "./TrustedByUs"
import TeachImg from "../../../../assets/teach.png"


const HeroBanner = () => {
  return (
    <div className={`w-full h-[700px] flex flex-col items-center `}>
        <div className="flex-1 w-3/4 flex flex-col">
            <div className={`flex-1  flex bg-gradient-to-r from-[#1d3362] to-[#06122b]`}>
                {/* TODO: CONTENT HERE */}
                <div className="flex-[2_2_0%] flex">
                  <div className="flex-1 flex flex-col justify-center">
                    <div >
                      <h1 className="font-bold text-white text-3xl">Find the best guidance <br/> around the world</h1>
                    </div>
                    <div className="z-40">
                      <HomeSearch/>
                    </div>
                  </div>
                </div>
                <div className=" flex-1 flex justify-center items-center">
                  <img src={TeachImg} className="w-2/3"/>
                </div>
            </div>
            <div className=" h-24 w-full border-t-2 border-black ">
                <h1 className="font-serif text-xl px-1 h-3 text-wrap ">Community <br/>from: </h1>
                <TrustedByUs/>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner