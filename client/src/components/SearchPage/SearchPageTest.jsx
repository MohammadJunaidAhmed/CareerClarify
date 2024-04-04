// import Card from "./Card/Card"
import { useContext } from "react"
import CardsSection from "./CardsSection/CardsSection"
import FilterCard from "./FilterCard/FilterCard"
import mainContext from "../Contexts/MainContext/MainContext"
import FilterCardResponsive from "./FilterCard/FilterCardResponsive/FilterCardResponsive"

const SearchPageTest = () => {
    const {scW} = useContext(mainContext);
  return (
    <div className={`w-screen min-h-screen flex bg-[#111827] pb-10 justify-center`}>
        <div className={`h-full flex flex-col ${scW < 600 ? 'w-full' : 'w-4/5'} `}>
            <div className={`py-5 ${scW < 600 ? 'px-3' : 'px-3'}`}>
                <h1 className="text-xl text-white font-serif">Results for <span className="font-bold">SWE Google</span></h1> {/*TODO: ADD DYNAMIC QUERY HERE*/}
                {/* Filters here */}
            </div>
            <div className={`flex-1 flex justify-center ${scW < 600 ? '' : ''}`}>
                <CardsSection/>
            </div>
        </div>
    </div>
  )
}

export default SearchPageTest