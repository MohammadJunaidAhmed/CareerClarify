// import Card from "./Card/Card"
import { useContext } from "react"
import CardsSection from "./CardsSection/CardsSection"
import FilterCard from "./FilterCard/FilterCard"
import mainContext from "../Contexts/MainContext/MainContext"
import FilterCardResponsive from "./FilterCard/FilterCardResponsive/FilterCardResponsive"

const SearchPage = () => {
  const {scW} = useContext(mainContext);
  return (
    <div className={`w-screen flex bg-[#111827] pb-10 ${scW < 650 ? 'flex-col':''}`}>
      {
        scW < 650 ? 
        <div><FilterCardResponsive/><CardsSection/></div>
        :
        <div className="flex"><CardsSection/><FilterCard/></div>
      }
      {/* <CardsSection/> */}
      {/* <FilterCard/> */}
        {/* <Card/> */}
    </div>
  )
}

export default SearchPage