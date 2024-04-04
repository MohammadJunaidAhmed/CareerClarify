import HomeSearch from "../../HomeSearch/HomeSearch"
import TrustedByUs from "./TrustedByUs"

const HeroBanner = () => {
  return (
    <div className={`w-full h-[700px] flex flex-col items-center `}>
        <div className="flex-1 w-3/4 flex flex-col">
            <div className="flex-1 bg-emerald-600 flex">
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
                <div className="bg-yellow-400 flex-1"></div>
            </div>
            <div className=" h-24 w-full bg-slate-600">
                <h1 className="font-serif text-xl px-1">Trusted by: </h1>
                <TrustedByUs/>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner