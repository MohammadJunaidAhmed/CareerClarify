import { useState } from "react"
import HomeSearch from "/Users/mohammadjunaidahmed/Documents/PROJECTS_MAIN_TEMP/CareerClarify/client/src/components/Home/HomeSearch/HomeSearch.jsx"

const HomeNavbar = () => {
    const [active, setActive] = useState(true);  //TODO: CHANGE THIS STATE TO SOMEWHERE GLOBAL AND USE IT!
  return (
    <div className={`w-full h-16 flex justify-center fixed ${active ? 'bg-white' : 'bg-emerald-600'}`}>
        <div className="w-3/4 h-full bg-blue-600 px-1">
            {/* CONTENT HERE */}
            <div className="w-full h-full flex items-center">
                <div className=" font-serif text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">CareerClarify</div>
                <div className="flex-1 flex justify-end gap-3 items-center">
                    {
                        active ? 
                        <div className="flex-1 flex justify-center ">
                            <HomeSearch/>
                        </div> 
                        : 
                        <div> </div>
                    }
                    <div className="">Professional?</div>
                    <div className="">Sign In</div>
                    <div className="p-2 px-3 hover:bg-emerald-500 border-black border-[2px]">Join</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNavbar