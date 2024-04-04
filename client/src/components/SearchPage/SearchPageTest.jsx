// import Card from "./Card/Card"
import { useContext } from "react"
import CardsSection from "./CardsSection/CardsSection"
import FilterCard from "./FilterCard/FilterCard"
import mainContext from "../Contexts/MainContext/MainContext"
import FilterCardResponsive from "./FilterCard/FilterCardResponsive/FilterCardResponsive"
import SortCard from "./SortCard/SortCard"

const SearchPageTest = () => {
    const {scW} = useContext(mainContext);
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
  return (
    <div className={`w-screen h-fit flex bg-[#111827] pb-10 justify-center`}>
        <div className={`h-full flex flex-col ${scW < 600 ? 'w-full' : 'w-4/5'} `}>
            <div className={`py-5 h-full w-full ${scW < 600 ? 'px-3' : 'px-3'}`}>
                <h1 className="text-xl text-white font-serif">Results for <span className="font-bold">{query}</span></h1> {/*TODO: ADD DYNAMIC QUERY HERE*/}
                {/* Filters here */}
                <div className="sticky w-full h-full top-10">
                    <SortCard/>
                </div>
            </div>
            <div className={`flex-1 flex justify-center ${scW < 600 ? '' : ''}`}>
                <CardsSection className=""/>
            </div>
        </div>
    </div>
  )
}

export default SearchPageTest